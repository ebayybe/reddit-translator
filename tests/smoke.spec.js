const fs = require('fs');
const path = require('path');
const { test, expect } = require('@playwright/test');

const scriptSource = fs.readFileSync(
  path.resolve(__dirname, '..', 'reddit-translator-pro-auto.user.js'),
  'utf8'
);

const mockHtml = `
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Userscript Harness</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 24px; line-height: 1.5; }
    shreddit-post, [shreddit-comment-content], .md { display: block; margin: 24px 0; }
  </style>
</head>
<body>
  <shreddit-post>
    <h1 slot="title">English title for translation testing.</h1>
  </shreddit-post>
  <div class="md">
    First paragraph for translation testing.

    Second paragraph for translation testing.
  </div>
  <div shreddit-comment-content>English comment for translation testing.</div>
  <div shreddit-comment-content>中文内容测试，不应该被自动翻译。</div>
</body>
</html>
`;

async function installHarness(page, seed = {}) {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('about:blank');
  await page.evaluate(() => {
    window.name = '';
  });
  await page.setContent(mockHtml);
  await page.evaluate(({ seedValues }) => {
    const persisted = (() => {
      try {
        return JSON.parse(window.name || '{}');
      } catch {
        return {};
      }
    })();
    const store = { ...persisted, ...seedValues };
    const requestLog = [];
    const spokenTexts = [];
    const downloads = [];

    const decodeQuery = (url, key) => {
      try {
        return new URL(url).searchParams.get(key) || '';
      } catch {
        return '';
      }
    };

    window.__gmStore = store;
    window.__gmRequestLog = requestLog;
    window.__spokenTexts = spokenTexts;
    window.__clipboardText = '';
    window.__downloads = downloads;
    window.__lastFileInput = null;
    window.__fileReaderResult = null;
    window.__reloads = 0;

    class FakeSpeechSynthesisUtterance {
      constructor(text) {
        this.text = text;
        this.lang = '';
        this.rate = 1;
        this.onend = null;
        this.onerror = null;
      }
    }

    window.SpeechSynthesisUtterance = FakeSpeechSynthesisUtterance;
    const synth = window.speechSynthesis || {};
    synth.speak = (utterance) => {
      synth.speaking = true;
      spokenTexts.push({ text: utterance.text, lang: utterance.lang });
      setTimeout(() => {
        synth.speaking = false;
        if (utterance.onend) utterance.onend();
      }, 0);
    };
    synth.cancel = () => {
      synth.speaking = false;
      synth.pending = false;
    };
    try { synth.speaking = false; } catch {}
    try { synth.pending = false; } catch {}
    if (!window.speechSynthesis) {
      Object.defineProperty(window, 'speechSynthesis', {
        configurable: true,
        value: synth,
      });
    }

    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: {
        writeText: async (text) => {
          window.__clipboardText = text;
        },
      },
    });

    class FakeFileReader {
      constructor() {
        this.onload = null;
      }
      readAsText() {
        const result = window.__fileReaderResult;
        setTimeout(() => {
          if (this.onload) this.onload({ target: { result } });
        }, 0);
      }
    }
    window.FileReader = FakeFileReader;

    const anchorProto = HTMLAnchorElement.prototype;
    const originalAnchorClick = anchorProto.click;
    anchorProto.click = function () {
      if (this.download) {
        downloads.push({ download: this.download, href: this.href });
        return;
      }
      return originalAnchorClick.call(this);
    };

    const inputProto = HTMLInputElement.prototype;
    const originalInputClick = inputProto.click;
    inputProto.click = function () {
      if (this.type === 'file') {
        window.__lastFileInput = this;
        return;
      }
      return originalInputClick.call(this);
    };

    try {
      const reloadStub = function () {
        window.__reloads += 1;
        return undefined;
      };
      try {
        Object.defineProperty(window.location, 'reload', {
          configurable: true,
          value: reloadStub,
        });
      } catch {}
      try {
        const locationProto = Object.getPrototypeOf(window.location);
        Object.defineProperty(locationProto, 'reload', {
          configurable: true,
          value: reloadStub,
        });
      } catch {}
    } catch {}

    window.GM_getValue = (key, fallback) =>
      Object.prototype.hasOwnProperty.call(store, key) ? store[key] : fallback;

    window.GM_setValue = (key, value) => {
      store[key] = value;
      try {
        window.name = JSON.stringify(store);
      } catch {}
    };

    window.GM_addStyle = (css) => {
      const style = document.createElement('style');
      style.textContent = css;
      document.head.appendChild(style);
    };

    window.GM_xmlhttpRequest = ({ method = 'GET', url, headers = {}, data, onload, onerror }) => {
      requestLog.push({ method, url, headers, data });

      const respond = (status, body) => {
        setTimeout(() => {
          if (onload) {
            onload({
              status,
              responseText: typeof body === 'string' ? body : JSON.stringify(body),
            });
          }
        }, 0);
      };

      try {
        if (url.includes('/v2/usage')) {
          const auth = headers.Authorization || '';
          if (auth.includes('bad-key')) {
            respond(403, { message: 'forbidden' });
            return;
          }
          respond(200, { character_count: 1, character_limit: 500000 });
          return;
        }

        if (url.includes('/v2/translate')) {
          const auth = headers.Authorization || '';
          if (auth.includes('bad-key')) {
            respond(403, { message: 'forbidden' });
            return;
          }
          const payload = JSON.parse(data || '{}');
          const text = payload.text?.[0] || '';
          respond(200, { translations: [{ text: `DEEPL:${text}` }] });
          return;
        }

        if (url.includes('translate.googleapis.com')) {
          const q = decodeQuery(url, 'q');
          const tl = decodeQuery(url, 'tl');
          if (tl === 'en') {
            const detected = /[\u4e00-\u9fff]/.test(q) ? 'zh' : 'en';
            respond(200, [[['detected', q]], null, detected]);
            return;
          }
          respond(200, [[[`GOOGLE:${q}`, q, null, null]]]);
          return;
        }

        if (url.includes('api.mymemory.translated.net')) {
          const q = decodeQuery(url, 'q');
          respond(200, { responseData: { translatedText: `MYMEMORY:${q}` } });
          return;
        }

        if (onerror) onerror(new Error(`Unhandled URL: ${url}`));
      } catch (err) {
        if (onerror) onerror(err);
      }
    };
  }, { seedValues: seed });
  await page.addScriptTag({ content: scriptSource });
  await expect(page.locator('#rtp-fab')).toHaveCount(1);
}

async function countRequests(page, matcher) {
  return page.evaluate((predicateSource) => {
    const predicate = new Function('entry', `return (${predicateSource})(entry);`);
    return window.__gmRequestLog.filter(predicate).length;
  }, matcher.toString());
}

test('injects buttons and opens the panel with the default hotkey', async ({ page }) => {
  await installHarness(page);

  await expect(page.locator('.rtp-btn')).toHaveCount(4);
  await page.keyboard.press('F2');
  await expect(page.locator('#rtp-panel')).toBeVisible();
  await expect(page.locator('#rtp-panel')).toContainText('Reddit');
});

test('google translation retry forces a new request and records history', async ({ page }) => {
  await installHarness(page);

  const button = page.locator('.rtp-btn').first();
  const title = page.locator('[slot="title"]').first();

  await button.evaluate((el) => el.click());
  await expect(button).toHaveClass(/done/);
  await expect(title).toContainText('GOOGLE:');

  const firstTranslateCount = await countRequests(
    page,
    (entry) => entry.url.includes('translate.googleapis.com') && entry.url.includes('tl=zh')
  );

  await page.locator('.rtp-tb .rtp-t').nth(2).evaluate((el) => el.click());
  await expect(button).toHaveClass(/done/);

  const retriedTranslateCount = await countRequests(
    page,
    (entry) => entry.url.includes('translate.googleapis.com') && entry.url.includes('tl=zh')
  );
  expect(retriedTranslateCount).toBeGreaterThan(firstTranslateCount);

  const historyLength = await page.evaluate(() => {
    const raw = window.__gmStore._x9_rtp_v8_history || '[]';
    return JSON.parse(raw).length;
  });
  expect(historyLength).toBeGreaterThan(0);
});

test('auto-translate on scroll translates English and skips Chinese', async ({ page }) => {
  await installHarness(page, {
    _x9_autoTranslateOnScroll: true,
  });

  await page.waitForTimeout(200);

  const states = await page.evaluate(() =>
    Array.from(document.querySelectorAll('div[shreddit-comment-content]')).map((el) => ({
      text: el.innerText,
      state: el._rtpBtn?.dataset.st || '',
      skip: el._rtpBtn?.dataset.skip || '',
    }))
  );

  expect(states[0].text).toContain('GOOGLE:');
  expect(states[0].state).toBe('done');
  expect(states[1].text).toContain('中文内容测试');
  expect(states[1].skip).toBe('1');
  expect(states[1].state).toBe('orig');
});

test('mymemory translates content and keeps the translated toolbar available', async ({ page }) => {
  await installHarness(page, {
    _x9_engine: 'mymemory',
  });

  const body = page.locator('.md').first();

  await body.evaluate((el) => el._rtpBtn.click());
  await expect(body).toContainText('MYMEMORY:');
  const toolbarCount = await body.evaluate((el) => el._rtpBtn._tb.querySelectorAll('.rtp-t').length);
  expect(toolbarCount).toBe(3);
});

test('translate all processes visible content and leaves skipped Chinese content untranslated', async ({ page }) => {
  await installHarness(page);

  await page.locator('#rtp-fab').evaluate((el) => el.click());
  await page.waitForTimeout(500);

  const states = await page.evaluate(() =>
    Array.from(document.querySelectorAll('.rtp-btn')).map((btn) => ({
      state: btn.dataset.st,
      skip: btn.dataset.skip || '',
      text: btn._targetEl?.innerText || '',
    }))
  );

  expect(states.filter((item) => item.state === 'done')).toHaveLength(3);
  expect(states.filter((item) => item.skip === '1' && item.state === 'orig')).toHaveLength(1);
  expect(states[0].text).toContain('GOOGLE:');
});

test('bilingual mode keeps original text visible and responds to the view toggle', async ({ page }) => {
  await installHarness(page, {
    _x9_bilingualMode: true,
  });

  await page.keyboard.press('F2');
  await page.locator('.tab[data-tab="extras"]').evaluate((el) => el.click());
  await page.locator('#btn-hide').evaluate((el) => el.click());
  await page.locator('#rtp-close').evaluate((el) => el.click());

  const button = page.locator('.rtp-btn').first();
  const title = page.locator('[slot="title"]').first();
  const bilingual = page.locator('.rtp-bi').first();

  await button.evaluate((el) => el.click());
  await expect(button).toHaveClass(/done/);
  await expect(title).toContainText('GOOGLE:');
  await expect(bilingual).toContainText('GOOGLE:');
  await expect(bilingual).toBeHidden();

  await page.locator('#rtp-view-toggle').evaluate((el) => el.click());
  await expect(title).toContainText('English title for translation testing.');
  await expect(bilingual).toBeVisible();

  await page.locator('#rtp-view-toggle').evaluate((el) => el.click());
  await expect(title).toContainText('GOOGLE:');
  await expect(bilingual).toBeHidden();
});

test('deepl falls back across keys to the next usable key', async ({ page }) => {
  await installHarness(page, {
    _x9_engine: 'deepl',
    _x9_deeplApiKeys: 'bad-key,good-key-1,good-key-2',
  });

  const title = page.locator('[slot="title"]').first();

  await title.evaluate((el) => el._rtpBtn.click());
  await expect(title).toContainText('DEEPL:');
  expect(await title.evaluate((el) => el._rtpBtn.className)).toMatch(/done/);

  const authHeaders = await page.evaluate(() =>
    window.__gmRequestLog
      .filter((entry) => entry.url.includes('/v2/translate'))
      .map((entry) => entry.headers.Authorization)
  );

  expect(authHeaders).toContain('DeepL-Auth-Key bad-key');
  expect(authHeaders).toContain('DeepL-Auth-Key good-key-1');
  expect(authHeaders.at(-1)).toBe('DeepL-Auth-Key good-key-1');
});

test('panel drag persists position through GM storage and rebuild', async ({ page }) => {
  await installHarness(page);

  await page.keyboard.press('F2');
  const panel = page.locator('#rtp-panel');
  const header = page.locator('#rtp-hdr');
  const box = await header.boundingBox();
  if (!box) throw new Error('Panel header bounding box was not available');

  await page.mouse.move(box.x + 30, box.y + 20);
  await page.mouse.down();
  await page.mouse.move(box.x + 180, box.y + 140, { steps: 8 });
  await page.mouse.up();

  const moved = await panel.evaluate((el) => ({
    top: el.style.top,
    left: el.style.left,
  }));

  await page.locator('#rtp-close').click();
  await page.keyboard.press('F2');

  await expect(panel).toHaveCSS('top', moved.top);
  await expect(panel).toHaveCSS('left', moved.left);

  const storedKeys = await page.evaluate(() => ({
    panelX: window.__gmStore._x9_panelX,
    panelY: window.__gmStore._x9_panelY,
  }));
  expect(storedKeys.panelX).toBeTruthy();
  expect(storedKeys.panelY).toBeTruthy();
});

test('export, import, and custom panel hotkey persist through GM storage', async ({ page }) => {
  await installHarness(page);

  await page.keyboard.press('F2');
  await page.evaluate(() => {
    try {
      window.location.reload = () => {
        window.__reloads += 1;
      };
    } catch {}
  });

  await page.locator('#hk-panel').evaluate((el) => el.click());
  await page.keyboard.press('Alt+q');
  await expect(page.locator('#hk-panel')).toHaveText('Alt+Q');
  await page.locator('#rtp-close').evaluate((el) => el.click());
  await page.keyboard.press('Alt+Q');
  await expect(page.locator('#rtp-panel')).toBeVisible();

  await page.locator('#btn-exp').evaluate((el) => el.click());
  const exportPayload = await page.evaluate(() => window.__downloads.at(-1) || null);
  expect(exportPayload).not.toBeNull();
  expect(exportPayload.download).toBe('rtp-v8-settings.json');

  const exportedJson = JSON.parse(decodeURIComponent(exportPayload.href.split(',')[1]));
  expect(exportedJson.cfg.hotkeyPanel).toBe('Alt+Q');

  await page.evaluate(() => {
    window.__fileReaderResult = JSON.stringify({
      cfg: {
        hotkeyPanel: 'Alt+R',
        targetLang: 'fr',
        engine: 'mymemory',
      },
    });
  });

  await page.locator('#btn-imp').evaluate((el) => el.click());
  await page.evaluate(() => {
    const input = window.__lastFileInput;
    if (!input || !input.onchange) throw new Error('Import input was not captured');
    input.onchange({ target: { files: [{}] } });
  });
  await page.waitForTimeout(150);

  const imported = await page.evaluate(() => JSON.parse(window.name || '{}'));
  expect(imported._x9_hotkeyPanel).toBe('Alt+R');
  expect(imported._x9_targetLang).toBe('fr');
  expect(imported._x9_engine).toBe('mymemory');
});

test('translated toolbar can trigger TTS with the target language', async ({ page }) => {
  await installHarness(page);

  const button = page.locator('.rtp-btn').first();
  await button.evaluate((el) => el.click());
  await expect(button).toHaveClass(/done/);

  await page.locator('.rtp-tb .rtp-t').nth(1).evaluate((el) => el.click());
  await page.waitForTimeout(30);

  const spoken = await page.evaluate(() => window.__spokenTexts);
  expect(spoken).toHaveLength(1);
  expect(spoken[0].lang).toBe('zh');
  expect(spoken[0].text).toContain('GOOGLE:');
});
