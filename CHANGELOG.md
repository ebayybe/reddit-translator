# Changelog

All notable changes to this project are documented here.

## [1.2.0]

### Added
- Automatic Updates section in the settings panel with three modes:
  - **Check and open update** — periodically checks the trusted update source in the background and opens the update page when a newer version is found
  - **Notify me about updates** — periodically checks and shows a notification only
  - **Disable update checks** — the script never checks on its own
- Manual "Check for Updates" button, shown alongside the current script version (read from the userscript's own metadata)
- Explanatory text clarifying that native Tampermonkey/Violentmonkey auto-update is a separate mechanism not controlled by this setting
- Sound effects (SFX) system built on the native Web Audio API, with no external audio files or libraries:
  - Global enable/disable switch and a master volume control
  - 13 independently toggleable sound categories (button clicks, translation, copy, retry, panel, tabs, settings, toggles, cache, history, import/export, modes, automatic translation)
  - Distinct short sounds for different actions, and a "Test Sound" button
  - Fully independent of any text-to-speech functionality
  - Per-event cooldowns to prevent sound spam, including during batch/automatic translation
- Real, self-contained SVG flag icons for every supported language in the Interface Language and Translation Language pickers, replacing Unicode emoji flags. Icons are embedded directly in the script; nothing is fetched over the network to display them
- Distinct click sounds for the Import button and the DeepL "Test" button

### Changed
- Version comparison for update checks uses proper numeric semantic-version comparison (not string comparison)

### Security
- DeepL API keys are excluded from exported settings files
- Importing a settings file no longer overwrites locally stored API keys; keys can only be changed through the dedicated DeepL API Keys field
- Imported configuration is validated field-by-field before being applied (language codes, theme, engine, numeric ranges, sound settings, update mode); invalid or unrecognized values are ignored and replaced with existing/safe defaults instead of being accepted
- The trusted update source is a fixed value in the script and is not configurable through imported settings
- Update checks only read a version number out of the fetched script text; no downloaded code is executed at any point

### Fixed
- Responsive layout for the Automatic Updates section, so longer localized labels wrap instead of overflowing the settings panel

## [1.0.10]

### Added
- 5 new UI languages: Italian, Portuguese, Korean, Vietnamese, Arabic — interface now supports 15 languages total, with every label, button, tooltip and section (including DeepL and Request Limits) fully translated
- Interface language is now auto-detected from the browser/system locale on first install

### Changed
- Author and repository metadata updated to reflect the current maintainer
- DeepL API Keys and Request Limits sections are now fully localized in all supported UI languages (previously shown in English regardless of the selected language)
- Request delay slider now displays its time unit in the correct language (e.g. `ms`, `мс`, `毫秒`)
- Custom color pickers now correctly update their values when switching themes

### Removed
- Light theme (Dark, Cyberpunk and Dracula remain available)
- Text color picker (it only affected part of the UI text, which was misleading)
- Text-to-Speech (TTS) — removed as it was not functioning correctly

### Fixed
- DeepL help link previously pointed to `api-free.deepl.com`; now correctly links to `deepl.com/pro-api`
- "Save DeepL Keys" button text was truncated in 6 UI languages (Russian, Ukrainian, German, French, Spanish, Turkish); labels shortened to fit all screen sizes
- Switching themes no longer leaves stale custom colors applied on top of the new theme

[View release](https://github.com/ebayybe/reddit-translator/releases#release-v1.0.10)

## [1.0.9]

Contributed by [Dylan-ZQL](https://github.com/Dylan-ZQL). Verified by comparing the v1.0.0 and v1.0.9 source files.

### Added
- DeepL translation engine, alongside the existing Google and MyMemory engines
  - Support for multiple DeepL API keys with automatic rotation and fallback if a key fails
  - Automatic detection of Free vs. Pro API endpoints
  - Long text is split into request-sized chunks before translation
  - Configurable request limits: max concurrent requests, max requests per second, max characters per request, max paragraphs per request
- Automatic translation on scroll: an additional `IntersectionObserver` auto-translates content as it enters the viewport, separate from the existing lazy button-injection observer
- "Show original / Show translation" toggle button, letting the whole page be switched between original and translated text
- Storage key prefix (`_x9_`) applied to every stored setting, to avoid collisions with other userscripts
- Basic HTML-escaping and safe-JSON-parsing helpers used throughout the translation/request code

### Changed
- Rewrote the translation request queue: replaced the previous fixed-delay chain with a queue that respects configurable concurrency and per-second rate limits
- Redesigned the floating action button: replaced the labelled "TRANSLATE ALL" button, progress bar and cancel button with a single compact icon button that translates currently visible content on click, and opens the settings panel on double-click
- Text-to-speech playback is now stateful: clicking "speak" again on the same text stops playback, the active button is visually highlighted, and the previous 500-character truncation limit was removed

### Removed
- The "Translate all" keyboard shortcut (`Ctrl+Shift+T`) and its panel setting — translating visible content is now handled by the redesigned floating button described above

- [View release](https://github.com/ebayybe/reddit-translator/releases#release-v1.0.9)

## [1.0.0]

### Added
- Initial public release

[View release](https://github.com/ebayybe/reddit-translator/releases#release-v1.0.0)
