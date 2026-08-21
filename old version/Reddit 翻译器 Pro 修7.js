// ==UserScript==
// @name        🌐Reddit 翻译器 Pro Auto
// @name:en     🌐Reddit Translator Pro Auto
// @name:ru     🌐Reddit Переводчик Pro Auto
// @name:uk     🌐Reddit Перекладач Pro Auto
// @name:de     🌐Reddit Übersetzer Pro Auto
// @name:fr     🌐Reddit Traducteur Pro Auto
// @name:es     🌐Reddit Traductor Pro Auto
// @name:it     🌐Reddit Traduttore Pro Auto
// @name:pl     🌐Reddit Tłumacz Pro Auto
// @name:tr     🌐Reddit Çevirmeni Pro Auto
// @name:vi     🌐Reddit Biên Dịch Viên Pro Auto
// @name:ko     🌐Reddit 번역기 Pro Auto
// @name:ja     🌐Reddit 翻訳者 Pro Auto
// @name:zh-CN  🌐Reddit 翻译器 Pro Auto
// @name:zh-HK  🌐Reddit 翻譯器 Pro Auto
// @name:zh-TW  🌐Reddit 翻譯器 Pro Auto
// @namespace    https://github.com/Dylan-ZQL
// @homepageURL  https://github.com/Dylan-ZQL/reddit-translator-auto
// @supportURL   https://github.com/Dylan-ZQL/reddit-translator-auto/issues
// @version      1.0.9
// @description      🏷️业余 Reddit 翻译器 — glassmorphism、100+ 语言、TTS、Google、MyMemory、DeepL、历史记录、转换器、彩蛋、IntersectionObserver
// @description:zh-CN   🏷️业余Reddit翻译器 — glassmorphism、100多种语言、TTS、Google、MyMemory、DeepL、历史记录、转换器、彩蛋、IntersectionObserver
// @description:zh-HK   🏷️業餘Reddit翻譯器 — glassmorphism、100多種語言、TTS、Google、MyMemory、DeepL、歷史記錄、轉換器、彩蛋、IntersectionObserver
// @description:zh-TW   🏷️業餘Reddit翻譯器 — glassmorphism、100多種語言、TTS、Google、MyMemory、DeepL、歷史記錄、轉換器、彩蛋、IntersectionObserver
// @description:ru      🏷️Любительский переводчик Reddit — glassmorphism, 100+ языков, TTS, Google, MyMemory, DeepL, история, конвертеры, пасхалки, IntersectionObserver
// @description:uk      🏷️Любительський перекладач Reddit — glassmorphism, 100+ мов, TTS, Google, MyMemory, DeepL, історія, конвертери, пасхалки, IntersectionObserver
// @description:en      🏷️Amateur Reddit translator — glassmorphism, 100+ languages, TTS, Google, MyMemory, DeepL, history, converters, easter eggs, IntersectionObserver
// @description:de      🏷️Amateur-Reddit-Übersetzer — Glassmorphism, 100+ Sprachen, TTS, Google, MyMemory, DeepL, Verlauf, Konverter, Ostereier, IntersectionObserver
// @description:it      🏷️Traduttore Reddit amatoriale — glassmorphism, 100+ lingue, TTS, Google, MyMemory, DeepL, cronologia, convertitori, easter egg, IntersectionObserver
// @description:fr      🏷️Traducteur Reddit amateur — glassmorphism, 100+ langues, TTS, Google, MyMemory, DeepL, historique, convertisseurs, easter eggs, IntersectionObserver
// @description:es      🏷️Traductor Reddit amateur — glassmorphism, 100+ idiomas, TTS, Google, MyMemory, DeepL, historial, convertidores, easter eggs, IntersectionObserver
// @description:ko      🏷️아마추어 Reddit 번역기 — glassmorphism、100+ 언어、TTS、Google、MyMemory、DeepL、히스토리、변환기、이스터 에그、IntersectionObserver
// @description:pl      🏷️Amatorski tłumacz Reddit — glassmorphism, 100+ języków, TTS, Google, MyMemory, DeepL, historia, konwertery, easter eggi, IntersectionObserver
// @description:tr      🏷️Amatör Reddit çevirmeni — glassmorphism, 100+ dil, TTS, Google, MyMemory, DeepL, geçmiş, dönüştürücüler, sürprizler, IntersectionObserver
// @description:vi      🏷️Trình dịch Reddit nghiệp dư — glassmorphism, 100+ ngôn ngữ, TTS, Google, MyMemory, DeepL, lịch sử, bộ chuyển đổi, easter egg, IntersectionObserver
// @description:ja      🏷️アマチュアReddit翻訳者 — glassmorphism、100以上の言語、TTS、Google、MyMemory、DeepL、履歴、コンバーター、イースターエッグ、IntersectionObserver
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjI4IiBmaWxsPSIjZmY0NTAwIi8+CiAgPHRleHQgeD0iNjQiIHk9IjkwIiBmb250LXNpemU9IjcyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iU2Vnb2UgVUkgRW1vamksQXBwbGUgQ29sb3IgRW1vamksc2Fucy1zZXJpZiI+8J+MkDwvdGV4dD4KPC9zdmc+
// @author       Dylan-ZQL
// @license      MIT
// @match        https://www.reddit.com/*
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addStyle
// @connect      translate.googleapis.com
// @connect      api.mymemory.translated.net
// @connect      api.deepl.com
// @connect      api-free.deepl.com
// @downloadURL https://raw.githubusercontent.com/Dylan-ZQL/reddit-translator-auto/main/reddit-translator-pro-auto.user.js
// @updateURL https://raw.githubusercontent.com/Dylan-ZQL/reddit-translator-auto/main/reddit-translator-pro-auto.user.js
// ==/UserScript==

(function () {
  'use strict';

  // Unique prefix for this script to avoid conflicts with other scripts
  const PREFIX = '_x9_';

  // ═══════════════════════════════════════════════════════════════════════════
  // § КОНФИГУРАЦИЯ
  // ═══════════════════════════════════════════════════════════════════════════
  const DEF = {
    targetLang: 'zh',
    uiLang: 'zh',
    engine: 'google',
    tone: 'normal',
    theme: 'light',
    bilingualMode: true,
    ttsEnabled: true,
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
  };

  // Загружаем конфиг
  const cfg = Object.fromEntries(
    Object.entries(DEF).map(([k, def]) => [k, GM_getValue(PREFIX + k, def)])
  );

  function save(key, val) {
    cfg[key] = val;
    GM_setValue(PREFIX + key, val);
  }

  // Батч-сохранение счётчиков
  let statTimer = null;
  function flushStats() {
    clearTimeout(statTimer);
    statTimer = setTimeout(() => {
      GM_setValue(PREFIX + 'totalChars', cfg.totalChars);
      GM_setValue(PREFIX + 'totalCount', cfg.totalCount);
    }, 1200);
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // § КЭШ (TTL 24ч, лимит 600 записей, дебаунс записи)
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
  // § ИСТОРИЯ (50 записей)
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
  // § UI — МУЛЬТИЯЗЫЧНОСТЬ ИНТЕРФЕЙСА
  // ═══════════════════════════════════════════════════════════════════════════
  const UI_SUPPORTED = ['ru', 'uk', 'en', 'de', 'fr', 'es', 'pl', 'tr', 'zh', 'ja'];

  const STRINGS = {
    ru: {
      title: 'Reddit Переводчик', ver: 'v1.0.0',
      tabSettings: '⚙️ Настройки', tabHistory: '📖 История', tabExtras: '✨ Дополнения',
      secUiLang: 'Язык интерфейса', applyUi: '✨ ПРИМЕНИТЬ ИНТЕРФЕЙС',
      secTargetLang: 'Язык перевода', saveLang: '💾 СОХРАНИТЬ ЯЗЫК',
      secEngine: 'Движок', secTone: 'Стиль перевода', secTheme: 'Тема',
      engGoogle: 'Google', engMymemory: 'MyMemory',
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
      sliderDelay: 'Задержка запросов',
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
    },
    uk: {
      title: 'Reddit Перекладач', ver: 'v1.0.0',
      tabSettings: '⚙️ Налаштування', tabHistory: '📖 Історія', tabExtras: '✨ Додатково',
      secUiLang: 'Мова інтерфейсу', applyUi: '✨ ЗАСТОСУВАТИ ІНТЕРФЕЙС',
      secTargetLang: 'Мова перекладу', saveLang: '💾 ЗБЕРЕГТИ МОВУ',
      secEngine: 'Рушій', secTone: 'Стиль', secTheme: 'Тема',
      engGoogle: 'Google', engMymemory: 'MyMemory',
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
      sliderDelay: 'Затримка запитів',
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
    },
    en: {
      title: 'Reddit Translator', ver: 'v1.0.0',
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
      deeplApiHelp: 'Supports both Pro and Free keys. Keys ending with :fx use api-free.deepl.com automatically.',
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
      sliderDelay: 'Request delay',
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
    },
    de: {
      title: 'Reddit Übersetzer', ver: 'v1.0.0',
      tabSettings: '⚙️ Einstellungen', tabHistory: '📖 Verlauf', tabExtras: '✨ Extras',
      secUiLang: 'UI-Sprache', applyUi: '✨ INTERFACE ANWENDEN',
      secTargetLang: 'Zielsprache', saveLang: '💾 SPRACHE SPEICHERN',
      secEngine: 'Motor', secTone: 'Übersetzungsstil', secTheme: 'Thema',
      engGoogle: 'Google', engMymemory: 'MyMemory',
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
      sliderDelay: 'Anfrageverzögerung',
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
    },
    fr: {
      title: 'Traducteur Reddit', ver: 'v1.0.0',
      tabSettings: '⚙️ Paramètres', tabHistory: '📖 Historique', tabExtras: '✨ Extras',
      secUiLang: 'Langue UI', applyUi: '✨ APPLIQUER INTERFACE',
      secTargetLang: 'Langue cible', saveLang: '💾 ENREGISTRER',
      secEngine: 'Moteur', secTone: 'Style', secTheme: 'Thème',
      engGoogle: 'Google', engMymemory: 'MyMemory',
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
      sliderDelay: 'Délai de requête',
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
    },
    es: {
      title: 'Traductor Reddit', ver: 'v1.0.0',
      tabSettings: '⚙️ Config', tabHistory: '📖 Historial', tabExtras: '✨ Extras',
      secUiLang: 'Idioma UI', applyUi: '✨ APLICAR INTERFAZ',
      secTargetLang: 'Idioma destino', saveLang: '💾 GUARDAR IDIOMA',
      secEngine: 'Motor', secTone: 'Estilo', secTheme: 'Tema',
      engGoogle: 'Google', engMymemory: 'MyMemory',
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
      sliderDelay: 'Retraso de solicitud',
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
    },
    pl: {
      title: 'Tłumacz Reddit', ver: 'v1.0.0',
      tabSettings: '⚙️ Ustawienia', tabHistory: '📖 Historia', tabExtras: '✨ Extras',
      secUiLang: 'Język interfejsu', applyUi: '✨ ZASTOSUJ INTERFEJS',
      secTargetLang: 'Język docelowy', saveLang: '💾 ZAPISZ JĘZYK',
      secEngine: 'Silnik', secTone: 'Styl', secTheme: 'Motyw',
      engGoogle: 'Google', engMymemory: 'MyMemory',
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
      sliderDelay: 'Opóźnienie żądania',
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
    },
    tr: {
      title: 'Reddit Çevirmeni', ver: 'v1.0.0',
      tabSettings: '⚙️ Ayarlar', tabHistory: '📖 Geçmiş', tabExtras: '✨ Ekstra',
      secUiLang: 'Arayüz dili', applyUi: '✨ ARAYÜZÜ UYGULA',
      secTargetLang: 'Hedef dil', saveLang: '💾 DİLİ KAYDET',
      secEngine: 'Motor', secTone: 'Stil', secTheme: 'Tema',
      engGoogle: 'Google', engMymemory: 'MyMemory',
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
      sliderDelay: 'İstek gecikmesi',
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
    },
    zh: {
      title: 'Reddit翻译器', ver: 'v1.0.0',
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
      deeplApiHelp: '同时支持 Pro 和 Free 密钥。以 :fx 结尾的密钥会自动使用 api-free.deepl.com。',
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
      sliderDelay: '请求延迟',
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
    },
    ja: {
      title: 'Reddit翻訳', ver: 'v1.0.0',
      tabSettings: '⚙️ 設定', tabHistory: '📖 履歴', tabExtras: '✨ その他',
      secUiLang: 'UI言語', applyUi: '✨ UIを適用',
      secTargetLang: '翻訳先言語', saveLang: '💾 言語を保存',
      secEngine: 'エンジン', secTone: 'スタイル', secTheme: 'テーマ',
      engGoogle: 'Google', engMymemory: 'MyMemory',
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
      sliderDelay: 'リクエスト遅延',
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
    },
  };

  const S = (key) => (STRINGS[cfg.uiLang] || STRINGS.en)[key] ?? (STRINGS.en[key] ?? key);

  // ═══════════════════════════════════════════════════════════════════════════
  // § ЯЗЫКИ
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

  // Кешируем имена языков
  const langNameCache = {};
  function getLangName(code) {
    const key = `${code}:${cfg.uiLang}`;
    if (!langNameCache[key]) langNameCache[key] = langName(code, cfg.uiLang);
    return langNameCache[key];
  }

  function buildLangSelect(selectEl, searchEl, codes, selected) {
    const sorted = codes.map(c => ({ c, n: getLangName(c) })).sort((a, b) => a.n.localeCompare(b.n));
    function render(q) {
      const f = q.toLowerCase();
      const filtered = f ? sorted.filter(({ c, n }) => n.toLowerCase().includes(f) || c.includes(f)) : sorted;
      selectEl.innerHTML = filtered.map(({ c, n }) =>
        `<option value="${c}" ${c === selected ? 'selected' : ''}>${n} (${c.toUpperCase()})</option>`
      ).join('');
    }
    render('');
    if (searchEl) searchEl.addEventListener('input', () => render(searchEl.value));
    return { refresh: (q = '') => render(q) };
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // § ТЕМЫ
  // ═══════════════════════════════════════════════════════════════════════════
  const THEMES = {
    dark: { bg: 'rgba(10,10,14,.96)', surf: 'rgba(24,24,32,.9)', brd: 'rgba(255,255,255,.06)', txt: '#e0e0ec', mut: 'rgba(255,255,255,.28)', acc: '#ff4500', glow: 'rgba(255,69,0,.36)', dim: 'rgba(255,69,0,.11)', ok: '#60d394', okd: 'rgba(96,211,148,.11)', biBg: 'rgba(20,22,30,.96)', biTxt: '#fff3ed', biBrd: 'rgba(255,69,0,.42)', btnBg: 'var(--rtp-dim)', btnTxt: '#ff6a2b', btnBrd: 'rgba(255,69,0,.24)', btnDoneBg: 'rgba(96,211,148,.11)', btnDoneTxt: '#60d394', btnDoneBrd: 'rgba(96,211,148,.26)' },
    light: { bg: 'rgba(246,246,250,.97)', surf: 'rgba(255,255,255,.93)', brd: 'rgba(0,0,0,.07)', txt: '#17171e', mut: 'rgba(0,0,0,.36)', acc: '#ff4500', glow: 'rgba(255,69,0,.2)', dim: 'rgba(255,69,0,.09)', ok: '#1a9e5a', okd: 'rgba(26,158,90,.09)', biBg: 'rgba(255,245,240,.95)', biTxt: '#17171e', biBrd: 'rgba(255,69,0,.28)', btnBg: 'rgba(255,241,234,.96)', btnTxt: '#c63a00', btnBrd: 'rgba(255,69,0,.26)', btnDoneBg: 'rgba(226,247,236,.98)', btnDoneTxt: '#157347', btnDoneBrd: 'rgba(26,158,90,.28)' },
    cyberpunk: { bg: 'rgba(3,0,16,.97)', surf: 'rgba(10,3,32,.93)', brd: 'rgba(0,255,255,.11)', txt: '#ddf4ff', mut: 'rgba(0,255,255,.36)', acc: '#00ffff', glow: 'rgba(0,255,255,.44)', dim: 'rgba(0,255,255,.09)', ok: '#ff00aa', okd: 'rgba(255,0,170,.1)', biBg: 'rgba(4,18,34,.97)', biTxt: '#e9feff', biBrd: 'rgba(0,255,255,.5)', btnBg: 'rgba(0,255,255,.09)', btnTxt: '#66ffff', btnBrd: 'rgba(0,255,255,.24)', btnDoneBg: 'rgba(255,0,170,.12)', btnDoneTxt: '#ff6ecf', btnDoneBrd: 'rgba(255,0,170,.3)' },
    dracula: { bg: 'rgba(14,14,26,.97)', surf: 'rgba(26,26,46,.91)', brd: 'rgba(139,92,246,.16)', txt: '#f8f8f2', mut: 'rgba(189,147,249,.5)', acc: '#bd93f9', glow: 'rgba(189,147,249,.42)', dim: 'rgba(189,147,249,.1)', ok: '#50fa7b', okd: 'rgba(80,250,123,.1)', biBg: 'rgba(33,34,54,.97)', biTxt: '#f8f8f2', biBrd: 'rgba(189,147,249,.52)', btnBg: 'rgba(189,147,249,.12)', btnTxt: '#d5b6ff', btnBrd: 'rgba(189,147,249,.26)', btnDoneBg: 'rgba(80,250,123,.12)', btnDoneTxt: '#50fa7b', btnDoneBrd: 'rgba(80,250,123,.28)' },
  };

  function applyTheme(t) {
    const th = Object.assign({}, THEMES[t] || THEMES.dark);
    // Применяем кастомные цвета поверх базовой темы
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
    // Если уже hex — возвращаем как есть
    if (/^#[0-9a-f]{6}$/i.test(color)) return color;
    // rgba/rgb — конвертируем
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

    /* ─ КОНТЕНТНЫЕ КНОПКИ ─ */
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

    /* Спиннер */
    .sp { display:inline-block; width:8px; height:8px; border:1.5px solid currentColor; border-top-color:transparent; border-radius:50%; animation:spin .75s linear infinite; }
    @keyframes spin { to{transform:rotate(360deg)} }

    /* Fade-in при появлении перевода */
    .rtp-fi { animation:fi .4s ease; }
    @keyframes fi { from{opacity:0;transform:translateY(3px)} to{opacity:1;transform:none} }

    /* Двуязычный блок */
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

    /* Тулбар */
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

    /* ─ Горячие клавиши ─ */
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

    /* ─ Цвета темы ─ */
    .clr-grid { display:grid; grid-template-columns:1fr 1fr; gap:7px; margin-top:4px; }
    .clr-row { display:flex; align-items:center; justify-content:space-between; gap:8px; padding:6px 10px; background:var(--rtp-surf); border:1px solid var(--rtp-brd); border-radius:9px; }
    .clr-lbl { font-size:11px; color:var(--rtp-mut); }
    .clr-inp { width:32px; height:24px; border:none; border-radius:5px; cursor:pointer; background:none; padding:0; }

    /* ─ ПАНЕЛЬ ─ */
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

    /* Шапка */
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

    /* Статистика */
    #rtp-stats { display:flex; border-bottom:1px solid var(--rtp-brd); }
    .st { flex:1; padding:10px 5px; text-align:center; }
    .st+.st { border-left:1px solid var(--rtp-brd); }
    .st-v { font-family:var(--fm); font-size:18px; font-weight:700; color:var(--rtp-acc); }
    .st-l { font-size:8.5px; color:var(--rtp-mut); text-transform:uppercase; letter-spacing:.1em; margin-top:2px; }

    /* Табы */
    #rtp-tabs { display:flex; border-bottom:1px solid var(--rtp-brd); background:var(--rtp-surf); }
    .tab { flex:1; padding:10px 4px; text-align:center; font-size:10px; font-weight:700; letter-spacing:.06em; color:var(--rtp-mut); cursor:pointer; transition:all .18s; border-bottom:2px solid transparent; text-transform:uppercase; }
    .tab.on { color:var(--rtp-acc); border-bottom-color:var(--rtp-acc); }
    .tab:hover:not(.on) { color:var(--rtp-txt); }

    /* Панели */
    .pane { padding:15px; display:flex; flex-direction:column; gap:12px; max-height:475px; overflow-y:auto; }
    .pane::-webkit-scrollbar { width:3px; }
    .pane::-webkit-scrollbar-thumb { background:var(--rtp-brd); border-radius:2px; }

    /* Лейблы */
    .lbl { display:block; font-size:9.5px; font-weight:700; color:var(--rtp-mut); text-transform:uppercase; letter-spacing:.1em; margin-bottom:6px; }

    /* Языковый блок (поиск + список) */
    .lang-wrap { display:flex; flex-direction:column; }
    .lang-search { background:var(--rtp-surf); border:1px solid var(--rtp-brd); border-bottom:none; color:var(--rtp-txt); padding:8px 12px; border-radius:9px 9px 0 0; font-family:var(--f); font-size:12.5px; outline:none; }
    .lang-search::placeholder { color:var(--rtp-mut); }
    .lang-search:focus { border-color:var(--rtp-acc); }
    .lang-sel {
        background:var(--rtp-surf); border:1px solid var(--rtp-brd); color:var(--rtp-txt);
        padding:7px 10px; border-radius:0 0 9px 9px; font-family:var(--f); font-size:12.5px;
        outline:none; appearance:none; cursor:pointer; max-height:175px;
        transition:border-color .18s;
    }
    .lang-sel:focus { border-color:var(--rtp-acc); }
    .lang-sel option {
        background:var(--rtp-surf);
        color:var(--rtp-txt);
    }
    .lang-sel option:checked,
    .lang-sel option:hover {
        background:var(--rtp-dim);
        color:var(--rtp-txt);
    }

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

    /* Пилюли */
    .pills { display:flex; gap:3px; background:var(--rtp-surf); border:1px solid var(--rtp-brd); border-radius:10px; padding:3px; }
    .pill { flex:1; text-align:center; padding:7px 4px; border-radius:8px; font-size:10.5px; font-weight:700; color:var(--rtp-mut); cursor:pointer; transition:all .18s; white-space:nowrap; }
    .pill.on { background:var(--rtp-acc); color:#fff; box-shadow:0 2px 8px var(--rtp-glow); }

    /* Тогглы */
    .tog-row { display:flex; align-items:center; justify-content:space-between; padding:2px 0; }
    .tog-lbl { font-size:12.5px; color:var(--rtp-txt); }
    .tog { position:relative; width:38px; height:21px; flex-shrink:0; }
    .tog input { opacity:0; width:0; height:0; }
    .tog-tr { position:absolute; inset:0; background:var(--rtp-surf); border:1px solid var(--rtp-brd); border-radius:21px; cursor:pointer; transition:all .24s; }
    .tog input:checked+.tog-tr { background:var(--rtp-acc); border-color:var(--rtp-acc); }
    .tog-tr::after { content:''; position:absolute; left:3px; top:3px; width:13px; height:13px; background:#fff; border-radius:50%; transition:.24s; }
    .tog input:checked+.tog-tr::after { transform:translateX(17px); }

    /* Кнопки */
    .btn-p { width:100%; height:44px; background:var(--rtp-acc); border:none; color:#fff; border-radius:11px; font-family:var(--f); font-size:11.5px; font-weight:800; letter-spacing:.06em; cursor:pointer; transition:all .2s; position:relative; overflow:hidden; }
    .btn-p::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,.14),transparent); }
    .btn-p:hover { box-shadow:0 8px 22px var(--rtp-glow); transform:translateY(-1px); }
    .btn-p.ghost { background:var(--rtp-surf); border:1px solid var(--rtp-brd); color:var(--rtp-txt); box-shadow:none; }
    .btn-p.ghost:hover { background:rgba(255,255,255,.07); }

    .g2 { display:grid; grid-template-columns:1fr 1fr; gap:7px; }
    .btn-s { padding:9px 7px; background:var(--rtp-surf); border:1px solid var(--rtp-brd); color:var(--rtp-mut); border-radius:10px; font-size:10.5px; font-family:var(--f); font-weight:600; cursor:pointer; transition:all .17s; text-align:center; }
    .btn-s:hover { color:var(--rtp-txt); background:rgba(255,255,255,.06); border-color:rgba(255,255,255,.1); }
    .btn-s.active { color:var(--rtp-acc); border-color:var(--rtp-acc); }

    /* Разделитель */
    .div { height:1px; background:var(--rtp-brd); }

    /* История */
    .hi { padding:9px 12px; background:var(--rtp-surf); border:1px solid var(--rtp-brd); border-radius:10px; cursor:pointer; transition:border-color .18s; }
    .hi:hover { border-color:var(--rtp-acc); }
    .hi-o { font-size:10px; color:var(--rtp-mut); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; margin-bottom:3px; }
    .hi-t { font-size:12px; color:var(--rtp-txt); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
    .hi-m { font-size:9px; color:var(--rtp-acc); font-family:var(--fm); margin-top:4px; }

    /* Слайдер */
    .slider { width:100%; accent-color:var(--rtp-acc); cursor:pointer; }
    .slider-v { text-align:right; font-size:10px; color:var(--rtp-mut); margin-top:3px; font-family:var(--fm); }

    /* Тост */
    #rtp-toast { position:fixed; bottom:92px; right:28px; z-index:10010; background:var(--rtp-bg); backdrop-filter:blur(16px); border:1px solid var(--rtp-brd); color:var(--rtp-txt); padding:10px 18px; border-radius:12px; font-family:var(--f); font-size:12.5px; font-weight:600; box-shadow:0 8px 28px rgba(0,0,0,.5); pointer-events:none; opacity:0; transform:translateY(8px); transition:all .24s; }
    #rtp-toast.on { opacity:1; transform:none; }

    /* Cyberpunk overrides */
    [data-rtp-theme=cyberpunk] #rtp-panel { box-shadow:0 0 40px rgba(0,255,255,.1),0 32px 80px rgba(0,0,0,.85); }
    `);

  // ═══════════════════════════════════════════════════════════════════════════
  // § СЛЭНГ
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
  // § КОНВЕРТЕРЫ ЕДИНИЦ
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
  // § ПАСХАЛКИ
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
  // § ПЕРЕВОД
  // ═══════════════════════════════════════════════════════════════════════════
  let reqGen = 0; // поколение очереди — сброс при отмене
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

  // 检测文本语言
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
  let activeSpeechUtterance = null;
  let activeSpeechText = '';
  let activeSpeechButton = null;

  function setSpeakButtonActive(btn, active) {
    if (!btn) return;
    btn.classList.toggle('active', !!active);
  }

  function clearActiveSpeechState() {
    setSpeakButtonActive(activeSpeechButton, false);
    activeSpeechUtterance = null;
    activeSpeechText = '';
    activeSpeechButton = null;
  }

  function stopSpeaking() {
    if (!window.speechSynthesis) return;
    speechSynthesis.cancel();
    clearActiveSpeechState();
  }

  function speak(text, btn) {
    if (!cfg.ttsEnabled || !window.speechSynthesis) return;

    const nextText = String(text || '').trim();
    if (!nextText) return;

    const isBusy = speechSynthesis.speaking || speechSynthesis.pending;
    const isSameTarget = isBusy && activeSpeechText === nextText && activeSpeechButton === btn;

    if (isSameTarget) {
      stopSpeaking();
      return;
    }

    stopSpeaking();

    const u = new SpeechSynthesisUtterance(nextText);
    u.lang = cfg.targetLang;
    u.rate = 0.95;

    activeSpeechUtterance = u;
    activeSpeechText = nextText;
    activeSpeechButton = btn || null;
    setSpeakButtonActive(activeSpeechButton, true);

    u.onend = () => {
      if (activeSpeechUtterance === u) clearActiveSpeechState();
    };
    u.onerror = () => {
      if (activeSpeechUtterance === u) clearActiveSpeechState();
    };

    speechSynthesis.speak(u);
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // § УТИЛИТЫ
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

    addAction(S('btnCopy'), () => navigator.clipboard.writeText(res).then(() => toast(S('copied'))));
    addAction(S('btnSpeak'), () => speak(res, tb.lastChild));
    addAction(S('btnRetry'), async () => {
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
  // § ИНЖЕКТ КНОПОК
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
    el.dataset.rtpLang = ''; // 用于缓存检测到的语言

    const ctrlHost = document.createElement('div');
    ctrlHost.className = 'rtp-ctrl';

    const btn = document.createElement('button');
    btn.className = 'rtp-btn';
    btn.innerHTML = `🌐 ${cfg.targetLang.toUpperCase()}`;
    btn.dataset.st = 'orig';
    btn.dataset.skip = ''; // 初始化跳过标记为空
    btn.dataset.translation = '';
    btn._targetEl = el;
    btn._ctrlHost = ctrlHost;
    el._rtpBtn = btn;

    btn.onclick = async (e) => {
      e.preventDefault(); e.stopPropagation();
      const scrollDriven = btn.dataset.autoMode === 'scroll';
      btn.dataset.autoMode = '';
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

      markButtonBusy(btn);
      const res = await enqueue(() => doTranslate(src));
      if (res == null) return restoreIdleButton(btn);
      finalizeTranslation(btn, el, src, res);
    };

    ctrlHost.append(btn);
    el.after(ctrlHost);
    if (btnsHidden) ctrlHost.style.display = 'none';
    autoTranslateObserver.observe(el);

    // 如果启用滚动时自动翻译，自动触发翻译
    if (autoStart && cfg.autoTranslateOnScroll) {
      requestAnimationFrame(() => scheduleAutoTranslate(btn));
    }
  }

  // IntersectionObserver — переводим сначала видимые
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
      // 检查元素是否在视口内（包括200px边距，与IntersectionObserver一致）
      const rect = el.getBoundingClientRect();
      const inViewport = (
        rect.top <= window.innerHeight + 200 &&
        rect.bottom >= -200 &&
        rect.left <= window.innerWidth + 200 &&
        rect.right >= -200
      );
      if (inViewport) {
        // 视口内元素也需要遵循自动翻译配置：
        // 否则首屏内容和动态加载后直接落在视口里的内容只会显示按钮，不会自动翻译。
        attachBtn(el, { autoStart: cfg.autoTranslateOnScroll });
        // 如果之前在队列中，移除并取消观察
        if (ioQueue.has(el)) {
          ioQueue.delete(el);
          io.unobserve(el);
        }
      } else {
        // 不在视口内，加入观察队列
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

    buttons.forEach(btn => {
      btn.dataset.autoMode = 'scroll';
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

  // MutationObserver с debounce
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
    };
    document.body.appendChild(viewToggleBtn);
    updateViewToggleButton();
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // § ПАНЕЛЬ
  // ═══════════════════════════════════════════════════════════════════════════
  let activeTab = 'settings';
  let btnsHidden = true;

  function setupPanelLanguageControls(panel) {
    const uiSel = panel.querySelector('#ui-sel');
    const uiSearch = panel.querySelector('#ui-s');
    const uiOpts = UI_SUPPORTED.map(c => ({ c, n: langName(c, c) })).sort((a, b) => a.n.localeCompare(b.n));
    const renderUi = (q = '') => {
      const f = q.toLowerCase();
      uiSel.innerHTML = uiOpts
        .filter(({ c, n }) => !f || n.toLowerCase().includes(f) || c.includes(f))
        .map(({ c, n }) => `<option value="${c}" ${c === cfg.uiLang ? 'selected' : ''}>${n} (${c.toUpperCase()})</option>`)
        .join('');
    };

    renderUi();
    uiSearch.addEventListener('input', () => renderUi(uiSearch.value));
    buildLangSelect(panel.querySelector('#tg-sel'), panel.querySelector('#tg-s'), ALL_LANGS, cfg.targetLang);

    panel.querySelector('#btn-apply-ui').onclick = () => {
      save('uiLang', uiSel.value);
      updateViewToggleButton();
      panel.remove();
      toast(S('toastApply'));
      setTimeout(buildPanel, 180);
    };

    panel.querySelector('#btn-save-lang').onclick = () => {
      save('targetLang', panel.querySelector('#tg-sel').value);
      toast(S('toastSave'));
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
    };

    testBtn.onclick = async () => {
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
      if (engine === 'deepl' && !parseDeepLKeys().length) toast(S('toastDeepLKeysMissing'));
    });
    setExclusivePills(panel, 'data-tone', (tone) => save('tone', tone));
    setExclusivePills(panel, 'data-th', (theme) => {
      save('theme', theme);
      applyTheme(theme);
    });
  }

  function setupPanelToggles(panel) {
    const toggleKeys = ['bilingualMode', 'ttsEnabled', 'autoConvert', 'autoScroll', 'incognito', 'autoTranslateOnScroll'];
    panel.querySelectorAll('.tog-row').forEach((row, i) => {
      const key = toggleKeys[i];
      if (!key) return;
      row.appendChild(mkToggle(cfg[key], v => {
        save(key, v);
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
      panel.querySelector('#sl-val').textContent = sl.value + ' мс';
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
        stopCapture();
      };

      document.addEventListener('keydown', captureHandler, true);
    };

    rst.onclick = () => {
      stopCapture();
      save(cfgKey, defaultVal);
      btn.textContent = defaultVal;
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
      { id: 'clr-txt', key: 'txt' },
      { id: 'clr-bg', key: 'bg' },
      { id: 'clr-ok', key: 'ok' },
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
      };
    });

    panel.querySelector('#btn-reset-clr').onclick = () => {
      save('customColors', null);
      applyTheme(cfg.theme);
      colorInputs.forEach(({ id, key }) => {
        const inp = panel.querySelector(`#${id}`);
        if (inp) inp.value = colorToHex(base[key] || '#888888');
      });
    };
  }

  function setupPanelMiscControls(panel) {
    panel.querySelector('#btn-rpos').onclick = () => {
      panel.style.top = '11%';
      panel.style.left = 'calc(50% - 186px)';
      GM_setValue(PREFIX + 'panelX', null);
      GM_setValue(PREFIX + 'panelY', null);
    };

    panel.querySelector('#btn-ccache').onclick = () => {
      cache = {};
      flushCache();
      toast(S('cacheCleared'));
    };

    panel.querySelector('#btn-exp').onclick = () => {
      const a = document.createElement('a');
      a.href = 'data:text/json,' + encodeURIComponent(JSON.stringify({ v: 8, cfg }, null, 2));
      a.download = 'rtp-v8-settings.json';
      a.click();
    };

    panel.querySelector('#btn-imp').onclick = () => {
      const inp = document.createElement('input');
      inp.type = 'file';
      inp.accept = '.json';
      inp.onchange = e => {
        const fr = new FileReader();
        fr.onload = ev => {
          try {
            const d = JSON.parse(ev.target.result);
            const src = d.cfg || d;
            Object.entries(src).forEach(([k, v]) => {
              if (k in DEF) {
                cfg[k] = v;
                GM_setValue(PREFIX + k, v);
              }
            });
            location.reload();
          } catch {
            toast('❌ Ошибка импорта');
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
      setTimeout(() => location.reload(), 1100);
    };

    const pirBtn = panel.querySelector('#btn-pir');
    pirBtn.onclick = () => {
      pirateMode = !pirateMode;
      pirBtn.classList.toggle('active', pirateMode);
      toast(pirateMode ? S('toastPirateOn') : S('toastPirateOff'));
    };
    pirBtn.classList.toggle('active', pirateMode);

    const yodBtn = panel.querySelector('#btn-yoda');
    yodBtn.onclick = () => {
      yodaMode = !yodaMode;
      yodBtn.classList.toggle('active', yodaMode);
      toast(yodaMode ? S('toastYodaOn') : S('toastYodaOff'));
    };
    yodBtn.classList.toggle('active', yodaMode);

    const hideBtn = panel.querySelector('#btn-hide');
    hideBtn.classList.toggle('active', btnsHidden);
    hideBtn.onclick = () => {
      btnsHidden = !btnsHidden;
      syncControlVisibility();
      hideBtn.textContent = btnsHidden ? S('btnShow') : S('btnHide');
      hideBtn.classList.toggle('active', btnsHidden);
    };

  }

  function setupPanelTabs(panel) {
    panel.querySelectorAll('.tab').forEach(tab => tab.onclick = () => {
      activeTab = tab.dataset.tab;
      panel.querySelectorAll('.tab').forEach(t => t.classList.remove('on'));
      tab.classList.add('on');
      panel.querySelectorAll('.pane').forEach(p => p.style.display = 'none');
      panel.querySelector(`#pane-${activeTab}`).style.display = 'flex';
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
    if (old) { old.remove(); return; }

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

        <!-- НАСТРОЙКИ -->
        <div id="pane-settings" class="pane" style="display:${activeTab === 'settings' ? 'flex' : 'none'}">

            <div>
                <span class="lbl">${S('secUiLang')}</span>
                <div class="lang-wrap">
                    <input class="lang-search" id="ui-s" placeholder="${S('searchLang')}">
                    <select class="lang-sel" id="ui-sel" size="4"></select>
                </div>
                <button class="btn-p" id="btn-apply-ui" style="margin-top:8px;height:40px;font-size:11px;">${S('applyUi')}</button>
            </div>

            <div class="div"></div>

            <div>
                <span class="lbl">${S('secTargetLang')}</span>
                <div class="lang-wrap">
                    <input class="lang-search" id="tg-s" placeholder="${S('searchLang')}">
                    <select class="lang-sel" id="tg-sel" size="4"></select>
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

            <div>
                <span class="lbl">${S('secTheme')}</span>
                <div class="pills">
                    <div class="pill ${cfg.theme === 'dark' ? 'on' : ''}"     data-th="dark">${S('themeDark')}</div>
                    <div class="pill ${cfg.theme === 'light' ? 'on' : ''}"    data-th="light">${S('themeLight')}</div>
                    <div class="pill ${cfg.theme === 'cyberpunk' ? 'on' : ''}" data-th="cyberpunk">${S('themeCyber')}</div>
                    <div class="pill ${cfg.theme === 'dracula' ? 'on' : ''}"  data-th="dracula">${S('themeDracula')}</div>
                </div>
            </div>

            <div class="div"></div>

            <div class="tog-row"><span class="tog-lbl">${S('togBilingual')}</span></div>
            <div class="tog-row"><span class="tog-lbl">${S('togTts')}</span></div>
            <div class="tog-row"><span class="tog-lbl">${S('togAutoConvert')}</span></div>
            <div class="tog-row"><span class="tog-lbl">${S('togAutoScroll')}</span></div>
            <div class="tog-row"><span class="tog-lbl">${S('togIncognito')}</span></div>
            <div class="tog-row"><span class="tog-lbl">${S('togAutoTranslateOnScroll')}</span></div>

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

        <!-- ИСТОРИЯ -->
        <div id="pane-history" class="pane" style="display:${activeTab === 'history' ? 'flex' : 'none'}"></div>

        <!-- ДОПОЛНЕНИЯ -->
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
                <div class="slider-v" id="sl-val">${cfg.requestDelay} мс</div>
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
                    <div class="clr-row"><span class="clr-lbl">${S('colorTxt')}</span><input type="color" class="clr-inp" id="clr-txt"></div>
                    <div class="clr-row"><span class="clr-lbl">${S('colorBg')}</span><input type="color" class="clr-inp" id="clr-bg"></div>
                    <div class="clr-row"><span class="clr-lbl">${S('colorOk')}</span><input type="color" class="clr-inp" id="clr-ok"></div>
                </div>
                <div class="btn-s" id="btn-reset-clr" style="margin-top:8px;">${S('btnResetColors')}</div>
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
    setupPanelMiscControls(panel);
    setupPanelTabs(panel);
    renderHistory(panel);
    setupPanelDrag(panel);
    panel.querySelector('#rtp-close').onclick = () => panel.remove();
    updateStats();
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
      div.onclick = () => navigator.clipboard.writeText(item.translated).then(() => toast(S('copied')));
      pane.appendChild(div);
    });

    const clr = document.createElement('div'); clr.className = 'btn-s'; clr.style.marginTop = '4px';
    clr.textContent = S('histClear');
    clr.onclick = () => { history = []; GM_setValue(PREFIX + 'rtp_v8_history', '[]'); renderHistory(panel); };
    pane.appendChild(clr);
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // § ЗАПУСК
  // ═══════════════════════════════════════════════════════════════════════════
  applyTheme(cfg.theme);
  createTranslateFab();
  createViewToggle();
  injectButtons();

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
