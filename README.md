<div align="center">

<img src="https://img.shields.io/badge/version-v1.0.10-ff4500?style=for-the-badge&logo=reddit&logoColor=white"/>
<img src="https://img.shields.io/badge/license-MIT-60d394?style=for-the-badge"/>
<img src="https://img.shields.io/badge/languages-100%2B-bd93f9?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Tampermonkey-ready-ff4500?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Violentmonkey-ready-ff4500?style=for-the-badge"/>

# 🌐 Reddit Translator Pro Auto

**An amateur userscript that brings seamless, inline translation to Reddit — right where you read.**  

[**📥 Install**](https://github.com/ebayybe/reddit-translator#-installation) · [**⚙️ Features**](https://github.com/ebayybe/reddit-translator#%EF%B8%8F-features) · [**🌍 Supported UI Languages**](https://github.com/ebayybe/reddit-translator#-supported-ui-languages) · [**📋 Changelog**](https://github.com/ebayybe/reddit-translator#-changelog)

</div>

---

## 📥 Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/) for your browser
2. Click **[Install Script](https://raw.githubusercontent.com/ebayybe/reddit-translator/main/reddit-translator-pro-auto.user.js)**
3. Confirm installation — done ✅

> The script auto-updates when a new version is published.

---

## ⚙️ Features

| Feature | Description |
|---|---|
| 🌍 **100+ languages** | Translate to any of 100+ supported languages via Google Translate, MyMemory or DeepL |
| 🔑 **DeepL support** | Use your own DeepL API key (Free or Pro) for higher quality translations |
| 📖 **Bilingual mode** | See original and translated text side by side |
| 📜 **History** | Browse your last 50 translations |
| ⚡ **Auto-translate on scroll** | Translations appear automatically as you scroll through the feed |
| 🔄 **Unit converter** | Automatically converts imperial ↔ metric units inline |
| 🎨 **Custom colors** | Customize accent, text, background and success colors |
| ⌨️ **Hotkeys** | Configurable keyboard shortcut to open/close the panel (default: `F2`) |
| 📤 **Export / Import** | Back up and restore your settings |
| 🏴‍☠️ **Easter eggs** | Pirate mode, Yoda mode and a surprise language button |
| 🌐 **15 UI languages** | The interface itself supports 15 languages and auto-detects from your browser |

---

## 🌍 Supported UI Languages

The interface is fully translated into **15 languages** and automatically detects your browser language on first install:

| | Language | Code |
|---|---|---|
| 🇷🇺 | Русский | `ru` |
| 🇺🇦 | Українська | `uk` |
| 🇬🇧 | English | `en` |
| 🇩🇪 | Deutsch | `de` |
| 🇫🇷 | Français | `fr` |
| 🇪🇸 | Español | `es` |
| 🇮🇹 | Italiano | `it` |
| 🇧🇷 | Português | `pt` |
| 🇵🇱 | Polski | `pl` |
| 🇹🇷 | Türkçe | `tr` |
| 🇰🇷 | 한국어 | `ko` |
| 🇻🇳 | Tiếng Việt | `vi` |
| 🇸🇦 | العربية | `ar` |
| 🇨🇳 | 中文 | `zh` |
| 🇯🇵 | 日本語 | `ja` |

---

## 📋 Changelog

### v1.0.10 — Current
- 🌍 Added 5 new UI languages: Italian, Portuguese, Korean, Vietnamese, Arabic (now 15 total)
- 🔗 Fixed DeepL help link: now correctly points to `deepl.com/pro-api`
- 🎨 Removed Light / Cyberpunk / Dracula theme selection — dark theme only (more stable)
- 🌐 UI language is now auto-detected from browser/system settings on first install
- 🔑 Full localization of DeepL API Keys and Request Limits sections in all UI languages
- ⏱️ Request delay slider unit now localizes correctly (`ms`, `мс`, `毫秒`)

### v1.0.0
- 🚀 Initial public release

---

## 🛠️ Usage

1. Open any Reddit post or feed
2. Press **F2** (or your custom hotkey) to open the settings panel
3. Select your **target language** and **translation engine**
4. Click the **Translate** button next to any post or comment
5. Use **bilingual mode** to see original and translated text together

### DeepL Setup
1. Get a free API key at [deepl.com/pro-api](https://deepl.com/pro-api)
2. Open the panel → paste your key in the **DeepL API Keys** field
3. Click **Save DeepL Keys** and select DeepL as your engine

---

## 📁 Repository Structure

```
reddit-translator/
├── reddit-translator-pro-auto.user.js   # Main userscript (install this)
├── archive/                             # Previous development versions
├── scripts/                             # Build & utility scripts
├── tests/                               # Playwright tests
└── README.md
```

---

## 🙏 Credits & Acknowledgements

**Author & maintainer:** [ebayybe](https://github.com/ebayybe)


---

## 📄 License

[MIT](LICENSE) — free to use, modify and distribute.

---

<div align="center">

⚠️ *Неофициальный любительский проект · Unofficial amateur project · 非官方业余项目*

</div>

---

<details>
<summary>🇷🇺 Русский</summary>

## 🌐 Reddit Translator Pro Auto

Любительский пользовательский скрипт для встроенного перевода Reddit прямо в браузере.

### Установка
1. Установите [Tampermonkey](https://www.tampermonkey.net/) или [Violentmonkey](https://violentmonkey.github.io/)
2. Нажмите **[Установить скрипт](https://raw.githubusercontent.com/ebayybe/reddit-translator/main/reddit-translator-pro-auto.user.js)**
3. Подтвердите установку ✅

### Возможности
- 🌍 100+ языков перевода (Google, MyMemory, DeepL)
- 📖 Двуязычный режим
- 📜 История переводов
- ⚡ Автоперевод при прокрутке
- 🎨 Настраиваемые цвета
- 🌐 Интерфейс на 15 языках с автоопределением

### Благодарности
**Автор:** [ebayybe](https://github.com/ebayybe)  
**Особая благодарность [Dylan-ZQL](https://github.com/Dylan-ZQL)** — за значительный вклад в раннее развитие проекта, включая оригинальную архитектуру, систему мультиязычности, дизайн UI и интеграцию DeepL. 🫶

</details>

<details>
<summary>🇺🇦 Українська</summary>

## 🌐 Reddit Translator Pro Auto

Аматорський користувацький скрипт для вбудованого перекладу Reddit прямо у браузері.

### Встановлення
1. Встановіть [Tampermonkey](https://www.tampermonkey.net/) або [Violentmonkey](https://violentmonkey.github.io/)
2. Натисніть **[Встановити скрипт](https://raw.githubusercontent.com/ebayybe/reddit-translator/main/reddit-translator-pro-auto.user.js)**
3. Підтвердіть встановлення ✅

### Можливості
- 🌍 100+ мов перекладу (Google, MyMemory, DeepL)
- 📖 Двомовний режим
- 📜 Історія перекладів
- ⚡ Автопереклад при прокрутці
- 🎨 Налаштовувані кольори
- 🌐 Інтерфейс на 15 мовах з автовизначенням

### Подяки
**Автор:** [ebayybe](https://github.com/ebayybe)  
**Особлива подяка [Dylan-ZQL](https://github.com/Dylan-ZQL)** — за значний внесок у ранній розвиток проекту, включно з оригінальною архітектурою, системою мультимовності, дизайном UI та інтеграцією DeepL. 🫶

</details>

<details>
<summary>🇩🇪 Deutsch</summary>

## 🌐 Reddit Translator Pro Auto

Ein Amateur-Userscript für eingebettete Reddit-Übersetzungen direkt im Browser.

### Installation
1. Installiere [Tampermonkey](https://www.tampermonkey.net/) oder [Violentmonkey](https://violentmonkey.github.io/)
2. Klicke auf **[Skript installieren](https://raw.githubusercontent.com/ebayybe/reddit-translator/main/reddit-translator-pro-auto.user.js)**
3. Installation bestätigen ✅

### Funktionen
- 🌍 100+ Sprachen (Google, MyMemory, DeepL)
- 📖 Zweisprachiger Modus
- 📜 Übersetzungsverlauf
- ⚡ Automatische Übersetzung beim Scrollen
- 🎨 Anpassbare Farben
- 🌐 Oberfläche in 15 Sprachen mit automatischer Erkennung

### Danksagungen
**Autor:** [ebayybe](https://github.com/ebayybe)  
**Besonderer Dank an [Dylan-ZQL](https://github.com/Dylan-ZQL)** — für bedeutende Beiträge zur frühen Entwicklung dieses Projekts. 🫶

</details>

<details>
<summary>🇫🇷 Français</summary>

## 🌐 Reddit Translator Pro Auto

Un userscript amateur pour traduire Reddit directement dans le navigateur.

### Installation
1. Installez [Tampermonkey](https://www.tampermonkey.net/) ou [Violentmonkey](https://violentmonkey.github.io/)
2. Cliquez sur **[Installer le script](https://raw.githubusercontent.com/ebayybe/reddit-translator/main/reddit-translator-pro-auto.user.js)**
3. Confirmez l'installation ✅

### Fonctionnalités
- 🌍 100+ langues (Google, MyMemory, DeepL)
- 📖 Mode bilingue
- 📜 Historique des traductions
- ⚡ Traduction automatique au défilement
- 🎨 Couleurs personnalisables
- 🌐 Interface en 15 langues avec détection automatique

### Remerciements
**Auteur :** [ebayybe](https://github.com/ebayybe)  
**Remerciements spéciaux à [Dylan-ZQL](https://github.com/Dylan-ZQL)** — pour ses contributions significatives au développement initial de ce projet. 🫶

</details>

<details>
<summary>🇪🇸 Español</summary>

## 🌐 Reddit Translator Pro Auto

Un userscript amateur para traducir Reddit directamente en el navegador.

### Instalación
1. Instala [Tampermonkey](https://www.tampermonkey.net/) o [Violentmonkey](https://violentmonkey.github.io/)
2. Haz clic en **[Instalar script](https://raw.githubusercontent.com/ebayybe/reddit-translator/main/reddit-translator-pro-auto.user.js)**
3. Confirma la instalación ✅

### Características
- 🌍 100+ idiomas (Google, MyMemory, DeepL)
- 📖 Modo bilingüe
- 📜 Historial de traducciones
- ⚡ Traducción automática al desplazarse
- 🎨 Colores personalizables
- 🌐 Interfaz en 15 idiomas con detección automática

### Agradecimientos
**Autor:** [ebayybe](https://github.com/ebayybe)  
**Agradecimiento especial a [Dylan-ZQL](https://github.com/Dylan-ZQL)** — por sus contribuciones significativas al desarrollo inicial de este proyecto. 🫶

</details>

<details>
<summary>🇵🇱 Polski</summary>

## 🌐 Reddit Translator Pro Auto

Amatorski skrypt użytkownika do tłumaczenia Reddita bezpośrednio w przeglądarce.

### Instalacja
1. Zainstaluj [Tampermonkey](https://www.tampermonkey.net/) lub [Violentmonkey](https://violentmonkey.github.io/)
2. Kliknij **[Zainstaluj skrypt](https://raw.githubusercontent.com/ebayybe/reddit-translator/main/reddit-translator-pro-auto.user.js)**
3. Potwierdź instalację ✅

### Funkcje
- 🌍 100+ języków (Google, MyMemory, DeepL)
- 📖 Tryb dwujęzyczny
- 📜 Historia tłumaczeń
- ⚡ Automatyczne tłumaczenie podczas przewijania
- 🎨 Konfigurowalne kolory
- 🌐 Interfejs w 15 językach z automatycznym wykrywaniem

### Podziękowania
**Autor:** [ebayybe](https://github.com/ebayybe)  
**Szczególne podziękowania dla [Dylan-ZQL](https://github.com/Dylan-ZQL)** — za znaczący wkład we wczesny rozwój projektu. 🫶

</details>

<details>
<summary>🇹🇷 Türkçe</summary>

## 🌐 Reddit Translator Pro Auto

Doğrudan tarayıcıda Reddit çevirisi için amatör bir kullanıcı betiği.

### Kurulum
1. [Tampermonkey](https://www.tampermonkey.net/) veya [Violentmonkey](https://violentmonkey.github.io/) yükleyin
2. **[Betiği yükle](https://raw.githubusercontent.com/ebayybe/reddit-translator/main/reddit-translator-pro-auto.user.js)** bağlantısına tıklayın
3. Kurulumu onaylayın ✅

### Özellikler
- 🌍 100+ dil (Google, MyMemory, DeepL)
- 📖 İki dilli mod
- 📜 Çeviri geçmişi
- ⚡ Kaydırırken otomatik çeviri
- 🎨 Özelleştirilebilir renkler
- 🌐 Otomatik algılamalı 15 dilde arayüz

### Teşekkürler
**Yazar:** [ebayybe](https://github.com/ebayybe)  
**[Dylan-ZQL](https://github.com/Dylan-ZQL)'ye özel teşekkürler** — projenin erken gelişimine yaptığı önemli katkılar için. 🫶

</details>

<details>
<summary>🇨🇳 中文</summary>

## 🌐 Reddit Translator Pro Auto

一个用于在浏览器中直接翻译 Reddit 的业余用户脚本。

### 安装
1. 安装 [Tampermonkey](https://www.tampermonkey.net/) 或 [Violentmonkey](https://violentmonkey.github.io/)
2. 点击 **[安装脚本](https://raw.githubusercontent.com/ebayybe/reddit-translator/main/reddit-translator-pro-auto.user.js)**
3. 确认安装 ✅

### 功能
- 🌍 100+ 种语言（Google、MyMemory、DeepL）
- 📖 双语模式
- 📜 翻译历史记录
- ⚡ 滚动时自动翻译
- 🎨 可自定义颜色
- 🌐 支持 15 种界面语言，自动检测浏览器语言

### 致谢
**作者：** [ebayybe](https://github.com/ebayybe)  
**特别感谢 [Dylan-ZQL](https://github.com/Dylan-ZQL)** — 感谢他对本项目早期开发的重要贡献，包括原始架构、多语言系统、UI 设计以及 DeepL 集成。 🫶

</details>

<details>
<summary>🇯🇵 日本語</summary>

## 🌐 Reddit Translator Pro Auto

ブラウザで直接 Reddit を翻訳するためのアマチュアユーザースクリプト。

### インストール
1. [Tampermonkey](https://www.tampermonkey.net/) または [Violentmonkey](https://violentmonkey.github.io/) をインストール
2. **[スクリプトをインストール](https://raw.githubusercontent.com/ebayybe/reddit-translator/main/reddit-translator-pro-auto.user.js)** をクリック
3. インストールを確認 ✅

### 機能
- 🌍 100以上の言語（Google・MyMemory・DeepL）
- 📖 バイリンガルモード
- 📜 翻訳履歴
- ⚡ スクロール時の自動翻訳
- 🎨 カスタムカラー
- 🌐 自動検出対応の15言語UI

### 謝辞
**作者：** [ebayybe](https://github.com/ebayybe)  
**[Dylan-ZQL](https://github.com/Dylan-ZQL) への特別な感謝** — プロジェクトの初期開発への多大な貢献に対して。 🫶

</details>
