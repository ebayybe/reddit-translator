// ==UserScript==
// @name         🌐Reddit Translator Pro
// @name:en      🌐Reddit Translator Pro
// @name:ru      🌐Reddit Переводчик Pro
// @name:uk      🌐Reddit Перекладач Pro
// @name:de      🌐Reddit Übersetzer Pro
// @name:fr      🌐Reddit Traducteur Pro
// @name:es      🌐Reddit Traductor Pro
// @name:it      🌐Reddit Traduttore Pro
// @name:pl      🌐Reddit Tłumacz Pro
// @name:tr      🌐Reddit Çevirmeni Pro
// @name:vi      🌐Reddit Biên Dịch Viên Pro
// @name:ko      🌐Reddit 번역기 Pro
// @name:ja      🌐Reddit 翻訳者 Pro
// @name:zh-CN   🌐Reddit 翻译器 Pro
// @name:zh-HK   🌐Reddit 翻譯器 Pro
// @name:zh-TW   🌐Reddit 翻譯器 Pro
// @namespace    https://github.com/ebayybe
// @homepageURL  https://github.com/ebayybe/reddit-translator
// @supportURL   https://github.com/ebayybe/reddit-translator/issues
// @version      1.2.0
// @description:en      🏷️ Amateur Reddit translator — glassmorphism, 100+ languages, Google, MyMemory, DeepL, history, unit converter, easter eggs
// @description:ru      🏷️ Любительский переводчик Reddit — glassmorphism, 100+ языков, Google, MyMemory, DeepL, история, конвертер единиц, пасхалки
// @description:uk      🏷️ Любительський перекладач Reddit — glassmorphism, 100+ мов, Google, MyMemory, DeepL, історія, конвертер одиниць, пасхалки
// @description:de      🏷️ Amateur-Reddit-Übersetzer — Glassmorphism, 100+ Sprachen, Google, MyMemory, DeepL, Verlauf, Einheitenumrechner, Ostereier
// @description:it      🏷️ Traduttore Reddit amatoriale — glassmorphism, 100+ lingue, Google, MyMemory, DeepL, cronologia, convertitore di unità, easter egg
// @description:fr      🏷️ Traducteur Reddit amateur — glassmorphism, 100+ langues, Google, MyMemory, DeepL, historique, convertisseur d'unités, easter eggs
// @description:es      🏷️ Traductor Reddit amateur — glassmorphism, 100+ idiomas, Google, MyMemory, DeepL, historial, convertidor de unidades, easter eggs
// @description:ko      🏷️ 아마추어 Reddit 번역기 — glassmorphism, 100+ 언어, Google, MyMemory, DeepL, 히스토리, 단위 변환기, 이스터 에그
// @description:pl      🏷️ Amatorski tłumacz Reddit — glassmorphism, 100+ języków, Google, MyMemory, DeepL, historia, konwerter jednostek, easter eggi
// @description:tr      🏷️ Amatör Reddit çevirmeni — glassmorphism, 100+ dil, Google, MyMemory, DeepL, geçmiş, birim dönüştürücü, sürprizler
// @description:vi      🏷️ Trình dịch Reddit nghiệp dư — glassmorphism, 100+ ngôn ngữ, Google, MyMemory, DeepL, lịch sử, bộ chuyển đổi đơn vị, easter egg
// @description:ja      🏷️ アマチュアReddit翻訳者 — glassmorphism, 100以上の言語, Google, MyMemory, DeepL, 履歴, 単位変換器, イースターエッグ
// @description:zh-CN   🏷️ 业余Reddit翻译器 — glassmorphism, 100多种语言, Google, MyMemory, DeepL, 历史记录, 单位转换器, 彩蛋
// @description:zh-HK   🏷️ 業餘Reddit翻譯器 — glassmorphism, 100多種語言, Google, MyMemory, DeepL, 歷史記錄, 單位轉換器, 彩蛋
// @description:zh-TW   🏷️ 業餘Reddit翻譯器 — glassmorphism, 100多種語言, Google, MyMemory, DeepL, 歷史記錄, 單位轉換器, 彩蛋
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjI4IiBmaWxsPSIjZmY0NTAwIi8+CiAgPHRleHQgeD0iNjQiIHk9IjkwIiBmb250LXNpemU9IjcyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iU2Vnb2UgVUkgRW1vamksQXBwbGUgQ29sb3IgRW1vamksc2Fucy1zZXJpZiI+8J+MkDwvdGV4dD4KPC9zdmc+
// @author       ebayybe
// @license      MIT
// @match        https://www.reddit.com/*
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addStyle
// @grant        GM_openInTab
// @connect      translate.googleapis.com
// @connect      api.mymemory.translated.net
// @connect      api.deepl.com
// @connect      api-free.deepl.com
// @connect      raw.githubusercontent.com
// @downloadURL https://raw.githubusercontent.com/ebayybe/reddit-translator/refs/heads/main/reddit-translator-pro-auto.user.js
// @updateURL https://raw.githubusercontent.com/ebayybe/reddit-translator/refs/heads/main/reddit-translator-pro-auto.user.js
// ==/UserScript==

(function () {
  'use strict';

  // Unique prefix for this script to avoid conflicts with other scripts
  const PREFIX = '_x9_';

  // ═══════════════════════════════════════════════════════════════════════════
  // § CONFIGURATION
  // ═══════════════════════════════════════════════════════════════════════════
  // Auto-detect UI language from browser/system language
  const UI_SUPPORTED_LIST = ['ru', 'uk', 'en', 'de', 'fr', 'es', 'pl', 'tr', 'zh', 'ja', 'it', 'pt', 'ko', 'vi', 'ar'];
  function detectUiLang() {
    const langs = navigator.languages || [navigator.language || 'en'];
    for (const lang of langs) {
      const base = lang.split('-')[0].toLowerCase();
      if (UI_SUPPORTED_LIST.includes(base)) return base;
    }
    return 'en';
  }
  const AUTO_UI_LANG = detectUiLang();

  // Sound event categories shown as individual toggles in the settings UI.
  // Each low-level SFX event name maps to one of these categories so that
  // the user can enable/disable whole groups of sounds without a dozen
  // separate switches. See § SOUND EFFECTS / AUDIO for the full mapping.
  const SFX_DEFAULT_EVENTS = {
    buttonClicks: true,
    translation: true,
    copy: true,
    retry: true,
    panel: true,
    tabs: true,
    settings: true,
    toggles: true,
    cache: true,
    history: true,
    importExport: true,
    modes: true,
    automatic: true,
  };

  const DEF = {
    targetLang: AUTO_UI_LANG,
    uiLang: AUTO_UI_LANG,
    engine: 'google',
    tone: 'normal',
    theme: 'dark',
    bilingualMode: true,
    autoConvert: true,
    autoScroll: false,
    incognito: false,
    requestDelay: 50,
    totalChars: 0,
    totalCount: 0,
    hotkeyPanel: 'F2',
    customColors: null,
    autoTranslateOnScroll: true,
    deeplApiKeys: '',
    maxRequestsPerSecond: 20,
    maxTextLengthPerRequest: 1800,
    maxParagraphsPerRequest: 6,
    maxConcurrentRequests: 5,
    // Sound Effects (SFX) settings — independent from TTS.
    soundEnabled: true,
    soundVolume: 0.55,
    soundEvents: JSON.stringify(SFX_DEFAULT_EVENTS),
    // Script-controlled update checks. This does NOT control the userscript
    // manager's own native @updateURL mechanism — Tampermonkey/Violentmonkey
    // expose no reliable JS API for that, so this only governs whether this
    // script itself periodically checks the trusted source for a newer
    // @version and how it reacts. See § UPDATES for details.
    updateMode: 'notify', // 'auto' | 'notify' | 'off'
    lastUpdateCheck: 0,
    lastNotifiedVersion: '',
  };

  // Load configuration from storage
  const cfg = Object.fromEntries(
    Object.entries(DEF).map(([k, def]) => [k, GM_getValue(PREFIX + k, def)])
  );

  function save(key, val) {
    cfg[key] = val;
    GM_setValue(PREFIX + key, val);
  }

  // Clamp a value into the 0..1 range, falling back to a safe default.
  function clamp01(n, fallback = 0.55) {
    const v = Number(n);
    if (!Number.isFinite(v)) return fallback;
    return Math.min(1, Math.max(0, v));
  }

  // Validate/repair SFX category switches so corrupted or partial data
  // (old installs, hand-edited config, bad imports) can never crash the
  // sound system or leave unknown keys lying around.
  function sanitizeSoundEvents(raw) {
    let src = raw;
    if (typeof src === 'string') {
      try { src = JSON.parse(src); } catch { src = null; }
    }
    if (!src || typeof src !== 'object') src = {};
    const out = {};
    for (const key of Object.keys(SFX_DEFAULT_EVENTS)) {
      out[key] = typeof src[key] === 'boolean' ? src[key] : SFX_DEFAULT_EVENTS[key];
    }
    return out;
  }

  // Validate the update-check mode so corrupted/old/imported data can never
  // put the script into an unknown state — only these three values are
  // meaningful, everything else safely falls back to 'notify'.
  function sanitizeUpdateMode(raw) {
    return raw === 'auto' || raw === 'notify' || raw === 'off' ? raw : 'notify';
  }

  // Normalize SFX settings right after load: this guarantees old
  // installations (or corrupted values) always end up with safe,
  // fully-formed sound settings — no undefined errors anywhere downstream.
  cfg.soundEnabled = typeof cfg.soundEnabled === 'boolean' ? cfg.soundEnabled : true;
  cfg.soundVolume = clamp01(cfg.soundVolume);
  cfg.soundEvents = sanitizeSoundEvents(cfg.soundEvents);

  // Same treatment for the update-check settings — old installs simply
  // won't have these keys yet, so they fall back to safe defaults.
  cfg.updateMode = sanitizeUpdateMode(cfg.updateMode);
  cfg.lastUpdateCheck = Number.isFinite(Number(cfg.lastUpdateCheck)) ? Number(cfg.lastUpdateCheck) : 0;
  cfg.lastNotifiedVersion = typeof cfg.lastNotifiedVersion === 'string' ? cfg.lastNotifiedVersion : '';

  // Batched save for stat counters
  let statTimer = null;
  function flushStats() {
    clearTimeout(statTimer);
    statTimer = setTimeout(() => {
      GM_setValue(PREFIX + 'totalChars', cfg.totalChars);
      GM_setValue(PREFIX + 'totalCount', cfg.totalCount);
    }, 1200);
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // § CACHE (24h TTL, 600-entry limit, write debounce)
  // ═══════════════════════════════════════════════════════════════════════════
  const CACHE_KEY = 'rtp_v8_cache';
  let cache = {};

  (function loadCache() {
    try {
      const now = Date.now();
      const raw = JSON.parse(GM_getValue(PREFIX + CACHE_KEY, '{}'));
      const entries = Object.entries(raw)
        .filter(([, v]) => now - v.ts < 86_400_000)
        .sort((a, b) => b[1].ts - a[1].ts)
        .slice(0, 600);
      entries.forEach(([k, v]) => (cache[k] = v));
    } catch { }
  })();

  let cacheTimer = null;
  function flushCache() {
    if (cfg.incognito) return;
    clearTimeout(cacheTimer);
    cacheTimer = setTimeout(() => {
      try { GM_setValue(PREFIX + CACHE_KEY, JSON.stringify(cache)); } catch { }
    }, 2000);
  }

  function cacheSet(key, val) {
    const keys = Object.keys(cache);
    if (keys.length >= 600) {
      const oldest = keys.sort((a, b) => cache[a].ts - cache[b].ts)[0];
      delete cache[oldest];
    }
    cache[key] = { val, ts: Date.now() };
    flushCache();
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // § HISTORY (50 entries)
  // ═══════════════════════════════════════════════════════════════════════════
  let history = [];
  try { history = JSON.parse(GM_getValue(PREFIX + 'rtp_v8_history', '[]')); } catch { }

  function pushHistory(orig, translated, lang) {
    if (cfg.incognito) return;
    history.unshift({ orig: orig.slice(0, 130), translated: translated.slice(0, 130), lang, ts: Date.now() });
    if (history.length > 50) history.length = 50;
    GM_setValue(PREFIX + 'rtp_v8_history', JSON.stringify(history));
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // § UI — MULTILINGUAL INTERFACE
  // ═══════════════════════════════════════════════════════════════════════════
  const UI_SUPPORTED = UI_SUPPORTED_LIST;

  const STRINGS = {
    ru: {
      title: 'Reddit Переводчик', ver: 'v1.2.0',
      tabSettings: '⚙️ Настройки', tabHistory: '📖 История', tabExtras: '✨ Дополнения',
      secUiLang: 'Язык интерфейса', applyUi: '✨ ПРИМЕНИТЬ ИНТЕРФЕЙС',
      secTargetLang: 'Язык перевода', saveLang: '💾 СОХРАНИТЬ ЯЗЫК',
      secEngine: 'Движок', secTone: 'Стиль перевода', secTheme: 'Тема',
      engGoogle: 'Google', engMymemory: 'MyMemory', engDeepL: 'DeepL',
      secDeepLApi: 'Ключи DeepL API', saveDeepLApi: '🔑 СОХРАНИТЬ КЛЮЧИ',
      btnTestDeepL: '🧪 ПРОВЕРИТЬ',
      btnToggleSecretsShow: '👁',
      btnToggleSecretsHide: '🙈',
      deeplApiPlaceholder: 'Вставьте один или несколько ключей DeepL API, разделённых запятыми',
      deeplApiHelp: 'Поддерживаются Pro и Free ключи. Ключи, оканчивающиеся на :fx, автоматически используют deepl.com/pro-api.',
      toastDeepLKeysSaved: '🔑 Ключи DeepL сохранены',
      toastDeepLKeysMissing: '⚠️ Сначала добавьте хотя бы один ключ DeepL API',
      toastDeepLUnsupported: '⚠️ DeepL не поддерживает этот язык перевода:',
      toastDeepLTesting: '🧪 Проверка DeepL API...',
      toastDeepLOk: '✅ DeepL API доступен',
      toastDeepLFail: '❌ DeepL API недоступен',
      toneNeutral: 'Нейтральный', toneFormal: 'Официальный', toneSlang: 'Разговорный',
      themeDark: 'Тёмная', themeLight: 'Светлая', themeCyber: 'Cyberpunk', themeDracula: 'Dracula',
      togBilingual: 'Двуязычный режим', togTts: 'Озвучка (TTS)',
      togAutoConvert: 'Авто-конвертация единиц', togAutoScroll: 'Авто-скролл к новым',
      togIncognito: 'Инкогнито (без истории)',
      togAutoTranslateOnScroll: 'Автоперевод при прокрутке',
      btnResetPos: '🏠 Сброс позиции', btnClearCache: '🧹 Очистить кэш',
      btnExport: '📤 Экспорт', btnImport: '📥 Импорт',
      btnSurprise: '🎲 Случайный язык', btnPirate: '🏴‍☠️ Пиратский',
      btnYoda: '🧙 Режим Йоды', btnHide: '👁 Скрыть кнопки', btnShow: '👁 Показать кнопки',
      sliderDelay: 'Задержка запросов', unitMs: 'мс',
      statTranslations: 'Переводов', statChars: 'Символов', statOnPage: 'На странице',
      histEmpty: 'История пуста', histClear: '🗑 Очистить историю',
      searchLang: 'Поиск языка…',
      btnOrig: '↩ Оригинал', btnCopy: '📋 Копировать', btnSpeak: '🔊', btnRetry: '↺ Ещё раз',
      copied: '✅ Скопировано!', cacheCleared: '🧹 Кэш очищен',
      toastApply: '✅ Интерфейс обновлён',
      toastSave: '💾 Сохранено — перезагрузка…', toastSurprise: '🎲 Язык:',
      toastPirateOn: '🏴‍☠️ Arrr! Пиратский режим!', toastPirateOff: '🏴‍☠️ Режим выключен',
      toastYodaOn: '🧙 Включён режим, хммм.', toastYodaOff: '🧙 Выключен он.',
      toastAutoScrollOn: '✅ Автоперевод при прокрутке включён', toastAutoScrollOff: '⭕ Автоперевод при прокрутке выключен',
      shortcutHint: 'F2 = панель',
      secHotkeys: 'Горячие клавиши', hotkeyPanel: 'Открыть панель',
      hotkeyPress: 'Нажмите клавишу…', hotkeyReset: '↺ Сброс',
      secColors: 'Цвета темы', colorAcc: 'Акцент', colorTxt: 'Текст', colorBg: 'Фон', colorOk: 'Успех',
      btnResetColors: '↺ Сброс цветов',
      secRequestLimits: 'Ограничения запросов',
      maxConcurrentRequests: 'Макс. одновременных запросов',
      maxRequestsPerSecond: 'Макс. запросов / сек',
      maxTextLengthPerRequest: 'Макс. символов / запрос',
      maxParagraphsPerRequest: 'Макс. абзацев / запрос',
      btnShowOriginals: '📄 ПОКАЗАТЬ ОРИГИНАЛ',
      btnShowTranslations: '🌐 ПОКАЗАТЬ ПЕРЕВОД',
      toastShowingOriginals: '📄 Показан оригинальный текст',
      toastShowingTranslations: '🌐 Показан переведённый текст',
      secSound: 'Звуковые эффекты', togSoundEnabled: 'Включить звуковые эффекты',
      secSoundVolume: 'Громкость', secSoundEvents: 'Звуковые события',
      btnTestSound: '▶ Тест звука',
      sndCatButtons: 'Клики кнопок', sndCatTranslation: 'Перевод', sndCatCopy: 'Копирование',
      sndCatRetry: 'Повтор', sndCatPanel: 'Панель', sndCatTabs: 'Вкладки',
      sndCatSettings: 'Настройки', sndCatToggles: 'Переключатели', sndCatCache: 'Кэш',
      sndCatHistory: 'История', sndCatImportExport: 'Импорт / Экспорт', sndCatModes: 'Режимы',
      sndCatAutomatic: 'Автоперевод',
      toastImportError: '❌ Ошибка импорта',
      secUpdates: 'Автоматические обновления', updModeAuto: 'Проверить и открыть обновление',
      updModeNotify: 'Уведомлять об обновлениях', updModeOff: 'Отключить проверку обновлений',
      updCurrentVersion: 'Текущая версия', btnCheckUpdates: 'Проверить обновления',
      updAvailable: 'Доступна новая версия', updLatest: 'У вас установлена последняя версия',
      updManagerNote: 'Собственные обновления userscript-менеджера контролируются Tampermonkey/Violentmonkey',
      toastUpdateCheckFailed: '❌ Не удалось проверить обновления',
    },
    uk: {
      title: 'Reddit Перекладач', ver: 'v1.2.0',
      tabSettings: '⚙️ Налаштування', tabHistory: '📖 Історія', tabExtras: '✨ Додатково',
      secUiLang: 'Мова інтерфейсу', applyUi: '✨ ЗАСТОСУВАТИ ІНТЕРФЕЙС',
      secTargetLang: 'Мова перекладу', saveLang: '💾 ЗБЕРЕГТИ МОВУ',
      secEngine: 'Рушій', secTone: 'Стиль', secTheme: 'Тема',
      engGoogle: 'Google', engMymemory: 'MyMemory', engDeepL: 'DeepL',
      secDeepLApi: 'Ключі DeepL API', saveDeepLApi: '🔑 ЗБЕРЕГТИ КЛЮЧІ',
      btnTestDeepL: '🧪 ПЕРЕВІРИТИ',
      btnToggleSecretsShow: '👁',
      btnToggleSecretsHide: '🙈',
      deeplApiPlaceholder: 'Вставте один або кілька ключів DeepL API, розділених комами',
      deeplApiHelp: 'Підтримуються Pro і Free ключі. Ключі, що закінчуються на :fx, автоматично використовують deepl.com/pro-api.',
      toastDeepLKeysSaved: '🔑 Ключі DeepL збережено',
      toastDeepLKeysMissing: '⚠️ Спочатку додайте хоча б один ключ DeepL API',
      toastDeepLUnsupported: '⚠️ DeepL не підтримує цю мову перекладу:',
      toastDeepLTesting: '🧪 Перевірка DeepL API...',
      toastDeepLOk: '✅ DeepL API доступний',
      toastDeepLFail: '❌ DeepL API недоступний',
      toneNeutral: 'Нейтральний', toneFormal: 'Офіційний', toneSlang: 'Розмовний',
      themeDark: 'Темна', themeLight: 'Світла', themeCyber: 'Cyberpunk', themeDracula: 'Dracula',
      togBilingual: 'Двомовний режим', togTts: 'Озвучка (TTS)',
      togAutoConvert: 'Авто-конвертація', togAutoScroll: 'Авто-скрол',
      togIncognito: 'Інкогніто',
      togAutoTranslateOnScroll: 'Автопереклад при прокручуванні',
      btnResetPos: '🏠 Скинути позицію', btnClearCache: '🧹 Очистити кеш',
      btnExport: '📤 Експорт', btnImport: '📥 Імпорт',
      btnSurprise: '🎲 Випадкова мова', btnPirate: '🏴‍☠️ Піратський',
      btnYoda: '🧙 Режим Йоди', btnHide: '👁 Сховати', btnShow: '👁 Показати',
      sliderDelay: 'Затримка запитів', unitMs: 'мс',
      statTranslations: 'Перекладів', statChars: 'Символів', statOnPage: 'На сторінці',
      histEmpty: 'Історія порожня', histClear: '🗑 Очистити',
      searchLang: 'Пошук мови…',
      btnOrig: '↩ Оригінал', btnCopy: '📋 Копіювати', btnSpeak: '🔊', btnRetry: '↺ Ще раз',
      copied: '✅ Скопійовано!', cacheCleared: '🧹 Кеш очищено',
      toastApply: '✅ Інтерфейс оновлено',
      toastSave: '💾 Збережено — перезавантаження…', toastSurprise: '🎲 Мова:',
      toastPirateOn: '🏴‍☠️ Arrr! Піратський режим!', toastPirateOff: '🏴‍☠️ Вимкнено',
      toastYodaOn: '🧙 Увімкнено режим, хммм.', toastYodaOff: '🧙 Вимкнено.',
      toastAutoScrollOn: '✅ Автопереклад при прокручуванні увімкнено', toastAutoScrollOff: '⭕ Автопереклад при прокручуванні вимкнено',
      shortcutHint: 'F2 = панель',
      secHotkeys: 'Гарячі клавіші', hotkeyPanel: 'Відкрити панель',
      hotkeyPress: 'Натисніть клавішу…', hotkeyReset: '↺ Скинути',
      secColors: 'Кольори теми', colorAcc: 'Акцент', colorTxt: 'Текст', colorBg: 'Фон', colorOk: 'Успіх',
      btnResetColors: '↺ Скинути кольори',
      secRequestLimits: 'Обмеження запитів',
      maxConcurrentRequests: 'Макс. одночасних запитів',
      maxRequestsPerSecond: 'Макс. запитів / сек',
      maxTextLengthPerRequest: 'Макс. символів / запит',
      maxParagraphsPerRequest: 'Макс. абзаців / запит',
      btnShowOriginals: '📄 ПОКАЗАТИ ОРИГІНАЛ',
      btnShowTranslations: '🌐 ПОКАЗАТИ ПЕРЕКЛАД',
      toastShowingOriginals: '📄 Показано оригінальний текст',
      toastShowingTranslations: '🌐 Показано перекладений текст',
      secSound: 'Звукові ефекти', togSoundEnabled: 'Увімкнути звукові ефекти',
      secSoundVolume: 'Гучність', secSoundEvents: 'Звукові події',
      btnTestSound: '▶ Тест звуку',
      sndCatButtons: 'Кліки кнопок', sndCatTranslation: 'Переклад', sndCatCopy: 'Копіювання',
      sndCatRetry: 'Повтор', sndCatPanel: 'Панель', sndCatTabs: 'Вкладки',
      sndCatSettings: 'Налаштування', sndCatToggles: 'Перемикачі', sndCatCache: 'Кеш',
      sndCatHistory: 'Історія', sndCatImportExport: 'Імпорт / Експорт', sndCatModes: 'Режими',
      sndCatAutomatic: 'Автопереклад',
      toastImportError: '❌ Помилка імпорту',
      secUpdates: 'Автоматичні оновлення', updModeAuto: 'Перевірити і відкрити оновлення',
      updModeNotify: 'Повідомляти про оновлення', updModeOff: 'Вимкнути перевірку оновлень',
      updCurrentVersion: 'Поточна версія', btnCheckUpdates: 'Перевірити оновлення',
      updAvailable: 'Доступна нова версія', updLatest: 'У вас встановлена остання версія',
      updManagerNote: 'Власні оновлення менеджера скриптів контролюються Tampermonkey/Violentmonkey',
      toastUpdateCheckFailed: '❌ Не вдалося перевірити оновлення',
    },
    en: {
      title: 'Reddit Translator', ver: 'v1.2.0',
      tabSettings: '⚙️ Settings', tabHistory: '📖 History', tabExtras: '✨ Extras',
      secUiLang: 'UI Language', applyUi: '✨ APPLY INTERFACE',
      secTargetLang: 'Target language', saveLang: '💾 SAVE LANGUAGE',
      secEngine: 'Engine', secTone: 'Translation tone', secTheme: 'Theme',
      engGoogle: 'Google', engMymemory: 'MyMemory', engDeepL: 'DeepL',
      secDeepLApi: 'DeepL API keys', saveDeepLApi: '🔑 SAVE DEEPL KEYS',
      btnTestDeepL: '🧪 TEST DEEPL',
      btnToggleSecretsShow: '👁',
      btnToggleSecretsHide: '🙈',
      deeplApiPlaceholder: 'Paste one or more DeepL API keys, separated by commas',
      deeplApiHelp: 'Supports both Pro and Free keys. Keys ending with :fx use deepl.com/pro-api automatically.',
      toastDeepLKeysSaved: '🔑 DeepL keys saved',
      toastDeepLKeysMissing: '⚠️ Add at least one DeepL API key first',
      toastDeepLUnsupported: '⚠️ DeepL does not support this target language:',
      toastDeepLTesting: '🧪 Testing DeepL API...',
      toastDeepLOk: '✅ DeepL API is available',
      toastDeepLFail: '❌ DeepL API is unavailable',
      toneNeutral: 'Neutral', toneFormal: 'Formal', toneSlang: 'Casual',
      themeDark: 'Dark', themeLight: 'Light', themeCyber: 'Cyberpunk', themeDracula: 'Dracula',
      togBilingual: 'Bilingual mode', togTts: 'Text-to-Speech',
      togAutoConvert: 'Auto-convert units', togAutoScroll: 'Auto-scroll to new',
      togIncognito: 'Incognito (no history)',
      togAutoTranslateOnScroll: 'Auto-translate on scroll',
      btnResetPos: '🏠 Reset position', btnClearCache: '🧹 Clear cache',
      btnExport: '📤 Export', btnImport: '📥 Import',
      btnSurprise: '🎲 Surprise me', btnPirate: '🏴‍☠️ Pirate mode',
      btnYoda: '🧙 Yoda mode', btnHide: '👁 Hide buttons', btnShow: '👁 Show buttons',
      sliderDelay: 'Request delay', unitMs: 'ms',
      statTranslations: 'Translations', statChars: 'Characters', statOnPage: 'On page',
      histEmpty: 'No history yet', histClear: '🗑 Clear history',
      searchLang: 'Search language…',
      btnOrig: '↩ Original', btnCopy: '📋 Copy', btnSpeak: '🔊', btnRetry: '↺ Retry',
      copied: '✅ Copied!', cacheCleared: '🧹 Cache cleared',
      toastApply: '✅ Interface updated',
      toastSave: '💾 Saved — reloading…', toastSurprise: '🎲 Language:',
      toastPirateOn: '🏴‍☠️ Arrr! Pirate mode on!', toastPirateOff: '🏴‍☠️ Pirate mode off',
      toastYodaOn: '🧙 Yoda mode on, hmm.', toastYodaOff: '🧙 Yoda mode off.',
      toastAutoScrollOn: '✅ Auto-translate on scroll enabled', toastAutoScrollOff: '⭕ Auto-translate on scroll disabled',
      shortcutHint: 'F2 = panel',
      secHotkeys: 'Hotkeys', hotkeyPanel: 'Open panel',
      hotkeyPress: 'Press a key…', hotkeyReset: '↺ Reset',
      secColors: 'Theme colors', colorAcc: 'Accent', colorTxt: 'Text', colorBg: 'Background', colorOk: 'Success',
      btnResetColors: '↺ Reset colors',
      secRequestLimits: 'Request limits',
      maxConcurrentRequests: 'Max concurrent requests',
      maxRequestsPerSecond: 'Max requests / sec',
      maxTextLengthPerRequest: 'Max chars / request',
      maxParagraphsPerRequest: 'Max paragraphs / request',
      btnShowOriginals: '📄 SHOW ORIGINAL',
      btnShowTranslations: '🌐 SHOW TRANSLATION',
      toastShowingOriginals: '📄 Showing original text',
      toastShowingTranslations: '🌐 Showing translated text',
      secSound: 'Sound Effects', togSoundEnabled: 'Enable sound effects',
      secSoundVolume: 'Volume', secSoundEvents: 'Sound events',
      btnTestSound: '▶ Test sound',
      sndCatButtons: 'Button clicks', sndCatTranslation: 'Translation', sndCatCopy: 'Copy',
      sndCatRetry: 'Retry', sndCatPanel: 'Panel', sndCatTabs: 'Tabs',
      sndCatSettings: 'Settings', sndCatToggles: 'Toggles', sndCatCache: 'Cache',
      sndCatHistory: 'History', sndCatImportExport: 'Import / Export', sndCatModes: 'Modes',
      sndCatAutomatic: 'Automatic translation',
      toastImportError: '❌ Import error',
      secUpdates: 'Automatic Updates', updModeAuto: 'Check and open update',
      updModeNotify: 'Notify me about updates', updModeOff: 'Disable update checks',
      updCurrentVersion: 'Current version', btnCheckUpdates: 'Check for Updates',
      updAvailable: 'New version available', updLatest: 'You are using the latest version',
      updManagerNote: 'Native userscript-manager updates are controlled by Tampermonkey/Violentmonkey',
      toastUpdateCheckFailed: '❌ Could not check for updates',
    },
    de: {
      title: 'Reddit Übersetzer', ver: 'v1.2.0',
      tabSettings: '⚙️ Einstellungen', tabHistory: '📖 Verlauf', tabExtras: '✨ Extras',
      secUiLang: 'UI-Sprache', applyUi: '✨ INTERFACE ANWENDEN',
      secTargetLang: 'Zielsprache', saveLang: '💾 SPRACHE SPEICHERN',
      secEngine: 'Motor', secTone: 'Übersetzungsstil', secTheme: 'Thema',
      engGoogle: 'Google', engMymemory: 'MyMemory', engDeepL: 'DeepL',
      secDeepLApi: 'DeepL API-Schlüssel', saveDeepLApi: '🔑 DEEPL SPEICHERN',
      btnTestDeepL: '🧪 DEEPL TESTEN',
      btnToggleSecretsShow: '👁',
      btnToggleSecretsHide: '🙈',
      deeplApiPlaceholder: 'Einen oder mehrere DeepL API-Schlüssel einfügen, durch Kommas getrennt',
      deeplApiHelp: 'Unterstützt Pro- und Free-Schlüssel. Schlüssel, die auf :fx enden, verwenden automatisch deepl.com/pro-api.',
      toastDeepLKeysSaved: '🔑 DeepL-Schlüssel gespeichert',
      toastDeepLKeysMissing: '⚠️ Bitte zuerst mindestens einen DeepL API-Schlüssel hinzufügen',
      toastDeepLUnsupported: '⚠️ DeepL unterstützt diese Zielsprache nicht:',
      toastDeepLTesting: '🧪 DeepL API wird getestet...',
      toastDeepLOk: '✅ DeepL API ist verfügbar',
      toastDeepLFail: '❌ DeepL API ist nicht verfügbar',
      toneNeutral: 'Neutral', toneFormal: 'Formell', toneSlang: 'Umgangssprachlich',
      themeDark: 'Dunkel', themeLight: 'Hell', themeCyber: 'Cyberpunk', themeDracula: 'Dracula',
      togBilingual: 'Zweisprachig', togTts: 'Sprachausgabe',
      togAutoConvert: 'Einheiten konvertieren', togAutoScroll: 'Auto-Scrollen',
      togIncognito: 'Inkognito',
      togAutoTranslateOnScroll: 'Automatisch beim Scrollen übersetzen',
      btnResetPos: '🏠 Position reset', btnClearCache: '🧹 Cache leeren',
      btnExport: '📤 Exportieren', btnImport: '📥 Importieren',
      btnSurprise: '🎲 Überrasch mich', btnPirate: '🏴‍☠️ Piraten-Modus',
      btnYoda: '🧙 Yoda-Modus', btnHide: '👁 Ausblenden', btnShow: '👁 Anzeigen',
      sliderDelay: 'Anfrageverzögerung', unitMs: 'ms',
      statTranslations: 'Übersetzungen', statChars: 'Zeichen', statOnPage: 'Auf Seite',
      histEmpty: 'Kein Verlauf', histClear: '🗑 Verlauf löschen',
      searchLang: 'Sprache suchen…',
      btnOrig: '↩ Original', btnCopy: '📋 Kopieren', btnSpeak: '🔊', btnRetry: '↺ Nochmal',
      copied: '✅ Kopiert!', cacheCleared: '🧹 Cache geleert',
      toastApply: '✅ Interface aktualisiert',
      toastSave: '💾 Gespeichert — neu laden…', toastSurprise: '🎲 Sprache:',
      toastPirateOn: '🏴‍☠️ Arrr! Piraten-Modus!', toastPirateOff: '🏴‍☠️ Modus aus',
      toastYodaOn: '🧙 Yoda-Modus an, hmm.', toastYodaOff: '🧙 Modus aus.',
      toastAutoScrollOn: '✅ Automatisches Übersetzen beim Scrollen aktiviert', toastAutoScrollOff: '⭕ Automatisches Übersetzen beim Scrollen deaktiviert',
      shortcutHint: 'F2 = Panel',
      secHotkeys: 'Tastenkürzel', hotkeyPanel: 'Panel öffnen',
      hotkeyPress: 'Taste drücken…', hotkeyReset: '↺ Zurücksetzen',
      secColors: 'Themenfarben', colorAcc: 'Akzent', colorTxt: 'Text', colorBg: 'Hintergrund', colorOk: 'Erfolg',
      btnResetColors: '↺ Farben zurücksetzen',
      secRequestLimits: 'Anfragelimits',
      maxConcurrentRequests: 'Max. gleichzeitige Anfragen',
      maxRequestsPerSecond: 'Max. Anfragen / Sek.',
      maxTextLengthPerRequest: 'Max. Zeichen / Anfrage',
      maxParagraphsPerRequest: 'Max. Absätze / Anfrage',
      btnShowOriginals: '📄 ORIGINAL ANZEIGEN',
      btnShowTranslations: '🌐 ÜBERSETZUNG ANZEIGEN',
      toastShowingOriginals: '📄 Originaltext wird angezeigt',
      toastShowingTranslations: '🌐 Übersetzung wird angezeigt',
      secSound: 'Soundeffekte', togSoundEnabled: 'Soundeffekte aktivieren',
      secSoundVolume: 'Lautstärke', secSoundEvents: 'Sound-Ereignisse',
      btnTestSound: '▶ Sound testen',
      sndCatButtons: 'Klicks', sndCatTranslation: 'Übersetzung', sndCatCopy: 'Kopieren',
      sndCatRetry: 'Wiederholen', sndCatPanel: 'Panel', sndCatTabs: 'Tabs',
      sndCatSettings: 'Einstellungen', sndCatToggles: 'Schalter', sndCatCache: 'Cache',
      sndCatHistory: 'Verlauf', sndCatImportExport: 'Import / Export', sndCatModes: 'Modi',
      sndCatAutomatic: 'Automatische Übersetzung',
      toastImportError: '❌ Importfehler',
      secUpdates: 'Automatische Updates', updModeAuto: 'Update prüfen und öffnen',
      updModeNotify: 'Über Updates benachrichtigen', updModeOff: 'Update-Prüfung deaktivieren',
      updCurrentVersion: 'Aktuelle Version', btnCheckUpdates: 'Nach Updates suchen',
      updAvailable: 'Neue Version verfügbar', updLatest: 'Sie verwenden die neueste Version',
      updManagerNote: 'Native Updates des Userscript-Managers werden von Tampermonkey/Violentmonkey gesteuert',
      toastUpdateCheckFailed: '❌ Update-Prüfung fehlgeschlagen',
    },
    fr: {
      title: 'Traducteur Reddit', ver: 'v1.2.0',
      tabSettings: '⚙️ Paramètres', tabHistory: '📖 Historique', tabExtras: '✨ Extras',
      secUiLang: 'Langue UI', applyUi: '✨ APPLIQUER INTERFACE',
      secTargetLang: 'Langue cible', saveLang: '💾 ENREGISTRER',
      secEngine: 'Moteur', secTone: 'Style', secTheme: 'Thème',
      engGoogle: 'Google', engMymemory: 'MyMemory', engDeepL: 'DeepL',
      secDeepLApi: 'Clés API DeepL', saveDeepLApi: '🔑 ENREGISTRER DEEPL',
      btnTestDeepL: '🧪 TESTER DEEPL',
      btnToggleSecretsShow: '👁',
      btnToggleSecretsHide: '🙈',
      deeplApiPlaceholder: 'Collez une ou plusieurs clés API DeepL, séparées par des virgules',
      deeplApiHelp: 'Prend en charge les clés Pro et Free. Les clés se terminant par :fx utilisent automatiquement deepl.com/pro-api.',
      toastDeepLKeysSaved: '🔑 Clés DeepL enregistrées',
      toastDeepLKeysMissing: '⚠️ Ajoutez d\'abord au moins une clé API DeepL',
      toastDeepLUnsupported: '⚠️ DeepL ne prend pas en charge cette langue cible :',
      toastDeepLTesting: '🧪 Test de l\'API DeepL...',
      toastDeepLOk: '✅ API DeepL disponible',
      toastDeepLFail: '❌ API DeepL indisponible',
      toneNeutral: 'Neutre', toneFormal: 'Formel', toneSlang: 'Familier',
      themeDark: 'Sombre', themeLight: 'Clair', themeCyber: 'Cyberpunk', themeDracula: 'Dracula',
      togBilingual: 'Mode bilingue', togTts: 'Synthèse vocale',
      togAutoConvert: 'Conversion auto', togAutoScroll: 'Défilement auto',
      togIncognito: 'Incognito',
      togAutoTranslateOnScroll: 'Traduction automatique au défilement',
      btnResetPos: '🏠 Réinitialiser', btnClearCache: '🧹 Vider cache',
      btnExport: '📤 Exporter', btnImport: '📥 Importer',
      btnSurprise: '🎲 Surprends-moi', btnPirate: '🏴‍☠️ Mode Pirate',
      btnYoda: '🧙 Mode Yoda', btnHide: '👁 Masquer', btnShow: '👁 Afficher',
      sliderDelay: 'Délai de requête', unitMs: 'ms',
      statTranslations: 'Traductions', statChars: 'Caractères', statOnPage: 'Sur page',
      histEmpty: 'Historique vide', histClear: '🗑 Effacer',
      searchLang: 'Chercher langue…',
      btnOrig: '↩ Original', btnCopy: '📋 Copier', btnSpeak: '🔊', btnRetry: '↺ Réessayer',
      copied: '✅ Copié!', cacheCleared: '🧹 Cache vidé',
      toastApply: '✅ Interface mise à jour',
      toastSave: '💾 Sauvegardé — rechargement…', toastSurprise: '🎲 Langue:',
      toastPirateOn: '🏴‍☠️ Arrr! Mode Pirate!', toastPirateOff: '🏴‍☠️ Mode désactivé',
      toastYodaOn: '🧙 Mode Yoda activé, hmm.', toastYodaOff: '🧙 Mode Yoda désactivé.',
      toastAutoScrollOn: '✅ Traduction automatique au défilement activée', toastAutoScrollOff: '⭕ Traduction automatique au défilement désactivée',
      shortcutHint: 'F2 = panneau',
      secHotkeys: 'Raccourcis', hotkeyPanel: 'Ouvrir panneau',
      hotkeyPress: 'Appuyez sur une touche…', hotkeyReset: '↺ Réinitialiser',
      secColors: 'Couleurs du thème', colorAcc: 'Accent', colorTxt: 'Texte', colorBg: 'Fond', colorOk: 'Succès',
      btnResetColors: '↺ Réinitialiser couleurs',
      secRequestLimits: 'Limites de requêtes',
      maxConcurrentRequests: 'Max. requêtes simultanées',
      maxRequestsPerSecond: 'Max. requêtes / sec',
      maxTextLengthPerRequest: 'Max. caractères / requête',
      maxParagraphsPerRequest: 'Max. paragraphes / requête',
      btnShowOriginals: '📄 AFFICHER L\'ORIGINAL',
      btnShowTranslations: '🌐 AFFICHER LA TRADUCTION',
      toastShowingOriginals: '📄 Texte original affiché',
      toastShowingTranslations: '🌐 Traduction affichée',
      secSound: 'Effets sonores', togSoundEnabled: 'Activer les effets sonores',
      secSoundVolume: 'Volume', secSoundEvents: 'Événements sonores',
      btnTestSound: '▶ Tester le son',
      sndCatButtons: 'Clics', sndCatTranslation: 'Traduction', sndCatCopy: 'Copier',
      sndCatRetry: 'Réessayer', sndCatPanel: 'Panneau', sndCatTabs: 'Onglets',
      sndCatSettings: 'Paramètres', sndCatToggles: 'Interrupteurs', sndCatCache: 'Cache',
      sndCatHistory: 'Historique', sndCatImportExport: 'Import / Export', sndCatModes: 'Modes',
      sndCatAutomatic: 'Traduction automatique',
      toastImportError: '❌ Erreur d\'importation',
      secUpdates: 'Mises à jour automatiques', updModeAuto: 'Vérifier et ouvrir la mise à jour',
      updModeNotify: 'Me notifier des mises à jour', updModeOff: 'Désactiver la vérification des mises à jour',
      updCurrentVersion: 'Version actuelle', btnCheckUpdates: 'Vérifier les mises à jour',
      updAvailable: 'Nouvelle version disponible', updLatest: 'Vous utilisez la dernière version',
      updManagerNote: 'Les mises à jour natives du gestionnaire de scripts sont contrôlées par Tampermonkey/Violentmonkey',
      toastUpdateCheckFailed: '❌ Échec de la vérification des mises à jour',
    },
    es: {
      title: 'Traductor Reddit', ver: 'v1.2.0',
      tabSettings: '⚙️ Config', tabHistory: '📖 Historial', tabExtras: '✨ Extras',
      secUiLang: 'Idioma UI', applyUi: '✨ APLICAR INTERFAZ',
      secTargetLang: 'Idioma destino', saveLang: '💾 GUARDAR IDIOMA',
      secEngine: 'Motor', secTone: 'Estilo', secTheme: 'Tema',
      engGoogle: 'Google', engMymemory: 'MyMemory', engDeepL: 'DeepL',
      secDeepLApi: 'Claves API de DeepL', saveDeepLApi: '🔑 GUARDAR DEEPL',
      btnTestDeepL: '🧪 PROBAR DEEPL',
      btnToggleSecretsShow: '👁',
      btnToggleSecretsHide: '🙈',
      deeplApiPlaceholder: 'Pegue una o más claves API de DeepL, separadas por comas',
      deeplApiHelp: 'Compatible con claves Pro y Free. Las claves que terminan en :fx usan automáticamente deepl.com/pro-api.',
      toastDeepLKeysSaved: '🔑 Claves DeepL guardadas',
      toastDeepLKeysMissing: '⚠️ Primero añada al menos una clave API de DeepL',
      toastDeepLUnsupported: '⚠️ DeepL no admite este idioma de destino:',
      toastDeepLTesting: '🧪 Probando API de DeepL...',
      toastDeepLOk: '✅ API de DeepL disponible',
      toastDeepLFail: '❌ API de DeepL no disponible',
      toneNeutral: 'Neutral', toneFormal: 'Formal', toneSlang: 'Coloquial',
      themeDark: 'Oscuro', themeLight: 'Claro', themeCyber: 'Cyberpunk', themeDracula: 'Dracula',
      togBilingual: 'Modo bilingüe', togTts: 'Texto a voz',
      togAutoConvert: 'Convertir unidades', togAutoScroll: 'Auto-desplazamiento',
      togIncognito: 'Incógnito',
      togAutoTranslateOnScroll: 'Traducción automática al desplazar',
      btnResetPos: '🏠 Resetear', btnClearCache: '🧹 Limpiar caché',
      btnExport: '📤 Exportar', btnImport: '📥 Importar',
      btnSurprise: '🎲 Sorpréndeme', btnPirate: '🏴‍☠️ Modo Pirata',
      btnYoda: '🧙 Modo Yoda', btnHide: '👁 Ocultar', btnShow: '👁 Mostrar',
      sliderDelay: 'Retraso de solicitud', unitMs: 'ms',
      statTranslations: 'Traducciones', statChars: 'Caracteres', statOnPage: 'En página',
      histEmpty: 'Sin historial', histClear: '🗑 Borrar',
      searchLang: 'Buscar idioma…',
      btnOrig: '↩ Original', btnCopy: '📋 Copiar', btnSpeak: '🔊', btnRetry: '↺ Reintentar',
      copied: '✅ ¡Copiado!', cacheCleared: '🧹 Caché limpiado',
      toastApply: '✅ Interfaz actualizada',
      toastSave: '💾 Guardado — recargando…', toastSurprise: '🎲 Idioma:',
      toastPirateOn: '🏴‍☠️ ¡Arrr! ¡Modo Pirata!', toastPirateOff: '🏴‍☠️ Modo desactivado',
      toastYodaOn: '🧙 Modo Yoda activado, hmm.', toastYodaOff: '🧙 Modo Yoda desactivado.',
      toastAutoScrollOn: '✅ Traducción automática al desplazar activada', toastAutoScrollOff: '⭕ Traducción automática al desplazar desactivada',
      shortcutHint: 'F2 = panel',
      secHotkeys: 'Atajos', hotkeyPanel: 'Abrir panel',
      hotkeyPress: 'Presiona una tecla…', hotkeyReset: '↺ Restablecer',
      secColors: 'Colores del tema', colorAcc: 'Acento', colorTxt: 'Texto', colorBg: 'Fondo', colorOk: 'Éxito',
      btnResetColors: '↺ Restablecer colores',
      secRequestLimits: 'Límites de solicitudes',
      maxConcurrentRequests: 'Máx. solicitudes simultáneas',
      maxRequestsPerSecond: 'Máx. solicitudes / seg',
      maxTextLengthPerRequest: 'Máx. caracteres / solicitud',
      maxParagraphsPerRequest: 'Máx. párrafos / solicitud',
      btnShowOriginals: '📄 MOSTRAR ORIGINAL',
      btnShowTranslations: '🌐 MOSTRAR TRADUCCIÓN',
      toastShowingOriginals: '📄 Mostrando texto original',
      toastShowingTranslations: '🌐 Mostrando traducción',
      secSound: 'Efectos de sonido', togSoundEnabled: 'Activar efectos de sonido',
      secSoundVolume: 'Volumen', secSoundEvents: 'Eventos de sonido',
      btnTestSound: '▶ Probar sonido',
      sndCatButtons: 'Clics', sndCatTranslation: 'Traducción', sndCatCopy: 'Copiar',
      sndCatRetry: 'Reintentar', sndCatPanel: 'Panel', sndCatTabs: 'Pestañas',
      sndCatSettings: 'Ajustes', sndCatToggles: 'Interruptores', sndCatCache: 'Caché',
      sndCatHistory: 'Historial', sndCatImportExport: 'Importar / Exportar', sndCatModes: 'Modos',
      sndCatAutomatic: 'Traducción automática',
      toastImportError: '❌ Error de importación',
      secUpdates: 'Actualizaciones automáticas', updModeAuto: 'Comprobar y abrir la actualización',
      updModeNotify: 'Notificarme sobre actualizaciones', updModeOff: 'Desactivar la comprobación de actualizaciones',
      updCurrentVersion: 'Versión actual', btnCheckUpdates: 'Buscar actualizaciones',
      updAvailable: 'Nueva versión disponible', updLatest: 'Estás usando la última versión',
      updManagerNote: 'Las actualizaciones nativas del gestor de userscripts las controla Tampermonkey/Violentmonkey',
      toastUpdateCheckFailed: '❌ No se pudo comprobar si hay actualizaciones',
    },
    pl: {
      title: 'Tłumacz Reddit', ver: 'v1.2.0',
      tabSettings: '⚙️ Ustawienia', tabHistory: '📖 Historia', tabExtras: '✨ Extras',
      secUiLang: 'Język interfejsu', applyUi: '✨ ZASTOSUJ INTERFEJS',
      secTargetLang: 'Język docelowy', saveLang: '💾 ZAPISZ JĘZYK',
      secEngine: 'Silnik', secTone: 'Styl', secTheme: 'Motyw',
      engGoogle: 'Google', engMymemory: 'MyMemory', engDeepL: 'DeepL',
      secDeepLApi: 'Klucze API DeepL', saveDeepLApi: '🔑 ZAPISZ KLUCZE DEEPL',
      btnTestDeepL: '🧪 TESTUJ DEEPL',
      btnToggleSecretsShow: '👁',
      btnToggleSecretsHide: '🙈',
      deeplApiPlaceholder: 'Wklej jeden lub więcej kluczy API DeepL, oddzielonych przecinkami',
      deeplApiHelp: 'Obsługuje klucze Pro i Free. Klucze kończące się na :fx automatycznie używają deepl.com/pro-api.',
      toastDeepLKeysSaved: '🔑 Klucze DeepL zapisane',
      toastDeepLKeysMissing: '⚠️ Najpierw dodaj co najmniej jeden klucz API DeepL',
      toastDeepLUnsupported: '⚠️ DeepL nie obsługuje tego języka docelowego:',
      toastDeepLTesting: '🧪 Testowanie API DeepL...',
      toastDeepLOk: '✅ API DeepL dostępne',
      toastDeepLFail: '❌ API DeepL niedostępne',
      toneNeutral: 'Neutralny', toneFormal: 'Formalny', toneSlang: 'Potoczny',
      themeDark: 'Ciemny', themeLight: 'Jasny', themeCyber: 'Cyberpunk', themeDracula: 'Dracula',
      togBilingual: 'Tryb dwujęzyczny', togTts: 'Mowa syntetyczna',
      togAutoConvert: 'Auto-konwersja', togAutoScroll: 'Auto-przewijanie',
      togIncognito: 'Incognito',
      togAutoTranslateOnScroll: 'Automatyczne tłumaczenie podczas przewijania',
      btnResetPos: '🏠 Resetuj pozycję', btnClearCache: '🧹 Wyczyść cache',
      btnExport: '📤 Eksport', btnImport: '📥 Import',
      btnSurprise: '🎲 Losowy język', btnPirate: '🏴‍☠️ Tryb Pirata',
      btnYoda: '🧙 Tryb Yody', btnHide: '👁 Ukryj', btnShow: '👁 Pokaż',
      sliderDelay: 'Opóźnienie żądania', unitMs: 'ms',
      statTranslations: 'Tłumaczenia', statChars: 'Znaki', statOnPage: 'Na stronie',
      histEmpty: 'Brak historii', histClear: '🗑 Wyczyść',
      searchLang: 'Szukaj języka…',
      btnOrig: '↩ Oryginał', btnCopy: '📋 Kopiuj', btnSpeak: '🔊', btnRetry: '↺ Ponów',
      copied: '✅ Skopiowano!', cacheCleared: '🧹 Cache wyczyszczony',
      toastApply: '✅ Interfejs zaktualizowany',
      toastSave: '💾 Zapisano — przeładowanie…', toastSurprise: '🎲 Język:',
      toastPirateOn: '🏴‍☠️ Arrr! Tryb Pirata!', toastPirateOff: '🏴‍☠️ Tryb wyłączony',
      toastYodaOn: '🧙 Tryb Yody włączony, hmm.', toastYodaOff: '🧙 Tryb wyłączony.',
      toastAutoScrollOn: '✅ Automatyczne tłumaczenie podczas przewijania włączone', toastAutoScrollOff: '⭕ Automatyczne tłumaczenie podczas przewijania wyłączone',
      shortcutHint: 'F2 = panel',
      secHotkeys: 'Skróty klawiszowe', hotkeyPanel: 'Otwórz panel',
      hotkeyPress: 'Naciśnij klawisz…', hotkeyReset: '↺ Resetuj',
      secColors: 'Kolory motywu', colorAcc: 'Akcent', colorTxt: 'Tekst', colorBg: 'Tło', colorOk: 'Sukces',
      btnResetColors: '↺ Resetuj kolory',
      secRequestLimits: 'Limity żądań',
      maxConcurrentRequests: 'Maks. równoległych żądań',
      maxRequestsPerSecond: 'Maks. żądań / sek',
      maxTextLengthPerRequest: 'Maks. znaków / żądanie',
      maxParagraphsPerRequest: 'Maks. akapitów / żądanie',
      btnShowOriginals: '📄 POKAŻ ORYGINAŁ',
      btnShowTranslations: '🌐 POKAŻ TŁUMACZENIE',
      toastShowingOriginals: '📄 Wyświetlany tekst oryginalny',
      toastShowingTranslations: '🌐 Wyświetlane tłumaczenie',
      secSound: 'Efekty dźwiękowe', togSoundEnabled: 'Włącz efekty dźwiękowe',
      secSoundVolume: 'Głośność', secSoundEvents: 'Zdarzenia dźwiękowe',
      btnTestSound: '▶ Testuj dźwięk',
      sndCatButtons: 'Kliknięcia', sndCatTranslation: 'Tłumaczenie', sndCatCopy: 'Kopiowanie',
      sndCatRetry: 'Ponowienie', sndCatPanel: 'Panel', sndCatTabs: 'Zakładki',
      sndCatSettings: 'Ustawienia', sndCatToggles: 'Przełączniki', sndCatCache: 'Cache',
      sndCatHistory: 'Historia', sndCatImportExport: 'Import / Eksport', sndCatModes: 'Tryby',
      sndCatAutomatic: 'Automatyczne tłumaczenie',
      toastImportError: '❌ Błąd importu',
      secUpdates: 'Automatyczne aktualizacje', updModeAuto: 'Sprawdź i otwórz aktualizację',
      updModeNotify: 'Powiadamiaj o aktualizacjach', updModeOff: 'Wyłącz sprawdzanie aktualizacji',
      updCurrentVersion: 'Aktualna wersja', btnCheckUpdates: 'Sprawdź aktualizacje',
      updAvailable: 'Dostępna nowa wersja', updLatest: 'Używasz najnowszej wersji',
      updManagerNote: 'Natywne aktualizacje menedżera userscriptów są kontrolowane przez Tampermonkey/Violentmonkey',
      toastUpdateCheckFailed: '❌ Nie udało się sprawdzić aktualizacji',
    },
    tr: {
      title: 'Reddit Çevirmeni', ver: 'v1.2.0',
      tabSettings: '⚙️ Ayarlar', tabHistory: '📖 Geçmiş', tabExtras: '✨ Ekstra',
      secUiLang: 'Arayüz dili', applyUi: '✨ ARAYÜZÜ UYGULA',
      secTargetLang: 'Hedef dil', saveLang: '💾 DİLİ KAYDET',
      secEngine: 'Motor', secTone: 'Stil', secTheme: 'Tema',
      engGoogle: 'Google', engMymemory: 'MyMemory', engDeepL: 'DeepL',
      secDeepLApi: 'DeepL API Anahtarları', saveDeepLApi: '🔑 DEEPL KAYDET',
      btnTestDeepL: '🧪 DEEPL TEST ET',
      btnToggleSecretsShow: '👁',
      btnToggleSecretsHide: '🙈',
      deeplApiPlaceholder: 'Virgülle ayrılmış bir veya daha fazla DeepL API anahtarı yapıştırın',
      deeplApiHelp: 'Pro ve Free anahtarları destekler. :fx ile biten anahtarlar otomatik olarak deepl.com/pro-api kullanır.',
      toastDeepLKeysSaved: '🔑 DeepL anahtarları kaydedildi',
      toastDeepLKeysMissing: '⚠️ Önce en az bir DeepL API anahtarı ekleyin',
      toastDeepLUnsupported: '⚠️ DeepL bu hedef dili desteklemiyor:',
      toastDeepLTesting: '🧪 DeepL API test ediliyor...',
      toastDeepLOk: '✅ DeepL API kullanılabilir',
      toastDeepLFail: '❌ DeepL API kullanılamıyor',
      toneNeutral: 'Nötr', toneFormal: 'Resmi', toneSlang: 'Günlük',
      themeDark: 'Koyu', themeLight: 'Açık', themeCyber: 'Cyberpunk', themeDracula: 'Dracula',
      togBilingual: 'Çift dil modu', togTts: 'Metin okuma',
      togAutoConvert: 'Otomatik dönüştürme', togAutoScroll: 'Otomatik kaydırma',
      togIncognito: 'Gizli mod',
      togAutoTranslateOnScroll: 'Kaydırırken otomatik çeviri',
      btnResetPos: '🏠 Konumu sıfırla', btnClearCache: '🧹 Önbelleği temizle',
      btnExport: '📤 Dışa aktar', btnImport: '📥 İçe aktar',
      btnSurprise: '🎲 Rastgele', btnPirate: '🏴‍☠️ Korsan modu',
      btnYoda: '🧙 Yoda modu', btnHide: '👁 Gizle', btnShow: '👁 Göster',
      sliderDelay: 'İstek gecikmesi', unitMs: 'ms',
      statTranslations: 'Çeviriler', statChars: 'Karakterler', statOnPage: 'Sayfada',
      histEmpty: 'Geçmiş yok', histClear: '🗑 Temizle',
      searchLang: 'Dil ara…',
      btnOrig: '↩ Orijinal', btnCopy: '📋 Kopyala', btnSpeak: '🔊', btnRetry: '↺ Tekrar',
      copied: '✅ Kopyalandı!', cacheCleared: '🧹 Önbellek temizlendi',
      toastApply: '✅ Arayüz güncellendi',
      toastSave: '💾 Kaydedildi — yenileniyor…', toastSurprise: '🎲 Dil:',
      toastPirateOn: '🏴‍☠️ Arrr! Korsan modu!', toastPirateOff: '🏴‍☠️ Mod kapatıldı',
      toastYodaOn: '🧙 Yoda modu açık, hmm.', toastYodaOff: '🧙 Yoda modu kapalı.',
      toastAutoScrollOn: '✅ Kaydırırken otomatik çeviri etkin', toastAutoScrollOff: '⭕ Kaydırırken otomatik çeviri devre dışı',
      shortcutHint: 'F2 = panel',
      secHotkeys: 'Kısayollar', hotkeyPanel: 'Paneli aç',
      hotkeyPress: 'Bir tuşa basın…', hotkeyReset: '↺ Sıfırla',
      secColors: 'Tema renkleri', colorAcc: 'Vurgu', colorTxt: 'Metin', colorBg: 'Arka plan', colorOk: 'Başarı',
      btnResetColors: '↺ Renkleri sıfırla',
      secRequestLimits: 'İstek limitleri',
      maxConcurrentRequests: 'Maks. eşzamanlı istek',
      maxRequestsPerSecond: 'Maks. istek / sn',
      maxTextLengthPerRequest: 'Maks. karakter / istek',
      maxParagraphsPerRequest: 'Maks. paragraf / istek',
      btnShowOriginals: '📄 ORİJİNALİ GÖSTER',
      btnShowTranslations: '🌐 ÇEVİRİYİ GÖSTER',
      toastShowingOriginals: '📄 Orijinal metin gösteriliyor',
      toastShowingTranslations: '🌐 Çeviri gösteriliyor',
      secSound: 'Ses Efektleri', togSoundEnabled: 'Ses efektlerini etkinleştir',
      secSoundVolume: 'Ses düzeyi', secSoundEvents: 'Ses olayları',
      btnTestSound: '▶ Sesi test et',
      sndCatButtons: 'Tıklamalar', sndCatTranslation: 'Çeviri', sndCatCopy: 'Kopyalama',
      sndCatRetry: 'Tekrar deneme', sndCatPanel: 'Panel', sndCatTabs: 'Sekmeler',
      sndCatSettings: 'Ayarlar', sndCatToggles: 'Anahtarlar', sndCatCache: 'Önbellek',
      sndCatHistory: 'Geçmiş', sndCatImportExport: 'İçe / Dışa aktarma', sndCatModes: 'Modlar',
      sndCatAutomatic: 'Otomatik çeviri',
      toastImportError: '❌ İçe aktarma hatası',
      secUpdates: 'Otomatik Güncellemeler', updModeAuto: 'Güncellemeyi kontrol et ve aç',
      updModeNotify: 'Güncellemeler hakkında bildir', updModeOff: 'Güncelleme kontrolünü devre dışı bırak',
      updCurrentVersion: 'Mevcut sürüm', btnCheckUpdates: 'Güncellemeleri kontrol et',
      updAvailable: 'Yeni sürüm mevcut', updLatest: 'En son sürümü kullanıyorsunuz',
      updManagerNote: 'Userscript yöneticisinin yerel güncellemeleri Tampermonkey/Violentmonkey tarafından kontrol edilir',
      toastUpdateCheckFailed: '❌ Güncellemeler kontrol edilemedi',
    },
    zh: {
      title: 'Reddit翻译器', ver: 'v1.2.0',
      tabSettings: '⚙️ 设置', tabHistory: '📖 历史', tabExtras: '✨ 更多',
      secUiLang: '界面语言', applyUi: '✨ 应用界面',
      secTargetLang: '目标语言', saveLang: '💾 保存语言',
      secEngine: '引擎', secTone: '风格', secTheme: '主题',
      engGoogle: 'Google', engMymemory: 'MyMemory', engDeepL: 'DeepL',
      secDeepLApi: 'DeepL API 密钥', saveDeepLApi: '🔑 保存 DeepL 密钥',
      btnTestDeepL: '🧪 测试 DeepL',
      btnToggleSecretsShow: '👁',
      btnToggleSecretsHide: '🙈',
      deeplApiPlaceholder: '粘贴一个或多个 DeepL API 密钥，使用英文逗号分隔',
      deeplApiHelp: '同时支持 Pro 和 Free 密钥。以 :fx 结尾的密钥会自动使用 deepl.com/pro-api。',
      toastDeepLKeysSaved: '🔑 DeepL 密钥已保存',
      toastDeepLKeysMissing: '⚠️ 请先添加至少一个 DeepL API 密钥',
      toastDeepLUnsupported: '⚠️ DeepL 暂不支持该目标语言：',
      toastDeepLTesting: '🧪 正在测试 DeepL API...',
      toastDeepLOk: '✅ DeepL API 可用',
      toastDeepLFail: '❌ DeepL API 不可用',
      toneNeutral: '中性', toneFormal: '正式', toneSlang: '口语',
      themeDark: '深色', themeLight: '浅色', themeCyber: '赛博朋克', themeDracula: '德古拉',
      togBilingual: '双语模式', togTts: '文字转语音',
      togAutoConvert: '自动单位转换', togAutoScroll: '自动滚动',
      togIncognito: '隐身模式',
      togAutoTranslateOnScroll: '滚动时自动翻译',
      btnResetPos: '🏠 重置位置', btnClearCache: '🧹 清除缓存',
      btnExport: '📤 导出', btnImport: '📥 导入',
      btnSurprise: '🎲 随机语言', btnPirate: '🏴‍☠️ 海盗模式',
      btnYoda: '🧙 尤达模式', btnHide: '👁 隐藏', btnShow: '👁 显示',
      sliderDelay: '请求延迟', unitMs: '毫秒',
      statTranslations: '翻译', statChars: '字符', statOnPage: '页面上',
      histEmpty: '暂无历史', histClear: '🗑 清除历史',
      searchLang: '搜索语言…',
      btnOrig: '↩ 原文', btnCopy: '📋 复制', btnSpeak: '🔊', btnRetry: '↺ 重试',
      copied: '✅ 已复制！', cacheCleared: '🧹 缓存已清除',
      toastApply: '✅ 界面已更新',
      toastSave: '💾 已保存 — 重新加载…', toastSurprise: '🎲 语言:',
      toastPirateOn: '🏴‍☠️ Arrr! 海盗模式！', toastPirateOff: '🏴‍☠️ 模式关闭',
      toastYodaOn: '🧙 尤达模式已开启，嗯。', toastYodaOff: '🧙 尤达模式已关闭。',
      toastAutoScrollOn: '✅ 滚动时自动翻译已启用', toastAutoScrollOff: '⭕ 滚动时自动翻译已禁用',
      shortcutHint: 'F2 = 面板',
      secHotkeys: '快捷键', hotkeyPanel: '打开面板',
      hotkeyPress: '按下一个键…', hotkeyReset: '↺ 重置',
      secColors: '主题颜色', colorAcc: '强调色', colorTxt: '文字', colorBg: '背景', colorOk: '成功',
      btnResetColors: '↺ 重置颜色',
      secRequestLimits: '请求限制',
      maxConcurrentRequests: '最大并发请求数',
      maxRequestsPerSecond: '每秒最大请求数',
      maxTextLengthPerRequest: '每次请求最大文本长度',
      maxParagraphsPerRequest: '每次请求最大段落数',
      btnShowOriginals: '📄 显示原文',
      btnShowTranslations: '🌐 显示译文',
      toastShowingOriginals: '📄 当前显示原文',
      toastShowingTranslations: '🌐 当前显示译文',
      secSound: '音效', togSoundEnabled: '启用音效',
      secSoundVolume: '音量', secSoundEvents: '音效事件',
      btnTestSound: '▶ 测试音效',
      sndCatButtons: '按钮点击', sndCatTranslation: '翻译', sndCatCopy: '复制',
      sndCatRetry: '重试', sndCatPanel: '面板', sndCatTabs: '标签页',
      sndCatSettings: '设置', sndCatToggles: '开关', sndCatCache: '缓存',
      sndCatHistory: '历史记录', sndCatImportExport: '导入 / 导出', sndCatModes: '模式',
      sndCatAutomatic: '自动翻译',
      toastImportError: '❌ 导入错误',
      secUpdates: '自动更新', updModeAuto: '检查并打开更新',
      updModeNotify: '提醒我更新', updModeOff: '禁用更新检查',
      updCurrentVersion: '当前版本', btnCheckUpdates: '检查更新',
      updAvailable: '有新版本可用', updLatest: '您使用的已是最新版本',
      updManagerNote: '用户脚本管理器的原生更新由 Tampermonkey/Violentmonkey 控制',
      toastUpdateCheckFailed: '❌ 无法检查更新',
    },
    ja: {
      title: 'Reddit翻訳', ver: 'v1.2.0',
      tabSettings: '⚙️ 設定', tabHistory: '📖 履歴', tabExtras: '✨ その他',
      secUiLang: 'UI言語', applyUi: '✨ UIを適用',
      secTargetLang: '翻訳先言語', saveLang: '💾 言語を保存',
      secEngine: 'エンジン', secTone: 'スタイル', secTheme: 'テーマ',
      engGoogle: 'Google', engMymemory: 'MyMemory', engDeepL: 'DeepL',
      secDeepLApi: 'DeepL APIキー', saveDeepLApi: '🔑 DEEPL キーを保存',
      btnTestDeepL: '🧪 DEEPL テスト',
      btnToggleSecretsShow: '👁',
      btnToggleSecretsHide: '🙈',
      deeplApiPlaceholder: 'DeepL APIキーをカンマ区切りで1つ以上貼り付けてください',
      deeplApiHelp: 'ProおよびFreeキーに対応。:fx で終わるキーは自動的に deepl.com/pro-api を使用します。',
      toastDeepLKeysSaved: '🔑 DeepLキーを保存しました',
      toastDeepLKeysMissing: '⚠️ まずDeepL APIキーを1つ以上追加してください',
      toastDeepLUnsupported: '⚠️ DeepLはこのターゲット言語に対応していません:',
      toastDeepLTesting: '🧪 DeepL APIをテスト中...',
      toastDeepLOk: '✅ DeepL APIは利用可能です',
      toastDeepLFail: '❌ DeepL APIは利用できません',
      toneNeutral: '標準', toneFormal: '公式', toneSlang: 'くだけた',
      themeDark: 'ダーク', themeLight: 'ライト', themeCyber: 'サイバーパンク', themeDracula: 'ドラキュラ',
      togBilingual: 'バイリンガルモード', togTts: '音声合成',
      togAutoConvert: '単位自動変換', togAutoScroll: '自動スクロール',
      togIncognito: 'シークレット',
      togAutoTranslateOnScroll: 'スクロール時に自動翻訳',
      btnResetPos: '🏠 位置リセット', btnClearCache: '🧹 キャッシュ削除',
      btnExport: '📤 エクスポート', btnImport: '📥 インポート',
      btnSurprise: '🎲 ランダム言語', btnPirate: '🏴‍☠️ 海賊モード',
      btnYoda: '🧙 ヨーダモード', btnHide: '👁 ボタンを隠す', btnShow: '👁 ボタンを表示',
      sliderDelay: 'リクエスト遅延', unitMs: 'ms',
      statTranslations: '翻訳数', statChars: '文字数', statOnPage: 'ページ上',
      histEmpty: '履歴なし', histClear: '🗑 履歴を消去',
      searchLang: '言語を検索…',
      btnOrig: '↩ 元テキスト', btnCopy: '📋 コピー', btnSpeak: '🔊', btnRetry: '↺ やり直し',
      copied: '✅ コピーしました！', cacheCleared: '🧹 キャッシュ削除済み',
      toastApply: '✅ UIを更新しました',
      toastSave: '💾 保存しました — 再読込中…', toastSurprise: '🎲 言語:',
      toastPirateOn: '🏴‍☠️ Arrr! 海賊モード！', toastPirateOff: '🏴‍☠️ モードオフ',
      toastYodaOn: '🧙 ヨーダモードオン、ふむ。', toastYodaOff: '🧙 ヨーダモードオフ。',
      toastAutoScrollOn: '✅ スクロール時に自動翻訳が有効', toastAutoScrollOff: '⭕ スクロール時に自動翻訳が無効',
      shortcutHint: 'F2 = パネル',
      secHotkeys: 'ショートカット', hotkeyPanel: 'パネルを開く',
      hotkeyPress: 'キーを押してください…', hotkeyReset: '↺ リセット',
      secColors: 'テーマカラー', colorAcc: 'アクセント', colorTxt: 'テキスト', colorBg: '背景', colorOk: '成功',
      btnResetColors: '↺ 色をリセット',
      secRequestLimits: 'リクエスト制限',
      maxConcurrentRequests: '最大同時リクエスト数',
      maxRequestsPerSecond: '最大リクエスト数 / 秒',
      maxTextLengthPerRequest: '最大文字数 / リクエスト',
      maxParagraphsPerRequest: '最大段落数 / リクエスト',
      btnShowOriginals: '📄 原文を表示',
      btnShowTranslations: '🌐 翻訳を表示',
      toastShowingOriginals: '🌐 翻訳を表示中',
      toastShowingTranslations: '🌐 翻訳を表示中',
      secSound: 'サウンド効果', togSoundEnabled: 'サウンド効果を有効にする',
      secSoundVolume: '音量', secSoundEvents: 'サウンドイベント',
      btnTestSound: '▶ サウンドをテスト',
      sndCatButtons: 'ボタンクリック', sndCatTranslation: '翻訳', sndCatCopy: 'コピー',
      sndCatRetry: 'リトライ', sndCatPanel: 'パネル', sndCatTabs: 'タブ',
      sndCatSettings: '設定', sndCatToggles: 'トグル', sndCatCache: 'キャッシュ',
      sndCatHistory: '履歴', sndCatImportExport: 'インポート / エクスポート', sndCatModes: 'モード',
      sndCatAutomatic: '自動翻訳',
      toastImportError: '❌ インポートエラー',
      secUpdates: '自動更新', updModeAuto: '更新を確認して開く',
      updModeNotify: '更新を通知する', updModeOff: '更新確認を無効にする',
      updCurrentVersion: '現在のバージョン', btnCheckUpdates: '更新を確認',
      updAvailable: '新しいバージョンがあります', updLatest: '最新バージョンを使用しています',
      updManagerNote: 'ユーザースクリプトマネージャーのネイティブ更新は Tampermonkey/Violentmonkey によって制御されます',
      toastUpdateCheckFailed: '❌ 更新を確認できませんでした',
    },
    it: {
      title: 'Reddit Traduttore', ver: 'v1.2.0',
      tabSettings: '⚙️ Impostazioni', tabHistory: '📖 Cronologia', tabExtras: '✨ Extra',
      secUiLang: 'Lingua interfaccia', applyUi: '✨ APPLICA INTERFACCIA',
      secTargetLang: 'Lingua di destinazione', saveLang: '💾 SALVA LINGUA',
      secEngine: 'Motore', secTone: 'Tono di traduzione', secTheme: 'Tema',
      engGoogle: 'Google', engMymemory: 'MyMemory', engDeepL: 'DeepL',
      secDeepLApi: 'Chiavi API DeepL', saveDeepLApi: '🔑 SALVA CHIAVI DEEPL',
      btnTestDeepL: '🧪 TESTA DEEPL',
      btnToggleSecretsShow: '👁', btnToggleSecretsHide: '🙈',
      deeplApiPlaceholder: 'Incolla una o più chiavi API DeepL, separate da virgole',
      deeplApiHelp: 'Supporta chiavi Pro e Free. Le chiavi che terminano con :fx usano automaticamente deepl.com/pro-api.',
      toastDeepLKeysSaved: '🔑 Chiavi DeepL salvate',
      toastDeepLKeysMissing: '⚠️ Aggiungi prima almeno una chiave API DeepL',
      toastDeepLUnsupported: '⚠️ DeepL non supporta questa lingua di destinazione:',
      toastDeepLTesting: '🧪 Test API DeepL in corso...', toastDeepLOk: '✅ API DeepL disponibile', toastDeepLFail: '❌ API DeepL non disponibile',
      toneNeutral: 'Neutro', toneFormal: 'Formale', toneSlang: 'Colloquiale',
      themeDark: 'Scuro', themeLight: 'Chiaro', themeCyber: 'Cyberpunk', themeDracula: 'Dracula',
      togBilingual: 'Modalità bilingue', togTts: 'Sintesi vocale',
      togAutoConvert: 'Conversione unità automatica', togAutoScroll: 'Scorri automaticamente',
      togIncognito: 'Incognito (nessuna cronologia)',
      togAutoTranslateOnScroll: 'Traduci automaticamente allo scroll',
      btnResetPos: '🏠 Ripristina posizione', btnClearCache: '🧹 Svuota cache',
      btnExport: '📤 Esporta', btnImport: '📥 Importa',
      btnSurprise: '🎲 Sorprendimi', btnPirate: '🏴‍☠️ Modalità pirata',
      btnYoda: '🧙 Modalità Yoda', btnHide: '👁 Nascondi pulsanti', btnShow: '👁 Mostra pulsanti',
      sliderDelay: 'Ritardo richieste', unitMs: 'ms',
      statTranslations: 'Traduzioni', statChars: 'Caratteri', statOnPage: 'In pagina',
      histEmpty: 'Nessuna cronologia', histClear: '🗑 Cancella cronologia',
      searchLang: 'Cerca lingua…',
      btnOrig: '↩ Originale', btnCopy: '📋 Copia', btnSpeak: '🔊', btnRetry: '↺ Riprova',
      copied: '✅ Copiato!', cacheCleared: '🧹 Cache svuotata',
      toastApply: '✅ Interfaccia aggiornata',
      toastSave: '💾 Salvato — ricaricamento…', toastSurprise: '🎲 Lingua:',
      toastPirateOn: '🏴‍☠️ Arrr! Modalità pirata attiva!', toastPirateOff: '🏴‍☠️ Modalità pirata disattivata',
      toastYodaOn: '🧙 Modalità Yoda attiva, hmm.', toastYodaOff: '🧙 Modalità Yoda disattivata.',
      toastAutoScrollOn: '✅ Traduzione automatica allo scroll attiva', toastAutoScrollOff: '⭕ Traduzione automatica allo scroll disattivata',
      shortcutHint: 'F2 = pannello',
      secHotkeys: 'Tasti rapidi', hotkeyPanel: 'Apri pannello',
      hotkeyPress: 'Premi un tasto…', hotkeyReset: '↺ Reimposta',
      secColors: 'Colori tema', colorAcc: 'Accento', colorTxt: 'Testo', colorBg: 'Sfondo', colorOk: 'Successo',
      btnResetColors: '↺ Reimposta colori',
      secRequestLimits: 'Limiti richieste',
      maxConcurrentRequests: 'Max richieste simultanee',
      maxRequestsPerSecond: 'Max richieste / sec',
      maxTextLengthPerRequest: 'Max caratteri / richiesta',
      maxParagraphsPerRequest: 'Max paragrafi / richiesta',
      btnShowOriginals: '📄 MOSTRA ORIGINALE',
      btnShowTranslations: '🌐 MOSTRA TRADUZIONE',
      toastShowingOriginals: '📄 Testo originale visualizzato',
      toastShowingTranslations: '🌐 Traduzione visualizzata',
      secSound: 'Effetti sonori', togSoundEnabled: 'Abilita effetti sonori',
      secSoundVolume: 'Volume', secSoundEvents: 'Eventi sonori',
      btnTestSound: '▶ Prova suono',
      sndCatButtons: 'Clic', sndCatTranslation: 'Traduzione', sndCatCopy: 'Copia',
      sndCatRetry: 'Riprova', sndCatPanel: 'Pannello', sndCatTabs: 'Schede',
      sndCatSettings: 'Impostazioni', sndCatToggles: 'Interruttori', sndCatCache: 'Cache',
      sndCatHistory: 'Cronologia', sndCatImportExport: 'Importa / Esporta', sndCatModes: 'Modalità',
      sndCatAutomatic: 'Traduzione automatica',
      toastImportError: '❌ Errore di importazione',
      secUpdates: 'Aggiornamenti automatici', updModeAuto: 'Controlla e apri l\'aggiornamento',
      updModeNotify: 'Notificami gli aggiornamenti', updModeOff: 'Disattiva il controllo aggiornamenti',
      updCurrentVersion: 'Versione attuale', btnCheckUpdates: 'Controlla aggiornamenti',
      updAvailable: 'Nuova versione disponibile', updLatest: 'Stai usando l\'ultima versione',
      updManagerNote: 'Gli aggiornamenti nativi del gestore di userscript sono controllati da Tampermonkey/Violentmonkey',
      toastUpdateCheckFailed: '❌ Impossibile controllare gli aggiornamenti',
    },
    pt: {
      title: 'Reddit Tradutor', ver: 'v1.2.0',
      tabSettings: '⚙️ Configurações', tabHistory: '📖 Histórico', tabExtras: '✨ Extras',
      secUiLang: 'Idioma da interface', applyUi: '✨ APLICAR INTERFACE',
      secTargetLang: 'Idioma de destino', saveLang: '💾 SALVAR IDIOMA',
      secEngine: 'Motor', secTone: 'Tom de tradução', secTheme: 'Tema',
      engGoogle: 'Google', engMymemory: 'MyMemory', engDeepL: 'DeepL',
      secDeepLApi: 'Chaves API DeepL', saveDeepLApi: '🔑 SALVAR CHAVES DEEPL',
      btnTestDeepL: '🧪 TESTAR DEEPL',
      btnToggleSecretsShow: '👁', btnToggleSecretsHide: '🙈',
      deeplApiPlaceholder: 'Cole uma ou mais chaves API DeepL, separadas por vírgulas',
      deeplApiHelp: 'Suporta chaves Pro e Free. Chaves terminadas em :fx usam automaticamente deepl.com/pro-api.',
      toastDeepLKeysSaved: '🔑 Chaves DeepL salvas',
      toastDeepLKeysMissing: '⚠️ Adicione pelo menos uma chave API DeepL primeiro',
      toastDeepLUnsupported: '⚠️ DeepL não suporta este idioma de destino:',
      toastDeepLTesting: '🧪 Testando API DeepL...', toastDeepLOk: '✅ API DeepL disponível', toastDeepLFail: '❌ API DeepL indisponível',
      toneNeutral: 'Neutro', toneFormal: 'Formal', toneSlang: 'Informal',
      themeDark: 'Escuro', themeLight: 'Claro', themeCyber: 'Cyberpunk', themeDracula: 'Drácula',
      togBilingual: 'Modo bilíngue', togTts: 'Texto para fala',
      togAutoConvert: 'Converter unidades automaticamente', togAutoScroll: 'Rolar automaticamente',
      togIncognito: 'Incógnito (sem histórico)',
      togAutoTranslateOnScroll: 'Traduzir automaticamente ao rolar',
      btnResetPos: '🏠 Redefinir posição', btnClearCache: '🧹 Limpar cache',
      btnExport: '📤 Exportar', btnImport: '📥 Importar',
      btnSurprise: '🎲 Surpreenda-me', btnPirate: '🏴‍☠️ Modo pirata',
      btnYoda: '🧙 Modo Yoda', btnHide: '👁 Ocultar botões', btnShow: '👁 Mostrar botões',
      sliderDelay: 'Atraso de solicitação', unitMs: 'ms',
      statTranslations: 'Traduções', statChars: 'Caracteres', statOnPage: 'Na página',
      histEmpty: 'Sem histórico', histClear: '🗑 Limpar histórico',
      searchLang: 'Pesquisar idioma…',
      btnOrig: '↩ Original', btnCopy: '📋 Copiar', btnSpeak: '🔊', btnRetry: '↺ Tentar novamente',
      copied: '✅ Copiado!', cacheCleared: '🧹 Cache limpo',
      toastApply: '✅ Interface atualizada',
      toastSave: '💾 Salvo — recarregando…', toastSurprise: '🎲 Idioma:',
      toastPirateOn: '🏴‍☠️ Arrr! Modo pirata ativado!', toastPirateOff: '🏴‍☠️ Modo pirata desativado',
      toastYodaOn: '🧙 Modo Yoda ativado, hmm.', toastYodaOff: '🧙 Modo Yoda desativado.',
      toastAutoScrollOn: '✅ Tradução automática ao rolar ativada', toastAutoScrollOff: '⭕ Tradução automática ao rolar desativada',
      shortcutHint: 'F2 = painel',
      secHotkeys: 'Atalhos', hotkeyPanel: 'Abrir painel',
      hotkeyPress: 'Pressione uma tecla…', hotkeyReset: '↺ Redefinir',
      secColors: 'Cores do tema', colorAcc: 'Destaque', colorTxt: 'Texto', colorBg: 'Fundo', colorOk: 'Sucesso',
      btnResetColors: '↺ Redefinir cores',
      secRequestLimits: 'Limites de solicitações',
      maxConcurrentRequests: 'Máx. solicitações simultâneas',
      maxRequestsPerSecond: 'Máx. solicitações / seg',
      maxTextLengthPerRequest: 'Máx. caracteres / solicitação',
      maxParagraphsPerRequest: 'Máx. parágrafos / solicitação',
      btnShowOriginals: '📄 MOSTRAR ORIGINAL',
      btnShowTranslations: '🌐 MOSTRAR TRADUÇÃO',
      toastShowingOriginals: '📄 Mostrando texto original',
      toastShowingTranslations: '🌐 Mostrando tradução',
      secSound: 'Efeitos sonoros', togSoundEnabled: 'Ativar efeitos sonoros',
      secSoundVolume: 'Volume', secSoundEvents: 'Eventos sonoros',
      btnTestSound: '▶ Testar som',
      sndCatButtons: 'Cliques', sndCatTranslation: 'Tradução', sndCatCopy: 'Copiar',
      sndCatRetry: 'Tentar novamente', sndCatPanel: 'Painel', sndCatTabs: 'Abas',
      sndCatSettings: 'Configurações', sndCatToggles: 'Alternadores', sndCatCache: 'Cache',
      sndCatHistory: 'Histórico', sndCatImportExport: 'Importar / Exportar', sndCatModes: 'Modos',
      sndCatAutomatic: 'Tradução automática',
      toastImportError: '❌ Erro de importação',
      secUpdates: 'Atualizações automáticas', updModeAuto: 'Verificar e abrir atualização',
      updModeNotify: 'Notificar sobre atualizações', updModeOff: 'Desativar verificação de atualizações',
      updCurrentVersion: 'Versão atual', btnCheckUpdates: 'Verificar atualizações',
      updAvailable: 'Nova versão disponível', updLatest: 'Você está usando a versão mais recente',
      updManagerNote: 'As atualizações nativas do gerenciador de userscripts são controladas pelo Tampermonkey/Violentmonkey',
      toastUpdateCheckFailed: '❌ Não foi possível verificar atualizações',
    },
    ko: {
      title: 'Reddit 번역기', ver: 'v1.2.0',
      tabSettings: '⚙️ 설정', tabHistory: '📖 기록', tabExtras: '✨ 기타',
      secUiLang: 'UI 언어', applyUi: '✨ 인터페이스 적용',
      secTargetLang: '번역 대상 언어', saveLang: '💾 언어 저장',
      secEngine: '엔진', secTone: '번역 어조', secTheme: '테마',
      engGoogle: 'Google', engMymemory: 'MyMemory', engDeepL: 'DeepL',
      secDeepLApi: 'DeepL API 키', saveDeepLApi: '🔑 DEEPL 키 저장',
      btnTestDeepL: '🧪 DEEPL 테스트',
      btnToggleSecretsShow: '👁', btnToggleSecretsHide: '🙈',
      deeplApiPlaceholder: 'DeepL API 키를 쉼표로 구분하여 하나 이상 붙여넣으세요',
      deeplApiHelp: 'Pro 및 Free 키를 지원합니다. :fx로 끝나는 키는 자동으로 deepl.com/pro-api를 사용합니다.',
      toastDeepLKeysSaved: '🔑 DeepL 키 저장됨',
      toastDeepLKeysMissing: '⚠️ DeepL API 키를 먼저 하나 이상 추가하세요',
      toastDeepLUnsupported: '⚠️ DeepL이 이 대상 언어를 지원하지 않습니다:',
      toastDeepLTesting: '🧪 DeepL API 테스트 중...', toastDeepLOk: '✅ DeepL API 사용 가능', toastDeepLFail: '❌ DeepL API 사용 불가',
      toneNeutral: '보통', toneFormal: '격식체', toneSlang: '구어체',
      themeDark: '다크', themeLight: '라이트', themeCyber: '사이버펑크', themeDracula: '드라큘라',
      togBilingual: '이중 언어 모드', togTts: '텍스트 음성 변환',
      togAutoConvert: '단위 자동 변환', togAutoScroll: '자동 스크롤',
      togIncognito: '시크릿 (기록 없음)',
      togAutoTranslateOnScroll: '스크롤 시 자동 번역',
      btnResetPos: '🏠 위치 초기화', btnClearCache: '🧹 캐시 지우기',
      btnExport: '📤 내보내기', btnImport: '📥 가져오기',
      btnSurprise: '🎲 랜덤 언어', btnPirate: '🏴‍☠️ 해적 모드',
      btnYoda: '🧙 요다 모드', btnHide: '👁 버튼 숨기기', btnShow: '👁 버튼 표시',
      sliderDelay: '요청 지연', unitMs: 'ms',
      statTranslations: '번역 수', statChars: '문자 수', statOnPage: '페이지 내',
      histEmpty: '기록 없음', histClear: '🗑 기록 지우기',
      searchLang: '언어 검색…',
      btnOrig: '↩ 원문', btnCopy: '📋 복사', btnSpeak: '🔊', btnRetry: '↺ 다시 시도',
      copied: '✅ 복사됨!', cacheCleared: '🧹 캐시 삭제됨',
      toastApply: '✅ 인터페이스 업데이트됨',
      toastSave: '💾 저장됨 — 새로고침 중…', toastSurprise: '🎲 언어:',
      toastPirateOn: '🏴‍☠️ Arrr! 해적 모드 켜짐!', toastPirateOff: '🏴‍☠️ 해적 모드 꺼짐',
      toastYodaOn: '🧙 요다 모드 켜짐, 흠.', toastYodaOff: '🧙 요다 모드 꺼짐.',
      toastAutoScrollOn: '✅ 스크롤 시 자동 번역 켜짐', toastAutoScrollOff: '⭕ 스크롤 시 자동 번역 꺼짐',
      shortcutHint: 'F2 = 패널',
      secHotkeys: '단축키', hotkeyPanel: '패널 열기',
      hotkeyPress: '키를 누르세요…', hotkeyReset: '↺ 초기화',
      secColors: '테마 색상', colorAcc: '강조', colorTxt: '텍스트', colorBg: '배경', colorOk: '성공',
      btnResetColors: '↺ 색상 초기화',
      secRequestLimits: '요청 제한',
      maxConcurrentRequests: '최대 동시 요청 수',
      maxRequestsPerSecond: '최대 요청 수 / 초',
      maxTextLengthPerRequest: '최대 문자 수 / 요청',
      maxParagraphsPerRequest: '최대 단락 수 / 요청',
      btnShowOriginals: '📄 원문 보기',
      btnShowTranslations: '🌐 번역 보기',
      toastShowingOriginals: '📄 원문 표시 중',
      toastShowingTranslations: '🌐 번역 표시 중',
      secSound: '효과음', togSoundEnabled: '효과음 사용',
      secSoundVolume: '음량', secSoundEvents: '효과음 이벤트',
      btnTestSound: '▶ 효과음 테스트',
      sndCatButtons: '버튼 클릭', sndCatTranslation: '번역', sndCatCopy: '복사',
      sndCatRetry: '재시도', sndCatPanel: '패널', sndCatTabs: '탭',
      sndCatSettings: '설정', sndCatToggles: '토글', sndCatCache: '캐시',
      sndCatHistory: '기록', sndCatImportExport: '가져오기 / 내보내기', sndCatModes: '모드',
      sndCatAutomatic: '자동 번역',
      toastImportError: '❌ 가져오기 오류',
      secUpdates: '자동 업데이트', updModeAuto: '업데이트 확인 후 열기',
      updModeNotify: '업데이트 알림 받기', updModeOff: '업데이트 확인 비활성화',
      updCurrentVersion: '현재 버전', btnCheckUpdates: '업데이트 확인',
      updAvailable: '새 버전 사용 가능', updLatest: '최신 버전을 사용 중입니다',
      updManagerNote: '사용자 스크립트 관리자의 기본 업데이트는 Tampermonkey/Violentmonkey가 제어합니다',
      toastUpdateCheckFailed: '❌ 업데이트를 확인할 수 없습니다',
    },
    vi: {
      title: 'Reddit Dịch thuật', ver: 'v1.2.0',
      tabSettings: '⚙️ Cài đặt', tabHistory: '📖 Lịch sử', tabExtras: '✨ Thêm',
      secUiLang: 'Ngôn ngữ giao diện', applyUi: '✨ ÁP DỤNG GIAO DIỆN',
      secTargetLang: 'Ngôn ngữ đích', saveLang: '💾 LƯU NGÔN NGỮ',
      secEngine: 'Công cụ', secTone: 'Giọng dịch', secTheme: 'Chủ đề',
      engGoogle: 'Google', engMymemory: 'MyMemory', engDeepL: 'DeepL',
      secDeepLApi: 'Khóa API DeepL', saveDeepLApi: '🔑 LƯU KHÓA DEEPL',
      btnTestDeepL: '🧪 KIỂM TRA DEEPL',
      btnToggleSecretsShow: '👁', btnToggleSecretsHide: '🙈',
      deeplApiPlaceholder: 'Dán một hoặc nhiều khóa API DeepL, phân cách bằng dấu phẩy',
      deeplApiHelp: 'Hỗ trợ khóa Pro và Free. Khóa kết thúc bằng :fx tự động dùng deepl.com/pro-api.',
      toastDeepLKeysSaved: '🔑 Đã lưu khóa DeepL',
      toastDeepLKeysMissing: '⚠️ Vui lòng thêm ít nhất một khóa API DeepL trước',
      toastDeepLUnsupported: '⚠️ DeepL không hỗ trợ ngôn ngữ đích này:',
      toastDeepLTesting: '🧪 Đang kiểm tra API DeepL...', toastDeepLOk: '✅ API DeepL khả dụng', toastDeepLFail: '❌ API DeepL không khả dụng',
      toneNeutral: 'Trung lập', toneFormal: 'Trang trọng', toneSlang: 'Thông thường',
      themeDark: 'Tối', themeLight: 'Sáng', themeCyber: 'Cyberpunk', themeDracula: 'Dracula',
      togBilingual: 'Chế độ song ngữ', togTts: 'Chuyển văn bản thành giọng nói',
      togAutoConvert: 'Tự động chuyển đổi đơn vị', togAutoScroll: 'Tự động cuộn',
      togIncognito: 'Ẩn danh (không lưu lịch sử)',
      togAutoTranslateOnScroll: 'Tự động dịch khi cuộn',
      btnResetPos: '🏠 Đặt lại vị trí', btnClearCache: '🧹 Xóa bộ nhớ đệm',
      btnExport: '📤 Xuất', btnImport: '📥 Nhập',
      btnSurprise: '🎲 Ngẫu nhiên', btnPirate: '🏴‍☠️ Chế độ cướp biển',
      btnYoda: '🧙 Chế độ Yoda', btnHide: '👁 Ẩn nút', btnShow: '👁 Hiện nút',
      sliderDelay: 'Độ trễ yêu cầu', unitMs: 'ms',
      statTranslations: 'Bản dịch', statChars: 'Ký tự', statOnPage: 'Trên trang',
      histEmpty: 'Chưa có lịch sử', histClear: '🗑 Xóa lịch sử',
      searchLang: 'Tìm ngôn ngữ…',
      btnOrig: '↩ Gốc', btnCopy: '📋 Sao chép', btnSpeak: '🔊', btnRetry: '↺ Thử lại',
      copied: '✅ Đã sao chép!', cacheCleared: '🧹 Đã xóa bộ nhớ đệm',
      toastApply: '✅ Giao diện đã cập nhật',
      toastSave: '💾 Đã lưu — đang tải lại…', toastSurprise: '🎲 Ngôn ngữ:',
      toastPirateOn: '🏴‍☠️ Arrr! Chế độ cướp biển bật!', toastPirateOff: '🏴‍☠️ Chế độ cướp biển tắt',
      toastYodaOn: '🧙 Chế độ Yoda bật, hmm.', toastYodaOff: '🧙 Chế độ Yoda tắt.',
      toastAutoScrollOn: '✅ Tự động dịch khi cuộn đã bật', toastAutoScrollOff: '⭕ Tự động dịch khi cuộn đã tắt',
      shortcutHint: 'F2 = bảng điều khiển',
      secHotkeys: 'Phím tắt', hotkeyPanel: 'Mở bảng điều khiển',
      hotkeyPress: 'Nhấn một phím…', hotkeyReset: '↺ Đặt lại',
      secColors: 'Màu chủ đề', colorAcc: 'Nhấn mạnh', colorTxt: 'Văn bản', colorBg: 'Nền', colorOk: 'Thành công',
      btnResetColors: '↺ Đặt lại màu',
      secRequestLimits: 'Giới hạn yêu cầu',
      maxConcurrentRequests: 'Tối đa yêu cầu đồng thời',
      maxRequestsPerSecond: 'Tối đa yêu cầu / giây',
      maxTextLengthPerRequest: 'Tối đa ký tự / yêu cầu',
      maxParagraphsPerRequest: 'Tối đa đoạn / yêu cầu',
      btnShowOriginals: '📄 HIỂN THỊ BẢN GỐC',
      btnShowTranslations: '🌐 HIỂN THỊ BẢN DỊCH',
      toastShowingOriginals: '📄 Đang hiển thị văn bản gốc',
      toastShowingTranslations: '🌐 Đang hiển thị bản dịch',
      secSound: 'Hiệu ứng âm thanh', togSoundEnabled: 'Bật hiệu ứng âm thanh',
      secSoundVolume: 'Âm lượng', secSoundEvents: 'Sự kiện âm thanh',
      btnTestSound: '▶ Thử âm thanh',
      sndCatButtons: 'Nhấp nút', sndCatTranslation: 'Dịch', sndCatCopy: 'Sao chép',
      sndCatRetry: 'Thử lại', sndCatPanel: 'Bảng điều khiển', sndCatTabs: 'Thẻ',
      sndCatSettings: 'Cài đặt', sndCatToggles: 'Công tắc', sndCatCache: 'Bộ nhớ đệm',
      sndCatHistory: 'Lịch sử', sndCatImportExport: 'Nhập / Xuất', sndCatModes: 'Chế độ',
      sndCatAutomatic: 'Dịch tự động',
      toastImportError: '❌ Lỗi nhập',
      secUpdates: 'Cập nhật tự động', updModeAuto: 'Kiểm tra và mở bản cập nhật',
      updModeNotify: 'Thông báo khi có bản cập nhật', updModeOff: 'Tắt kiểm tra cập nhật',
      updCurrentVersion: 'Phiên bản hiện tại', btnCheckUpdates: 'Kiểm tra cập nhật',
      updAvailable: 'Có phiên bản mới', updLatest: 'Bạn đang dùng phiên bản mới nhất',
      updManagerNote: 'Bản cập nhật gốc của trình quản lý userscript được kiểm soát bởi Tampermonkey/Violentmonkey',
      toastUpdateCheckFailed: '❌ Không thể kiểm tra cập nhật',
    },
    ar: {
      title: 'Reddit مترجم', ver: 'v1.2.0',
      tabSettings: '⚙️ الإعدادات', tabHistory: '📖 السجل', tabExtras: '✨ إضافات',
      secUiLang: 'لغة الواجهة', applyUi: '✨ تطبيق الواجهة',
      secTargetLang: 'لغة الهدف', saveLang: '💾 حفظ اللغة',
      secEngine: 'المحرك', secTone: 'أسلوب الترجمة', secTheme: 'المظهر',
      engGoogle: 'Google', engMymemory: 'MyMemory', engDeepL: 'DeepL',
      secDeepLApi: 'مفاتيح DeepL API', saveDeepLApi: '🔑 حفظ مفاتيح DEEPL',
      btnTestDeepL: '🧪 اختبار DEEPL',
      btnToggleSecretsShow: '👁', btnToggleSecretsHide: '🙈',
      deeplApiPlaceholder: 'الصق مفتاحاً أو أكثر من مفاتيح DeepL API، مفصولة بفواصل',
      deeplApiHelp: 'يدعم مفاتيح Pro و Free. المفاتيح التي تنتهي بـ :fx تستخدم تلقائياً deepl.com/pro-api.',
      toastDeepLKeysSaved: '🔑 تم حفظ مفاتيح DeepL',
      toastDeepLKeysMissing: '⚠️ أضف مفتاح DeepL API واحداً على الأقل أولاً',
      toastDeepLUnsupported: '⚠️ DeepL لا يدعم لغة الهدف هذه:',
      toastDeepLTesting: '🧪 جارٍ اختبار DeepL API...', toastDeepLOk: '✅ DeepL API متاح', toastDeepLFail: '❌ DeepL API غير متاح',
      toneNeutral: 'محايد', toneFormal: 'رسمي', toneSlang: 'عامي',
      themeDark: 'داكن', themeLight: 'فاتح', themeCyber: 'سايبربانك', themeDracula: 'دراكولا',
      togBilingual: 'وضع ثنائي اللغة', togTts: 'تحويل النص إلى كلام',
      togAutoConvert: 'تحويل الوحدات تلقائياً', togAutoScroll: 'التمرير التلقائي',
      togIncognito: 'التصفح الخاص (بدون سجل)',
      togAutoTranslateOnScroll: 'ترجمة تلقائية عند التمرير',
      btnResetPos: '🏠 إعادة تعيين الموضع', btnClearCache: '🧹 مسح ذاكرة التخزين المؤقت',
      btnExport: '📤 تصدير', btnImport: '📥 استيراد',
      btnSurprise: '🎲 لغة عشوائية', btnPirate: '🏴‍☠️ وضع القراصنة',
      btnYoda: '🧙 وضع يودا', btnHide: '👁 إخفاء الأزرار', btnShow: '👁 إظهار الأزرار',
      sliderDelay: 'تأخير الطلب', unitMs: 'ms',
      statTranslations: 'الترجمات', statChars: 'الأحرف', statOnPage: 'في الصفحة',
      histEmpty: 'لا يوجد سجل', histClear: '🗑 مسح السجل',
      searchLang: 'البحث عن لغة…',
      btnOrig: '↩ الأصل', btnCopy: '📋 نسخ', btnSpeak: '🔊', btnRetry: '↺ إعادة المحاولة',
      copied: '✅ تم النسخ!', cacheCleared: '🧹 تم مسح ذاكرة التخزين المؤقت',
      toastApply: '✅ تم تحديث الواجهة',
      toastSave: '💾 تم الحفظ — جارٍ إعادة التحميل…', toastSurprise: '🎲 اللغة:',
      toastPirateOn: '🏴‍☠️ Arrr! وضع القراصنة مفعّل!', toastPirateOff: '🏴‍☠️ وضع القراصنة معطّل',
      toastYodaOn: '🧙 وضع يودا مفعّل، همم.', toastYodaOff: '🧙 وضع يودا معطّل.',
      toastAutoScrollOn: '✅ الترجمة التلقائية عند التمرير مفعّلة', toastAutoScrollOff: '⭕ الترجمة التلقائية عند التمرير معطّلة',
      shortcutHint: 'F2 = اللوحة',
      secHotkeys: 'الاختصارات', hotkeyPanel: 'فتح اللوحة',
      hotkeyPress: 'اضغط مفتاحاً…', hotkeyReset: '↺ إعادة تعيين',
      secColors: 'ألوان المظهر', colorAcc: 'لون مميز', colorTxt: 'نص', colorBg: 'خلفية', colorOk: 'نجاح',
      btnResetColors: '↺ إعادة تعيين الألوان',
      secRequestLimits: 'حدود الطلبات',
      maxConcurrentRequests: 'أقصى طلبات متزامنة',
      maxRequestsPerSecond: 'أقصى طلبات / ثانية',
      maxTextLengthPerRequest: 'أقصى أحرف / طلب',
      maxParagraphsPerRequest: 'أقصى فقرات / طلب',
      btnShowOriginals: '📄 إظهار الأصل',
      btnShowTranslations: '🌐 إظهار الترجمة',
      toastShowingOriginals: '📄 يتم عرض النص الأصلي',
      toastShowingTranslations: '🌐 يتم عرض الترجمة',
      secSound: 'المؤثرات الصوتية', togSoundEnabled: 'تفعيل المؤثرات الصوتية',
      secSoundVolume: 'مستوى الصوت', secSoundEvents: 'أحداث الصوت',
      btnTestSound: '▶ اختبار الصوت',
      sndCatButtons: 'نقرات الأزرار', sndCatTranslation: 'الترجمة', sndCatCopy: 'النسخ',
      sndCatRetry: 'إعادة المحاولة', sndCatPanel: 'اللوحة', sndCatTabs: 'علامات التبويب',
      sndCatSettings: 'الإعدادات', sndCatToggles: 'المفاتيح', sndCatCache: 'ذاكرة التخزين المؤقت',
      sndCatHistory: 'السجل', sndCatImportExport: 'استيراد / تصدير', sndCatModes: 'الأوضاع',
      sndCatAutomatic: 'الترجمة التلقائية',
      toastImportError: '❌ خطأ في الاستيراد',
      secUpdates: 'التحديثات التلقائية', updModeAuto: 'التحقق من التحديث وفتحه',
      updModeNotify: 'إشعاري بالتحديثات', updModeOff: 'تعطيل التحقق من التحديثات',
      updCurrentVersion: 'الإصدار الحالي', btnCheckUpdates: 'التحقق من التحديثات',
      updAvailable: 'يتوفر إصدار جديد', updLatest: 'أنت تستخدم أحدث إصدار',
      updManagerNote: 'يتم التحكم في التحديثات الأصلية لمدير السكربتات بواسطة Tampermonkey/Violentmonkey',
      toastUpdateCheckFailed: '❌ تعذر التحقق من التحديثات',
    },
  };

  const S = (key) => (STRINGS[cfg.uiLang] || STRINGS.en)[key] ?? (STRINGS.en[key] ?? key);

  // ═══════════════════════════════════════════════════════════════════════════
  // § LANGUAGES
  // ═══════════════════════════════════════════════════════════════════════════
  const ALL_LANGS = [
    'af', 'sq', 'am', 'ar', 'hy', 'az', 'eu', 'be', 'bn', 'bs', 'bg', 'ca', 'ceb', 'co', 'hr', 'cs',
    'da', 'nl', 'en', 'eo', 'et', 'tl', 'fi', 'fr', 'fy', 'gl', 'ka', 'de', 'el', 'gu', 'ht', 'ha',
    'haw', 'he', 'hi', 'hmn', 'hu', 'is', 'ig', 'id', 'ga', 'it', 'ja', 'jw', 'kn', 'kk', 'km', 'ko',
    'ku', 'ky', 'lo', 'la', 'lv', 'lt', 'lb', 'mk', 'mg', 'ms', 'ml', 'mt', 'mi', 'mr', 'mn', 'my',
    'ne', 'no', 'ps', 'fa', 'pl', 'pt', 'pa', 'ro', 'ru', 'sm', 'gd', 'sr', 'st', 'sn', 'sd', 'si',
    'sk', 'sl', 'so', 'es', 'su', 'sw', 'sv', 'tg', 'ta', 'te', 'th', 'tr', 'uk', 'ur', 'uz', 'vi',
    'cy', 'xh', 'yi', 'yo', 'zu', 'zh',
  ];

  function langName(code, locale) {
    try {
      const d = new Intl.DisplayNames([locale || cfg.uiLang], { type: 'language' });
      const n = d.of(code);
      return n.charAt(0).toUpperCase() + n.slice(1);
    } catch { return code.toUpperCase(); }
  }

  // ── Flag icons (fully self-contained — no network, no external CDN) ────
  // Unicode emoji flags render inconsistently across browsers/OSes, and an
  // earlier version of this feature used flagcdn.com image URLs — which
  // depends on network access, DNS, ad blockers, and the host page's CSP.
  // To guarantee a consistent, fully offline result, every flag is instead
  // a small embedded SVG string baked directly into the script. Nothing is
  // ever fetched over the network to display a flag.
  //
  // Centralized mapping: language code -> representative country/flag key.
  // Macro-languages without a single "home country" use the most common
  // convention (e.g. ar -> Saudi Arabia, zh -> China, en -> United States).
  // 'eo' (Esperanto, a constructed language with no country) uses its own
  // real flag (green field, white canton, green star) instead of a country.
  const FLAG_COUNTRY_BY_LANG = {
    af: 'za', sq: 'al', am: 'et', ar: 'sa', hy: 'am', az: 'az', eu: 'es', be: 'by',
    bn: 'bd', bs: 'ba', bg: 'bg', ca: 'es', ceb: 'ph', co: 'fr', hr: 'hr', cs: 'cz',
    da: 'dk', nl: 'nl', en: 'us', eo: 'eo', et: 'ee', tl: 'ph', fi: 'fi', fr: 'fr',
    fy: 'nl', gl: 'es', ka: 'ge', de: 'de', el: 'gr', gu: 'in', ht: 'ht', ha: 'ng',
    haw: 'us', he: 'il', hi: 'in', hmn: 'la', hu: 'hu', is: 'is', ig: 'ng', id: 'id',
    ga: 'ie', it: 'it', ja: 'jp', jw: 'id', kn: 'in', kk: 'kz', km: 'kh', ko: 'kr',
    ku: 'iq', ky: 'kg', lo: 'la', la: 'va', lv: 'lv', lt: 'lt', lb: 'lu', mk: 'mk',
    mg: 'mg', ms: 'my', ml: 'in', mt: 'mt', mi: 'nz', mr: 'in', mn: 'mn', my: 'mm',
    ne: 'np', no: 'no', ps: 'af', fa: 'ir', pl: 'pl', pt: 'pt', pa: 'in', ro: 'ro',
    ru: 'ru', sm: 'ws', gd: 'gb-sct', sr: 'rs', st: 'ls', sn: 'zw', sd: 'pk', si: 'lk',
    sk: 'sk', sl: 'si', so: 'so', es: 'es', su: 'id', sw: 'tz', sv: 'se', tg: 'tj',
    ta: 'in', te: 'in', th: 'th', tr: 'tr', uk: 'ua', ur: 'pk', uz: 'uz', vi: 'vn',
    cy: 'gb-wls', xh: 'za', yi: 'il', yo: 'ng', zu: 'za', zh: 'cn',
  };

  // Embedded flag artwork, keyed by country/flag code (not by language —
  // many languages share one flag, so this is the single source of truth;
  // dozens of language codes above simply point at the same entry here).
  // Every value is a self-contained <svg viewBox="0 0 3 2">...</svg> string
  // built from plain shapes (rects/polygons/circles) — no bitmaps, no
  // external references, nothing that requires a network round-trip.
  const FLAG_SVG = {
    'af': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"1\" height=\"2\" fill=\"#000000\"/><rect x=\"1\" width=\"1\" height=\"2\" fill=\"#D32011\"/><rect x=\"2\" width=\"1\" height=\"2\" fill=\"#007A36\"/></svg>",
    'al': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"2\" fill=\"#E41E20\"/><circle cx=\"1.5\" cy=\"1\" r=\"0.45\" fill=\"none\" stroke=\"#000000\" stroke-width=\"0.06\"/></svg>",
    'am': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"0.6667\" fill=\"#D90012\"/><rect y=\"0.6667\" width=\"3\" height=\"0.6667\" fill=\"#0033A0\"/><rect y=\"1.3333\" width=\"3\" height=\"0.6667\" fill=\"#F2A800\"/></svg>",
    'az': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"0.6667\" fill=\"#00B9E4\"/><rect y=\"0.6667\" width=\"3\" height=\"0.6667\" fill=\"#E4002B\"/><rect y=\"1.3333\" width=\"3\" height=\"0.6667\" fill=\"#00AF66\"/></svg>",
    'ba': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"2\" fill=\"#002395\"/><polygon points=\"0,0 1.7,0 3,2 1.3,2\" fill=\"#FECB00\"/><polygon points=\"0.5500,0.2600 0.5712,0.3209 0.6356,0.3222 0.5842,0.3611 0.6029,0.4228 0.5500,0.3860 0.4971,0.4228 0.5158,0.3611 0.4644,0.3222 0.5288,0.3209\" fill=\"#FFFFFF\"/><polygon points=\"0.9700,0.6800 0.9912,0.7409 1.0556,0.7422 1.0042,0.7811 1.0229,0.8428 0.9700,0.8060 0.9171,0.8428 0.9358,0.7811 0.8844,0.7422 0.9488,0.7409\" fill=\"#FFFFFF\"/><polygon points=\"1.3900,1.1000 1.4112,1.1609 1.4756,1.1622 1.4242,1.2011 1.4429,1.2628 1.3900,1.2260 1.3371,1.2628 1.3558,1.2011 1.3044,1.1622 1.3688,1.1609\" fill=\"#FFFFFF\"/><polygon points=\"1.8100,1.5200 1.8312,1.5809 1.8956,1.5822 1.8442,1.6211 1.8629,1.6828 1.8100,1.6460 1.7571,1.6828 1.7758,1.6211 1.7244,1.5822 1.7888,1.5809\" fill=\"#FFFFFF\"/></svg>",
    'bd': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"2\" fill=\"#006A4E\"/><circle cx=\"1.35\" cy=\"1\" r=\"0.5\" fill=\"#F42A41\"/></svg>",
    'bg': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"0.6667\" fill=\"#FFFFFF\"/><rect y=\"0.6667\" width=\"3\" height=\"0.6667\" fill=\"#00966E\"/><rect y=\"1.3333\" width=\"3\" height=\"0.6667\" fill=\"#D62612\"/></svg>",
    'by': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect y=\"0.0000\" width=\"3\" height=\"1.5000\" fill=\"#D22730\"/><rect y=\"1.5000\" width=\"3\" height=\"0.5000\" fill=\"#00AF66\"/></svg>",
    'cn': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"2\" fill=\"#DE2910\"/><polygon points=\"0.6000,0.2500 0.6705,0.4529 0.8853,0.4573 0.7141,0.5871 0.7763,0.7927 0.6000,0.6700 0.4237,0.7927 0.4859,0.5871 0.3147,0.4573 0.5295,0.4529\" fill=\"#FFDE00\"/><polygon points=\"1.0200,0.0900 1.0412,0.1509 1.1056,0.1522 1.0542,0.1911 1.0729,0.2528 1.0200,0.2160 0.9671,0.2528 0.9858,0.1911 0.9344,0.1522 0.9988,0.1509\" fill=\"#FFDE00\"/><polygon points=\"1.1000,0.2100 1.1212,0.2709 1.1856,0.2722 1.1342,0.3111 1.1529,0.3728 1.1000,0.3360 1.0471,0.3728 1.0658,0.3111 1.0144,0.2722 1.0788,0.2709\" fill=\"#FFDE00\"/><polygon points=\"1.1000,0.5100 1.1212,0.5709 1.1856,0.5722 1.1342,0.6111 1.1529,0.6728 1.1000,0.6360 1.0471,0.6728 1.0658,0.6111 1.0144,0.5722 1.0788,0.5709\" fill=\"#FFDE00\"/><polygon points=\"1.0200,0.6300 1.0412,0.6909 1.1056,0.6922 1.0542,0.7311 1.0729,0.7928 1.0200,0.7560 0.9671,0.7928 0.9858,0.7311 0.9344,0.6922 0.9988,0.6909\" fill=\"#FFDE00\"/></svg>",
    'cz': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"1\" fill=\"#FFFFFF\"/><rect y=\"1\" width=\"3\" height=\"1\" fill=\"#D7141A\"/><polygon points=\"0,0 1.3,1 0,2\" fill=\"#11457E\"/></svg>",
    'de': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"0.6667\" fill=\"#000000\"/><rect y=\"0.6667\" width=\"3\" height=\"0.6667\" fill=\"#DD0000\"/><rect y=\"1.3333\" width=\"3\" height=\"0.6667\" fill=\"#FFCE00\"/></svg>",
    'dk': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"2\" fill=\"#C8102E\"/><rect x=\"1.0\" width=\"0.35\" height=\"2\" fill=\"#FFFFFF\"/><rect y=\"0.78\" width=\"3\" height=\"0.44\" fill=\"#FFFFFF\"/></svg>",
    'ee': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"0.6667\" fill=\"#0072CE\"/><rect y=\"0.6667\" width=\"3\" height=\"0.6667\" fill=\"#000000\"/><rect y=\"1.3333\" width=\"3\" height=\"0.6667\" fill=\"#FFFFFF\"/></svg>",
    'eo': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"2\" fill=\"#008000\"/><rect width=\"1.2\" height=\"0.9\" fill=\"#FFFFFF\"/><polygon points=\"0.6000,0.1300 0.6752,0.3464 0.9043,0.3511 0.7217,0.4896 0.7881,0.7089 0.6000,0.5780 0.4119,0.7089 0.4783,0.4896 0.2957,0.3511 0.5248,0.3464\" fill=\"#008000\"/></svg>",
    'es': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect y=\"0.0000\" width=\"3\" height=\"0.5000\" fill=\"#AA151B\"/><rect y=\"0.5000\" width=\"3\" height=\"1.0000\" fill=\"#F1BF00\"/><rect y=\"1.5000\" width=\"3\" height=\"0.5000\" fill=\"#AA151B\"/></svg>",
    'et': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"0.6667\" fill=\"#078930\"/><rect y=\"0.6667\" width=\"3\" height=\"0.6667\" fill=\"#FCDD09\"/><rect y=\"1.3333\" width=\"3\" height=\"0.6667\" fill=\"#DA121A\"/><circle cx=\"1.5\" cy=\"1\" r=\"0.32\" fill=\"#0F47AF\"/><polygon points=\"1.5000,0.8400 1.5376,0.9482 1.6522,0.9506 1.5609,1.0198 1.5940,1.1294 1.5000,1.0640 1.4060,1.1294 1.4391,1.0198 1.3478,0.9506 1.4624,0.9482\" fill=\"#FCDD09\"/></svg>",
    'fi': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"2\" fill=\"#FFFFFF\"/><rect x=\"1.0\" width=\"0.35\" height=\"2\" fill=\"#003580\"/><rect y=\"0.78\" width=\"3\" height=\"0.44\" fill=\"#003580\"/></svg>",
    'fr': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"1\" height=\"2\" fill=\"#0055A4\"/><rect x=\"1\" width=\"1\" height=\"2\" fill=\"#FFFFFF\"/><rect x=\"2\" width=\"1\" height=\"2\" fill=\"#EF4135\"/></svg>",
    'gb-sct': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"2\" fill=\"#0065BD\"/><polygon points=\"0,0 3,2 3,1.62 0.62,0 0,0\" fill=\"#FFFFFF\"/><polygon points=\"0,2 3,0 3,0.38 0.62,2 0,2\" fill=\"#FFFFFF\"/><polygon points=\"0,0 2.62,2 2.24,2 0,0.24\" fill=\"#0065BD\" opacity=\"0\"/></svg>",
    'gb-wls': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"1\" fill=\"#FFFFFF\"/><rect y=\"1\" width=\"3\" height=\"1\" fill=\"#00A651\"/><polygon points=\"0,1 1.1,0.62 1.1,1.38\" fill=\"#C8102E\"/></svg>",
    'ge': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"2\" fill=\"#FFFFFF\"/><rect x=\"1.33\" width=\"0.34\" height=\"2\" fill=\"#FF0000\"/><rect y=\"0.79\" width=\"3\" height=\"0.42\" fill=\"#FF0000\"/></svg>",
    'gr': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect y=\"0.0000\" width=\"3\" height=\"0.2222\" fill=\"#0D5EAF\"/><rect y=\"0.2222\" width=\"3\" height=\"0.2222\" fill=\"#FFFFFF\"/><rect y=\"0.4444\" width=\"3\" height=\"0.2222\" fill=\"#0D5EAF\"/><rect y=\"0.6667\" width=\"3\" height=\"0.2222\" fill=\"#FFFFFF\"/><rect y=\"0.8889\" width=\"3\" height=\"0.2222\" fill=\"#0D5EAF\"/><rect y=\"1.1111\" width=\"3\" height=\"0.2222\" fill=\"#FFFFFF\"/><rect y=\"1.3333\" width=\"3\" height=\"0.2222\" fill=\"#0D5EAF\"/><rect y=\"1.5556\" width=\"3\" height=\"0.2222\" fill=\"#FFFFFF\"/><rect y=\"1.7778\" width=\"3\" height=\"0.2222\" fill=\"#0D5EAF\"/></svg>",
    'hr': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"0.6667\" fill=\"#FF0000\"/><rect y=\"0.6667\" width=\"3\" height=\"0.6667\" fill=\"#FFFFFF\"/><rect y=\"1.3333\" width=\"3\" height=\"0.6667\" fill=\"#171796\"/></svg>",
    'ht': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"1\" fill=\"#00209F\"/><rect y=\"1\" width=\"3\" height=\"1\" fill=\"#D21034\"/></svg>",
    'hu': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"0.6667\" fill=\"#CE2939\"/><rect y=\"0.6667\" width=\"3\" height=\"0.6667\" fill=\"#FFFFFF\"/><rect y=\"1.3333\" width=\"3\" height=\"0.6667\" fill=\"#477050\"/></svg>",
    'id': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"1\" fill=\"#CE1126\"/><rect y=\"1\" width=\"3\" height=\"1\" fill=\"#FFFFFF\"/></svg>",
    'ie': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"1\" height=\"2\" fill=\"#169B62\"/><rect x=\"1\" width=\"1\" height=\"2\" fill=\"#FFFFFF\"/><rect x=\"2\" width=\"1\" height=\"2\" fill=\"#FF883E\"/></svg>",
    'il': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"2\" fill=\"#FFFFFF\"/><rect y=\"0.22\" width=\"3\" height=\"0.22\" fill=\"#0038B8\"/><rect y=\"1.56\" width=\"3\" height=\"0.22\" fill=\"#0038B8\"/><polygon points=\"1.5,0.62 1.75,1.32 1.03,0.9 1.97,0.9 1.25,1.32\" fill=\"none\" stroke=\"#0038B8\" stroke-width=\"0.06\"/></svg>",
    'in': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"0.6667\" fill=\"#FF9933\"/><rect y=\"0.6667\" width=\"3\" height=\"0.6667\" fill=\"#FFFFFF\"/><rect y=\"1.3333\" width=\"3\" height=\"0.6667\" fill=\"#138808\"/><circle cx=\"1.5\" cy=\"1\" r=\"0.22\" fill=\"none\" stroke=\"#000080\" stroke-width=\"0.045\"/></svg>",
    'iq': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"0.6667\" fill=\"#CE1126\"/><rect y=\"0.6667\" width=\"3\" height=\"0.6667\" fill=\"#FFFFFF\"/><rect y=\"1.3333\" width=\"3\" height=\"0.6667\" fill=\"#000000\"/></svg>",
    'ir': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"0.6667\" fill=\"#239F40\"/><rect y=\"0.6667\" width=\"3\" height=\"0.6667\" fill=\"#FFFFFF\"/><rect y=\"1.3333\" width=\"3\" height=\"0.6667\" fill=\"#DA0000\"/></svg>",
    'is': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"2\" fill=\"#02529C\"/><rect x=\"0.85\" width=\"0.5\" height=\"2\" fill=\"#FFFFFF\"/><rect y=\"0.72\" width=\"3\" height=\"0.56\" fill=\"#FFFFFF\"/><rect x=\"1.0\" width=\"0.2\" height=\"2\" fill=\"#DC1E35\"/><rect y=\"0.86\" width=\"3\" height=\"0.28\" fill=\"#DC1E35\"/></svg>",
    'it': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"1\" height=\"2\" fill=\"#009246\"/><rect x=\"1\" width=\"1\" height=\"2\" fill=\"#FFFFFF\"/><rect x=\"2\" width=\"1\" height=\"2\" fill=\"#CE2B37\"/></svg>",
    'jp': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"2\" fill=\"#FFFFFF\"/><circle cx=\"1.5\" cy=\"1\" r=\"0.5\" fill=\"#BC002D\"/></svg>",
    'kg': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"2\" fill=\"#E8112D\"/><circle cx=\"1.5\" cy=\"1\" r=\"0.42\" fill=\"#FFEF00\"/></svg>",
    'kh': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect y=\"0.0000\" width=\"3\" height=\"0.5000\" fill=\"#032EA1\"/><rect y=\"0.5000\" width=\"3\" height=\"1.0000\" fill=\"#E00025\"/><rect y=\"1.5000\" width=\"3\" height=\"0.5000\" fill=\"#032EA1\"/></svg>",
    'kr': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"2\" fill=\"#FFFFFF\"/><circle cx=\"1.5\" cy=\"1\" r=\"0.42\" fill=\"#C60C30\"/><path d=\"M1.5,0.58 A0.21,0.21 0 0 1 1.5,1 A0.21,0.21 0 0 0 1.5,1.42 A0.42,0.42 0 0 1 1.5,0.58 Z\" fill=\"#003478\"/></svg>",
    'kz': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"2\" fill=\"#00AFCA\"/><circle cx=\"1.5\" cy=\"1\" r=\"0.35\" fill=\"#FEC50C\"/></svg>",
    'la': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect y=\"0.0000\" width=\"3\" height=\"0.5000\" fill=\"#CE1126\"/><rect y=\"0.5000\" width=\"3\" height=\"1.0000\" fill=\"#002868\"/><rect y=\"1.5000\" width=\"3\" height=\"0.5000\" fill=\"#CE1126\"/><circle cx=\"1.5\" cy=\"1\" r=\"0.42\" fill=\"#FFFFFF\"/></svg>",
    'lk': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"0.65\" height=\"2\" fill=\"#FFBE29\"/><rect x=\"0.65\" width=\"0.35\" height=\"2\" fill=\"#00534E\"/><rect x=\"1.0\" width=\"0.35\" height=\"2\" fill=\"#EB7400\"/><rect x=\"1.35\" width=\"1.65\" height=\"2\" fill=\"#7A0019\"/></svg>",
    'ls': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect y=\"0.0000\" width=\"3\" height=\"0.7500\" fill=\"#00209F\"/><rect y=\"0.7500\" width=\"3\" height=\"0.5000\" fill=\"#FFFFFF\"/><rect y=\"1.2500\" width=\"3\" height=\"0.7500\" fill=\"#00A651\"/></svg>",
    'lt': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"0.6667\" fill=\"#FDB913\"/><rect y=\"0.6667\" width=\"3\" height=\"0.6667\" fill=\"#006A44\"/><rect y=\"1.3333\" width=\"3\" height=\"0.6667\" fill=\"#C1272D\"/></svg>",
    'lu': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"0.6667\" fill=\"#EF3340\"/><rect y=\"0.6667\" width=\"3\" height=\"0.6667\" fill=\"#FFFFFF\"/><rect y=\"1.3333\" width=\"3\" height=\"0.6667\" fill=\"#00A1DE\"/></svg>",
    'lv': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect y=\"0.0000\" width=\"3\" height=\"0.8000\" fill=\"#9E3039\"/><rect y=\"0.8000\" width=\"3\" height=\"0.4000\" fill=\"#FFFFFF\"/><rect y=\"1.2000\" width=\"3\" height=\"0.8000\" fill=\"#9E3039\"/></svg>",
    'mg': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"1\" height=\"2\" fill=\"#FFFFFF\"/><rect x=\"1\" width=\"2\" height=\"1\" fill=\"#FC3D32\"/><rect x=\"1\" y=\"1\" width=\"2\" height=\"1\" fill=\"#007E3A\"/></svg>",
    'mk': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"2\" fill=\"#D20000\"/><circle cx=\"1.5\" cy=\"1\" r=\"0.32\" fill=\"#FFE600\"/></svg>",
    'mm': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"0.6667\" fill=\"#FECB00\"/><rect y=\"0.6667\" width=\"3\" height=\"0.6667\" fill=\"#34B233\"/><rect y=\"1.3333\" width=\"3\" height=\"0.6667\" fill=\"#EA2839\"/></svg>",
    'mn': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"1\" height=\"2\" fill=\"#DA2032\"/><rect x=\"1\" width=\"1\" height=\"2\" fill=\"#015197\"/><rect x=\"2\" width=\"1\" height=\"2\" fill=\"#DA2032\"/></svg>",
    'mt': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"1.5\" height=\"2\" fill=\"#FFFFFF\"/><rect x=\"1.5\" width=\"1.5\" height=\"2\" fill=\"#CF142B\"/></svg>",
    'my': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect y=\"0.0000\" width=\"3\" height=\"0.3333\" fill=\"#CC0001\"/><rect y=\"0.3333\" width=\"3\" height=\"0.3333\" fill=\"#FFFFFF\"/><rect y=\"0.6667\" width=\"3\" height=\"0.3333\" fill=\"#CC0001\"/><rect y=\"1.0000\" width=\"3\" height=\"0.3333\" fill=\"#FFFFFF\"/><rect y=\"1.3333\" width=\"3\" height=\"0.3333\" fill=\"#CC0001\"/><rect y=\"1.6667\" width=\"3\" height=\"0.3333\" fill=\"#FFFFFF\"/><rect width=\"1.2\" height=\"1.0\" fill=\"#010066\"/><polygon points=\"0.6000,0.3000 0.6470,0.4353 0.7902,0.4382 0.6761,0.5247 0.7176,0.6618 0.6000,0.5800 0.4824,0.6618 0.5239,0.5247 0.4098,0.4382 0.5530,0.4353\" fill=\"#FFCC00\"/></svg>",
    'ng': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"1\" height=\"2\" fill=\"#008751\"/><rect x=\"1\" width=\"1\" height=\"2\" fill=\"#FFFFFF\"/><rect x=\"2\" width=\"1\" height=\"2\" fill=\"#008751\"/></svg>",
    'nl': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"0.6667\" fill=\"#AE1C28\"/><rect y=\"0.6667\" width=\"3\" height=\"0.6667\" fill=\"#FFFFFF\"/><rect y=\"1.3333\" width=\"3\" height=\"0.6667\" fill=\"#21468B\"/></svg>",
    'no': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"2\" fill=\"#EF2B2D\"/><rect x=\"0.85\" width=\"0.5\" height=\"2\" fill=\"#FFFFFF\"/><rect y=\"0.72\" width=\"3\" height=\"0.56\" fill=\"#FFFFFF\"/><rect x=\"1.0\" width=\"0.2\" height=\"2\" fill=\"#002868\"/><rect y=\"0.86\" width=\"3\" height=\"0.28\" fill=\"#002868\"/></svg>",
    'np': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"2\" fill=\"#DC143C\" opacity=\"0\"/><polygon points=\"0,0.1 2.2,1 0,1.9\" fill=\"#DC143C\" stroke=\"#003893\" stroke-width=\"0.05\"/><circle cx=\"0.95\" cy=\"0.7\" r=\"0.14\" fill=\"#FFFFFF\"/></svg>",
    'nz': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"2\" fill=\"#00247D\"/><rect width=\"1.3\" height=\"1.0\" fill=\"#00247D\"/><polygon points=\"0,0 1.3,0 1.3,0.15 0.15,1 0,1\" fill=\"#FFFFFF\"/><polygon points=\"0,1 0.15,1 1.3,0.15 1.3,0\" fill=\"#CC142B\" opacity=\"0\"/><polygon points=\"1.9000,0.3000 1.9235,0.3676 1.9951,0.3691 1.9380,0.4124 1.9588,0.4809 1.9000,0.4400 1.8412,0.4809 1.8620,0.4124 1.8049,0.3691 1.8765,0.3676\" fill=\"#CC142B\"/><polygon points=\"2.2500,0.6000 2.2735,0.6676 2.3451,0.6691 2.2880,0.7124 2.3088,0.7809 2.2500,0.7400 2.1912,0.7809 2.2120,0.7124 2.1549,0.6691 2.2265,0.6676\" fill=\"#CC142B\"/><polygon points=\"1.8000,0.9500 1.8235,1.0176 1.8951,1.0191 1.8380,1.0624 1.8588,1.1309 1.8000,1.0900 1.7412,1.1309 1.7620,1.0624 1.7049,1.0191 1.7765,1.0176\" fill=\"#CC142B\"/><polygon points=\"2.1000,1.3000 2.1235,1.3676 2.1951,1.3691 2.1380,1.4124 2.1588,1.4809 2.1000,1.4400 2.0412,1.4809 2.0620,1.4124 2.0049,1.3691 2.0765,1.3676\" fill=\"#CC142B\"/></svg>",
    'ph': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"1\" fill=\"#0038A8\"/><rect y=\"1\" width=\"3\" height=\"1\" fill=\"#CE1126\"/><polygon points=\"0,0 1.15,1 0,2\" fill=\"#FFFFFF\"/><polygon points=\"0.4200,0.8400 0.4576,0.9482 0.5722,0.9506 0.4809,1.0198 0.5140,1.1294 0.4200,1.0640 0.3260,1.1294 0.3591,1.0198 0.2678,0.9506 0.3824,0.9482\" fill=\"#FCD116\"/></svg>",
    'pk': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"0.75\" height=\"2\" fill=\"#FFFFFF\"/><rect x=\"0.75\" width=\"2.25\" height=\"2\" fill=\"#01411C\"/><circle cx=\"2.05\" cy=\"1\" r=\"0.5\" fill=\"#FFFFFF\"/><circle cx=\"2.2\" cy=\"1\" r=\"0.4\" fill=\"#01411C\"/><polygon points=\"2.5500,0.4600 2.5876,0.5682 2.7022,0.5706 2.6109,0.6398 2.6440,0.7494 2.5500,0.6840 2.4560,0.7494 2.4891,0.6398 2.3978,0.5706 2.5124,0.5682\" fill=\"#FFFFFF\"/></svg>",
    'pl': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"1\" fill=\"#FFFFFF\"/><rect y=\"1\" width=\"3\" height=\"1\" fill=\"#DC143C\"/></svg>",
    'pt': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"1.5\" height=\"2\" fill=\"#046A38\"/><rect x=\"1.5\" width=\"1.5\" height=\"2\" fill=\"#DA291C\"/></svg>",
    'ro': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"1\" height=\"2\" fill=\"#002B7F\"/><rect x=\"1\" width=\"1\" height=\"2\" fill=\"#FCD116\"/><rect x=\"2\" width=\"1\" height=\"2\" fill=\"#CE1126\"/></svg>",
    'rs': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"0.6667\" fill=\"#C6363C\"/><rect y=\"0.6667\" width=\"3\" height=\"0.6667\" fill=\"#0C4076\"/><rect y=\"1.3333\" width=\"3\" height=\"0.6667\" fill=\"#FFFFFF\"/></svg>",
    'ru': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"0.6667\" fill=\"#FFFFFF\"/><rect y=\"0.6667\" width=\"3\" height=\"0.6667\" fill=\"#0039A6\"/><rect y=\"1.3333\" width=\"3\" height=\"0.6667\" fill=\"#D52B1E\"/></svg>",
    'sa': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"2\" fill=\"#006C35\"/></svg>",
    'se': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"2\" fill=\"#005293\"/><rect x=\"1.0\" width=\"0.35\" height=\"2\" fill=\"#FECC02\"/><rect y=\"0.78\" width=\"3\" height=\"0.44\" fill=\"#FECC02\"/></svg>",
    'si': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"0.6667\" fill=\"#FFFFFF\"/><rect y=\"0.6667\" width=\"3\" height=\"0.6667\" fill=\"#005CE6\"/><rect y=\"1.3333\" width=\"3\" height=\"0.6667\" fill=\"#ED1C24\"/></svg>",
    'sk': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"0.6667\" fill=\"#FFFFFF\"/><rect y=\"0.6667\" width=\"3\" height=\"0.6667\" fill=\"#0B4EA2\"/><rect y=\"1.3333\" width=\"3\" height=\"0.6667\" fill=\"#EE1C25\"/></svg>",
    'so': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"2\" fill=\"#4189DD\"/><polygon points=\"1.5000,0.5800 1.5987,0.8641 1.8994,0.8702 1.6598,1.0519 1.7469,1.3398 1.5000,1.1680 1.2531,1.3398 1.3402,1.0519 1.1006,0.8702 1.4013,0.8641\" fill=\"#FFFFFF\"/></svg>",
    'th': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect y=\"0.0000\" width=\"3\" height=\"0.3333\" fill=\"#A51931\"/><rect y=\"0.3333\" width=\"3\" height=\"0.3333\" fill=\"#F4F5F8\"/><rect y=\"0.6667\" width=\"3\" height=\"0.6667\" fill=\"#2D2A4A\"/><rect y=\"1.3333\" width=\"3\" height=\"0.3333\" fill=\"#F4F5F8\"/><rect y=\"1.6667\" width=\"3\" height=\"0.3333\" fill=\"#A51931\"/></svg>",
    'tj': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect y=\"0.0000\" width=\"3\" height=\"0.5000\" fill=\"#CC0000\"/><rect y=\"0.5000\" width=\"3\" height=\"1.0000\" fill=\"#FFFFFF\"/><rect y=\"1.5000\" width=\"3\" height=\"0.5000\" fill=\"#006600\"/></svg>",
    'tr': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"2\" fill=\"#E30A17\"/><circle cx=\"1.15\" cy=\"1\" r=\"0.55\" fill=\"#FFFFFF\"/><circle cx=\"1.3099999999999998\" cy=\"1\" r=\"0.440\" fill=\"#E30A17\"/><polygon points=\"1.7700,0.7600 1.8288,0.9191 1.9983,0.9258 1.8651,1.0309 1.9111,1.1942 1.7700,1.1000 1.6289,1.1942 1.6749,1.0309 1.5417,0.9258 1.7112,0.9191\" fill=\"#FFFFFF\"/></svg>",
    'tz': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"0,0 3,2 3,0\" fill=\"#1EB53A\"/><polygon points=\"0,0 0,2 3,2\" fill=\"#00A3DD\"/><polygon points=\"0,1.72 0,2 2.9,0.28 2.55,0\" fill=\"#FCD116\"/><polygon points=\"0,1.86 0,2 3,0.14 2.86,0\" fill=\"#000000\"/></svg>",
    'ua': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"1\" fill=\"#005BBB\"/><rect y=\"1\" width=\"3\" height=\"1\" fill=\"#FFD500\"/></svg>",
    'un': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"2\" fill=\"#5B92E5\"/><circle cx=\"1.5\" cy=\"1\" r=\"0.5\" fill=\"#FFFFFF\"/></svg>",
    'us': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect y=\"0.0000\" width=\"3\" height=\"0.2857\" fill=\"#B22234\"/><rect y=\"0.2857\" width=\"3\" height=\"0.2857\" fill=\"#FFFFFF\"/><rect y=\"0.5714\" width=\"3\" height=\"0.2857\" fill=\"#B22234\"/><rect y=\"0.8571\" width=\"3\" height=\"0.2857\" fill=\"#FFFFFF\"/><rect y=\"1.1429\" width=\"3\" height=\"0.2857\" fill=\"#B22234\"/><rect y=\"1.4286\" width=\"3\" height=\"0.2857\" fill=\"#FFFFFF\"/><rect y=\"1.7143\" width=\"3\" height=\"0.2857\" fill=\"#B22234\"/><rect width=\"1.2\" height=\"1.1428571428571428\" fill=\"#3C3B6E\"/><polygon points=\"0.2000,0.1050 0.2129,0.1422 0.2523,0.1430 0.2209,0.1668 0.2323,0.2045 0.2000,0.1820 0.1677,0.2045 0.1791,0.1668 0.1477,0.1430 0.1871,0.1422\" fill=\"#FFFFFF\"/><polygon points=\"0.4800,0.1050 0.4929,0.1422 0.5323,0.1430 0.5009,0.1668 0.5123,0.2045 0.4800,0.1820 0.4477,0.2045 0.4591,0.1668 0.4277,0.1430 0.4671,0.1422\" fill=\"#FFFFFF\"/><polygon points=\"0.7600,0.1050 0.7729,0.1422 0.8123,0.1430 0.7809,0.1668 0.7923,0.2045 0.7600,0.1820 0.7277,0.2045 0.7391,0.1668 0.7077,0.1430 0.7471,0.1422\" fill=\"#FFFFFF\"/><polygon points=\"1.0400,0.1050 1.0529,0.1422 1.0923,0.1430 1.0609,0.1668 1.0723,0.2045 1.0400,0.1820 1.0077,0.2045 1.0191,0.1668 0.9877,0.1430 1.0271,0.1422\" fill=\"#FFFFFF\"/><polygon points=\"0.2000,0.3850 0.2129,0.4222 0.2523,0.4230 0.2209,0.4468 0.2323,0.4845 0.2000,0.4620 0.1677,0.4845 0.1791,0.4468 0.1477,0.4230 0.1871,0.4222\" fill=\"#FFFFFF\"/><polygon points=\"0.4800,0.3850 0.4929,0.4222 0.5323,0.4230 0.5009,0.4468 0.5123,0.4845 0.4800,0.4620 0.4477,0.4845 0.4591,0.4468 0.4277,0.4230 0.4671,0.4222\" fill=\"#FFFFFF\"/><polygon points=\"0.7600,0.3850 0.7729,0.4222 0.8123,0.4230 0.7809,0.4468 0.7923,0.4845 0.7600,0.4620 0.7277,0.4845 0.7391,0.4468 0.7077,0.4230 0.7471,0.4222\" fill=\"#FFFFFF\"/><polygon points=\"1.0400,0.3850 1.0529,0.4222 1.0923,0.4230 1.0609,0.4468 1.0723,0.4845 1.0400,0.4620 1.0077,0.4845 1.0191,0.4468 0.9877,0.4230 1.0271,0.4222\" fill=\"#FFFFFF\"/><polygon points=\"0.2000,0.6650 0.2129,0.7022 0.2523,0.7030 0.2209,0.7268 0.2323,0.7645 0.2000,0.7420 0.1677,0.7645 0.1791,0.7268 0.1477,0.7030 0.1871,0.7022\" fill=\"#FFFFFF\"/><polygon points=\"0.4800,0.6650 0.4929,0.7022 0.5323,0.7030 0.5009,0.7268 0.5123,0.7645 0.4800,0.7420 0.4477,0.7645 0.4591,0.7268 0.4277,0.7030 0.4671,0.7022\" fill=\"#FFFFFF\"/><polygon points=\"0.7600,0.6650 0.7729,0.7022 0.8123,0.7030 0.7809,0.7268 0.7923,0.7645 0.7600,0.7420 0.7277,0.7645 0.7391,0.7268 0.7077,0.7030 0.7471,0.7022\" fill=\"#FFFFFF\"/><polygon points=\"1.0400,0.6650 1.0529,0.7022 1.0923,0.7030 1.0609,0.7268 1.0723,0.7645 1.0400,0.7420 1.0077,0.7645 1.0191,0.7268 0.9877,0.7030 1.0271,0.7022\" fill=\"#FFFFFF\"/></svg>",
    'uz': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect y=\"0.0000\" width=\"3\" height=\"0.8000\" fill=\"#0099B5\"/><rect y=\"0.8000\" width=\"3\" height=\"0.4000\" fill=\"#FFFFFF\"/><rect y=\"1.2000\" width=\"3\" height=\"0.8000\" fill=\"#1EB53A\"/></svg>",
    'va': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"1.5\" height=\"2\" fill=\"#FFE000\"/><rect x=\"1.5\" width=\"1.5\" height=\"2\" fill=\"#FFFFFF\"/></svg>",
    'vn': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"2\" fill=\"#DA251D\"/><polygon points=\"1.5000,0.4500 1.6293,0.8220 2.0231,0.8300 1.7092,1.0680 1.8233,1.4450 1.5000,1.2200 1.1767,1.4450 1.2908,1.0680 0.9769,0.8300 1.3707,0.8220\" fill=\"#FFFF00\"/></svg>",
    'ws': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"2\" fill=\"#CE1126\"/><rect width=\"1.3\" height=\"1.0\" fill=\"#002B7F\"/><polygon points=\"0.2800,0.1000 0.2988,0.1541 0.3561,0.1553 0.3104,0.1899 0.3270,0.2447 0.2800,0.2120 0.2330,0.2447 0.2496,0.1899 0.2039,0.1553 0.2612,0.1541\" fill=\"#FFFFFF\"/><polygon points=\"0.5550,0.1700 0.5738,0.2241 0.6311,0.2253 0.5854,0.2599 0.6020,0.3147 0.5550,0.2820 0.5080,0.3147 0.5246,0.2599 0.4789,0.2253 0.5362,0.2241\" fill=\"#FFFFFF\"/><polygon points=\"0.4200,0.4850 0.4388,0.5391 0.4961,0.5403 0.4504,0.5749 0.4670,0.6297 0.4200,0.5970 0.3730,0.6297 0.3896,0.5749 0.3439,0.5403 0.4012,0.5391\" fill=\"#FFFFFF\"/><polygon points=\"0.5900,0.5550 0.6088,0.6091 0.6661,0.6103 0.6204,0.6449 0.6370,0.6997 0.5900,0.6670 0.5430,0.6997 0.5596,0.6449 0.5139,0.6103 0.5712,0.6091\" fill=\"#FFFFFF\"/><polygon points=\"0.7300,0.3450 0.7488,0.3991 0.8061,0.4003 0.7604,0.4349 0.7770,0.4897 0.7300,0.4570 0.6830,0.4897 0.6996,0.4349 0.6539,0.4003 0.7112,0.3991\" fill=\"#FFFFFF\"/></svg>",
    'xx': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"0.6667\" fill=\"#9AA0A6\"/><rect y=\"0.6667\" width=\"3\" height=\"0.6667\" fill=\"#C4C8CC\"/><rect y=\"1.3333\" width=\"3\" height=\"0.6667\" fill=\"#9AA0A6\"/></svg>",
    'za': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"2\" fill=\"#007A4D\"/><polygon points=\"0,0 1.3,1 0,2\" fill=\"#FFFFFF\"/><polygon points=\"0,0.35 1.55,1 0,1.65\" fill=\"#000000\"/><polygon points=\"0,0.15 1.9,1 0,1.85\" fill=\"#DE3831\" opacity=\"0\"/><rect x=\"1.3\" y=\"0\" width=\"1.7\" height=\"0.6\" fill=\"#001489\"/><rect x=\"1.3\" y=\"1.4\" width=\"1.7\" height=\"0.6\" fill=\"#DE3831\"/><polygon points=\"0,0.15 1.75,1 0,1.85\" fill=\"#FFB81C\" opacity=\"0\"/></svg>",
    'zw': "<svg viewBox=\"0 0 3 2\" xmlns=\"http://www.w3.org/2000/svg\"><rect y=\"0.0000\" width=\"3\" height=\"0.2857\" fill=\"#006400\"/><rect y=\"0.2857\" width=\"3\" height=\"0.2857\" fill=\"#FDD116\"/><rect y=\"0.5714\" width=\"3\" height=\"0.2857\" fill=\"#CE1126\"/><rect y=\"0.8571\" width=\"3\" height=\"0.2857\" fill=\"#000000\"/><rect y=\"1.1429\" width=\"3\" height=\"0.2857\" fill=\"#CE1126\"/><rect y=\"1.4286\" width=\"3\" height=\"0.2857\" fill=\"#FDD116\"/><rect y=\"1.7143\" width=\"3\" height=\"0.2857\" fill=\"#006400\"/><polygon points=\"0,0.6 1.0,1 0,1.4\" fill=\"#FFFFFF\"/><circle cx=\"0.45\" cy=\"1\" r=\"0.18\" fill=\"#FCD116\"/></svg>",
  };

  // Returns ready-to-insert inline SVG markup for a language code. Falls
  // back to a small neutral striped placeholder for any code that somehow
  // isn't mapped, so a missing entry can never break the language list.
  function getFlagSvg(langCode) {
    const cc = FLAG_COUNTRY_BY_LANG[langCode];
    return (cc && FLAG_SVG[cc]) || FLAG_SVG.xx;
  }

  // Cache language display names
  const langNameCache = {};
  function getLangName(code) {
    const key = `${code}:${cfg.uiLang}`;
    if (!langNameCache[key]) langNameCache[key] = langName(code, cfg.uiLang);
    return langNameCache[key];
  }

  // Renders a flag-capable custom listbox. Native <select><option> elements
  // cannot reliably display <img> content in any browser, so this builds a
  // small div-based listbox instead. `selectEl.value` is kept compatible
  // with the old <select> API via a getter/setter, so every existing call
  // site that reads/writes `.value` keeps working unmodified.
  //
  // `nameFn` lets callers control how each language's label is computed —
  // e.g. localized-in-current-UI-language (getLangName, the default) vs.
  // each language's own native name (langName(c, c), used for the "which
  // language is my interface in" picker so users can find it either way).
  function buildLangSelect(selectEl, searchEl, codes, selected, nameFn = getLangName) {
    const sorted = codes.map(c => ({ c, n: nameFn(c) })).sort((a, b) => a.n.localeCompare(b.n));
    let currentValue = selected;

    Object.defineProperty(selectEl, 'value', {
      configurable: true,
      get() { return currentValue; },
      set(v) {
        currentValue = v;
        selectEl.querySelectorAll('.lang-opt').forEach(row => {
          row.classList.toggle('sel', row.dataset.code === v);
        });
      },
    });

    function render(q) {
      const f = q.toLowerCase();
      const filtered = f ? sorted.filter(({ c, n }) => n.toLowerCase().includes(f) || c.includes(f)) : sorted;
      selectEl.innerHTML = filtered.map(({ c, n }) => `
        <div class="lang-opt${c === currentValue ? ' sel' : ''}" data-code="${c}" role="option" aria-selected="${c === currentValue}">
          <span class="lang-flag" aria-hidden="true">${getFlagSvg(c)}</span>
          <span class="lang-opt-name">${escapeHtml(n)} (${c.toUpperCase()})</span>
        </div>`).join('');
      selectEl.querySelectorAll('.lang-opt').forEach(row => {
        row.onclick = () => { selectEl.value = row.dataset.code; };
      });
    }
    render('');
    if (searchEl) searchEl.addEventListener('input', () => render(searchEl.value));
    return { refresh: (q = '') => render(q) };
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // § THEMES
  // ═══════════════════════════════════════════════════════════════════════════
  const THEMES = {
    dark: { bg: 'rgba(10,10,14,.96)', surf: 'rgba(24,24,32,.9)', brd: 'rgba(255,255,255,.06)', txt: '#e0e0ec', mut: 'rgba(255,255,255,.28)', acc: '#ff4500', glow: 'rgba(255,69,0,.36)', dim: 'rgba(255,69,0,.11)', ok: '#60d394', okd: 'rgba(96,211,148,.11)', biBg: 'rgba(20,22,30,.96)', biTxt: '#fff3ed', biBrd: 'rgba(255,69,0,.42)', btnBg: 'var(--rtp-dim)', btnTxt: '#ff6a2b', btnBrd: 'rgba(255,69,0,.24)', btnDoneBg: 'rgba(96,211,148,.11)', btnDoneTxt: '#60d394', btnDoneBrd: 'rgba(96,211,148,.26)' },
    light: { bg: 'rgba(246,246,250,.97)', surf: 'rgba(255,255,255,.93)', brd: 'rgba(0,0,0,.07)', txt: '#17171e', mut: 'rgba(0,0,0,.36)', acc: '#ff4500', glow: 'rgba(255,69,0,.2)', dim: 'rgba(255,69,0,.09)', ok: '#1a9e5a', okd: 'rgba(26,158,90,.09)', biBg: 'rgba(255,245,240,.95)', biTxt: '#17171e', biBrd: 'rgba(255,69,0,.28)', btnBg: 'rgba(255,241,234,.96)', btnTxt: '#c63a00', btnBrd: 'rgba(255,69,0,.26)', btnDoneBg: 'rgba(226,247,236,.98)', btnDoneTxt: '#157347', btnDoneBrd: 'rgba(26,158,90,.28)' },
    cyberpunk: { bg: 'rgba(3,0,16,.97)', surf: 'rgba(10,3,32,.93)', brd: 'rgba(0,255,255,.11)', txt: '#ddf4ff', mut: 'rgba(0,255,255,.36)', acc: '#00ffff', glow: 'rgba(0,255,255,.44)', dim: 'rgba(0,255,255,.09)', ok: '#ff00aa', okd: 'rgba(255,0,170,.1)', biBg: 'rgba(4,18,34,.97)', biTxt: '#e9feff', biBrd: 'rgba(0,255,255,.5)', btnBg: 'rgba(0,255,255,.09)', btnTxt: '#66ffff', btnBrd: 'rgba(0,255,255,.24)', btnDoneBg: 'rgba(255,0,170,.12)', btnDoneTxt: '#ff6ecf', btnDoneBrd: 'rgba(255,0,170,.3)' },
    dracula: { bg: 'rgba(14,14,26,.97)', surf: 'rgba(26,26,46,.91)', brd: 'rgba(139,92,246,.16)', txt: '#f8f8f2', mut: 'rgba(189,147,249,.5)', acc: '#bd93f9', glow: 'rgba(189,147,249,.42)', dim: 'rgba(189,147,249,.1)', ok: '#50fa7b', okd: 'rgba(80,250,123,.1)', biBg: 'rgba(33,34,54,.97)', biTxt: '#f8f8f2', biBrd: 'rgba(189,147,249,.52)', btnBg: 'rgba(189,147,249,.12)', btnTxt: '#d5b6ff', btnBrd: 'rgba(189,147,249,.26)', btnDoneBg: 'rgba(80,250,123,.12)', btnDoneTxt: '#50fa7b', btnDoneBrd: 'rgba(80,250,123,.28)' },
  };

  function applyTheme(t) {
    const th = Object.assign({}, THEMES[t] || THEMES.dark);
    // Apply custom colors on top of the base theme
    if (cfg.customColors) {
      try {
        const cc = typeof cfg.customColors === 'string' ? JSON.parse(cfg.customColors) : cfg.customColors;
        Object.assign(th, cc);
      } catch { }
    }
    const r = document.documentElement;
    Object.entries(th).forEach(([k, v]) => r.style.setProperty(`--rtp-${k}`, v));
    document.body.setAttribute('data-rtp-theme', t);
  }

  function colorToHex(color) {
    // Already hex — return as-is
    if (/^#[0-9a-f]{6}$/i.test(color)) return color;
    // rgba/rgb — convert
    const m = color.match(/[\d.]+/g);
    if (!m) return '#888888';
    const r = (+m[0]).toString(16).padStart(2, '0');
    const g = (+m[1]).toString(16).padStart(2, '0');
    const b = (+m[2]).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // § CSS
  // ═══════════════════════════════════════════════════════════════════════════
  GM_addStyle(`
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap');

    :root {
        --rtp-bg:rgba(10,10,14,.96); --rtp-surf:rgba(24,24,32,.9);
        --rtp-brd:rgba(255,255,255,.06); --rtp-txt:#e0e0ec; --rtp-mut:rgba(255,255,255,.28);
        --rtp-acc:#ff4500; --rtp-glow:rgba(255,69,0,.36); --rtp-dim:rgba(255,69,0,.11);
        --rtp-ok:#60d394; --rtp-okd:rgba(96,211,148,.11);
        --rtp-biBg:rgba(20,22,30,.96); --rtp-biTxt:#fff3ed; --rtp-biBrd:rgba(255,69,0,.42);
        --rtp-btnBg:rgba(255,69,0,.11); --rtp-btnTxt:#ff6a2b; --rtp-btnBrd:rgba(255,69,0,.24);
        --rtp-btnDoneBg:rgba(96,211,148,.11); --rtp-btnDoneTxt:#60d394; --rtp-btnDoneBrd:rgba(96,211,148,.26);
        --f:'Outfit',sans-serif; --fm:'JetBrains Mono',monospace; --r:15px;
    }

    /* ─ IN-CONTENT BUTTONS ─ */
    .rtp-btn {
        display:inline-flex; align-items:center; gap:5px;
        margin:3px 6px; padding:3px 11px;
        font-family:var(--f); font-size:10.5px; font-weight:600; letter-spacing:.04em;
        color:var(--rtp-btnTxt); background:var(--rtp-btnBg);
        border:1px solid var(--rtp-btnBrd); border-radius:20px;
        cursor:pointer; vertical-align:middle; white-space:nowrap;
        transition:all .22s cubic-bezier(.34,1.56,.64,1); opacity:.6;
    }
    .rtp-btn:hover { opacity:1; transform:translateY(-1px) scale(1.05); box-shadow:0 4px 14px var(--rtp-glow); }
    .rtp-btn.done  { color:var(--rtp-btnDoneTxt); background:var(--rtp-btnDoneBg); border-color:var(--rtp-btnDoneBrd); opacity:1; }
    .rtp-btn.busy  { opacity:.4; pointer-events:none; }

    /* Spinner */
    .sp { display:inline-block; width:8px; height:8px; border:1.5px solid currentColor; border-top-color:transparent; border-radius:50%; animation:spin .75s linear infinite; }
    @keyframes spin { to{transform:rotate(360deg)} }

    /* Fade-in when a translation appears */
    .rtp-fi { animation:fi .4s ease; }
    @keyframes fi { from{opacity:0;transform:translateY(3px)} to{opacity:1;transform:none} }

    /* Bilingual block */
    .rtp-ctrl {
        position:relative; z-index:20; display:flex; align-items:center; gap:6px; flex-wrap:wrap;
        width:fit-content; max-width:100%; margin:4px 0;
        pointer-events:auto;
    }
    .rtp-bi {
        position:relative; z-index:20;
        margin:6px 0 8px; padding:10px 14px; background:linear-gradient(180deg, var(--rtp-biBg), var(--rtp-surf));
        border:1px solid var(--rtp-biBrd); border-left:3px solid var(--rtp-acc);
        border-radius:0 11px 11px 0; font-size:13px; line-height:1.65; color:var(--rtp-biTxt); font-family:var(--f);
        box-shadow:0 8px 24px rgba(0,0,0,.22), inset 0 1px 0 rgba(255,255,255,.03);
        text-shadow:0 1px 0 rgba(0,0,0,.28);
        white-space:pre-wrap; overflow-wrap:anywhere; word-break:break-word; max-height:none; overflow:visible;
    }

    /* Toolbar */
    .rtp-tb { position:relative; z-index:21; display:inline-flex; gap:3px; margin:0; }
    .rtp-t  { display:inline-flex; align-items:center; padding:2px 8px; font-family:var(--f); font-size:9.5px; font-weight:600; letter-spacing:.04em; color:var(--rtp-mut); border:1px solid var(--rtp-brd); border-radius:12px; cursor:pointer; transition:all .16s; background:transparent; }
    .rtp-t:hover { color:var(--rtp-txt); background:var(--rtp-surf); }

    /* ─ FAB ─ */
    #rtp-fab, #rtp-view-toggle {
        position:fixed; bottom:28px; right:28px; z-index:9998;
        display:flex; align-items:center; justify-content:center;
        min-width:160px; height:42px; padding:0 16px;
        background:rgba(24,24,32,.92); color:#fff; border:1px solid var(--rtp-brd);
        border-radius:22px; font-family:var(--f); font-size:12px; font-weight:700; letter-spacing:.05em;
        cursor:pointer; box-shadow:0 8px 24px rgba(0,0,0,.28);
        backdrop-filter:blur(10px);
        transition:all .22s cubic-bezier(.34,1.56,.64,1);
    }
    #rtp-fab { bottom:78px; min-width:52px; width:52px; padding:0; border-radius:50%; font-size:18px; }
    #rtp-fab.busy { opacity:.62; pointer-events:none; }
    #rtp-fab.done { color:var(--rtp-ok); border-color:var(--rtp-ok); }
    #rtp-fab:hover,
    #rtp-view-toggle:hover { transform:translateY(-3px) scale(1.02); border-color:var(--rtp-acc); box-shadow:0 12px 30px var(--rtp-glow); }
    #rtp-view-toggle.originals { color:#000; background:var(--rtp-dim); border-color:rgba(255,69,0,.24); text-shadow:0 1px 0 rgba(0,0,0,.22); }

    /* ─ Hotkeys ─ */
    .hk-row { display:flex; align-items:center; justify-content:space-between; gap:8px; margin:5px 0; }
    .hk-lbl { font-size:12px; color:var(--rtp-mut); flex:1; }
    .hk-btn {
        font-family:var(--fm); font-size:11px; font-weight:600; letter-spacing:.03em;
        padding:5px 12px; border-radius:8px; cursor:pointer; min-width:90px; text-align:center;
        background:var(--rtp-surf); color:var(--rtp-txt); border:1px solid var(--rtp-brd);
        transition:all .16s;
    }
    .hk-btn:hover { border-color:var(--rtp-acc); color:var(--rtp-acc); }
    .hk-btn.capturing { border-color:var(--rtp-acc); color:var(--rtp-acc); background:var(--rtp-dim); animation:hkpulse 1s ease infinite; }
    @keyframes hkpulse { 0%,100%{opacity:1} 50%{opacity:.5} }
    .hk-reset { font-size:11px; padding:4px 8px; cursor:pointer; color:var(--rtp-mut); border:1px solid var(--rtp-brd); border-radius:8px; background:transparent; transition:all .16s; flex-shrink:0; }
    .hk-reset:hover { color:var(--rtp-txt); border-color:var(--rtp-acc); }

    /* ─ Theme colors ─ */
    .clr-grid { display:grid; grid-template-columns:1fr 1fr; gap:7px; margin-top:4px; }
    .clr-row { display:flex; align-items:center; justify-content:space-between; gap:8px; padding:6px 10px; background:var(--rtp-surf); border:1px solid var(--rtp-brd); border-radius:9px; }
    .clr-lbl { font-size:11px; color:var(--rtp-mut); }
    .clr-inp { width:32px; height:24px; border:none; border-radius:5px; cursor:pointer; background:none; padding:0; }

    /* ─ PANEL ─ */
    #rtp-panel {
        position:fixed; z-index:10000; width:372px;
        font-family:var(--f);
        border-radius:var(--r);
        background:var(--rtp-bg);
        backdrop-filter:blur(32px) saturate(180%);
        -webkit-backdrop-filter:blur(32px) saturate(180%);
        border:1px solid var(--rtp-brd);
        box-shadow:0 32px 80px rgba(0,0,0,.75), inset 0 1px 0 rgba(255,255,255,.045);
        animation:pan .3s cubic-bezier(.34,1.56,.64,1);
        overflow:hidden; color:var(--rtp-txt);
    }
    @keyframes pan { from{opacity:0;transform:translateY(-14px) scale(.97)} to{opacity:1;transform:none} }

    /* Header */
    #rtp-hdr {
        background:linear-gradient(135deg,var(--rtp-dim),transparent 65%);
        border-bottom:1px solid var(--rtp-brd);
        padding:13px 16px; display:flex; align-items:center; justify-content:space-between;
        cursor:move; user-select:none;
    }
    .logo-w { display:flex; align-items:center; gap:10px; }
    .logo-ic { width:35px; height:35px; background:var(--rtp-acc); border-radius:11px; display:flex; align-items:center; justify-content:center; font-size:18px; box-shadow:0 4px 14px var(--rtp-glow); flex-shrink:0; }
    .logo-nm { font-size:13.5px; font-weight:700; letter-spacing:.04em; }
    .logo-vr { font-size:9px; color:var(--rtp-mut); font-family:var(--fm); margin-top:1px; }
    #rtp-close { width:29px; height:29px; display:flex; align-items:center; justify-content:center; border:1px solid var(--rtp-brd); border-radius:8px; cursor:pointer; color:var(--rtp-mut); transition:all .17s; background:transparent; font-size:13px; flex-shrink:0; }
    #rtp-close:hover { color:var(--rtp-txt); background:rgba(255,255,255,.07); }

    /* Stats */
    #rtp-stats { display:flex; border-bottom:1px solid var(--rtp-brd); }
    .st { flex:1; padding:10px 5px; text-align:center; }
    .st+.st { border-left:1px solid var(--rtp-brd); }
    .st-v { font-family:var(--fm); font-size:18px; font-weight:700; color:var(--rtp-acc); }
    .st-l { font-size:8.5px; color:var(--rtp-mut); text-transform:uppercase; letter-spacing:.1em; margin-top:2px; }

    /* Tabs */
    #rtp-tabs { display:flex; border-bottom:1px solid var(--rtp-brd); background:var(--rtp-surf); }
    .tab { flex:1; padding:10px 4px; text-align:center; font-size:10px; font-weight:700; letter-spacing:.06em; color:var(--rtp-mut); cursor:pointer; transition:all .18s; border-bottom:2px solid transparent; text-transform:uppercase; }
    .tab.on { color:var(--rtp-acc); border-bottom-color:var(--rtp-acc); }
    .tab:hover:not(.on) { color:var(--rtp-txt); }

    /* Panes */
    .pane { padding:15px; display:flex; flex-direction:column; gap:12px; max-height:475px; overflow-y:auto; }
    .pane::-webkit-scrollbar { width:3px; }
    .pane::-webkit-scrollbar-thumb { background:var(--rtp-brd); border-radius:2px; }

    /* Labels */
    .lbl { display:block; font-size:9.5px; font-weight:700; color:var(--rtp-mut); text-transform:uppercase; letter-spacing:.1em; margin-bottom:6px; }

    /* Language block (search + list) */
    .lang-wrap { display:flex; flex-direction:column; }
    .lang-search { background:var(--rtp-surf); border:1px solid var(--rtp-brd); border-bottom:none; color:var(--rtp-txt); padding:8px 12px; border-radius:9px 9px 0 0; font-family:var(--f); font-size:12.5px; outline:none; }
    .lang-search::placeholder { color:var(--rtp-mut); }
    .lang-search:focus { border-color:var(--rtp-acc); }
    .lang-sel {
        display:block; background:var(--rtp-surf); border:1px solid var(--rtp-brd); color:var(--rtp-txt);
        padding:4px; border-radius:0 0 9px 9px; font-family:var(--f); font-size:12.5px;
        outline:none; cursor:pointer; max-height:175px; overflow-y:auto;
        transition:border-color .18s;
    }
    .lang-sel:focus { border-color:var(--rtp-acc); }
    .lang-opt {
        display:flex; align-items:center; gap:8px; padding:6px 8px;
        border-radius:6px; cursor:pointer; color:var(--rtp-txt);
    }
    .lang-opt:hover {
        background:var(--rtp-dim);
    }
    .lang-opt.sel {
        background:var(--rtp-dim);
        color:var(--rtp-acc);
    }
    .lang-flag {
        display:inline-flex; width:20px; height:14px; border-radius:2px;
        flex-shrink:0; box-shadow:0 0 0 1px rgba(255,255,255,.12); overflow:hidden;
    }
    .lang-flag svg { display:block; width:100%; height:100%; }
    .lang-opt-name { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }

    .api-box {
        width:100%; min-height:84px; resize:vertical; box-sizing:border-box;
        background:var(--rtp-surf); border:1px solid var(--rtp-brd); color:var(--rtp-txt);
        padding:10px 12px; border-radius:9px; font-family:var(--fm); font-size:11.5px; line-height:1.45;
        outline:none; transition:border-color .18s;
    }
    .api-head {
        display:flex; align-items:center; justify-content:space-between; gap:8px; margin-bottom:6px;
    }
    .api-head .lbl { margin-bottom:0; }
    .api-wrap { position:relative; }
    .api-box:focus { border-color:var(--rtp-acc); }
    .api-box::placeholder { color:var(--rtp-mut); }
    .api-box.masked { -webkit-text-security:disc; }
    .api-eye {
        width:32px; height:32px; display:flex; align-items:center; justify-content:center;
        border:1px solid var(--rtp-brd); border-radius:8px; background:var(--rtp-surf);
        color:var(--rtp-mut); cursor:pointer; transition:all .16s;
        flex-shrink:0;
    }
    .api-eye:hover { color:var(--rtp-txt); border-color:var(--rtp-acc); }
    .api-help { margin-top:6px; font-size:10.5px; line-height:1.45; color:var(--rtp-mut); }

    .num-grid { display:grid; grid-template-columns:repeat(2, minmax(0, 1fr)); gap:7px; }
    .num-card {
        padding:8px 10px; background:var(--rtp-surf); border:1px solid var(--rtp-brd);
        border-radius:10px;
    }
    @media (max-width: 430px) {
        .num-grid { grid-template-columns:1fr; }
    }
    .num-lbl {
        display:block; margin-bottom:6px; font-size:10px; line-height:1.35;
        color:var(--rtp-mut);
    }
    .num-inp {
        width:100%; box-sizing:border-box; background:transparent; border:1px solid var(--rtp-brd);
        color:var(--rtp-txt); padding:7px 9px; border-radius:8px; font-family:var(--fm); font-size:12px;
        outline:none;
    }
    .num-inp:focus { border-color:var(--rtp-acc); }

    /* Pills */
    .pills { display:flex; gap:3px; background:var(--rtp-surf); border:1px solid var(--rtp-brd); border-radius:10px; padding:3px; }
    .pill { flex:1; text-align:center; padding:7px 4px; border-radius:8px; font-size:10.5px; font-weight:700; color:var(--rtp-mut); cursor:pointer; transition:all .18s; white-space:nowrap; }
    .pill.on { background:var(--rtp-acc); color:#fff; box-shadow:0 2px 8px var(--rtp-glow); }

    /* Update-mode pills: same visual language as .pills/.pill, but these
       labels run much longer once localized (German/Spanish/French easily
       exceed 20+ characters), so this group needs to wrap onto multiple
       rows instead of forcing a fixed-width flex row like the short
       engine/tone/theme pills do. Grid + auto-fit lets each pill claim an
       even share of the available width and wrap to a new line on its own
       when the panel (or a long translated label) is too narrow. */
    .upd-modes {
        display:grid;
        grid-template-columns:repeat(auto-fit, minmax(96px, 1fr));
        gap:8px;
        width:100%;
        box-sizing:border-box;
    }
    .upd-mode-pill {
        display:flex; align-items:center; justify-content:center; text-align:center;
        flex:1 1 auto; min-width:0; min-height:34px; box-sizing:border-box;
        padding:7px 8px; border-radius:9px; font-size:10.5px; font-weight:700;
        line-height:1.25; color:var(--rtp-mut); cursor:pointer; transition:all .18s;
        background:var(--rtp-surf); border:1px solid var(--rtp-brd);
        white-space:normal; overflow-wrap:anywhere; word-break:break-word;
    }
    .upd-mode-pill.on { background:var(--rtp-acc); color:#fff; box-shadow:0 2px 8px var(--rtp-glow); border-color:transparent; }
    .upd-row {
        display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between;
        gap:4px 10px; margin-top:8px; margin-bottom:2px; width:100%; box-sizing:border-box;
    }
    .upd-row .api-help { margin:0; }
    .upd-version {
        font-size:11px; color:var(--rtp-mut); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
    }
    .upd-check-btn { margin-top:8px; width:100%; box-sizing:border-box; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }

    /* Toggles */
    .tog-row { display:flex; align-items:center; justify-content:space-between; padding:2px 0; }
    .tog-lbl { font-size:12.5px; color:var(--rtp-txt); }
    .tog { position:relative; width:38px; height:21px; flex-shrink:0; }
    .tog input { opacity:0; width:0; height:0; }
    .tog-tr { position:absolute; inset:0; background:var(--rtp-surf); border:1px solid var(--rtp-brd); border-radius:21px; cursor:pointer; transition:all .24s; }
    .tog input:checked+.tog-tr { background:var(--rtp-acc); border-color:var(--rtp-acc); }
    .tog-tr::after { content:''; position:absolute; left:3px; top:3px; width:13px; height:13px; background:#fff; border-radius:50%; transition:.24s; }
    .tog input:checked+.tog-tr::after { transform:translateX(17px); }

    /* Buttons */
    .btn-p { width:100%; height:44px; background:var(--rtp-acc); border:none; color:#fff; border-radius:11px; font-family:var(--f); font-size:11.5px; font-weight:800; letter-spacing:.06em; cursor:pointer; transition:all .2s; position:relative; overflow:hidden; }
    .btn-p::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,.14),transparent); }
    .btn-p:hover { box-shadow:0 8px 22px var(--rtp-glow); transform:translateY(-1px); }
    .btn-p.ghost { background:var(--rtp-surf); border:1px solid var(--rtp-brd); color:var(--rtp-txt); box-shadow:none; }
    .btn-p.ghost:hover { background:rgba(255,255,255,.07); }

    .g2 { display:grid; grid-template-columns:1fr 1fr; gap:7px; }
    .btn-s { padding:9px 7px; background:var(--rtp-surf); border:1px solid var(--rtp-brd); color:var(--rtp-mut); border-radius:10px; font-size:10.5px; font-family:var(--f); font-weight:600; cursor:pointer; transition:all .17s; text-align:center; }
    .btn-s:hover { color:var(--rtp-txt); background:rgba(255,255,255,.06); border-color:rgba(255,255,255,.1); }
    .btn-s.active { color:var(--rtp-acc); border-color:var(--rtp-acc); }

    /* Divider */
    .div { height:1px; background:var(--rtp-brd); }

    /* History */
    .hi { padding:9px 12px; background:var(--rtp-surf); border:1px solid var(--rtp-brd); border-radius:10px; cursor:pointer; transition:border-color .18s; }
    .hi:hover { border-color:var(--rtp-acc); }
    .hi-o { font-size:10px; color:var(--rtp-mut); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; margin-bottom:3px; }
    .hi-t { font-size:12px; color:var(--rtp-txt); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
    .hi-m { font-size:9px; color:var(--rtp-acc); font-family:var(--fm); margin-top:4px; }

    /* Slider */
    .slider { width:100%; accent-color:var(--rtp-acc); cursor:pointer; }
    .slider-v { text-align:right; font-size:10px; color:var(--rtp-mut); margin-top:3px; font-family:var(--fm); }

    /* Toast */
    #rtp-toast { position:fixed; bottom:92px; right:28px; z-index:10010; background:var(--rtp-bg); backdrop-filter:blur(16px); border:1px solid var(--rtp-brd); color:var(--rtp-txt); padding:10px 18px; border-radius:12px; font-family:var(--f); font-size:12.5px; font-weight:600; box-shadow:0 8px 28px rgba(0,0,0,.5); pointer-events:none; opacity:0; transform:translateY(8px); transition:all .24s; }
    #rtp-toast.on { opacity:1; transform:none; }

    /* Cyberpunk overrides */
    [data-rtp-theme=cyberpunk] #rtp-panel { box-shadow:0 0 40px rgba(0,255,255,.1),0 32px 80px rgba(0,0,0,.85); }
    `);

  // ═══════════════════════════════════════════════════════════════════════════
  // § SLANG
  // ═══════════════════════════════════════════════════════════════════════════
  const SLANG = {
    OP: 'автор поста', 'TL;DR': 'краткое содержание', TIL: 'сегодня узнал',
    AMA: 'задайте любой вопрос', IMO: 'по моему мнению', IMHO: 'по моему скромному мнению',
    IRL: 'в реальной жизни', ELI5: 'объясни как пятилетнему', AFAIK: 'насколько я знаю',
    IIRC: 'если я правильно помню', SMH: 'качаю головой', FTW: 'победа',
    LMK: 'дай знать', NGL: 'не буду врать', YMMV: 'у каждого по-разному',
    FWIW: 'к вашему сведению', ICYMI: 'если вы пропустили', FTFY: 'исправил за тебя',
  };
  const SLANG_RE = new RegExp(`(?<![\\w;])(${Object.keys(SLANG).map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})(?![\\w;])`, 'gi');

  function expandSlang(text) {
    return text.replace(SLANG_RE, m => {
      const k = m.toUpperCase();
      return SLANG[k] ? `${m}[=${SLANG[k]}]` : m;
    });
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // § UNIT CONVERTERS
  // ═══════════════════════════════════════════════════════════════════════════
  function convertUnits(text) {
    if (!cfg.autoConvert) return text;
    return text
      .replace(/(-?\d+(?:[.,]\d+)?)\s*°?F\b/g, (_, n) => `${n}°F (${((+n.replace(',', '.') - 32) * 5 / 9).toFixed(1)}°C)`)
      .replace(/(\d+(?:[.,]\d+)?)\s*miles?\b/gi, (_, n) => `${n} миль (≈${(+n.replace(',', '.') * 1.609).toFixed(1)} км)`)
      .replace(/(\d+(?:[.,]\d+)?)\s*lbs?\b/gi, (_, n) => `${n} фунт (≈${(+n.replace(',', '.') * 0.4536).toFixed(1)} кг)`)
      .replace(/(\d+(?:[.,]\d+)?)\s*(?:inch(?:es)?|")\b/gi, (_, n) => `${n}" (≈${(+n.replace(',', '.') * 2.54).toFixed(1)} см)`)
      .replace(/(\d+(?:[.,]\d+)?)\s*(?:foot|feet|ft)\b/gi, (_, n) => `${n} фут (≈${(+n.replace(',', '.') * 0.3048).toFixed(2)} м)`)
      .replace(/(\d+(?:[.,]\d+)?)\s*(?:yard|yd)s?\b/gi, (_, n) => `${n} ярд (≈${(+n.replace(',', '.') * 0.9144).toFixed(2)} м)`);
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // § EASTER EGGS
  // ═══════════════════════════════════════════════════════════════════════════
  let pirateMode = false;
  let yodaMode = false;

  function pirateify(t) {
    return t.replace(/\bthe\b/gi, "th'").replace(/\byou\b/gi, 'ye').replace(/\bis\b/gi, 'be')
      .replace(/\bmy\b/gi, 'me').replace(/\byes\b/gi, 'aye').replace(/\bno\b/gi, 'nay')
      .replace(/\bfriend\b/gi, 'matey').replace(/\bhello\b/gi, 'ahoy')
      + ' ⚓ Arrr!';
  }

  function yodaify(t) {
    const w = t.split(' ');
    if (w.length < 4) return t + ', hmm.';
    const n = Math.ceil(w.length / 3);
    return [...w.slice(-n), ...w.slice(0, -n)].join(' ') + ', hmm.';
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // § TRANSLATION
  // ═══════════════════════════════════════════════════════════════════════════
  let reqGen = 0; // queue generation — reset on cancel
  let recentRequestTimes = [];
  let activeTasks = 0;
  let pendingTasks = [];
  let activeNetworkRequests = 0;
  let pendingNetworkRequests = [];
  const AUTO_TRANSLATE_VIEWPORT_MARGIN = 140;
  const AUTO_TRANSLATE_SETTLE_MS = 50;

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function getPositiveInt(value, fallback, min = 1, max = Number.MAX_SAFE_INTEGER) {
    const n = Math.floor(Number(value));
    if (!Number.isFinite(n)) return fallback;
    return Math.min(max, Math.max(min, n));
  }

  function getMaxRequestsPerSecond() {
    return getPositiveInt(cfg.maxRequestsPerSecond, DEF.maxRequestsPerSecond, 1, 50);
  }

  function getMaxConcurrentRequests() {
    return getPositiveInt(cfg.maxConcurrentRequests, DEF.maxConcurrentRequests, 1, 20);
  }

  function getMaxTextLengthPerRequest() {
    return getPositiveInt(cfg.maxTextLengthPerRequest, DEF.maxTextLengthPerRequest, 100, 20000);
  }

  function getMaxParagraphsPerRequest() {
    return getPositiveInt(cfg.maxParagraphsPerRequest, DEF.maxParagraphsPerRequest, 1, 100);
  }

  async function waitForRateSlot() {
    const limit = getMaxRequestsPerSecond();
    while (true) {
      const now = Date.now();
      recentRequestTimes = recentRequestTimes.filter(ts => now - ts < 1000);
      if (recentRequestTimes.length < limit) {
        recentRequestTimes.push(now);
        return;
      }
      const oldest = recentRequestTimes[0] || now;
      await sleep(Math.max(20, 1000 - (now - oldest)));
    }
  }

  function pumpNetworkQueue() {
    const limit = getMaxConcurrentRequests();
    const isCurrentTask = (task) => task.gen === reqGen;
    while (activeNetworkRequests < limit && pendingNetworkRequests.length) {
      const task = pendingNetworkRequests.shift();
      activeNetworkRequests++;

      (async () => {
        try {
          if (!isCurrentTask(task)) return task.resolve(null);
          await sleep(cfg.requestDelay);
          if (!isCurrentTask(task)) return task.resolve(null);
          await waitForRateSlot();
          if (!isCurrentTask(task)) return task.resolve(null);
          const result = await task.fn();
          task.resolve(isCurrentTask(task) ? result : null);
        } catch {
          task.resolve(null);
        } finally {
          activeNetworkRequests = Math.max(0, activeNetworkRequests - 1);
          pumpNetworkQueue();
        }
      })();
    }
  }

  function runLimitedRequest(fn) {
    return new Promise(resolve => {
      pendingNetworkRequests.push({ fn, resolve, gen: reqGen });
      pumpNetworkQueue();
    });
  }

  function pumpQueue() {
    const limit = getMaxConcurrentRequests();
    const isCurrentTask = (task) => task.gen === reqGen;
    while (activeTasks < limit && pendingTasks.length) {
      const task = pendingTasks.shift();
      activeTasks++;

      (async () => {
        try {
          if (!isCurrentTask(task)) return task.resolve(null);
          const result = await task.fn();
          task.resolve(isCurrentTask(task) ? result : null);
        } catch {
          task.resolve(null);
        } finally {
          activeTasks = Math.max(0, activeTasks - 1);
          pumpQueue();
        }
      })();
    }
  }

  function enqueue(fn) {
    return new Promise(resolve => {
      pendingTasks.push({ fn, resolve, gen: reqGen });
      pumpQueue();
    });
  }

  function toneHint() {
    if (cfg.tone === 'formal') return 'Translate formally and professionally: ';
    if (cfg.tone === 'slang') return 'Translate casually and colloquially: ';
    return '';
  }

  function escapeHtml(text) {
    return String(text || '').replace(/[&<>"']/g, ch => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }[ch]));
  }

  function parseJsonSafe(text, fallback = null) {
    try { return JSON.parse(text); } catch { return fallback; }
  }

  function gmRequest({ method = 'GET', url, headers, data, parse, fallback = null, timeout = 15000 }) {
    return new Promise(resolve => GM_xmlhttpRequest({
      method,
      url,
      headers,
      data,
      timeout,
      onload: (r) => {
        let parsed = fallback;
        try {
          parsed = parse ? parse(r) : r.responseText;
        } catch { }
        resolve({
          ok: r.status >= 200 && r.status < 300,
          status: r.status,
          data: parsed ?? fallback,
          raw: r,
        });
      },
      onerror: () => resolve({
        ok: false,
        status: 0,
        data: fallback,
        raw: null,
      }),
      ontimeout: () => resolve({
        ok: false,
        status: 0,
        data: fallback,
        raw: null,
      }),
    }));
  }

  function getDeepLCacheScope() {
    const keys = parseDeepLKeys();
    const tiers = keys.map(key => (key.endsWith(':fx') ? 'free' : 'pro')).join(',');
    return `deepl|keys:${keys.length}|tiers:${tiers}`;
  }

  function getEngineScope() {
    return cfg.engine === 'deepl' ? getDeepLCacheScope() : cfg.engine;
  }

  function getTranslationCacheKey(text) {
    return `${getEngineScope()}|${cfg.targetLang}|${cfg.tone}|${text}`;
  }

  function parseDeepLKeys(raw = cfg.deeplApiKeys) {
    return String(raw || '')
      .split(',')
      .map(k => k.trim())
      .filter(Boolean)
      .filter((k, i, arr) => arr.indexOf(k) === i);
  }

  function getDeepLEndpoint(apiKey) {
    return apiKey.endsWith(':fx') ? 'https://api-free.deepl.com' : 'https://api.deepl.com';
  }

  function splitLongText(text, maxChars) {
    const chunks = [];
    let remaining = String(text || '').trim();

    while (remaining.length > maxChars) {
      let cut = remaining.lastIndexOf('. ', maxChars);
      if (cut < maxChars * 0.5) cut = remaining.lastIndexOf('! ', maxChars);
      if (cut < maxChars * 0.5) cut = remaining.lastIndexOf('? ', maxChars);
      if (cut < maxChars * 0.5) cut = remaining.lastIndexOf('。', maxChars);
      if (cut < maxChars * 0.5) cut = remaining.lastIndexOf('，', maxChars);
      if (cut < maxChars * 0.5) cut = remaining.lastIndexOf(',', maxChars);
      if (cut < maxChars * 0.5) cut = remaining.lastIndexOf(' ', maxChars);
      if (cut < maxChars * 0.5) cut = maxChars;
      const part = remaining.slice(0, cut + (cut === maxChars ? 0 : 1)).trim();
      if (part) chunks.push(part);
      remaining = remaining.slice(cut + (cut === maxChars ? 0 : 1)).trim();
    }

    if (remaining) chunks.push(remaining);
    return chunks.length ? chunks : [''];
  }

  function buildRequestChunks(text) {
    const source = String(text || '').trim();
    if (!source) return [''];

    const maxChars = getMaxTextLengthPerRequest();
    const maxParagraphs = getMaxParagraphsPerRequest();
    const paragraphs = source
      .split(/\n\s*\n+|\r?\n/)
      .map(p => p.trim())
      .filter(Boolean);

    const normalizedParagraphs = (paragraphs.length ? paragraphs : [source]).flatMap(p =>
      p.length > maxChars ? splitLongText(p, maxChars) : [p]
    );

    const chunks = [];
    let current = [];
    let currentLen = 0;

    normalizedParagraphs.forEach(paragraph => {
      const nextLen = currentLen + paragraph.length + (current.length ? 2 : 0);
      const exceedsChars = nextLen > maxChars;
      const exceedsParagraphs = current.length >= maxParagraphs;

      if (current.length && (exceedsChars || exceedsParagraphs)) {
        chunks.push(current.join('\n\n'));
        current = [];
        currentLen = 0;
      }

      current.push(paragraph);
      currentLen += paragraph.length + (current.length > 1 ? 2 : 0);
    });

    if (current.length) chunks.push(current.join('\n\n'));
    return chunks.length ? chunks : [source];
  }

  function maskDeepLKey(apiKey) {
    const raw = String(apiKey || '');
    const isFree = raw.endsWith(':fx');
    const base = isFree ? raw.slice(0, -3) : raw;
    if (!base) return isFree ? '***:fx' : '***';
    if (base.length <= 8) return `${base.slice(0, 2)}***${isFree ? ':fx' : ''}`;
    return `${base.slice(0, 4)}...${base.slice(-4)}${isFree ? ':fx' : ''}`;
  }

  async function requestDeepLUsage(apiKey) {
    const endpoint = getDeepLEndpoint(apiKey);
    return runLimitedRequest(() => gmRequest({
      url: `${endpoint}/v2/usage`,
      headers: {
        Authorization: `DeepL-Auth-Key ${apiKey}`,
      },
      parse: r => parseJsonSafe(r.responseText),
    }));
  }

  async function testDeepLApi(raw = cfg.deeplApiKeys) {
    const keys = parseDeepLKeys(raw);
    if (!keys.length) {
      return { ok: false, reason: 'missing_keys' };
    }

    let lastError = null;
    for (const apiKey of keys) {
      const result = await requestDeepLUsage(apiKey);
      if (result.ok) {
        return {
          ok: true,
          apiKey,
          status: result.status,
          data: result.data || {},
        };
      }
      lastError = {
        ok: false,
        apiKey,
        status: result.status,
        data: result.data || null,
      };
    }

    return lastError || { ok: false, reason: 'unknown' };
  }

  function getDeepLTargetLang(code) {
    const mapped = {
      en: 'EN',
      de: 'DE',
      fr: 'FR',
      es: 'ES',
      pt: 'PT',
      it: 'IT',
      nl: 'NL',
      pl: 'PL',
      ru: 'RU',
      ja: 'JA',
      zh: 'ZH',
      bg: 'BG',
      cs: 'CS',
      da: 'DA',
      el: 'EL',
      et: 'ET',
      fi: 'FI',
      hu: 'HU',
      id: 'ID',
      ko: 'KO',
      lt: 'LT',
      lv: 'LV',
      nb: 'NB',
      no: 'NB',
      ro: 'RO',
      sk: 'SK',
      sl: 'SL',
      sv: 'SV',
      tr: 'TR',
      uk: 'UK',
    };
    return mapped[String(code || '').toLowerCase()] || null;
  }

  let deeplKeyCursor = 0;

  // Detect the text language
  async function detectLanguage(text) {
    try {
      const sample = buildRequestChunks(text)[0] || text;
      const q = toneHint() + sample;
      const result = await runLimitedRequest(() => gmRequest({
        url: `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURIComponent(q)}`,
        parse: r => parseJsonSafe(r.responseText, []),
      }));
      return result.data?.[2] || null;
    } catch {
      return null;
    }
  }

  function normalizeLangCode(code) {
    return String(code || '')
      .trim()
      .toLowerCase()
      .replace('_', '-')
      .split('-')[0];
  }

  function getElementSourceText(el) {
    return expandSlang((el?.dataset?.orig || el?.innerText || '').trim());
  }

  function isElementInAutoTranslateViewport(el) {
    if (!el || !el.isConnected) return false;
    const rect = el.getBoundingClientRect();
    return rect.bottom >= -AUTO_TRANSLATE_VIEWPORT_MARGIN &&
      rect.top <= window.innerHeight + AUTO_TRANSLATE_VIEWPORT_MARGIN &&
      rect.right >= 0 &&
      rect.left <= window.innerWidth;
  }

  function canAutoTranslateButton(btn) {
    const el = btn?._targetEl;
    return !!btn &&
      !!el &&
      btn.dataset.st === 'orig' &&
      !btn.dataset.skip &&
      !btn.classList.contains('busy') &&
      isElementInAutoTranslateViewport(el);
  }

  function markButtonBusy(btn) {
    if (!btn || btn.dataset.st !== 'orig') return;
    btn.innerHTML = '<span class="sp"></span>';
    btn.classList.add('busy');
  }

  function restoreIdleButton(btn) {
    if (!btn || btn.dataset.st === 'done') return;
    btn.classList.remove('busy');
    btn.innerHTML = `🌐 ${cfg.targetLang.toUpperCase()}`;
  }

  const autoTranslateTimers = new WeakMap();

  function clearAutoTranslateTimer(btn) {
    const timer = autoTranslateTimers.get(btn);
    if (timer) {
      clearTimeout(timer);
      autoTranslateTimers.delete(btn);
    }
  }

  function scheduleAutoTranslate(btn) {
    if (!cfg.autoTranslateOnScroll || !canAutoTranslateButton(btn)) return;
    clearAutoTranslateTimer(btn);
    const timer = setTimeout(() => {
      autoTranslateTimers.delete(btn);
      if (!canAutoTranslateButton(btn)) return;
      btn.dataset.autoMode = 'scroll';
      btn.click();
    }, AUTO_TRANSLATE_SETTLE_MS);
    autoTranslateTimers.set(btn, timer);
  }

  async function getDetectedLang(el, text) {
    if (!el) return normalizeLangCode(await detectLanguage(text));
    const cached = normalizeLangCode(el.dataset.rtpLang);
    if (cached) return cached;
    const detected = normalizeLangCode(await detectLanguage(text));
    if (detected) el.dataset.rtpLang = detected;
    return detected;
  }

  function shouldSkipDetectedLang(detectedLang) {
    if (!detectedLang) return false;
    const detected = normalizeLangCode(detectedLang);
    return detected === normalizeLangCode(cfg.targetLang) ||
      detected === normalizeLangCode(cfg.uiLang);
  }

  async function doTranslateDeepL(text) {
    const keys = parseDeepLKeys();
    if (!keys.length) {
      toast(S('toastDeepLKeysMissing'));
      return text;
    }

    const targetLang = getDeepLTargetLang(cfg.targetLang);
    if (!targetLang) {
      toast(`${S('toastDeepLUnsupported')} ${cfg.targetLang.toUpperCase()}`);
      return text;
    }

    const chunks = buildRequestChunks(text);
    const start = deeplKeyCursor % keys.length;

    const translatedChunks = [];
    for (const chunk of chunks) {
      const q = toneHint() + chunk;
      let translatedChunk = null;

      for (let offset = 0; offset < keys.length; offset++) {
        const idx = (start + offset) % keys.length;
        const apiKey = keys[idx];
        const endpoint = getDeepLEndpoint(apiKey);

        const result = await runLimitedRequest(() => gmRequest({
          method: 'POST',
          url: `${endpoint}/v2/translate`,
          headers: {
            Authorization: `DeepL-Auth-Key ${apiKey}`,
            'Content-Type': 'application/json',
          },
          data: JSON.stringify({
            text: [q],
            target_lang: targetLang,
          }),
          parse: r => parseJsonSafe(r.responseText),
        }));
        const translated = result.ok ? result.data?.translations?.[0]?.text || null : null;

        if (translated) {
          deeplKeyCursor = idx + 1;
          translatedChunk = translated;
          break;
        }
      }

      translatedChunks.push(translatedChunk || chunk);
    }

    return translatedChunks.join('\n\n');
  }

  const ENGINE_TRANSLATORS = {
    google: async (chunk) => {
      const q = toneHint() + chunk;
      const response = await runLimitedRequest(() => gmRequest({
        url: `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${cfg.targetLang}&dt=t&q=${encodeURIComponent(q)}`,
        parse: r => parseJsonSafe(r.responseText, []),
        fallback: [],
      }));
      return response.data?.[0]?.map(i => i[0]).join('') || chunk;
    },
    mymemory: async (chunk) => {
      const q = toneHint() + chunk;
      const response = await runLimitedRequest(() => gmRequest({
        url: `https://api.mymemory.translated.net/get?q=${encodeURIComponent(q)}&langpair=auto|${cfg.targetLang}`,
        parse: r => parseJsonSafe(r.responseText),
        fallback: { responseData: { translatedText: chunk } },
      }));
      return response.data?.responseData?.translatedText || chunk;
    },
    deepl: doTranslateDeepL,
  };

  async function doTranslate(text) {
    const key = getTranslationCacheKey(text);
    if (cache[key]) { cache[key].ts = Date.now(); return cache[key].val; }

    let result = text;

    try {
      const translateWithEngine = ENGINE_TRANSLATORS[cfg.engine] || ENGINE_TRANSLATORS.google;
      if (cfg.engine === 'deepl') {
        result = await translateWithEngine(text);
      } else {
        const translatedChunks = [];
        for (const chunk of buildRequestChunks(text)) {
          translatedChunks.push(await translateWithEngine(chunk));
        }
        result = translatedChunks.join('\n\n');
      }
    } catch { }

    if (pirateMode) result = pirateify(result);
    if (yodaMode) result = yodaify(result);
    result = convertUnits(result);

    cacheSet(key, result);
    return result;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // § TTS
  // ═══════════════════════════════════════════════════════════════════════════
  // (reserved — no TTS engine is currently wired up in this build; SFX below
  // is intentionally a fully separate system so it never touches this section)

  // ═══════════════════════════════════════════════════════════════════════════
  // § SOUND EFFECTS / AUDIO
  // ═══════════════════════════════════════════════════════════════════════════
  // Centralized SFX system built entirely on the native Web Audio API.
  // No external libraries, no audio files, no CDN dependencies.
  //
  // Design:
  //   user action -> playSfx(eventName) -> global on/off -> category on/off
  //     -> cooldown check -> lazy AudioContext -> master GainNode -> generator
  //
  // This system is completely independent from TTS and from the translation
  // engine. Any failure in here is caught locally and MUST NEVER interrupt
  // the rest of the userscript.

  // Maps each fine-grained SFX event to the coarse category the user toggles
  // in the settings UI (see SFX_DEFAULT_EVENTS near § CONFIGURATION).
  const SFX_CATEGORY_BY_EVENT = {
    buttonClick: 'buttonClicks',
    translateStart: 'translation',
    translateSuccess: 'translation',
    translateError: 'translation',
    translateBatchStart: 'translation',
    translateBatchSuccess: 'translation',
    viewOriginal: 'translation',
    viewTranslation: 'translation',
    copy: 'copy',
    historyCopy: 'copy',
    retry: 'retry',
    panelOpen: 'panel',
    panelClose: 'panel',
    tabChange: 'tabs',
    settingChange: 'settings',
    themeChange: 'settings',
    toggleOn: 'toggles',
    toggleOff: 'toggles',
    cacheClear: 'cache',
    historyClear: 'history',
    export: 'importExport',
    import: 'importExport',
    importError: 'importExport',
    pirateOn: 'modes',
    pirateOff: 'modes',
    yodaOn: 'modes',
    yodaOff: 'modes',
    autoTranslateStart: 'automatic',
    autoTranslateComplete: 'automatic',
    // DeepL "🧪 Test" button — grouped under the same "settings" category
    // as other settings-panel actions (settingChange, themeChange).
    test: 'settings',
    // Script-controlled update-check notification — also a "settings"
    // category action, and gated separately (see § UPDATES) so it never
    // fires repeatedly for the same background check.
    updateAvailable: 'settings',
  };

  // Automatic/background events that should stay quiet while the tab is
  // hidden, so a page full of auto-translating content never queues up a
  // pile of sounds the user can't see happening.
  const SFX_SUPPRESS_WHEN_HIDDEN = new Set(['autoTranslateStart', 'autoTranslateComplete']);

  // Per-event cooldowns (ms) to prevent spam from rapid repeated actions
  // (fast clicking, dragging a slider/color picker, scroll-triggered
  // auto-translation). Anything not listed uses SFX_DEFAULT_COOLDOWN.
  const SFX_COOLDOWNS = {
    buttonClick: 60,
    settingChange: 120,
    tabChange: 80,
    toggleOn: 60,
    toggleOff: 60,
    autoTranslateStart: 900,
    autoTranslateComplete: 900,
  };
  const SFX_DEFAULT_COOLDOWN = 90;
  const sfxLastPlayedAt = Object.create(null);

  function sfxOnCooldown(name) {
    const cd = SFX_COOLDOWNS[name] ?? SFX_DEFAULT_COOLDOWN;
    if (cd <= 0) return false;
    const now = (window.performance && performance.now) ? performance.now() : Date.now();
    const last = sfxLastPlayedAt[name] || 0;
    if (now - last < cd) return true;
    sfxLastPlayedAt[name] = now;
    return false;
  }

  // Lazy AudioContext + master GainNode. Nothing is created until the first
  // sound actually needs to play, and never at all if SFX stays disabled.
  let sfxCtx = null;
  let sfxMasterGain = null;
  let sfxUnavailable = false;

  function sfxEnsureContext() {
    if (sfxUnavailable) return null;
    try {
      if (!sfxCtx) {
        const Ctor = window.AudioContext || window.webkitAudioContext;
        if (!Ctor) { sfxUnavailable = true; return null; }
        sfxCtx = new Ctor();
        sfxMasterGain = sfxCtx.createGain();
        sfxMasterGain.gain.value = clamp01(cfg.soundVolume);
        sfxMasterGain.connect(sfxCtx.destination);
      }
      if (sfxCtx.state === 'suspended') {
        sfxCtx.resume().catch(() => { });
      }
      return sfxCtx;
    } catch {
      sfxUnavailable = true;
      return null;
    }
  }

  // Applies immediately — no reload needed when the user drags the slider.
  function sfxSetVolume(vol) {
    const v = clamp01(vol);
    if (!sfxMasterGain) return;
    try {
      sfxMasterGain.gain.setTargetAtTime(v, sfxCtx.currentTime, 0.01);
    } catch {
      try { sfxMasterGain.gain.value = v; } catch { }
    }
  }

  // ── Reusable Web Audio primitives ──────────────────────────────────────
  // Every event-specific sound below is built out of these small helpers so
  // the actual synth code isn't duplicated 25+ times.

  function sfxPlayTone({ freq = 600, duration = 0.09, type = 'sine', gain = 0.16, attack = 0.005, release = 0.05, detune = 0, delay = 0 } = {}) {
    const ctx = sfxCtx;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    if (detune) osc.detune.value = detune;
    const t0 = ctx.currentTime + delay;
    g.gain.setValueAtTime(0, t0);
    g.gain.linearRampToValueAtTime(gain, t0 + attack);
    g.gain.linearRampToValueAtTime(0, t0 + attack + duration + release);
    osc.connect(g);
    g.connect(sfxMasterGain);
    osc.start(t0);
    osc.stop(t0 + attack + duration + release + 0.02);
  }

  function sfxPlaySweep({ freqFrom = 400, freqTo = 900, duration = 0.16, type = 'sine', gain = 0.15, delay = 0 } = {}) {
    const ctx = sfxCtx;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    const t0 = ctx.currentTime + delay;
    osc.frequency.setValueAtTime(Math.max(1, freqFrom), t0);
    osc.frequency.exponentialRampToValueAtTime(Math.max(1, freqTo), t0 + duration);
    g.gain.setValueAtTime(0, t0);
    g.gain.linearRampToValueAtTime(gain, t0 + 0.012);
    g.gain.linearRampToValueAtTime(0, t0 + duration);
    osc.connect(g);
    g.connect(sfxMasterGain);
    osc.start(t0);
    osc.stop(t0 + duration + 0.02);
  }

  function sfxPlayClick({ freq = 1500, duration = 0.02, gain = 0.14, type = 'square', delay = 0 } = {}) {
    sfxPlayTone({ freq, duration, type, gain, attack: 0.001, release: 0.015, delay });
  }

  function sfxPlayDoubleTone({ freq1 = 500, freq2 = 740, gap = 0.07, duration = 0.08, type = 'sine', gain = 0.15, detune = 0 } = {}) {
    sfxPlayTone({ freq: freq1, duration, type, gain, detune, delay: 0 });
    sfxPlayTone({ freq: freq2, duration, type, gain, detune, delay: gap });
  }

  function sfxPlayWhoosh({ up = true, duration = 0.17, gain = 0.13 } = {}) {
    sfxPlaySweep({ freqFrom: up ? 260 : 900, freqTo: up ? 900 : 260, duration, type: 'sine', gain });
  }

  // ── Event-specific sound generators ────────────────────────────────────
  // Each event gets a distinct sonic identity per the design brief (short,
  // subtle, modern UI sounds — never a single generic beep for everything).
  const SFX_GENERATORS = {
    buttonClick: () => sfxPlayClick({ freq: 1500, duration: 0.02, gain: 0.12 }),

    panelOpen: () => sfxPlayWhoosh({ up: true, duration: 0.16, gain: 0.13 }),
    panelClose: () => sfxPlayWhoosh({ up: false, duration: 0.14, gain: 0.12 }),
    tabChange: () => sfxPlayTone({ freq: 820, duration: 0.04, type: 'triangle', gain: 0.11 }),
    toggleOn: () => sfxPlayDoubleTone({ freq1: 520, freq2: 780, gap: 0.05, duration: 0.055, type: 'sine', gain: 0.14 }),
    toggleOff: () => sfxPlayDoubleTone({ freq1: 620, freq2: 380, gap: 0.05, duration: 0.055, type: 'sine', gain: 0.14 }),
    settingChange: () => sfxPlayTone({ freq: 900, duration: 0.03, type: 'triangle', gain: 0.09 }),
    themeChange: () => sfxPlaySweep({ freqFrom: 320, freqTo: 1100, duration: 0.22, type: 'sine', gain: 0.15 }),

    translateStart: () => sfxPlaySweep({ freqFrom: 500, freqTo: 760, duration: 0.09, type: 'sine', gain: 0.12 }),
    translateSuccess: () => sfxPlayDoubleTone({ freq1: 660, freq2: 990, gap: 0.08, duration: 0.09, type: 'sine', gain: 0.15 }),
    translateError: () => sfxPlayTone({ freq: 220, duration: 0.16, type: 'sawtooth', gain: 0.12 }),
    translateBatchStart: () => sfxPlaySweep({ freqFrom: 450, freqTo: 700, duration: 0.14, type: 'sine', gain: 0.13 }),
    translateBatchSuccess: () => sfxPlayDoubleTone({ freq1: 620, freq2: 940, gap: 0.09, duration: 0.11, type: 'sine', gain: 0.16 }),
    viewOriginal: () => sfxPlayTone({ freq: 420, duration: 0.07, type: 'sine', gain: 0.1 }),
    viewTranslation: () => sfxPlayTone({ freq: 760, duration: 0.07, type: 'sine', gain: 0.1 }),

    copy: () => sfxPlayClick({ freq: 1800, duration: 0.025, gain: 0.13 }),
    historyCopy: () => sfxPlayClick({ freq: 1800, duration: 0.025, gain: 0.13 }),
    retry: () => sfxPlayTone({ freq: 500, duration: 0.05, type: 'square', gain: 0.11, detune: 35 }),

    cacheClear: () => sfxPlaySweep({ freqFrom: 900, freqTo: 300, duration: 0.14, type: 'triangle', gain: 0.12 }),
    historyClear: () => sfxPlayDoubleTone({ freq1: 700, freq2: 300, gap: 0.06, duration: 0.08, type: 'triangle', gain: 0.13 }),

    export: () => sfxPlayDoubleTone({ freq1: 700, freq2: 940, gap: 0.06, duration: 0.07, type: 'sine', gain: 0.13 }),
    import: () => sfxPlaySweep({ freqFrom: 500, freqTo: 1000, duration: 0.16, type: 'sine', gain: 0.14 }),
    importError: () => sfxPlayTone({ freq: 200, duration: 0.18, type: 'sawtooth', gain: 0.12 }),

    pirateOn: () => sfxPlayDoubleTone({ freq1: 300, freq2: 500, gap: 0.09, duration: 0.09, type: 'square', gain: 0.12 }),
    pirateOff: () => sfxPlayDoubleTone({ freq1: 500, freq2: 300, gap: 0.09, duration: 0.09, type: 'square', gain: 0.12 }),
    yodaOn: () => sfxPlayDoubleTone({ freq1: 640, freq2: 460, gap: 0.1, duration: 0.09, type: 'triangle', gain: 0.12 }),
    yodaOff: () => sfxPlayDoubleTone({ freq1: 460, freq2: 640, gap: 0.1, duration: 0.09, type: 'triangle', gain: 0.12 }),

    autoTranslateStart: () => sfxPlayTone({ freq: 650, duration: 0.05, type: 'sine', gain: 0.06 }),
    autoTranslateComplete: () => sfxPlayTone({ freq: 900, duration: 0.06, type: 'sine', gain: 0.06 }),

    // "🧪 Test" (DeepL key check) — a distinct three-blip "probe" pattern,
    // deliberately different from settingChange/buttonClick/translateSuccess.
    test: () => {
      sfxPlayClick({ freq: 950, duration: 0.02, gain: 0.11, type: 'triangle', delay: 0 });
      sfxPlayClick({ freq: 1180, duration: 0.02, gain: 0.11, type: 'triangle', delay: 0.07 });
      sfxPlayClick({ freq: 1420, duration: 0.02, gain: 0.11, type: 'triangle', delay: 0.14 });
    },

    // A newer version was found (see § UPDATES) — a calm two-tone chime,
    // distinct from translateSuccess/toggleOn/export. Only ever triggered
    // once per newly-discovered version, never per background check.
    updateAvailable: () => sfxPlayDoubleTone({ freq1: 740, freq2: 1080, gap: 0.1, duration: 0.1, type: 'sine', gain: 0.14 }),
  };

  // Main entry point used throughout the script. Deliberately defensive:
  // SFX must never be able to break translation, the panel, or anything else.
  function playSfx(name, opts = {}) {
    try {
      if (!cfg.soundEnabled) return;

      const category = SFX_CATEGORY_BY_EVENT[name];
      if (category && cfg.soundEvents && cfg.soundEvents[category] === false) return;

      if (!opts.force && document.hidden && SFX_SUPPRESS_WHEN_HIDDEN.has(name)) return;
      if (!opts.force && sfxOnCooldown(name)) return;

      const ctx = sfxEnsureContext();
      if (!ctx || !sfxMasterGain) return;

      const generator = SFX_GENERATORS[name];
      if (!generator) return;
      generator();
    } catch (err) {
      // SFX must never break the main application.
      try { console.warn('[RTP][SFX] playback failed:', name, err); } catch { }
    }
  }

  // Demonstrates a handful of distinct SFX in sequence — used by the
  // "Test Sound" button in the settings panel.
  function playSfxTestSequence() {
    if (!cfg.soundEnabled) return;
    if (!sfxEnsureContext()) return;
    ['buttonClick', 'toggleOn', 'translateStart', 'translateSuccess'].forEach((name, i) => {
      setTimeout(() => playSfx(name, { force: true }), i * 220);
    });
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // § UPDATES
  // ═══════════════════════════════════════════════════════════════════════════
  // Script-controlled update checks. IMPORTANT: this is entirely separate
  // from — and cannot control — Tampermonkey/Violentmonkey's own native
  // @updateURL update mechanism. Userscript managers expose no reliable JS
  // API for a script to enable/disable its own native auto-update, so this
  // system only ever: (1) fetches the trusted source below, (2) compares
  // version numbers, and (3) tells the user. It NEVER executes downloaded
  // code and NEVER silently replaces anything on disk — actual installation
  // always goes through the userscript manager's own real update flow.
  //
  // The trusted source is a fixed constant, deliberately declared as a
  // plain literal (never read from `cfg`), so imported/hand-edited settings
  // can never redirect update checks anywhere else. It intentionally
  // mirrors the @updateURL/@downloadURL already declared in the metadata
  // block above — no new trust boundary is introduced.
  const TRUSTED_UPDATE_URL = 'https://raw.githubusercontent.com/ebayybe/reddit-translator/refs/heads/main/reddit-translator-pro-auto.user.js';

  // Single source of truth for "what version am I": read from the
  // metadata block via GM_info (what the userscript manager itself parsed
  // out of @version), not hardcoded separately. The literal fallback below
  // exists only for the extremely rare case GM_info is unavailable, and is
  // kept in sync with @version at the top of this file.
  const CURRENT_VERSION = (typeof GM_info !== 'undefined' && GM_info.script && GM_info.script.version) || '1.2.0';

  const UPDATE_CHECK_INTERVAL_MS = 24 * 60 * 60 * 1000; // don't check more than once/day in the background

  // Proper numeric semantic-version comparison (not string comparison) —
  // e.g. '1.0.9' < '1.0.10' < '1.1.0' < '2.0.0'. Returns -1/0/1.
  function compareSemver(a, b) {
    const pa = String(a || '0').split('.').map(n => parseInt(n, 10));
    const pb = String(b || '0').split('.').map(n => parseInt(n, 10));
    const len = Math.max(pa.length, pb.length);
    for (let i = 0; i < len; i++) {
      const x = Number.isFinite(pa[i]) ? pa[i] : 0;
      const y = Number.isFinite(pb[i]) ? pb[i] : 0;
      if (x > y) return 1;
      if (x < y) return -1;
    }
    return 0;
  }

  // Only ever reads a version number out of the response text via regex.
  // The response body itself is never eval'd, never turned into a Function,
  // and never otherwise executed — this is a pure text scan.
  function parseVersionFromScriptSource(text) {
    const m = /@version\s+([0-9]+(?:\.[0-9]+)*)/.exec(String(text || ''));
    return m ? m[1] : null;
  }

  let updateCheckInFlight = false;

  // Reflects the latest known check result into the settings panel, if it
  // happens to be open. Safe to call when the panel doesn't exist.
  function renderUpdateStatus(panel, remoteVersion) {
    const el = (panel || document).querySelector('#upd-status-line');
    if (!el) return;
    el.textContent = remoteVersion ? `${S('updAvailable')}: v${remoteVersion}` : S('updLatest');
  }

  // Core check. `manual` distinguishes an explicit "Check for Updates"
  // click (always allowed, always reports a result) from a background
  // check (throttled, silent on failure, silent when already up to date).
  function performUpdateCheck({ manual = false } = {}) {
    if (updateCheckInFlight) return;
    if (typeof GM_xmlhttpRequest === 'undefined') {
      if (manual) toast(S('toastUpdateCheckFailed'));
      return;
    }
    updateCheckInFlight = true;

    const finish = () => {
      updateCheckInFlight = false;
      save('lastUpdateCheck', Date.now());
    };

    try {
      GM_xmlhttpRequest({
        method: 'GET',
        url: TRUSTED_UPDATE_URL,
        timeout: 12000,
        onload: (res) => {
          finish();
          try {
            if (!res || res.status < 200 || res.status >= 300) throw new Error('bad status');
            const remoteVersion = parseVersionFromScriptSource(res.responseText);
            if (!remoteVersion) throw new Error('version not found'); // never installs/executes anything either way
            const isNewer = compareSemver(remoteVersion, CURRENT_VERSION) > 0;
            if (isNewer) {
              const alreadyNotifiedThisVersion = cfg.lastNotifiedVersion === remoteVersion;
              if (!alreadyNotifiedThisVersion) {
                save('lastNotifiedVersion', remoteVersion);
                playSfx('updateAvailable'); // once per newly-discovered version, never per check
              }
              toast(`${S('updAvailable')}: v${remoteVersion}`);
              renderUpdateStatus(document.getElementById('rtp-panel'), remoteVersion);
              // 'auto' mode additionally opens the trusted update page so the
              // userscript manager's own real update prompt can take over —
              // this never installs or executes anything itself.
              if (cfg.updateMode === 'auto') {
                try {
                  if (typeof GM_openInTab === 'function') {
                    GM_openInTab(TRUSTED_UPDATE_URL, { active: false, insert: true, setParent: true });
                  }
                } catch { /* opening a tab is a convenience, never fatal */ }
              }
            } else if (manual) {
              toast(S('updLatest'));
              renderUpdateStatus(document.getElementById('rtp-panel'), null);
            }
          } catch {
            if (manual) toast(S('toastUpdateCheckFailed'));
          }
        },
        onerror: () => { finish(); if (manual) toast(S('toastUpdateCheckFailed')); },
        ontimeout: () => { finish(); if (manual) toast(S('toastUpdateCheckFailed')); },
      });
    } catch {
      // A synchronous failure to even start the request must never break
      // the userscript — fail exactly like a network error would.
      finish();
      if (manual) toast(S('toastUpdateCheckFailed'));
    }
  }

  // Runs at most once per UPDATE_CHECK_INTERVAL_MS, and never at all when
  // the user has disabled update checks. Called once during startup,
  // deliberately deferred so it can never compete with initial translation
  // work for the page.
  function maybeRunBackgroundUpdateCheck() {
    if (cfg.updateMode === 'off') return;
    const last = Number(cfg.lastUpdateCheck) || 0;
    if (Date.now() - last < UPDATE_CHECK_INTERVAL_MS) return;
    performUpdateCheck({ manual: false });
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // § UTILITIES
  // ═══════════════════════════════════════════════════════════════════════════
  function toast(msg, ms = 2800) {
    let el = document.getElementById('rtp-toast');
    if (!el) { el = document.createElement('div'); el.id = 'rtp-toast'; document.body.appendChild(el); }
    el.textContent = msg; el.classList.add('on');
    clearTimeout(el._t); el._t = setTimeout(() => el.classList.remove('on'), ms);
  }

  function mkToggle(checked, onChange) {
    const wrap = document.createElement('label'); wrap.className = 'tog';
    const inp = document.createElement('input'); inp.type = 'checkbox'; inp.checked = !!checked;
    inp.onchange = () => onChange(inp.checked);
    const tr = document.createElement('span'); tr.className = 'tog-tr';
    wrap.append(inp, tr);
    return wrap;
  }

  function fmt(n) { return Number(n).toLocaleString(); }
  function fmtK(n) { return n >= 10000 ? (n / 1000).toFixed(1) + 'K' : fmt(n); }

  function updateStats() {
    const map = { 'st-cnt': fmt(cfg.totalCount), 'st-chr': fmtK(cfg.totalChars), 'st-pg': document.querySelectorAll('.rtp-btn').length };
    for (const [id, v] of Object.entries(map)) { const el = document.getElementById(id); if (el) el.textContent = v; }
  }

  let translationDisplayMode = 'translated';

  function syncControlVisibility() {
    document.querySelectorAll('.rtp-ctrl').forEach(host => {
      host.style.display = btnsHidden ? 'none' : 'flex';
    });
    document.querySelectorAll('.rtp-btn').forEach(btn => {
      btn.style.display = btnsHidden ? 'none' : '';
    });
    document.querySelectorAll('.rtp-tb').forEach(tb => {
      tb.style.display = btnsHidden ? 'none' : '';
    });
    document.querySelectorAll('.rtp-bi').forEach(bi => {
      bi.style.display = translationDisplayMode === 'original' ? '' : 'none';
    });

    if (!btnsHidden || cfg.bilingualMode) {
      document.querySelectorAll('.rtp-btn.done').forEach(btn => renderTranslatedState(btn, btn._targetEl));
    }
  }

  function getViewToggleLabel() {
    return translationDisplayMode === 'translated' ? S('btnShowOriginals') : S('btnShowTranslations');
  }

  function updateViewToggleButton() {
    const btn = document.getElementById('rtp-view-toggle');
    if (!btn) return;
    btn.textContent = getViewToggleLabel();
    btn.classList.toggle('originals', translationDisplayMode === 'original');
  }

  function setTranslatedContentLayout(el, translated) {
    if (!el) return;

    if (translated) {
      if (el.dataset.rtpOrigStyle == null) {
        el.dataset.rtpOrigStyle = el.getAttribute('style') || '';
      }
      el.style.setProperty('white-space', 'pre-wrap', 'important');
      el.style.setProperty('overflow-wrap', 'anywhere', 'important');
      el.style.setProperty('word-break', 'break-word', 'important');
      el.style.setProperty('max-height', 'none', 'important');
      el.style.setProperty('height', 'auto', 'important');
      el.style.setProperty('overflow', 'visible', 'important');
      el.style.setProperty('-webkit-line-clamp', 'unset', 'important');
      el.style.setProperty('line-clamp', 'unset', 'important');
      return;
    }

    if (el.dataset.rtpOrigStyle == null) return;
    const originalStyle = el.dataset.rtpOrigStyle;
    if (originalStyle) el.setAttribute('style', originalStyle);
    else el.removeAttribute('style');
    delete el.dataset.rtpOrigStyle;
  }

  function ensureBilingualBlock(btn, el, translated) {
    if (!btn || !el || !translated) return null;
    if (!btn._bi || !btn._bi.isConnected) {
      const bi = document.createElement('div');
      bi.className = 'rtp-bi';
      bi.innerText = translated;
      btn._bi = bi;
      (btn._ctrlHost || el).after(bi);
    } else if (btn._bi.innerText !== translated) {
      btn._bi.innerText = translated;
    }
    return btn._bi;
  }

  function renderTranslatedState(btn, el, mode = translationDisplayMode) {
    if (!btn || !el || btn.dataset.st !== 'done') return;
    const orig = el.dataset.orig || '';
    const translated = btn.dataset.translation || '';
    if (!translated) return;

    if (cfg.bilingualMode) {
      const showOriginalWithBilingual = mode === 'original';
      const bi = ensureBilingualBlock(btn, el, translated);
      el.innerText = showOriginalWithBilingual ? orig : translated;
      setTranslatedContentLayout(el, !showOriginalWithBilingual);
      if (bi) bi.style.display = showOriginalWithBilingual ? '' : 'none';
      return;
    }

    if (btn._bi) btn._bi.style.display = 'none';

    el.innerText = mode === 'translated' ? translated : orig;
    setTranslatedContentLayout(el, mode === 'translated');
  }

  function applyDisplayModeToButton(btn, el, mode = translationDisplayMode) {
    renderTranslatedState(btn, el, mode);
  }

  function applyDisplayModeToAll(mode) {
    translationDisplayMode = mode;
    document.querySelectorAll('.rtp-btn.done').forEach(btn => renderTranslatedState(btn, btn._targetEl, mode));
    updateViewToggleButton();
  }

  function resetTranslationView(btn, el) {
    if (btn._bi) {
      btn._bi.remove();
      btn._bi = null;
    }
    setTranslatedContentLayout(el, false);
    if (el.dataset.orig) el.innerText = el.dataset.orig;
    if (btn._tb) {
      btn._tb.remove();
      btn._tb = null;
    }
    btn.innerHTML = `🌐 ${cfg.targetLang.toUpperCase()}`;
    btn.classList.remove('done', 'busy');
    btn.dataset.st = 'orig';
    btn.dataset.skip = '';
    btn.dataset.translation = '';
  }

  function renderTranslationResult(btn, el, text) {
    btn.classList.remove('busy');
    btn.classList.add('done');
    btn.innerHTML = `✓ ${S('btnOrig')}`;
    btn.dataset.st = 'done';
    btn.dataset.translation = text;

    if (cfg.bilingualMode) {
      const bi = ensureBilingualBlock(btn, el, text);
      if (bi) bi.classList.add('rtp-fi');
      renderTranslatedState(btn, el);
      if (bi) setTimeout(() => bi.classList.remove('rtp-fi'), 450);
      return;
    }

    el.classList.add('rtp-fi');
    renderTranslatedState(btn, el);
    setTimeout(() => el.classList.remove('rtp-fi'), 450);
  }

  function finalizeTranslation(btn, el, src, res) {
    renderTranslationResult(btn, el, res);
    if (cfg.autoScroll && !cfg.autoTranslateOnScroll) {
      btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    buildTranslationToolbar(btn, el, src, res);

    cfg.totalCount++;
    cfg.totalChars += (el.dataset.orig || '').length;
    flushStats();
    pushHistory(el.dataset.orig, res, cfg.targetLang);
    updateStats();
  }

  function buildTranslationToolbar(btn, el, src, res) {
    const tb = document.createElement('div');
    tb.className = 'rtp-tb';
    const addAction = (label, fn) => {
      const t = document.createElement('span');
      t.className = 'rtp-t';
      t.textContent = label;
      t.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        fn();
      };
      tb.appendChild(t);
    };

    addAction(S('btnCopy'), () => navigator.clipboard.writeText(res).then(() => { toast(S('copied')); playSfx('copy'); }));
    addAction(S('btnRetry'), async () => {
      playSfx('retry');
      delete cache[getTranslationCacheKey(src)];
      flushCache();
      resetTranslationView(btn, el);
      tb.remove();
      btn._tb = null;
      await new Promise(r => setTimeout(r, 50));
      btn.click();
    });

    btn._tb = tb;
    (btn._ctrlHost || btn).append(tb);
    if (btnsHidden) tb.style.display = 'none';
  }

  function getCustomColors() {
    try {
      return cfg.customColors
        ? (typeof cfg.customColors === 'string' ? JSON.parse(cfg.customColors) : cfg.customColors)
        : {};
    } catch {
      return {};
    }
  }

  function setExclusivePills(panel, attr, onSelect) {
    panel.querySelectorAll(`[${attr}]`).forEach(pill => {
      pill.onclick = () => {
        panel.querySelectorAll(`[${attr}]`).forEach(x => x.classList.remove('on'));
        pill.classList.add('on');
        onSelect(pill.dataset[attr.slice(5)]);
      };
    });
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // § BUTTON INJECTION
  // ═══════════════════════════════════════════════════════════════════════════
  const SELS = [
    'shreddit-post [slot="title"]', 'h1[slot="title"]', 'a[id^="post-title"]',
    'div[shreddit-comment-content]', '.md:not(.rtp-done)',
  ].join(',');

  function attachBtn(el, opts = {}) {
    const { autoStart = false } = opts;
    if (!el || el.dataset.rtpDone) return;
    const txt = (el.innerText || '').trim();
    if (txt.length < 5) return;
    el.dataset.rtpDone = '1'; el.classList.add('rtp-done');
    el.dataset.rtpLang = ''; // used to cache the detected language

    const ctrlHost = document.createElement('div');
    ctrlHost.className = 'rtp-ctrl';

    const btn = document.createElement('button');
    btn.className = 'rtp-btn';
    btn.innerHTML = `🌐 ${cfg.targetLang.toUpperCase()}`;
    btn.dataset.st = 'orig';
    btn.dataset.skip = ''; // initialize the skip flag as empty
    btn.dataset.translation = '';
    btn._targetEl = el;
    btn._ctrlHost = ctrlHost;
    el._rtpBtn = btn;

    btn.onclick = async (e) => {
      e.preventDefault(); e.stopPropagation();
      const scrollDriven = btn.dataset.autoMode === 'scroll';
      const isBatchTriggered = btn.dataset.rtpBatch === '1';
      btn.dataset.autoMode = '';
      btn.dataset.rtpBatch = '';
      clearAutoTranslateTimer(btn);

      if (btn.dataset.st === 'done') return resetTranslationView(btn, el);
      if (btn.classList.contains('busy')) return;

      if (!el.dataset.orig) el.dataset.orig = el.innerText.trim();
      const src = getElementSourceText(el);
      const detectedLang = await getDetectedLang(el, src);
      if (shouldSkipDetectedLang(detectedLang)) {
        btn.dataset.skip = '1';
        return;
      }
      if (scrollDriven && !isElementInAutoTranslateViewport(el)) return;

      // Sound: a genuine manual click gets its own start/result sound.
      // A per-element auto-scroll translation gets a subtle "automatic"
      // sound instead. Batch-triggered clicks (from the FAB) stay silent
      // here — translateVisibleContent() plays a single batch-level sound.
      const isAutoOnly = scrollDriven && !isBatchTriggered;
      if (!scrollDriven) playSfx('translateStart');
      else if (isAutoOnly) playSfx('autoTranslateStart');

      markButtonBusy(btn);
      const res = await enqueue(() => doTranslate(src));
      if (res == null) {
        if (!scrollDriven) playSfx('translateError');
        return restoreIdleButton(btn);
      }
      if (!scrollDriven) playSfx('translateSuccess');
      else if (isAutoOnly) playSfx('autoTranslateComplete');
      finalizeTranslation(btn, el, src, res);
    };

    ctrlHost.append(btn);
    el.after(ctrlHost);
    if (btnsHidden) ctrlHost.style.display = 'none';
    autoTranslateObserver.observe(el);

    // if auto-translate-on-scroll is enabled, trigger it automatically
    if (autoStart && cfg.autoTranslateOnScroll) {
      requestAnimationFrame(() => scheduleAutoTranslate(btn));
    }
  }

  // IntersectionObserver — translate visible elements first
  const ioQueue = new Set();
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { attachBtn(e.target, { autoStart: true }); ioQueue.delete(e.target); io.unobserve(e.target); } });
  }, { rootMargin: '200px' });

  const autoTranslateObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const btn = entry.target._rtpBtn;
      if (!btn) return;
      if (entry.isIntersecting) scheduleAutoTranslate(btn);
      else clearAutoTranslateTimer(btn);
    });
  }, { rootMargin: `${AUTO_TRANSLATE_VIEWPORT_MARGIN}px 0px ${AUTO_TRANSLATE_VIEWPORT_MARGIN}px 0px` });

  function injectButtons() {
    document.querySelectorAll(SELS).forEach(el => {
      if (el.dataset.rtpDone || (el.innerText || '').trim().length < 5) return;
      // Check whether the element is within the viewport (including a 200px margin, consistent with the IntersectionObserver)
      const rect = el.getBoundingClientRect();
      const inViewport = (
        rect.top <= window.innerHeight + 200 &&
        rect.bottom >= -200 &&
        rect.left <= window.innerWidth + 200 &&
        rect.right >= -200
      );
      if (inViewport) {
        // In-viewport elements must also respect the auto-translate setting:
        // otherwise above-the-fold content, and content that lands directly in the
        // viewport after dynamic loading, would only show the button without auto-translating.
        attachBtn(el, { autoStart: cfg.autoTranslateOnScroll });
        // if it was previously queued, remove it and stop observing
        if (ioQueue.has(el)) {
          ioQueue.delete(el);
          io.unobserve(el);
        }
      } else {
        // not in viewport — add it to the observation queue
        if (!ioQueue.has(el)) { ioQueue.add(el); io.observe(el); }
      }
    });
  }

  function getVisibleTranslateButtons() {
    injectButtons();
    return Array.from(document.querySelectorAll('.rtp-btn'))
      .filter(canAutoTranslateButton);
  }

  async function translateVisibleContent(fab) {
    const buttons = getVisibleTranslateButtons();
    if (!buttons.length) return toast(S('toastDone'));

    if (fab) {
      fab.classList.add('busy');
      fab.innerHTML = '<span class="sp"></span>';
    }

    // Batch translation gets exactly one start sound and one completion
    // sound, no matter how many elements are involved — individual
    // per-element sounds are suppressed via the rtpBatch marker below.
    playSfx('translateBatchStart');

    buttons.forEach(btn => {
      btn.dataset.autoMode = 'scroll';
      btn.dataset.rtpBatch = '1';
      btn.click();
    });

    await Promise.all(buttons.map(btn => new Promise(resolve => {
      const startedAt = Date.now();
      const done = () => btn.dataset.st === 'done' || btn.dataset.skip === '1' || !btn.classList.contains('busy');
      const tick = () => {
        if (done() || Date.now() - startedAt > 20000) return resolve();
        setTimeout(tick, 120);
      };
      tick();
    })));

    playSfx('translateBatchSuccess');

    if (fab) {
      fab.classList.remove('busy');
      fab.classList.add('done');
      fab.textContent = '✓';
      setTimeout(() => {
        fab.classList.remove('done');
        fab.textContent = '🌐';
      }, 900);
    }
  }

  // MutationObserver with debounce
  let mutTimer = null;
  new MutationObserver(() => {
    clearTimeout(mutTimer);
    mutTimer = setTimeout(injectButtons, 400);
  }).observe(document.body, { childList: true, subtree: true });

  // ═══════════════════════════════════════════════════════════════════════════
  // § FAB
  // ═══════════════════════════════════════════════════════════════════════════
  function createTranslateFab() {
    if (document.getElementById('rtp-fab')) return;

    const fab = document.createElement('button');
    fab.id = 'rtp-fab';
    fab.type = 'button';
    fab.textContent = '🌐';
    fab.title = `${S('title')} · ${cfg.hotkeyPanel}`;
    fab.setAttribute('aria-label', S('title'));
    fab.onclick = () => translateVisibleContent(fab);
    fab.ondblclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      buildPanel();
    };
    document.body.appendChild(fab);
  }

  function createViewToggle() {
    if (document.getElementById('rtp-view-toggle')) return;

    const viewToggleBtn = document.createElement('button');
    viewToggleBtn.id = 'rtp-view-toggle';
    viewToggleBtn.onclick = () => {
      const nextMode = translationDisplayMode === 'translated' ? 'original' : 'translated';
      applyDisplayModeToAll(nextMode);
      toast(S(nextMode === 'original' ? 'toastShowingOriginals' : 'toastShowingTranslations'));
      playSfx(nextMode === 'original' ? 'viewOriginal' : 'viewTranslation');
    };
    document.body.appendChild(viewToggleBtn);
    updateViewToggleButton();
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // § PANEL
  // ═══════════════════════════════════════════════════════════════════════════
  let activeTab = 'settings';
  let btnsHidden = true;

  function setupPanelLanguageControls(panel) {
    const uiSel = panel.querySelector('#ui-sel');
    const uiSearch = panel.querySelector('#ui-s');
    // Each language shown in its own native name (langName(c, c)) so users
    // can find their language regardless of the interface's current
    // language — preserved exactly as before, just rendered through the
    // shared flag-capable listbox now instead of a duplicated <option> loop.
    buildLangSelect(uiSel, uiSearch, UI_SUPPORTED, cfg.uiLang, c => langName(c, c));
    buildLangSelect(panel.querySelector('#tg-sel'), panel.querySelector('#tg-s'), ALL_LANGS, cfg.targetLang);

    panel.querySelector('#btn-apply-ui').onclick = () => {
      save('uiLang', uiSel.value);
      updateViewToggleButton();
      playSfx('settingChange');
      panel.remove();
      toast(S('toastApply'));
      setTimeout(buildPanel, 180);
    };

    panel.querySelector('#btn-save-lang').onclick = () => {
      save('targetLang', panel.querySelector('#tg-sel').value);
      toast(S('toastSave'));
      playSfx('settingChange');
      setTimeout(() => location.reload(), 900);
    };
  }

  function setupDeepLControls(panel) {
    const box = panel.querySelector('#deepl-api-keys');
    const testBtn = panel.querySelector('#btn-test-deepl');
    const toggleBtn = panel.querySelector('#btn-toggle-deepl-visibility');
    let secretsVisible = false;

    function syncSecretVisibility() {
      if (!box || !toggleBtn) return;
      box.classList.toggle('masked', !secretsVisible);
      const label = S(secretsVisible ? 'btnToggleSecretsHide' : 'btnToggleSecretsShow');
      toggleBtn.textContent = label;
      toggleBtn.title = label;
      toggleBtn.setAttribute('aria-label', label);
    }

    syncSecretVisibility();
    if (toggleBtn) {
      toggleBtn.onclick = () => {
        secretsVisible = !secretsVisible;
        syncSecretVisibility();
      };
    }

    panel.querySelector('#btn-save-deepl').onclick = () => {
      const normalized = parseDeepLKeys(box.value).join(', ');
      save('deeplApiKeys', normalized);
      box.value = normalized;
      toast(S('toastDeepLKeysSaved'));
      playSfx('settingChange');
    };

    testBtn.onclick = async () => {
      // Plays exactly once per click, immediately, regardless of the
      // eventual API result — this is a "button pressed" acknowledgment,
      // not a success/failure indicator (those still use toast()).
      playSfx('test');

      const originalLabel = S('btnTestDeepL');
      const normalized = parseDeepLKeys(box.value).join(', ');
      box.value = normalized;

      if (!normalized) return toast(S('toastDeepLKeysMissing'));

      testBtn.disabled = true;
      testBtn.textContent = S('toastDeepLTesting');

      const result = await testDeepLApi(normalized);

      testBtn.disabled = false;
      testBtn.textContent = originalLabel;

      if (result.ok) {
        const used = Number(result.data?.character_count || 0).toLocaleString();
        const limitRaw = Number(result.data?.character_limit || 0);
        const limit = limitRaw > 0 ? limitRaw.toLocaleString() : '∞';
        return toast(`${S('toastDeepLOk')} · ${maskDeepLKey(result.apiKey)} · ${used}/${limit}`);
      }
      if (result.reason === 'missing_keys') return toast(S('toastDeepLKeysMissing'));

      const statusText = result?.status ? `HTTP ${result.status}` : 'NETWORK';
      toast(`${S('toastDeepLFail')} · ${maskDeepLKey(result?.apiKey)} · ${statusText}`, 4200);
    };
  }

  function setupPanelPills(panel) {
    setExclusivePills(panel, 'data-eng', (engine) => {
      save('engine', engine);
      playSfx('settingChange');
      if (engine === 'deepl' && !parseDeepLKeys().length) toast(S('toastDeepLKeysMissing'));
    });
    setExclusivePills(panel, 'data-tone', (tone) => { save('tone', tone); playSfx('settingChange'); });
    setExclusivePills(panel, 'data-th', (theme) => {
      save('theme', theme);
      save('customColors', null);
      cfg.customColors = null;
      playSfx('themeChange');
      // Reset the color pickers to the new theme's values
      const base = THEMES[theme] || THEMES.dark;
      ['clr-acc', 'clr-bg', 'clr-ok'].forEach((id, i) => {
        const key = ['acc', 'bg', 'ok'][i];
        const inp = panel.querySelector(`#${id}`);
        if (inp) inp.value = colorToHex(base[key] || '#888888');
      });
      applyTheme(theme);
    });
    setExclusivePills(panel, 'data-upd', (mode) => {
      cfg.updateMode = sanitizeUpdateMode(mode);
      save('updateMode', cfg.updateMode);
      playSfx('settingChange');
    });
  }

  function setupPanelToggles(panel) {
    const toggleKeys = ['bilingualMode', 'autoConvert', 'autoScroll', 'incognito', 'autoTranslateOnScroll'];
    panel.querySelectorAll('.tog-row').forEach((row, i) => {
      const key = toggleKeys[i];
      if (!key) return;
      row.appendChild(mkToggle(cfg[key], v => {
        save(key, v);
        playSfx(v ? 'toggleOn' : 'toggleOff');
        if (key === 'bilingualMode') {
          document.querySelectorAll('.rtp-btn.done').forEach(btn => renderTranslatedState(btn, btn._targetEl));
          syncControlVisibility();
        }
      }));
    });
  }

  function setupRequestLimitControls(panel) {
    const sl = panel.querySelector('#sl-delay');
    sl.oninput = () => {
      save('requestDelay', +sl.value);
      panel.querySelector('#sl-val').textContent = sl.value + ' ' + S('unitMs');
      playSfx('settingChange');
    };

    [
      ['#limit-concurrency', 'maxConcurrentRequests', DEF.maxConcurrentRequests, 1, 20],
      ['#limit-rps', 'maxRequestsPerSecond', DEF.maxRequestsPerSecond, 1, 50],
      ['#limit-chars', 'maxTextLengthPerRequest', DEF.maxTextLengthPerRequest, 100, 20000],
      ['#limit-paragraphs', 'maxParagraphsPerRequest', DEF.maxParagraphsPerRequest, 1, 100],
    ].forEach(([selector, key, fallback, min, max]) => {
      const input = panel.querySelector(selector);
      if (!input) return;
      const sync = () => {
        const value = getPositiveInt(input.value, fallback, min, max);
        input.value = value;
        save(key, value);
        playSfx('settingChange');
      };
      input.addEventListener('change', sync);
      input.addEventListener('blur', sync);
    });
  }

  function setupHotkeyCapturer(panel, btnId, resetId, cfgKey, defaultVal) {
    const btn = panel.querySelector(`#${btnId}`);
    const rst = panel.querySelector(`#${resetId}`);
    if (!btn || !rst) return;

    let capturing = false;
    let captureHandler = null;
    const stopCapture = () => {
      if (captureHandler) document.removeEventListener('keydown', captureHandler, true);
      captureHandler = null;
      capturing = false;
      btn.classList.remove('capturing');
    };

    btn.onclick = () => {
      if (capturing) return;
      capturing = true;
      btn.textContent = S('hotkeyPress');
      btn.classList.add('capturing');

      captureHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (['Control', 'Alt', 'Shift', 'Meta'].includes(e.key)) return;

        const parts = [];
        if (e.ctrlKey) parts.push('Ctrl');
        if (e.altKey) parts.push('Alt');
        if (e.shiftKey) parts.push('Shift');
        if (e.metaKey) parts.push('Meta');
        parts.push(e.key.length === 1 ? e.key.toUpperCase() : e.key);

        const combo = parts.join('+');
        save(cfgKey, combo);
        btn.textContent = combo;
        playSfx('settingChange');
        stopCapture();
      };

      document.addEventListener('keydown', captureHandler, true);
    };

    rst.onclick = () => {
      stopCapture();
      save(cfgKey, defaultVal);
      btn.textContent = defaultVal;
      playSfx('settingChange');
    };
  }

  function setupPanelHotkeys(panel) {
    setupHotkeyCapturer(panel, 'hk-panel', 'hk-panel-r', 'hotkeyPanel', 'F2');
  }

  function setupPanelColorPickers(panel) {
    const base = THEMES[cfg.theme] || THEMES.dark;
    const merged = Object.assign({}, base, getCustomColors());
    const colorInputs = [
      { id: 'clr-acc', key: 'acc' },
      { id: 'clr-bg',  key: 'bg'  },
      { id: 'clr-ok',  key: 'ok'  },
    ];

    colorInputs.forEach(({ id, key }) => {
      const inp = panel.querySelector(`#${id}`);
      if (!inp) return;
      inp.value = colorToHex(merged[key] || '#888888');
      inp.oninput = () => {
        const newCC = getCustomColors();
        newCC[key] = inp.value;

        if (key === 'bg') {
          const r = parseInt(inp.value.slice(1, 3), 16);
          const g = parseInt(inp.value.slice(3, 5), 16);
          const b = parseInt(inp.value.slice(5, 7), 16);
          newCC.surf = `rgba(${r},${g},${b},.85)`;
        }
        if (key === 'acc') {
          const r = parseInt(inp.value.slice(1, 3), 16);
          const g = parseInt(inp.value.slice(3, 5), 16);
          const b = parseInt(inp.value.slice(5, 7), 16);
          newCC.glow = `rgba(${r},${g},${b},.38)`;
          newCC.dim = `rgba(${r},${g},${b},.11)`;
        }
        if (key === 'ok') {
          const r = parseInt(inp.value.slice(1, 3), 16);
          const g = parseInt(inp.value.slice(3, 5), 16);
          const b = parseInt(inp.value.slice(5, 7), 16);
          newCC.okd = `rgba(${r},${g},${b},.11)`;
        }

        save('customColors', JSON.stringify(newCC));
        applyTheme(cfg.theme);
        playSfx('settingChange');
      };
    });

    panel.querySelector('#btn-reset-clr').onclick = () => {
      save('customColors', null);
      applyTheme(cfg.theme);
      playSfx('settingChange');
      colorInputs.forEach(({ id, key }) => {
        const inp = panel.querySelector(`#${id}`);
        if (inp) inp.value = colorToHex(base[key] || '#888888');
      });
    };
  }

  // Sound Effects settings block: master toggle, volume, per-category
  // switches, and the Test Sound button. All changes save immediately.
  function setupPanelSoundControls(panel) {
    const body = panel.querySelector('#snd-body');
    const syncBodyState = () => {
      if (!body) return;
      body.style.opacity = cfg.soundEnabled ? '1' : '.45';
      body.style.pointerEvents = cfg.soundEnabled ? '' : 'none';
    };

    const enabledRow = panel.querySelector('#snd-enabled-row');
    if (enabledRow) {
      enabledRow.appendChild(mkToggle(cfg.soundEnabled, v => {
        save('soundEnabled', v);
        syncBodyState();
        // Force so the user hears immediate confirmation even when
        // switching sound itself on/off.
        playSfx(v ? 'toggleOn' : 'toggleOff', { force: true });
      }));
    }
    syncBodyState();

    const volSlider = panel.querySelector('#sl-sound-vol');
    const volLabel = panel.querySelector('#sl-sound-vol-val');
    if (volSlider) {
      volSlider.oninput = () => {
        const pct = getPositiveInt(volSlider.value, 55, 0, 100);
        const v = clamp01(pct / 100);
        cfg.soundVolume = v;
        GM_setValue(PREFIX + 'soundVolume', v);
        sfxSetVolume(v);
        if (volLabel) volLabel.textContent = pct + '%';
      };
    }

    panel.querySelectorAll('[data-snd-cat]').forEach(row => {
      const cat = row.dataset.sndCat;
      if (!(cat in SFX_DEFAULT_EVENTS)) return;
      row.appendChild(mkToggle(cfg.soundEvents[cat] !== false, v => {
        cfg.soundEvents = Object.assign({}, cfg.soundEvents, { [cat]: v });
        GM_setValue(PREFIX + 'soundEvents', JSON.stringify(cfg.soundEvents));
        playSfx(v ? 'toggleOn' : 'toggleOff');
      }));
    });

    const testBtn = panel.querySelector('#btn-test-sound');
    if (testBtn) testBtn.onclick = () => playSfxTestSequence();
  }

  // ── Import/export security ──────────────────────────────────────────────
  // Config keys that must never leave this machine via export, and must
  // never be overwritten by an imported file — they can only be changed
  // through the dedicated API-key UI (Save button next to the DeepL box).
  const SECRET_CONFIG_KEYS = ['deeplApiKeys'];
  const KNOWN_ENGINES = ['google', 'mymemory', 'deepl'];
  const KNOWN_THEMES = Object.keys(THEMES);
  const KNOWN_TONES = ['normal', 'formal', 'slang'];

  // Treats imported JSON as untrusted input: every field is individually
  // validated against an allow-list/range/type before it's ever assigned to
  // `cfg`. Anything invalid, unknown, or missing is simply dropped (the
  // existing local value stays). Secrets (SECRET_CONFIG_KEYS) are never
  // read from `src` at all, by construction — there is no code path here
  // that can pull deeplApiKeys out of an imported file.
  function sanitizeImportedConfig(src) {
    const out = {};
    const isNum = v => typeof v === 'number' && Number.isFinite(v);

    if (typeof src.targetLang === 'string' && ALL_LANGS.includes(src.targetLang)) out.targetLang = src.targetLang;
    if (typeof src.uiLang === 'string' && UI_SUPPORTED.includes(src.uiLang)) out.uiLang = src.uiLang;
    if (typeof src.theme === 'string' && KNOWN_THEMES.includes(src.theme)) out.theme = src.theme;
    if (typeof src.engine === 'string' && KNOWN_ENGINES.includes(src.engine)) out.engine = src.engine;
    if (typeof src.tone === 'string' && KNOWN_TONES.includes(src.tone)) out.tone = src.tone;

    if (isNum(src.requestDelay)) out.requestDelay = Math.min(600, Math.max(50, Math.round(src.requestDelay)));
    if (src.maxConcurrentRequests !== undefined) out.maxConcurrentRequests = getPositiveInt(src.maxConcurrentRequests, DEF.maxConcurrentRequests, 1, 20);
    if (src.maxRequestsPerSecond !== undefined) out.maxRequestsPerSecond = getPositiveInt(src.maxRequestsPerSecond, DEF.maxRequestsPerSecond, 1, 50);
    if (src.maxTextLengthPerRequest !== undefined) out.maxTextLengthPerRequest = getPositiveInt(src.maxTextLengthPerRequest, DEF.maxTextLengthPerRequest, 100, 20000);
    if (src.maxParagraphsPerRequest !== undefined) out.maxParagraphsPerRequest = getPositiveInt(src.maxParagraphsPerRequest, DEF.maxParagraphsPerRequest, 1, 100);

    ['bilingualMode', 'autoConvert', 'autoScroll', 'incognito', 'autoTranslateOnScroll'].forEach(k => {
      if (typeof src[k] === 'boolean') out[k] = src[k];
    });

    if (typeof src.soundEnabled === 'boolean') out.soundEnabled = src.soundEnabled;
    if (src.soundVolume !== undefined) out.soundVolume = clamp01(src.soundVolume);
    if (src.soundEvents !== undefined) out.soundEvents = sanitizeSoundEvents(src.soundEvents);
    if (src.updateMode !== undefined) out.updateMode = sanitizeUpdateMode(src.updateMode);

    if (typeof src.hotkeyPanel === 'string' && src.hotkeyPanel.length > 0 && src.hotkeyPanel.length <= 40) out.hotkeyPanel = src.hotkeyPanel;
    if (src.customColors === null || typeof src.customColors === 'string') out.customColors = src.customColors;
    if (isNum(src.totalChars)) out.totalChars = Math.max(0, Math.floor(src.totalChars));
    if (isNum(src.totalCount)) out.totalCount = Math.max(0, Math.floor(src.totalCount));
    if (isNum(src.lastUpdateCheck)) out.lastUpdateCheck = Math.max(0, Math.floor(src.lastUpdateCheck));
    if (typeof src.lastNotifiedVersion === 'string') out.lastNotifiedVersion = src.lastNotifiedVersion.slice(0, 40);

    // Deliberately no branch reads src.deeplApiKeys (or any future secret
    // key) here — imported settings can never redefine local credentials,
    // and they can never redefine updateURL/downloadURL/repository/API
    // endpoints either, because those are plain literals that never
    // appear as DEF/cfg keys in the first place.
    return out;
  }

  function setupPanelMiscControls(panel) {
    panel.querySelector('#btn-rpos').onclick = () => {
      panel.style.top = '11%';
      panel.style.left = 'calc(50% - 186px)';
      GM_setValue(PREFIX + 'panelX', null);
      GM_setValue(PREFIX + 'panelY', null);
      playSfx('buttonClick');
    };

    const checkBtn = panel.querySelector('#btn-check-updates');
    if (checkBtn) {
      checkBtn.onclick = () => {
        playSfx('buttonClick');
        performUpdateCheck({ manual: true });
      };
    }
    // Reflect whatever the last check already found (if any), without
    // triggering a new network request just from opening the panel.
    if (cfg.lastNotifiedVersion && compareSemver(cfg.lastNotifiedVersion, CURRENT_VERSION) > 0) {
      renderUpdateStatus(panel, cfg.lastNotifiedVersion);
    }

    panel.querySelector('#btn-ccache').onclick = () => {
      cache = {};
      flushCache();
      toast(S('cacheCleared'));
      playSfx('cacheClear');
    };

    panel.querySelector('#btn-exp').onclick = () => {
      // Sanitized copy: secrets (DeepL API keys) must never leave this
      // machine via the exported settings file.
      const exportCfg = { ...cfg };
      SECRET_CONFIG_KEYS.forEach(k => { delete exportCfg[k]; });
      const a = document.createElement('a');
      a.href = 'data:text/json,' + encodeURIComponent(JSON.stringify({ v: 8, cfg: exportCfg }, null, 2));
      a.download = 'rtp-v8-settings.json';
      a.click();
      playSfx('export');
    };

    panel.querySelector('#btn-imp').onclick = () => {
      // Acknowledge the actual click immediately — reuses the existing
      // "import" event/generator (no new event, no duplicate audio system).
      // The already-existing completion-time playSfx('import') below is
      // untouched: that one confirms the import actually succeeded, right
      // before the reload.
      playSfx('import');

      const inp = document.createElement('input');
      inp.type = 'file';
      inp.accept = '.json';
      inp.onchange = e => {
        const fr = new FileReader();
        fr.onload = ev => {
          try {
            const d = JSON.parse(ev.target.result);
            const src = (d && typeof d === 'object') ? (d.cfg || d) : null;
            if (!src || typeof src !== 'object') throw new Error('invalid import payload');

            // Imported JSON is untrusted input: every field is validated
            // against an allow-list/range/type below. Secrets (DeepL API
            // keys) are never read from the import at all — the existing
            // local key(s) are always preserved untouched. updateURL/
            // downloadURL/repository/API-endpoint values are never part of
            // `cfg` in the first place, so imported JSON has no path to
            // redefine them either.
            const sanitized = sanitizeImportedConfig(src);
            Object.entries(sanitized).forEach(([k, v]) => {
              cfg[k] = v;
              GM_setValue(PREFIX + k, v);
            });

            playSfx('import', { force: true });
            // Short delay so the import sound can actually start before reload.
            setTimeout(() => location.reload(), 150);
          } catch {
            playSfx('importError');
            toast(S('toastImportError'));
          }
        };
        fr.readAsText(e.target.files[0]);
      };
      inp.click();
    };

    panel.querySelector('#btn-surp').onclick = () => {
      const r = ALL_LANGS[Math.floor(Math.random() * ALL_LANGS.length)];
      save('targetLang', r);
      toast(`${S('toastSurprise')} ${getLangName(r)}`);
      playSfx('settingChange');
      setTimeout(() => location.reload(), 1100);
    };

    const pirBtn = panel.querySelector('#btn-pir');
    pirBtn.onclick = () => {
      pirateMode = !pirateMode;
      pirBtn.classList.toggle('active', pirateMode);
      toast(pirateMode ? S('toastPirateOn') : S('toastPirateOff'));
      playSfx(pirateMode ? 'pirateOn' : 'pirateOff');
    };
    pirBtn.classList.toggle('active', pirateMode);

    const yodBtn = panel.querySelector('#btn-yoda');
    yodBtn.onclick = () => {
      yodaMode = !yodaMode;
      yodBtn.classList.toggle('active', yodaMode);
      toast(yodaMode ? S('toastYodaOn') : S('toastYodaOff'));
      playSfx(yodaMode ? 'yodaOn' : 'yodaOff');
    };
    yodBtn.classList.toggle('active', yodaMode);

    const hideBtn = panel.querySelector('#btn-hide');
    hideBtn.classList.toggle('active', btnsHidden);
    hideBtn.onclick = () => {
      btnsHidden = !btnsHidden;
      syncControlVisibility();
      hideBtn.textContent = btnsHidden ? S('btnShow') : S('btnHide');
      hideBtn.classList.toggle('active', btnsHidden);
      playSfx(btnsHidden ? 'toggleOff' : 'toggleOn');
    };

  }

  function setupPanelTabs(panel) {
    panel.querySelectorAll('.tab').forEach(tab => tab.onclick = () => {
      if (activeTab === tab.dataset.tab) return;
      activeTab = tab.dataset.tab;
      panel.querySelectorAll('.tab').forEach(t => t.classList.remove('on'));
      tab.classList.add('on');
      panel.querySelectorAll('.pane').forEach(p => p.style.display = 'none');
      panel.querySelector(`#pane-${activeTab}`).style.display = 'flex';
      playSfx('tabChange');
      if (activeTab === 'history') renderHistory(panel);
      if (activeTab === 'settings') updateStats();
    });
  }

  function setupPanelDrag(panel) {
    const hdr = panel.querySelector('#rtp-hdr');
    hdr.onmousedown = e => {
      if (e.target.id === 'rtp-close') return;
      const ox = e.clientX - panel.offsetLeft;
      const oy = e.clientY - panel.offsetTop;
      const mm = ev => {
        panel.style.left = (ev.clientX - ox) + 'px';
        panel.style.top = (ev.clientY - oy) + 'px';
      };
      const cleanup = () => {
        GM_setValue(PREFIX + 'panelX', panel.style.left);
        GM_setValue(PREFIX + 'panelY', panel.style.top);
        document.removeEventListener('mousemove', mm);
        document.removeEventListener('mouseup', cleanup);
      };
      document.addEventListener('mousemove', mm);
      document.addEventListener('mouseup', cleanup, { once: true });
      document.addEventListener('mouseleave', cleanup, { once: true });
    };
  }

  function buildPanel() {
    const old = document.getElementById('rtp-panel');
    if (old) { old.remove(); playSfx('panelClose'); return; }

    const panel = document.createElement('div'); panel.id = 'rtp-panel';
    panel.style.top = GM_getValue(PREFIX + 'panelY', '11%');
    panel.style.left = GM_getValue(PREFIX + 'panelX', 'calc(50% - 186px)');

    panel.innerHTML = `
        <div id="rtp-hdr">
            <div class="logo-w">
                <div class="logo-ic">🌐</div>
                <div>
                    <div class="logo-nm">${S('title')}</div>
                    <div class="logo-vr">${S('ver')} · ${escapeHtml(cfg.hotkeyPanel)}</div>
                </div>
            </div>
            <button id="rtp-close">✕</button>
        </div>

        <div id="rtp-stats">
            <div class="st"><div class="st-v" id="st-cnt">${fmt(cfg.totalCount)}</div><div class="st-l">${S('statTranslations')}</div></div>
            <div class="st"><div class="st-v" id="st-chr">${fmtK(cfg.totalChars)}</div><div class="st-l">${S('statChars')}</div></div>
            <div class="st"><div class="st-v" id="st-pg">…</div><div class="st-l">${S('statOnPage')}</div></div>
        </div>

        <div id="rtp-tabs">
            <div class="tab ${activeTab === 'settings' ? 'on' : ''}" data-tab="settings">${S('tabSettings')}</div>
            <div class="tab ${activeTab === 'history' ? 'on' : ''}"  data-tab="history">${S('tabHistory')}</div>
            <div class="tab ${activeTab === 'extras' ? 'on' : ''}"   data-tab="extras">${S('tabExtras')}</div>
        </div>

        <!-- SETTINGS -->
        <div id="pane-settings" class="pane" style="display:${activeTab === 'settings' ? 'flex' : 'none'}">

            <div>
                <span class="lbl">${S('secUiLang')}</span>
                <div class="lang-wrap">
                    <input class="lang-search" id="ui-s" placeholder="${S('searchLang')}">
                    <div class="lang-sel" id="ui-sel" role="listbox" tabindex="0"></div>
                </div>
                <button class="btn-p" id="btn-apply-ui" style="margin-top:8px;height:40px;font-size:11px;">${S('applyUi')}</button>
            </div>

            <div class="div"></div>

            <div>
                <span class="lbl">${S('secTargetLang')}</span>
                <div class="lang-wrap">
                    <input class="lang-search" id="tg-s" placeholder="${S('searchLang')}">
                    <div class="lang-sel" id="tg-sel" role="listbox" tabindex="0"></div>
                </div>
                <button class="btn-p" id="btn-save-lang" style="margin-top:8px;height:40px;font-size:11px;">${S('saveLang')}</button>
            </div>

            <div class="div"></div>

            <div>
                <span class="lbl">${S('secEngine')}</span>
                <div class="pills">
                    <div class="pill ${cfg.engine === 'google' ? 'on' : ''}" data-eng="google">${S('engGoogle')}</div>
                    <div class="pill ${cfg.engine === 'mymemory' ? 'on' : ''}" data-eng="mymemory">${S('engMymemory')}</div>
                    <div class="pill ${cfg.engine === 'deepl' ? 'on' : ''}" data-eng="deepl">${S('engDeepL')}</div>
                </div>
            </div>

            <div>
                <div class="api-head">
                    <span class="lbl">${S('secDeepLApi')}</span>
                    <button type="button" class="api-eye" id="btn-toggle-deepl-visibility" title="${S('btnToggleSecretsShow')}">${S('btnToggleSecretsShow')}</button>
                </div>
                <div class="api-wrap">
                    <textarea class="api-box masked" id="deepl-api-keys" spellcheck="false" autocapitalize="off" autocomplete="off" placeholder="${S('deeplApiPlaceholder')}">${escapeHtml(cfg.deeplApiKeys || '')}</textarea>
                </div>
                <div class="api-help">${S('deeplApiHelp')}</div>
                <div class="g2" style="margin-top:8px;">
                    <button class="btn-p ghost" id="btn-save-deepl" style="height:40px;font-size:11px;">${S('saveDeepLApi')}</button>
                    <button class="btn-p ghost" id="btn-test-deepl" style="height:40px;font-size:11px;">${S('btnTestDeepL')}</button>
                </div>
            </div>

            <div>
                <span class="lbl">${S('secTone')}</span>
                <div class="pills">
                    <div class="pill ${cfg.tone === 'normal' ? 'on' : ''}" data-tone="normal">${S('toneNeutral')}</div>
                    <div class="pill ${cfg.tone === 'formal' ? 'on' : ''}" data-tone="formal">${S('toneFormal')}</div>
                    <div class="pill ${cfg.tone === 'slang' ? 'on' : ''}"  data-tone="slang">${S('toneSlang')}</div>
                </div>
            </div>

            <div class="div"></div>

            <div>
                <span class="lbl">${S('secTheme')}</span>
                <div class="pills">
                    <div class="pill ${cfg.theme === 'dark' ? 'on' : ''}"      data-th="dark">${S('themeDark')}</div>
                    <div class="pill ${cfg.theme === 'cyberpunk' ? 'on' : ''}" data-th="cyberpunk">${S('themeCyber')}</div>
                    <div class="pill ${cfg.theme === 'dracula' ? 'on' : ''}"   data-th="dracula">${S('themeDracula')}</div>
                </div>
            </div>

            <div class="div"></div>

            <div class="tog-row"><span class="tog-lbl">${S('togBilingual')}</span></div>
            <div class="tog-row"><span class="tog-lbl">${S('togAutoConvert')}</span></div>
            <div class="tog-row"><span class="tog-lbl">${S('togAutoScroll')}</span></div>
            <div class="tog-row"><span class="tog-lbl">${S('togIncognito')}</span></div>
            <div class="tog-row"><span class="tog-lbl">${S('togAutoTranslateOnScroll')}</span></div>

            <div class="div"></div>

            <div class="upd-section">
                <span class="lbl">${S('secUpdates')}</span>
                <div class="upd-modes">
                    <div class="upd-mode-pill ${cfg.updateMode === 'auto' ? 'on' : ''}" data-upd="auto" title="${escapeHtml(S('updModeAuto'))}">${S('updModeAuto')}</div>
                    <div class="upd-mode-pill ${cfg.updateMode === 'notify' ? 'on' : ''}" data-upd="notify" title="${escapeHtml(S('updModeNotify'))}">${S('updModeNotify')}</div>
                    <div class="upd-mode-pill ${cfg.updateMode === 'off' ? 'on' : ''}" data-upd="off" title="${escapeHtml(S('updModeOff'))}">${S('updModeOff')}</div>
                </div>
                <div class="api-help" style="margin-top:8px;">${S('updManagerNote')}</div>
                <div class="upd-row">
                    <span class="upd-version">${S('updCurrentVersion')}: v${escapeHtml(CURRENT_VERSION)}</span>
                    <span class="api-help" id="upd-status-line"></span>
                </div>
                <div class="btn-s upd-check-btn" id="btn-check-updates">${S('btnCheckUpdates')}</div>
            </div>

            <div class="div"></div>

            <div class="g2">
                <div class="btn-s" id="btn-rpos">${S('btnResetPos')}</div>
                <div class="btn-s" id="btn-ccache">${S('btnClearCache')}</div>
            </div>
            <div class="g2">
                <div class="btn-s" id="btn-exp">${S('btnExport')}</div>
                <div class="btn-s" id="btn-imp">${S('btnImport')}</div>
            </div>
        </div>

        <!-- HISTORY -->
        <div id="pane-history" class="pane" style="display:${activeTab === 'history' ? 'flex' : 'none'}"></div>

        <!-- EXTRAS -->
        <div id="pane-extras" class="pane" style="display:${activeTab === 'extras' ? 'flex' : 'none'}">
            <div class="g2">
                <div class="btn-s" id="btn-surp">${S('btnSurprise')}</div>
                <div class="btn-s" id="btn-pir" >${S('btnPirate')}</div>
            </div>
            <div class="g2">
                <div class="btn-s" id="btn-yoda">${S('btnYoda')}</div>
                <div class="btn-s" id="btn-hide">${btnsHidden ? S('btnShow') : S('btnHide')}</div>
            </div>
            <div class="div"></div>
            <div>
                <span class="lbl">${S('sliderDelay')}</span>
                <input type="range" class="slider" id="sl-delay" min="50" max="600" value="${cfg.requestDelay}">
                <div class="slider-v" id="sl-val">${cfg.requestDelay} ${S('unitMs')}</div>
            </div>
            <div>
                <span class="lbl">${S('secRequestLimits')}</span>
                <div class="num-grid">
                    <div class="num-card">
                        <span class="num-lbl">${S('maxConcurrentRequests')}</span>
                        <input type="number" class="num-inp" id="limit-concurrency" min="1" max="20" step="1" value="${getMaxConcurrentRequests()}">
                    </div>
                    <div class="num-card">
                        <span class="num-lbl">${S('maxRequestsPerSecond')}</span>
                        <input type="number" class="num-inp" id="limit-rps" min="1" max="50" step="1" value="${getMaxRequestsPerSecond()}">
                    </div>
                    <div class="num-card">
                        <span class="num-lbl">${S('maxTextLengthPerRequest')}</span>
                        <input type="number" class="num-inp" id="limit-chars" min="100" max="20000" step="100" value="${getMaxTextLengthPerRequest()}">
                    </div>
                    <div class="num-card">
                        <span class="num-lbl">${S('maxParagraphsPerRequest')}</span>
                        <input type="number" class="num-inp" id="limit-paragraphs" min="1" max="100" step="1" value="${getMaxParagraphsPerRequest()}">
                    </div>
                </div>
            </div>
            <div class="div"></div>
            <div>
                <span class="lbl">⌨️ ${S('secHotkeys')}</span>
                <div class="hk-row">
                    <span class="hk-lbl">${S('hotkeyPanel')}</span>
                    <button class="hk-btn" id="hk-panel">${escapeHtml(cfg.hotkeyPanel)}</button>
                    <button class="hk-reset" id="hk-panel-r">${S('hotkeyReset')}</button>
                </div>
            </div>
            <div class="div"></div>
            <div>
                <span class="lbl">🎨 ${S('secColors')}</span>
                <div class="clr-grid">
                    <div class="clr-row"><span class="clr-lbl">${S('colorAcc')}</span><input type="color" class="clr-inp" id="clr-acc"></div>
                    <div class="clr-row"><span class="clr-lbl">${S('colorBg')}</span><input type="color" class="clr-inp" id="clr-bg"></div>
                    <div class="clr-row"><span class="clr-lbl">${S('colorOk')}</span><input type="color" class="clr-inp" id="clr-ok"></div>
                </div>
                <div class="btn-s" id="btn-reset-clr" style="margin-top:8px;">${S('btnResetColors')}</div>
            </div>

            <div class="div"></div>
            <div>
                <span class="lbl">🔊 ${S('secSound')}</span>
                <div class="tog-row" id="snd-enabled-row"><span class="tog-lbl">${S('togSoundEnabled')}</span></div>
                <div id="snd-body" style="margin-top:8px;">
                    <span class="lbl" style="margin-bottom:4px;">${S('secSoundVolume')}</span>
                    <input type="range" class="slider" id="sl-sound-vol" min="0" max="100" value="${Math.round(clamp01(cfg.soundVolume) * 100)}">
                    <div class="slider-v" id="sl-sound-vol-val">${Math.round(clamp01(cfg.soundVolume) * 100)}%</div>
                    <div style="margin-top:10px;">
                        <span class="lbl" style="margin-bottom:6px;">${S('secSoundEvents')}</span>
                        <div style="display:flex;flex-direction:column;gap:2px;">
                            <div class="tog-row" data-snd-cat="buttonClicks"><span class="tog-lbl">${S('sndCatButtons')}</span></div>
                            <div class="tog-row" data-snd-cat="translation"><span class="tog-lbl">${S('sndCatTranslation')}</span></div>
                            <div class="tog-row" data-snd-cat="copy"><span class="tog-lbl">${S('sndCatCopy')}</span></div>
                            <div class="tog-row" data-snd-cat="retry"><span class="tog-lbl">${S('sndCatRetry')}</span></div>
                            <div class="tog-row" data-snd-cat="panel"><span class="tog-lbl">${S('sndCatPanel')}</span></div>
                            <div class="tog-row" data-snd-cat="tabs"><span class="tog-lbl">${S('sndCatTabs')}</span></div>
                            <div class="tog-row" data-snd-cat="settings"><span class="tog-lbl">${S('sndCatSettings')}</span></div>
                            <div class="tog-row" data-snd-cat="toggles"><span class="tog-lbl">${S('sndCatToggles')}</span></div>
                            <div class="tog-row" data-snd-cat="cache"><span class="tog-lbl">${S('sndCatCache')}</span></div>
                            <div class="tog-row" data-snd-cat="history"><span class="tog-lbl">${S('sndCatHistory')}</span></div>
                            <div class="tog-row" data-snd-cat="importExport"><span class="tog-lbl">${S('sndCatImportExport')}</span></div>
                            <div class="tog-row" data-snd-cat="modes"><span class="tog-lbl">${S('sndCatModes')}</span></div>
                            <div class="tog-row" data-snd-cat="automatic"><span class="tog-lbl">${S('sndCatAutomatic')}</span></div>
                        </div>
                    </div>
                    <div class="btn-s" id="btn-test-sound" style="margin-top:10px;">${S('btnTestSound')}</div>
                </div>
            </div>
        </div>
        `;

    document.body.appendChild(panel);
    setupPanelLanguageControls(panel);
    setupDeepLControls(panel);
    setupPanelPills(panel);
    setupPanelToggles(panel);
    setupRequestLimitControls(panel);
    setupPanelHotkeys(panel);
    setupPanelColorPickers(panel);
    setupPanelSoundControls(panel);
    setupPanelMiscControls(panel);
    setupPanelTabs(panel);
    renderHistory(panel);
    setupPanelDrag(panel);
    panel.querySelector('#rtp-close').onclick = () => { panel.remove(); playSfx('panelClose'); };
    updateStats();
    playSfx('panelOpen');
  }

  function renderHistory(panel) {
    const pane = panel.querySelector('#pane-history');
    if (!pane) return;
    pane.innerHTML = '';

    if (!history.length) {
      pane.innerHTML = `<div style="text-align:center;color:var(--rtp-mut);padding:28px 0;font-size:13px;">📭 ${S('histEmpty')}</div>`;
      return;
    }

    history.forEach(item => {
      const div = document.createElement('div'); div.className = 'hi';
      const o = document.createElement('div'); o.className = 'hi-o'; o.textContent = item.orig;
      const t = document.createElement('div'); t.className = 'hi-t'; t.textContent = item.translated;
      const m = document.createElement('div'); m.className = 'hi-m'; m.textContent = `→ ${item.lang.toUpperCase()} · ${new Date(item.ts).toLocaleTimeString()}`;
      div.append(o, t, m);
      div.onclick = () => navigator.clipboard.writeText(item.translated).then(() => { toast(S('copied')); playSfx('historyCopy'); });
      pane.appendChild(div);
    });

    const clr = document.createElement('div'); clr.className = 'btn-s'; clr.style.marginTop = '4px';
    clr.textContent = S('histClear');
    clr.onclick = () => { history = []; GM_setValue(PREFIX + 'rtp_v8_history', '[]'); renderHistory(panel); playSfx('historyClear'); };
    pane.appendChild(clr);
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // § INITIALIZATION
  // ═══════════════════════════════════════════════════════════════════════════
  if (cfg.theme === 'light') { save('theme', 'dark'); cfg.theme = 'dark'; }
  applyTheme(cfg.theme);
  createTranslateFab();
  createViewToggle();
  injectButtons();

  // Deferred so the very first page interactions (translation, button
  // injection) never compete with this for the main thread or network.
  // No-ops entirely when updateMode is 'off' or the last check was recent.
  setTimeout(maybeRunBackgroundUpdateCheck, 4000);

  function matchesHotkey(e, combo) {
    if (!combo) return false;
    const parts = combo.split('+');
    const key = parts[parts.length - 1];
    const needCtrl = parts.includes('Ctrl');
    const needAlt = parts.includes('Alt');
    const needShift = parts.includes('Shift');
    const needMeta = parts.includes('Meta');
    return e.key === key &&
      e.ctrlKey === needCtrl &&
      e.altKey === needAlt &&
      e.shiftKey === needShift &&
      e.metaKey === needMeta;
  }

  window.addEventListener('keydown', e => {
    if (matchesHotkey(e, cfg.hotkeyPanel)) { e.preventDefault(); buildPanel(); }
  });

})();
