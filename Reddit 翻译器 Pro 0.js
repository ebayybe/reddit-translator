// ==UserScript==
// @name        🌐Reddit Translator Pro
// @name:ru     🌐Reddit Переводчик Pro
// @name:uk     🌐Reddit Перекладач Pro
// @name:de     🌐Reddit Übersetzer Pro
// @name:fr     🌐Reddit Traducteur Pro
// @name:es     🌐Reddit Traductor Pro
// @name:it     🌐Reddit Traduttore Pro
// @name:pl     🌐Reddit Tłumacz Pro
// @name:tr     🌐Reddit Çevirmeni Pro
// @name:vi     🌐Reddit Biên Dịch Viên Pro
// @name:ko     🌐Reddit 번역기 Pro
// @name:ja     🌐Reddit 翻訳者 Pro
// @name:zh-CN  🌐Reddit 翻译器 Pro
// @name:zh-HK  🌐Reddit 翻譯器 Pro
// @name:zh-TW  🌐Reddit 翻譯器 Pro
// @namespace    https://github.com/Dylan-ZQL
// @homepageURL  https://github.com/Dylan-ZQL/reddit-translator-anto
// @supportURL   https://github.com/Dylan-ZQL/reddit-translator-anto/issues
// @version      1.0.0
// @description:ru      🏷️Любительский переводчик Reddit — glassmorphism, 100+ языков, TTS, история, конвертеры, пасхалки, IntersectionObserver
// @description:uk      🏷️Любительський перекладач Reddit — glassmorphism, 100+ мов, TTS, історія, конвертери, пасхалки, IntersectionObserver
// @description:en      🏷️Amateur Reddit translator — glassmorphism, 100+ languages, TTS, history, converters, easter eggs, IntersectionObserver
// @description:de      🏷️Amateur-Reddit-Übersetzer — Glassmorphism, 100+ Sprachen, TTS, Verlauf, Konverter, Ostereier, IntersectionObserver
// @description:it      🏷️Traduttore Reddit amatoriale — glassmorphism, 100+ lingue, TTS, cronologia, convertitori, easter egg, IntersectionObserver
// @description:fr      🏷️Traducteur Reddit amateur — glassmorphism, 100+ langues, TTS, historique, convertisseurs, easter eggs, IntersectionObserver
// @description:es      🏷️Traductor Reddit amateur — glassmorphism, 100+ idiomas, TTS, historial, convertidores, easter eggs, IntersectionObserver
// @description:ko      🏷️아마추어 Reddit 번역기 — glassmorphism, 100+ 언어, TTS, 히스토리, 변환기, 이스터 에그, IntersectionObserver
// @description:pl      🏷️Amatorski tłumacz Reddit — glassmorphism, 100+ języków, TTS, historia, konwertery, easter eggi, IntersectionObserver
// @description:tr      🏷️Amatör Reddit çevirmeni — glassmorphism, 100+ dil, TTS, geçmiş, dönüştürücüler, sürprizler, IntersectionObserver
// @description:vi      🏷️Trình dịch Reddit nghiệp dư — glassmorphism, 100+ ngôn ngữ, TTS, lịch sử, bộ chuyển đổi, easter egg, IntersectionObserver
// @description:ja      🏷️アマチュアReddit翻訳者 — glassmorphism、100以上の言語、TTS、履歴、コンバーター、イースターエッグ、IntersectionObserver
// @description:zh-CN   🏷️业余Reddit翻译器 — glassmorphism，100多种语言，TTS，历史记录，转换器，彩蛋，IntersectionObserver
// @description:zh-HK   🏷️業餘Reddit翻譯器 — glassmorphism，100多種語言，TTS，歷史記錄，轉換器，彩蛋，IntersectionObserver
// @description:zh-TW   🏷️業餘Reddit翻譯器 — glassmorphism，100多種語言，TTS，歷史記錄，轉換器，彩蛋，IntersectionObserver
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjI4IiBmaWxsPSIjZmY0NTAwIi8+CiAgPHRleHQgeD0iNjQiIHk9IjkwIiBmb250LXNpemU9IjcyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iU2Vnb2UgVUkgRW1vamksQXBwbGUgQ29sb3IgRW1vamksc2Fucy1zZXJpZiI+8J+MkDwvdGV4dD4KPC9zdmc+
// @author       ebayybe
// @license      MIT
// @match        https://www.reddit.com/*
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addStyle
// @connect      translate.googleapis.com
// @connect      api.mymemory.translated.net
// @downloadURL https://greasyfork.org/scripts/574557-reddit-translator-pro-auto/code/reddit-translator-pro-auto.user.js
// @updateURL https://greasyfork.org/scripts/574557-reddit-translator-pro-auto/code/reddit-translator-pro-auto.meta.js
// ==/UserScript==

(function () {
  'use strict';

  // ═══════════════════════════════════════════════════════════════════════════
  // § КОНФИГУРАЦИЯ
  // ═══════════════════════════════════════════════════════════════════════════
  const DEF = {
    targetLang: 'en',
    uiLang: 'en',
    engine: 'google',
    tone: 'normal',
    theme: 'dark',
    bilingualMode: false,
    ttsEnabled: true,
    autoConvert: true,
    autoScroll: false,
    incognito: false,
    requestDelay: 120,
    totalChars: 0,
    totalCount: 0,
    hotkeyPanel: 'F2',
    hotkeyAll: 'Ctrl+Shift+T',
    customColors: null,
  };

  // Загружаем конфиг
  const cfg = Object.fromEntries(
    Object.entries(DEF).map(([k, def]) => [k, GM_getValue(k, def)])
  );

  function save(key, val) {
    cfg[key] = val;
    GM_setValue(key, val);
  }

  // Батч-сохранение счётчиков
  let statTimer = null;
  function flushStats() {
    clearTimeout(statTimer);
    statTimer = setTimeout(() => {
      GM_setValue('totalChars', cfg.totalChars);
      GM_setValue('totalCount', cfg.totalCount);
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
      const raw = JSON.parse(GM_getValue(CACHE_KEY, '{}'));
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
      try { GM_setValue(CACHE_KEY, JSON.stringify(cache)); } catch { }
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
  try { history = JSON.parse(GM_getValue('rtp_v8_history', '[]')); } catch { }

  function pushHistory(orig, translated, lang) {
    if (cfg.incognito) return;
    history.unshift({ orig: orig.slice(0, 130), translated: translated.slice(0, 130), lang, ts: Date.now() });
    if (history.length > 50) history.length = 50;
    GM_setValue('rtp_v8_history', JSON.stringify(history));
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // § UI — МУЛЬТИЯЗЫЧНОСТЬ ИНТЕРФЕЙСА
  // ═══════════════════════════════════════════════════════════════════════════
  const UI_SUPPORTED = ['ru', 'uk', 'en', 'de', 'fr', 'es', 'pl', 'tr', 'zh', 'ja'];

  const STRINGS = {
    ru: {
      title: 'Reddit Переводчик', ver: 'v1.0.0',
      tabSettings: '⚙️ Настройки', tabHistory: '📖 История', tabExtras: '✨ Дополнения',
      translateAll: 'ПЕРЕВЕСТИ ВСЁ',
      secUiLang: 'Язык интерфейса', applyUi: '✨ ПРИМЕНИТЬ ИНТЕРФЕЙС',
      secTargetLang: 'Язык перевода', saveLang: '💾 СОХРАНИТЬ ЯЗЫК',
      secEngine: 'Движок', secTone: 'Стиль перевода', secTheme: 'Тема',
      engGoogle: 'Google', engMymemory: 'MyMemory',
      toneNeutral: 'Нейтральный', toneFormal: 'Официальный', toneSlang: 'Разговорный',
      themeDark: 'Тёмная', themeLight: 'Светлая', themeCyber: 'Cyberpunk', themeDracula: 'Dracula',
      togBilingual: 'Двуязычный режим', togTts: 'Озвучка (TTS)',
      togAutoConvert: 'Авто-конвертация единиц', togAutoScroll: 'Авто-скролл к новым',
      togIncognito: 'Инкогнито (без истории)',
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
      toastAll: '✅ Переведено', toastApply: '✅ Интерфейс обновлён',
      toastSave: '💾 Сохранено — перезагрузка…', toastSurprise: '🎲 Язык:',
      toastPirateOn: '🏴‍☠️ Arrr! Пиратский режим!', toastPirateOff: '🏴‍☠️ Режим выключен',
      toastYodaOn: '🧙 Включён режим, хммм.', toastYodaOff: '🧙 Выключен он.',
      shortcutHint: 'F2 = панель · Ctrl+Shift+T = всё',
      btnCancel: '⛔ Отмена', toastCancelled: '⛔ Перевод отменён',
      secHotkeys: 'Горячие клавиши', hotkeyPanel: 'Открыть панель', hotkeyAll: 'Перевести всё',
      hotkeyPress: 'Нажмите клавишу…', hotkeyReset: '↺ Сброс',
      secColors: 'Цвета темы', colorAcc: 'Акцент', colorTxt: 'Текст', colorBg: 'Фон', colorOk: 'Успех',
      btnResetColors: '↺ Сброс цветов',
    },
    uk: {
      title: 'Reddit Перекладач', ver: 'v1.0.0',
      tabSettings: '⚙️ Налаштування', tabHistory: '📖 Історія', tabExtras: '✨ Додатково',
      translateAll: 'ПЕРЕКЛАСТИ ВСЕ',
      secUiLang: 'Мова інтерфейсу', applyUi: '✨ ЗАСТОСУВАТИ ІНТЕРФЕЙС',
      secTargetLang: 'Мова перекладу', saveLang: '💾 ЗБЕРЕГТИ МОВУ',
      secEngine: 'Рушій', secTone: 'Стиль', secTheme: 'Тема',
      engGoogle: 'Google', engMymemory: 'MyMemory',
      toneNeutral: 'Нейтральний', toneFormal: 'Офіційний', toneSlang: 'Розмовний',
      themeDark: 'Темна', themeLight: 'Світла', themeCyber: 'Cyberpunk', themeDracula: 'Dracula',
      togBilingual: 'Двомовний режим', togTts: 'Озвучка (TTS)',
      togAutoConvert: 'Авто-конвертація', togAutoScroll: 'Авто-скрол',
      togIncognito: 'Інкогніто',
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
      toastAll: '✅ Перекладено', toastApply: '✅ Інтерфейс оновлено',
      toastSave: '💾 Збережено — перезавантаження…', toastSurprise: '🎲 Мова:',
      toastPirateOn: '🏴‍☠️ Arrr! Піратський режим!', toastPirateOff: '🏴‍☠️ Вимкнено',
      toastYodaOn: '🧙 Увімкнено режим, хммм.', toastYodaOff: '🧙 Вимкнено.',
      shortcutHint: 'F2 = панель · Ctrl+Shift+T = все',
      btnCancel: '⛔ Скасувати', toastCancelled: '⛔ Переклад скасовано',
      secHotkeys: 'Гарячі клавіші', hotkeyPanel: 'Відкрити панель', hotkeyAll: 'Перекласти все',
      hotkeyPress: 'Натисніть клавішу…', hotkeyReset: '↺ Скинути',
      secColors: 'Кольори теми', colorAcc: 'Акцент', colorTxt: 'Текст', colorBg: 'Фон', colorOk: 'Успіх',
      btnResetColors: '↺ Скинути кольори',
    },
    en: {
      title: 'Reddit Translator', ver: 'v1.0.0',
      tabSettings: '⚙️ Settings', tabHistory: '📖 History', tabExtras: '✨ Extras',
      translateAll: 'TRANSLATE ALL',
      secUiLang: 'UI Language', applyUi: '✨ APPLY INTERFACE',
      secTargetLang: 'Target language', saveLang: '💾 SAVE LANGUAGE',
      secEngine: 'Engine', secTone: 'Translation tone', secTheme: 'Theme',
      engGoogle: 'Google', engMymemory: 'MyMemory',
      toneNeutral: 'Neutral', toneFormal: 'Formal', toneSlang: 'Casual',
      themeDark: 'Dark', themeLight: 'Light', themeCyber: 'Cyberpunk', themeDracula: 'Dracula',
      togBilingual: 'Bilingual mode', togTts: 'Text-to-Speech',
      togAutoConvert: 'Auto-convert units', togAutoScroll: 'Auto-scroll to new',
      togIncognito: 'Incognito (no history)',
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
      toastAll: '✅ Translated', toastApply: '✅ Interface updated',
      toastSave: '💾 Saved — reloading…', toastSurprise: '🎲 Language:',
      toastPirateOn: '🏴‍☠️ Arrr! Pirate mode on!', toastPirateOff: '🏴‍☠️ Pirate mode off',
      toastYodaOn: '🧙 Yoda mode on, hmm.', toastYodaOff: '🧙 Yoda mode off.',
      shortcutHint: 'F2 = panel · Ctrl+Shift+T = all',
      btnCancel: '⛔ Cancel', toastCancelled: '⛔ Translation cancelled',
      secHotkeys: 'Hotkeys', hotkeyPanel: 'Open panel', hotkeyAll: 'Translate all',
      hotkeyPress: 'Press a key…', hotkeyReset: '↺ Reset',
      secColors: 'Theme colors', colorAcc: 'Accent', colorTxt: 'Text', colorBg: 'Background', colorOk: 'Success',
      btnResetColors: '↺ Reset colors',
    },
    de: {
      title: 'Reddit Übersetzer', ver: 'v1.0.0',
      tabSettings: '⚙️ Einstellungen', tabHistory: '📖 Verlauf', tabExtras: '✨ Extras',
      translateAll: 'ALLES ÜBERSETZEN',
      secUiLang: 'UI-Sprache', applyUi: '✨ INTERFACE ANWENDEN',
      secTargetLang: 'Zielsprache', saveLang: '💾 SPRACHE SPEICHERN',
      secEngine: 'Motor', secTone: 'Übersetzungsstil', secTheme: 'Thema',
      engGoogle: 'Google', engMymemory: 'MyMemory',
      toneNeutral: 'Neutral', toneFormal: 'Formell', toneSlang: 'Umgangssprachlich',
      themeDark: 'Dunkel', themeLight: 'Hell', themeCyber: 'Cyberpunk', themeDracula: 'Dracula',
      togBilingual: 'Zweisprachig', togTts: 'Sprachausgabe',
      togAutoConvert: 'Einheiten konvertieren', togAutoScroll: 'Auto-Scrollen',
      togIncognito: 'Inkognito',
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
      toastAll: '✅ Übersetzt', toastApply: '✅ Interface aktualisiert',
      toastSave: '💾 Gespeichert — neu laden…', toastSurprise: '🎲 Sprache:',
      toastPirateOn: '🏴‍☠️ Arrr! Piraten-Modus!', toastPirateOff: '🏴‍☠️ Modus aus',
      toastYodaOn: '🧙 Yoda-Modus an, hmm.', toastYodaOff: '🧙 Modus aus.',
      shortcutHint: 'F2 = Panel · Ctrl+Shift+T = alles',
      btnCancel: '⛔ Abbrechen', toastCancelled: '⛔ Übersetzung abgebrochen',
      secHotkeys: 'Tastenkürzel', hotkeyPanel: 'Panel öffnen', hotkeyAll: 'Alles übersetzen',
      hotkeyPress: 'Taste drücken…', hotkeyReset: '↺ Zurücksetzen',
      secColors: 'Themenfarben', colorAcc: 'Akzent', colorTxt: 'Text', colorBg: 'Hintergrund', colorOk: 'Erfolg',
      btnResetColors: '↺ Farben zurücksetzen',
    },
    fr: {
      title: 'Traducteur Reddit', ver: 'v1.0.0',
      tabSettings: '⚙️ Paramètres', tabHistory: '📖 Historique', tabExtras: '✨ Extras',
      translateAll: 'TOUT TRADUIRE',
      secUiLang: 'Langue UI', applyUi: '✨ APPLIQUER INTERFACE',
      secTargetLang: 'Langue cible', saveLang: '💾 ENREGISTRER',
      secEngine: 'Moteur', secTone: 'Style', secTheme: 'Thème',
      engGoogle: 'Google', engMymemory: 'MyMemory',
      toneNeutral: 'Neutre', toneFormal: 'Formel', toneSlang: 'Familier',
      themeDark: 'Sombre', themeLight: 'Clair', themeCyber: 'Cyberpunk', themeDracula: 'Dracula',
      togBilingual: 'Mode bilingue', togTts: 'Synthèse vocale',
      togAutoConvert: 'Conversion auto', togAutoScroll: 'Défilement auto',
      togIncognito: 'Incognito',
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
      toastAll: '✅ Traduit', toastApply: '✅ Interface mise à jour',
      toastSave: '💾 Sauvegardé — rechargement…', toastSurprise: '🎲 Langue:',
      toastPirateOn: '🏴‍☠️ Arrr! Mode Pirate!', toastPirateOff: '🏴‍☠️ Mode désactivé',
      toastYodaOn: '🧙 Mode Yoda activé, hmm.', toastYodaOff: '🧙 Mode Yoda désactivé.',
      shortcutHint: 'F2 = panneau · Ctrl+Shift+T = tout',
      btnCancel: '⛔ Annuler', toastCancelled: '⛔ Traduction annulée',
      secHotkeys: 'Raccourcis', hotkeyPanel: 'Ouvrir panneau', hotkeyAll: 'Tout traduire',
      hotkeyPress: 'Appuyez sur une touche…', hotkeyReset: '↺ Réinitialiser',
      secColors: 'Couleurs du thème', colorAcc: 'Accent', colorTxt: 'Texte', colorBg: 'Fond', colorOk: 'Succès',
      btnResetColors: '↺ Réinitialiser couleurs',
    },
    es: {
      title: 'Traductor Reddit', ver: 'v1.0.0',
      tabSettings: '⚙️ Config', tabHistory: '📖 Historial', tabExtras: '✨ Extras',
      translateAll: 'TRADUCIR TODO',
      secUiLang: 'Idioma UI', applyUi: '✨ APLICAR INTERFAZ',
      secTargetLang: 'Idioma destino', saveLang: '💾 GUARDAR IDIOMA',
      secEngine: 'Motor', secTone: 'Estilo', secTheme: 'Tema',
      engGoogle: 'Google', engMymemory: 'MyMemory',
      toneNeutral: 'Neutral', toneFormal: 'Formal', toneSlang: 'Coloquial',
      themeDark: 'Oscuro', themeLight: 'Claro', themeCyber: 'Cyberpunk', themeDracula: 'Dracula',
      togBilingual: 'Modo bilingüe', togTts: 'Texto a voz',
      togAutoConvert: 'Convertir unidades', togAutoScroll: 'Auto-desplazamiento',
      togIncognito: 'Incógnito',
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
      toastAll: '✅ Traducido', toastApply: '✅ Interfaz actualizada',
      toastSave: '💾 Guardado — recargando…', toastSurprise: '🎲 Idioma:',
      toastPirateOn: '🏴‍☠️ ¡Arrr! ¡Modo Pirata!', toastPirateOff: '🏴‍☠️ Modo desactivado',
      toastYodaOn: '🧙 Modo Yoda activado, hmm.', toastYodaOff: '🧙 Modo Yoda desactivado.',
      shortcutHint: 'F2 = panel · Ctrl+Shift+T = todo',
      btnCancel: '⛔ Cancelar', toastCancelled: '⛔ Traducción cancelada',
      secHotkeys: 'Atajos', hotkeyPanel: 'Abrir panel', hotkeyAll: 'Traducir todo',
      hotkeyPress: 'Presiona una tecla…', hotkeyReset: '↺ Restablecer',
      secColors: 'Colores del tema', colorAcc: 'Acento', colorTxt: 'Texto', colorBg: 'Fondo', colorOk: 'Éxito',
      btnResetColors: '↺ Restablecer colores',
    },
    pl: {
      title: 'Tłumacz Reddit', ver: 'v1.0.0',
      tabSettings: '⚙️ Ustawienia', tabHistory: '📖 Historia', tabExtras: '✨ Extras',
      translateAll: 'PRZETŁUMACZ WSZYSTKO',
      secUiLang: 'Język interfejsu', applyUi: '✨ ZASTOSUJ INTERFEJS',
      secTargetLang: 'Język docelowy', saveLang: '💾 ZAPISZ JĘZYK',
      secEngine: 'Silnik', secTone: 'Styl', secTheme: 'Motyw',
      engGoogle: 'Google', engMymemory: 'MyMemory',
      toneNeutral: 'Neutralny', toneFormal: 'Formalny', toneSlang: 'Potoczny',
      themeDark: 'Ciemny', themeLight: 'Jasny', themeCyber: 'Cyberpunk', themeDracula: 'Dracula',
      togBilingual: 'Tryb dwujęzyczny', togTts: 'Mowa syntetyczna',
      togAutoConvert: 'Auto-konwersja', togAutoScroll: 'Auto-przewijanie',
      togIncognito: 'Incognito',
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
      toastAll: '✅ Przetłumaczono', toastApply: '✅ Interfejs zaktualizowany',
      toastSave: '💾 Zapisano — przeładowanie…', toastSurprise: '🎲 Język:',
      toastPirateOn: '🏴‍☠️ Arrr! Tryb Pirata!', toastPirateOff: '🏴‍☠️ Tryb wyłączony',
      toastYodaOn: '🧙 Tryb Yody włączony, hmm.', toastYodaOff: '🧙 Tryb wyłączony.',
      shortcutHint: 'F2 = panel · Ctrl+Shift+T = wszystko',
      btnCancel: '⛔ Anuluj', toastCancelled: '⛔ Tłumaczenie anulowane',
      secHotkeys: 'Skróty klawiszowe', hotkeyPanel: 'Otwórz panel', hotkeyAll: 'Przetłumacz wszystko',
      hotkeyPress: 'Naciśnij klawisz…', hotkeyReset: '↺ Resetuj',
      secColors: 'Kolory motywu', colorAcc: 'Akcent', colorTxt: 'Tekst', colorBg: 'Tło', colorOk: 'Sukces',
      btnResetColors: '↺ Resetuj kolory',
    },
    tr: {
      title: 'Reddit Çevirmeni', ver: 'v1.0.0',
      tabSettings: '⚙️ Ayarlar', tabHistory: '📖 Geçmiş', tabExtras: '✨ Ekstra',
      translateAll: 'HEPSİNİ ÇEVİR',
      secUiLang: 'Arayüz dili', applyUi: '✨ ARAYÜZÜ UYGULA',
      secTargetLang: 'Hedef dil', saveLang: '💾 DİLİ KAYDET',
      secEngine: 'Motor', secTone: 'Stil', secTheme: 'Tema',
      engGoogle: 'Google', engMymemory: 'MyMemory',
      toneNeutral: 'Nötr', toneFormal: 'Resmi', toneSlang: 'Günlük',
      themeDark: 'Koyu', themeLight: 'Açık', themeCyber: 'Cyberpunk', themeDracula: 'Dracula',
      togBilingual: 'Çift dil modu', togTts: 'Metin okuma',
      togAutoConvert: 'Otomatik dönüştürme', togAutoScroll: 'Otomatik kaydırma',
      togIncognito: 'Gizli mod',
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
      toastAll: '✅ Çevrildi', toastApply: '✅ Arayüz güncellendi',
      toastSave: '💾 Kaydedildi — yenileniyor…', toastSurprise: '🎲 Dil:',
      toastPirateOn: '🏴‍☠️ Arrr! Korsan modu!', toastPirateOff: '🏴‍☠️ Mod kapatıldı',
      toastYodaOn: '🧙 Yoda modu açık, hmm.', toastYodaOff: '🧙 Yoda modu kapalı.',
      shortcutHint: 'F2 = panel · Ctrl+Shift+T = hepsi',
      btnCancel: '⛔ İptal', toastCancelled: '⛔ Çeviri iptal edildi',
      secHotkeys: 'Kısayollar', hotkeyPanel: 'Paneli aç', hotkeyAll: 'Hepsini çevir',
      hotkeyPress: 'Bir tuşa basın…', hotkeyReset: '↺ Sıfırla',
      secColors: 'Tema renkleri', colorAcc: 'Vurgu', colorTxt: 'Metin', colorBg: 'Arka plan', colorOk: 'Başarı',
      btnResetColors: '↺ Renkleri sıfırla',
    },
    zh: {
      title: 'Reddit翻译器', ver: 'v1.0.0',
      tabSettings: '⚙️ 设置', tabHistory: '📖 历史', tabExtras: '✨ 更多',
      translateAll: '翻译全部',
      secUiLang: '界面语言', applyUi: '✨ 应用界面',
      secTargetLang: '目标语言', saveLang: '💾 保存语言',
      secEngine: '引擎', secTone: '风格', secTheme: '主题',
      engGoogle: 'Google', engMymemory: 'MyMemory',
      toneNeutral: '中性', toneFormal: '正式', toneSlang: '口语',
      themeDark: '深色', themeLight: '浅色', themeCyber: '赛博朋克', themeDracula: '德古拉',
      togBilingual: '双语模式', togTts: '文字转语音',
      togAutoConvert: '自动单位转换', togAutoScroll: '自动滚动',
      togIncognito: '隐身模式',
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
      toastAll: '✅ 已翻译', toastApply: '✅ 界面已更新',
      toastSave: '💾 已保存 — 重新加载…', toastSurprise: '🎲 语言:',
      toastPirateOn: '🏴‍☠️ Arrr! 海盗模式！', toastPirateOff: '🏴‍☠️ 模式关闭',
      toastYodaOn: '🧙 尤达模式已开启，嗯。', toastYodaOff: '🧙 尤达模式已关闭。',
      shortcutHint: 'F2 = 面板 · Ctrl+Shift+T = 全部',
      btnCancel: '⛔ 取消', toastCancelled: '⛔ 翻译已取消',
      secHotkeys: '快捷键', hotkeyPanel: '打开面板', hotkeyAll: '翻译全部',
      hotkeyPress: '按下一个键…', hotkeyReset: '↺ 重置',
      secColors: '主题颜色', colorAcc: '强调色', colorTxt: '文字', colorBg: '背景', colorOk: '成功',
      btnResetColors: '↺ 重置颜色',
    },
    ja: {
      title: 'Reddit翻訳', ver: 'v1.0.0',
      tabSettings: '⚙️ 設定', tabHistory: '📖 履歴', tabExtras: '✨ その他',
      translateAll: 'すべて翻訳',
      secUiLang: 'UI言語', applyUi: '✨ UIを適用',
      secTargetLang: '翻訳先言語', saveLang: '💾 言語を保存',
      secEngine: 'エンジン', secTone: 'スタイル', secTheme: 'テーマ',
      engGoogle: 'Google', engMymemory: 'MyMemory',
      toneNeutral: '標準', toneFormal: '公式', toneSlang: 'くだけた',
      themeDark: 'ダーク', themeLight: 'ライト', themeCyber: 'サイバーパンク', themeDracula: 'ドラキュラ',
      togBilingual: 'バイリンガルモード', togTts: '音声合成',
      togAutoConvert: '単位自動変換', togAutoScroll: '自動スクロール',
      togIncognito: 'シークレット',
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
      toastAll: '✅ 翻訳済み', toastApply: '✅ UIを更新しました',
      toastSave: '💾 保存しました — 再読込中…', toastSurprise: '🎲 言語:',
      toastPirateOn: '🏴‍☠️ Arrr! 海賊モード！', toastPirateOff: '🏴‍☠️ モードオフ',
      toastYodaOn: '🧙 ヨーダモードオン、ふむ。', toastYodaOff: '🧙 ヨーダモードオフ。',
      shortcutHint: 'F2 = パネル · Ctrl+Shift+T = すべて',
      btnCancel: '⛔ キャンセル', toastCancelled: '⛔ 翻訳をキャンセルしました',
      secHotkeys: 'ショートカット', hotkeyPanel: 'パネルを開く', hotkeyAll: 'すべて翻訳',
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
    dark: { bg: 'rgba(10,10,14,.96)', surf: 'rgba(24,24,32,.9)', brd: 'rgba(255,255,255,.06)', txt: '#e0e0ec', mut: 'rgba(255,255,255,.28)', acc: '#ff4500', glow: 'rgba(255,69,0,.36)', dim: 'rgba(255,69,0,.11)', ok: '#60d394', okd: 'rgba(96,211,148,.11)' },
    light: { bg: 'rgba(246,246,250,.97)', surf: 'rgba(255,255,255,.93)', brd: 'rgba(0,0,0,.07)', txt: '#17171e', mut: 'rgba(0,0,0,.36)', acc: '#ff4500', glow: 'rgba(255,69,0,.2)', dim: 'rgba(255,69,0,.09)', ok: '#1a9e5a', okd: 'rgba(26,158,90,.09)' },
    cyberpunk: { bg: 'rgba(3,0,16,.97)', surf: 'rgba(10,3,32,.93)', brd: 'rgba(0,255,255,.11)', txt: '#ddf4ff', mut: 'rgba(0,255,255,.36)', acc: '#00ffff', glow: 'rgba(0,255,255,.44)', dim: 'rgba(0,255,255,.09)', ok: '#ff00aa', okd: 'rgba(255,0,170,.1)' },
    dracula: { bg: 'rgba(14,14,26,.97)', surf: 'rgba(26,26,46,.91)', brd: 'rgba(139,92,246,.16)', txt: '#f8f8f2', mut: 'rgba(189,147,249,.5)', acc: '#bd93f9', glow: 'rgba(189,147,249,.42)', dim: 'rgba(189,147,249,.1)', ok: '#50fa7b', okd: 'rgba(80,250,123,.1)' },
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
        --f:'Outfit',sans-serif; --fm:'JetBrains Mono',monospace; --r:15px;
    }

    /* ─ КОНТЕНТНЫЕ КНОПКИ ─ */
    .rtp-btn {
        display:inline-flex; align-items:center; gap:5px;
        margin:3px 6px; padding:3px 11px;
        font-family:var(--f); font-size:10.5px; font-weight:600; letter-spacing:.04em;
        color:var(--rtp-acc); background:var(--rtp-dim);
        border:1px solid rgba(255,69,0,.24); border-radius:20px;
        cursor:pointer; vertical-align:middle; white-space:nowrap;
        transition:all .22s cubic-bezier(.34,1.56,.64,1); opacity:.6;
    }
    .rtp-btn:hover { opacity:1; transform:translateY(-1px) scale(1.05); box-shadow:0 4px 14px var(--rtp-glow); }
    .rtp-btn.done  { color:var(--rtp-ok); background:var(--rtp-okd); border-color:rgba(96,211,148,.26); opacity:1; }
    .rtp-btn.busy  { opacity:.4; pointer-events:none; }

    /* Спиннер */
    .sp { display:inline-block; width:8px; height:8px; border:1.5px solid currentColor; border-top-color:transparent; border-radius:50%; animation:spin .75s linear infinite; }
    @keyframes spin { to{transform:rotate(360deg)} }

    /* Fade-in при появлении перевода */
    .rtp-fi { animation:fi .4s ease; }
    @keyframes fi { from{opacity:0;transform:translateY(3px)} to{opacity:1;transform:none} }

    /* Двуязычный блок */
    .rtp-bi { margin:4px 0; padding:8px 13px; background:var(--rtp-dim); border-left:2.5px solid var(--rtp-acc); border-radius:0 9px 9px 0; font-size:13px; line-height:1.55; color:var(--rtp-txt); font-family:var(--f); }

    /* Тулбар */
    .rtp-tb { display:inline-flex; gap:3px; margin:2px 6px; }
    .rtp-t  { display:inline-flex; align-items:center; padding:2px 8px; font-family:var(--f); font-size:9.5px; font-weight:600; letter-spacing:.04em; color:var(--rtp-mut); border:1px solid var(--rtp-brd); border-radius:12px; cursor:pointer; transition:all .16s; background:transparent; }
    .rtp-t:hover { color:var(--rtp-txt); background:var(--rtp-surf); }

    /* ─ FAB ─ */
    #rtp-fab {
        position:fixed; bottom:28px; right:28px; z-index:9998;
        display:flex; align-items:center; gap:0;
        background:var(--rtp-acc); color:#fff; border:none;
        border-radius:28px; height:52px; padding:0 22px;
        font-family:var(--f); font-size:13px; font-weight:800; letter-spacing:.07em;
        cursor:pointer; overflow:hidden;
        box-shadow:0 8px 28px var(--rtp-glow), 0 2px 8px rgba(0,0,0,.3);
        transition:all .28s cubic-bezier(.34,1.56,.64,1);
    }
    #rtp-fab::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,.15),transparent 60%); }
    #rtp-fab:hover { transform:translateY(-3px) scale(1.03); box-shadow:0 14px 38px var(--rtp-glow); }
    #rtp-fab .badge { margin-left:10px; background:rgba(255,255,255,.22); border-radius:10px; padding:1px 8px; font-size:11px; }
    #rtp-cancel {
        position:fixed; bottom:28px; right:calc(28px + 52px + 10px); z-index:9998;
        display:none; align-items:center;
        background:rgba(40,40,50,.92); color:#ff6b6b; border:1.5px solid rgba(255,107,107,.35);
        border-radius:28px; height:52px; padding:0 18px;
        font-family:var(--f); font-size:13px; font-weight:700; letter-spacing:.05em;
        cursor:pointer; overflow:hidden;
        box-shadow:0 8px 24px rgba(255,80,80,.2);
        transition:all .22s cubic-bezier(.34,1.56,.64,1);
        backdrop-filter:blur(10px);
    }
    #rtp-cancel.visible { display:flex; }
    #rtp-cancel:hover { transform:translateY(-3px) scale(1.03); background:rgba(255,80,80,.18); box-shadow:0 12px 32px rgba(255,80,80,.3); }

    /* Прогресс */
    #rtp-prog { position:fixed; top:0; left:0; right:0; height:3px; z-index:10009; }
    #rtp-prog-fill { height:100%; width:0%; background:linear-gradient(90deg,var(--rtp-acc),#ff8a50); box-shadow:0 0 10px var(--rtp-glow); transition:width .22s ease; }

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
    .lang-sel option { background:#16161e; }

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
    [data-rtp-theme=cyberpunk] #rtp-fab { background:#00ffff; color:#000; box-shadow:0 0 28px rgba(0,255,255,.55); }
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
  let reqQ = Promise.resolve();
  let reqGen = 0; // поколение очереди — сброс при отмене

  function enqueue(fn) {
    const gen = reqGen;
    reqQ = reqQ
      .then(() => new Promise(r => setTimeout(r, cfg.requestDelay)))
      .then(() => gen === reqGen ? fn() : null)
      .catch(() => { });
    return reqQ;
  }

  function cancelQueue() {
    reqGen++;
    reqQ = Promise.resolve(); // сбрасываем цепочку
  }

  function toneHint() {
    if (cfg.tone === 'formal') return 'Translate formally and professionally: ';
    if (cfg.tone === 'slang') return 'Translate casually and colloquially: ';
    return '';
  }

  async function doTranslate(text) {
    const key = `${cfg.engine}|${cfg.targetLang}|${cfg.tone}|${text}`;
    if (cache[key]) { cache[key].ts = Date.now(); return cache[key].val; }

    const q = toneHint() + text;
    let result = text;

    try {
      if (cfg.engine === 'mymemory') {
        result = await new Promise(res => GM_xmlhttpRequest({
          method: 'GET',
          url: `https://api.mymemory.translated.net/get?q=${encodeURIComponent(q)}&langpair=auto|${cfg.targetLang}`,
          onload: r => { try { res(JSON.parse(r.responseText).responseData.translatedText); } catch { res(text); } },
          onerror: () => res(text),
        }));
      } else {
        result = await new Promise(res => GM_xmlhttpRequest({
          method: 'GET',
          url: `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${cfg.targetLang}&dt=t&q=${encodeURIComponent(q)}`,
          onload: r => { try { res(JSON.parse(r.responseText)[0].map(i => i[0]).join('')); } catch { res(text); } },
          onerror: () => res(text),
        }));
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
  function speak(text) {
    if (!cfg.ttsEnabled || !window.speechSynthesis) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text.slice(0, 500));
    u.lang = cfg.targetLang; u.rate = 0.95;
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

  function setProgress(p) {
    const el = document.getElementById('rtp-prog-fill');
    if (el) el.style.width = p + '%';
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

  // ═══════════════════════════════════════════════════════════════════════════
  // § ИНЖЕКТ КНОПОК
  // ═══════════════════════════════════════════════════════════════════════════
  const SELS = [
    'shreddit-post [slot="title"]', 'h1[slot="title"]', 'a[id^="post-title"]',
    'div[shreddit-comment-content]', '.md:not(.rtp-done)',
  ].join(',');

  function attachBtn(el) {
    if (!el || el.dataset.rtpDone) return;
    const txt = (el.innerText || '').trim();
    if (txt.length < 5) return;
    el.dataset.rtpDone = '1'; el.classList.add('rtp-done');

    const btn = document.createElement('button');
    btn.className = 'rtp-btn';
    btn.innerHTML = `🌐 ${cfg.targetLang.toUpperCase()}`;
    btn.dataset.st = 'orig';

    btn.onclick = async (e) => {
      e.preventDefault(); e.stopPropagation();

      // ── Откат к оригиналу ──
      if (btn.dataset.st === 'done') {
        if (btn._bi) { btn._bi.remove(); btn._bi = null; }
        else { el.innerText = el.dataset.orig; }
        btn.innerHTML = `🌐 ${cfg.targetLang.toUpperCase()}`;
        btn.classList.remove('done');
        btn.dataset.st = 'orig';
        if (btn._tb) { btn._tb.remove(); btn._tb = null; }
        return;
      }

      if (!el.dataset.orig) el.dataset.orig = el.innerText.trim();
      btn.innerHTML = '<span class="sp"></span>';
      btn.classList.add('busy');

      const src = expandSlang(el.dataset.orig);
      const res = await enqueue(() => doTranslate(src));

      btn.classList.remove('busy'); btn.classList.add('done');
      btn.innerHTML = `✓ ${S('btnOrig')}`; btn.dataset.st = 'done';

      if (cfg.bilingualMode) {
        const bi = document.createElement('div');
        bi.className = 'rtp-bi rtp-fi'; bi.innerText = res;
        btn._bi = bi; el.after(bi);
      } else {
        el.classList.add('rtp-fi');
        el.innerText = res;
        setTimeout(() => el.classList.remove('rtp-fi'), 450);
      }

      if (cfg.autoScroll) btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      // Тулбар
      const tb = document.createElement('div'); tb.className = 'rtp-tb';
      const mk = (label, fn) => {
        const t = document.createElement('span'); t.className = 'rtp-t';
        t.textContent = label; t.onclick = fn; return t;
      };
      tb.append(
        mk(S('btnCopy'), () => navigator.clipboard.writeText(res).then(() => toast(S('copied')))),
        mk(S('btnSpeak'), () => speak(res)),
        mk(S('btnRetry'), async () => {
          // Очищаем кэш этой записи и делаем чистый повтор
          const k = `${cfg.engine}|${cfg.targetLang}|${cfg.tone}|${src}`;
          delete cache[k]; flushCache();
          // Откатываем состояние
          if (btn._bi) { btn._bi.remove(); btn._bi = null; }
          else if (el.dataset.orig) { el.innerText = el.dataset.orig; }
          btn.classList.remove('done'); btn.dataset.st = 'orig';
          tb.remove(); btn._tb = null;
          // Запускаем перевод заново
          await new Promise(r => setTimeout(r, 50));
          btn.click();
        }),
      );
      btn._tb = tb; btn.after(tb);

      cfg.totalCount++;
      cfg.totalChars += (el.dataset.orig || '').length;
      flushStats();
      pushHistory(el.dataset.orig, res, cfg.targetLang);
      updateStats();
    };

    el.after(btn);
  }

  // IntersectionObserver — переводим сначала видимые
  const ioQueue = new Set();
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { attachBtn(e.target); ioQueue.delete(e.target); io.unobserve(e.target); } });
  }, { rootMargin: '200px' });

  function injectButtons() {
    document.querySelectorAll(SELS).forEach(el => {
      if (el.dataset.rtpDone || (el.innerText || '').trim().length < 5) return;
      if (!ioQueue.has(el)) { ioQueue.add(el); io.observe(el); }
    });
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
  function createFAB() {
    if (document.getElementById('rtp-fab')) return;

    // Прогресс-бар
    const prog = document.createElement('div'); prog.id = 'rtp-prog';
    prog.innerHTML = '<div id="rtp-prog-fill"></div>';
    document.body.appendChild(prog);

    // Кнопка отмены
    const cancelBtn = document.createElement('button'); cancelBtn.id = 'rtp-cancel';
    cancelBtn.textContent = S('btnCancel');
    document.body.appendChild(cancelBtn);

    const fab = document.createElement('button'); fab.id = 'rtp-fab';
    fab.innerHTML = `🌍 ${S('translateAll')} <span class="badge" id="fab-n">0</span>`;

    let busy = false;
    let cancelled = false;

    cancelBtn.onclick = () => {
      if (!busy) return;
      cancelled = true;
      cancelQueue();
    };

    fab.onclick = async () => {
      if (busy) return;
      const btns = [...document.querySelectorAll('.rtp-btn')].filter(b => b.dataset.st !== 'done');
      if (!btns.length) { toast('✅ ' + S('toastAll')); return; }

      busy = true; cancelled = false;
      fab.style.opacity = '.6';
      cancelBtn.classList.add('visible');

      const CHUNK = 6;
      for (let i = 0; i < btns.length; i += CHUNK) {
        if (cancelled) break;
        btns.slice(i, i + CHUNK).forEach(b => b.click());
        setProgress((i + CHUNK) / btns.length * 100);
        await new Promise(r => setTimeout(r, cfg.requestDelay * 3 + 250));
      }

      setProgress(cancelled ? 0 : 100);
      if (!cancelled) setTimeout(() => setProgress(0), 1000);
      cancelBtn.classList.remove('visible');
      busy = false; fab.style.opacity = '1';
      toast(cancelled ? S('toastCancelled') : `${S('toastAll')}: ${btns.length}`);
    };

    document.body.appendChild(fab);
    if (createFAB._badgeTimer) clearInterval(createFAB._badgeTimer);
    createFAB._badgeTimer = setInterval(() => { const n = document.getElementById('fab-n'); if (n) n.textContent = document.querySelectorAll('.rtp-btn').length; }, 1500);
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // § ПАНЕЛЬ
  // ═══════════════════════════════════════════════════════════════════════════
  let activeTab = 'settings';
  let btnsHidden = false;

  function buildPanel() {
    const old = document.getElementById('rtp-panel');
    if (old) { old.remove(); return; }

    const panel = document.createElement('div'); panel.id = 'rtp-panel';
    panel.style.top = GM_getValue('panelY', '11%');
    panel.style.left = GM_getValue('panelX', 'calc(50% - 186px)');

    panel.innerHTML = `
        <div id="rtp-hdr">
            <div class="logo-w">
                <div class="logo-ic">🌐</div>
                <div>
                    <div class="logo-nm">${S('title')}</div>
                    <div class="logo-vr">${S('ver')} · ${cfg.hotkeyPanel} · ${cfg.hotkeyAll}</div>
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
            <div class="div"></div>
            <div>
                <span class="lbl">⌨️ ${S('secHotkeys')}</span>
                <div class="hk-row">
                    <span class="hk-lbl">${S('hotkeyPanel')}</span>
                    <button class="hk-btn" id="hk-panel">${cfg.hotkeyPanel}</button>
                    <button class="hk-reset" id="hk-panel-r">${S('hotkeyReset')}</button>
                </div>
                <div class="hk-row">
                    <span class="hk-lbl">${S('hotkeyAll')}</span>
                    <button class="hk-btn" id="hk-all">${cfg.hotkeyAll}</button>
                    <button class="hk-reset" id="hk-all-r">${S('hotkeyReset')}</button>
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

    // ── Языки ──────────────────────────────────────────────────────────
    // UI lang (только поддерживаемые)
    const uiSel = panel.querySelector('#ui-sel');
    const uiSearch = panel.querySelector('#ui-s');
    const uiOpts = UI_SUPPORTED.map(c => ({ c, n: langName(c, c) })).sort((a, b) => a.n.localeCompare(b.n));
    function renderUi(q) {
      const f = q.toLowerCase();
      uiSel.innerHTML = uiOpts.filter(({ c, n }) => !f || n.toLowerCase().includes(f) || c.includes(f))
        .map(({ c, n }) => `<option value="${c}" ${c === cfg.uiLang ? 'selected' : ''}>${n} (${c.toUpperCase()})</option>`).join('');
    }
    renderUi('');
    uiSearch.addEventListener('input', () => renderUi(uiSearch.value));

    // Target lang (все языки)
    buildLangSelect(panel.querySelector('#tg-sel'), panel.querySelector('#tg-s'), ALL_LANGS, cfg.targetLang);

    // ── КНОПКА «ПРИМЕНИТЬ ИНТЕРФЕЙС» (без перезагрузки) ──────────────
    panel.querySelector('#btn-apply-ui').onclick = () => {
      const newLang = uiSel.value;
      save('uiLang', newLang);
      panel.remove();
      toast(S('toastApply'));
      setTimeout(buildPanel, 180);  // перестраиваем с новым языком
    };

    // ── КНОПКА «СОХРАНИТЬ ЯЗЫК ПЕРЕВОДА» (с перезагрузкой) ───────────
    panel.querySelector('#btn-save-lang').onclick = () => {
      save('targetLang', panel.querySelector('#tg-sel').value);
      toast(S('toastSave'));
      setTimeout(() => location.reload(), 900);
    };

    // ── Пилюли: движок ────────────────────────────────────────────────
    panel.querySelectorAll('[data-eng]').forEach(p => p.onclick = () => {
      panel.querySelectorAll('[data-eng]').forEach(x => x.classList.remove('on'));
      p.classList.add('on'); save('engine', p.dataset.eng);
    });

    // ── Пилюли: тон ───────────────────────────────────────────────────
    panel.querySelectorAll('[data-tone]').forEach(p => p.onclick = () => {
      panel.querySelectorAll('[data-tone]').forEach(x => x.classList.remove('on'));
      p.classList.add('on'); save('tone', p.dataset.tone);
    });

    // ── Пилюли: тема (мгновенно) ──────────────────────────────────────
    panel.querySelectorAll('[data-th]').forEach(p => p.onclick = () => {
      panel.querySelectorAll('[data-th]').forEach(x => x.classList.remove('on'));
      p.classList.add('on'); save('theme', p.dataset.th); applyTheme(p.dataset.th);
    });

    // ── Тогглы ────────────────────────────────────────────────────────
    const toggles = [
      ['bilingualMode'], ['ttsEnabled'], ['autoConvert'], ['autoScroll'], ['incognito'],
    ];
    panel.querySelectorAll('.tog-row').forEach((row, i) => {
      if (!toggles[i]) return;
      const [key] = toggles[i];
      row.appendChild(mkToggle(cfg[key], v => save(key, v)));
    });

    // ── Слайдер ───────────────────────────────────────────────────────
    const sl = panel.querySelector('#sl-delay');
    sl.oninput = () => {
      save('requestDelay', +sl.value);
      panel.querySelector('#sl-val').textContent = sl.value + ' мс';
    };

    // ── Горячие клавиши ───────────────────────────────────────────────
    function setupHotkeyCapturer(btnId, resetId, cfgKey, defaultVal) {
      const btn = panel.querySelector(`#${btnId}`);
      const rst = panel.querySelector(`#${resetId}`);
      if (!btn || !rst) return;
      let capturing = false;
      let captureHandler = null;

      btn.onclick = () => {
        if (capturing) return;
        capturing = true;
        btn.textContent = S('hotkeyPress');
        btn.classList.add('capturing');

        captureHandler = (e) => {
          e.preventDefault(); e.stopPropagation();
          // Игнорируем одиночные модификаторы
          if (['Control', 'Alt', 'Shift', 'Meta'].includes(e.key)) return;
          const parts = [];
          if (e.ctrlKey) parts.push('Ctrl');
          if (e.altKey) parts.push('Alt');
          if (e.shiftKey) parts.push('Shift');
          if (e.metaKey) parts.push('Meta');
          const k = e.key.length === 1 ? e.key.toUpperCase() : e.key;
          parts.push(k);
          const combo = parts.join('+');
          save(cfgKey, combo);
          btn.textContent = combo;
          btn.classList.remove('capturing');
          capturing = false;
          document.removeEventListener('keydown', captureHandler, true);
        };
        document.addEventListener('keydown', captureHandler, true);
      };

      rst.onclick = () => {
        if (captureHandler) document.removeEventListener('keydown', captureHandler, true);
        capturing = false; btn.classList.remove('capturing');
        save(cfgKey, defaultVal);
        btn.textContent = defaultVal;
      };
    }
    setupHotkeyCapturer('hk-panel', 'hk-panel-r', 'hotkeyPanel', 'F2');
    setupHotkeyCapturer('hk-all', 'hk-all-r', 'hotkeyAll', 'Ctrl+Shift+T');

    // ── Цвета темы ────────────────────────────────────────────────────
    (function initColorPickers() {
      const base = THEMES[cfg.theme] || THEMES.dark;
      const cc = (() => { try { return cfg.customColors ? (typeof cfg.customColors === 'string' ? JSON.parse(cfg.customColors) : cfg.customColors) : {}; } catch { return {}; } })();
      const merged = Object.assign({}, base, cc);

      const map = [
        { id: 'clr-acc', key: 'acc' },
        { id: 'clr-txt', key: 'txt' },
        { id: 'clr-bg', key: 'bg' },
        { id: 'clr-ok', key: 'ok' },
      ];

      map.forEach(({ id, key }) => {
        const inp = panel.querySelector(`#${id}`);
        if (!inp) return;
        inp.value = colorToHex(merged[key] || '#888888');
        inp.oninput = () => {
          const newCC = (() => { try { return cfg.customColors ? (typeof cfg.customColors === 'string' ? JSON.parse(cfg.customColors) : cfg.customColors) : {}; } catch { return {}; } })();
          newCC[key] = inp.value;
          // Для bg/surf — также обновляем прозрачность surf на основе bg
          if (key === 'bg') {
            const r = parseInt(inp.value.slice(1, 3), 16), g = parseInt(inp.value.slice(3, 5), 16), b = parseInt(inp.value.slice(5, 7), 16);
            newCC.surf = `rgba(${r},${g},${b},.85)`;
          }
          // glow и dim автоматически из acc
          if (key === 'acc') {
            const r = parseInt(inp.value.slice(1, 3), 16), g = parseInt(inp.value.slice(3, 5), 16), b = parseInt(inp.value.slice(5, 7), 16);
            newCC.glow = `rgba(${r},${g},${b},.38)`;
            newCC.dim = `rgba(${r},${g},${b},.11)`;
          }
          // okd из ok
          if (key === 'ok') {
            const r = parseInt(inp.value.slice(1, 3), 16), g = parseInt(inp.value.slice(3, 5), 16), b = parseInt(inp.value.slice(5, 7), 16);
            newCC.okd = `rgba(${r},${g},${b},.11)`;
          }
          save('customColors', JSON.stringify(newCC));
          applyTheme(cfg.theme);
        };
      });

      panel.querySelector('#btn-reset-clr').onclick = () => {
        save('customColors', null);
        applyTheme(cfg.theme);
        // Сбрасываем пикеры на значения базовой темы
        const base2 = THEMES[cfg.theme] || THEMES.dark;
        map.forEach(({ id, key }) => {
          const inp = panel.querySelector(`#${id}`);
          if (inp) inp.value = colorToHex(base2[key] || '#888888');
        });
      };
    })();

    // ── Управление ────────────────────────────────────────────────────
    panel.querySelector('#btn-rpos').onclick = () => {
      panel.style.top = '11%'; panel.style.left = 'calc(50% - 186px)';
      GM_setValue('panelX', null); GM_setValue('panelY', null);
    };

    panel.querySelector('#btn-ccache').onclick = () => {
      cache = {}; flushCache(); toast(S('cacheCleared'));
    };

    panel.querySelector('#btn-exp').onclick = () => {
      const a = document.createElement('a');
      a.href = 'data:text/json,' + encodeURIComponent(JSON.stringify({ v: 8, cfg }, null, 2));
      a.download = 'rtp-v8-settings.json'; a.click();
    };

    panel.querySelector('#btn-imp').onclick = () => {
      const inp = document.createElement('input'); inp.type = 'file'; inp.accept = '.json';
      inp.onchange = e => {
        const fr = new FileReader();
        fr.onload = ev => {
          try {
            const d = JSON.parse(ev.target.result);
            const src = d.cfg || d;
            Object.entries(src).forEach(([k, v]) => { if (k in DEF) { cfg[k] = v; GM_setValue(k, v); } });
            location.reload();
          } catch { toast('❌ Ошибка импорта'); }
        };
        fr.readAsText(e.target.files[0]);
      };
      inp.click();
    };

    // ── Пасхалки ──────────────────────────────────────────────────────
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
    if (pirateMode) pirBtn.classList.add('active');

    const yodBtn = panel.querySelector('#btn-yoda');
    yodBtn.onclick = () => {
      yodaMode = !yodaMode;
      yodBtn.classList.toggle('active', yodaMode);
      toast(yodaMode ? S('toastYodaOn') : S('toastYodaOff'));
    };
    if (yodaMode) yodBtn.classList.add('active');

    const hideBtn = panel.querySelector('#btn-hide');
    hideBtn.onclick = () => {
      btnsHidden = !btnsHidden;
      document.querySelectorAll('.rtp-btn,.rtp-tb,.rtp-bi').forEach(el => el.style.display = btnsHidden ? 'none' : '');
      hideBtn.textContent = btnsHidden ? S('btnShow') : S('btnHide');
      hideBtn.classList.toggle('active', btnsHidden);
    };

    // ── Табы ──────────────────────────────────────────────────────────
    panel.querySelectorAll('.tab').forEach(tab => tab.onclick = () => {
      activeTab = tab.dataset.tab;
      panel.querySelectorAll('.tab').forEach(t => t.classList.remove('on'));
      tab.classList.add('on');
      panel.querySelectorAll('.pane').forEach(p => p.style.display = 'none');
      panel.querySelector(`#pane-${activeTab}`).style.display = 'flex';
      if (activeTab === 'history') renderHistory(panel);
      if (activeTab === 'settings') updateStats();
    });

    renderHistory(panel);

    // ── Drag ──────────────────────────────────────────────────────────
    const hdr = panel.querySelector('#rtp-hdr');
    hdr.onmousedown = e => {
      if (e.target.id === 'rtp-close') return;
      const ox = e.clientX - panel.offsetLeft, oy = e.clientY - panel.offsetTop;
      const mm = ev => { panel.style.left = (ev.clientX - ox) + 'px'; panel.style.top = (ev.clientY - oy) + 'px'; };
      const cleanup = () => {
        GM_setValue('panelX', panel.style.left); GM_setValue('panelY', panel.style.top);
        document.removeEventListener('mousemove', mm);
        document.removeEventListener('mouseup', cleanup);
      };
      document.addEventListener('mousemove', mm);
      document.addEventListener('mouseup', cleanup, { once: true });
      document.addEventListener('mouseleave', cleanup, { once: true });
    };

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
    clr.onclick = () => { history = []; GM_setValue('rtp_v8_history', '[]'); renderHistory(panel); };
    pane.appendChild(clr);
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // § ЗАПУСК
  // ═══════════════════════════════════════════════════════════════════════════
  applyTheme(cfg.theme);
  createFAB();
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
    if (matchesHotkey(e, cfg.hotkeyAll)) { e.preventDefault(); document.getElementById('rtp-fab')?.click(); }
  });

})();
