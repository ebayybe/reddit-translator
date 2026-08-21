# 🌐 Reddit Translator Pro — v1.2.0

<details open>
<summary>🇬🇧 English</summary>

## What's new since v1.0.10

### 🔊 New: Sound effects
A complete UI sound system built entirely on the native Web Audio API — no external audio files, no libraries. Includes a global on/off switch, a master volume slider, 13 independently toggleable sound categories (Button clicks, Translation, Copy, Retry, Panel, Tabs, Settings, Toggles, Cache, History, Import/Export, Modes, Automatic translation), 28 distinct short sounds for different actions, and a "▶ Test Sound" button. Fully independent from any text-to-speech functionality, and every sound respects a per-event cooldown so nothing can spam you.

### 🚩 New: Offline flag icons
Unicode emoji flags have been replaced with real, self-contained SVG flag icons, embedded directly in the script for every supported language — used in both the **Interface Language** and **Translation Language** pickers. Nothing is fetched from the network to show a flag: it works fully offline and looks identical on Chrome, Firefox, Chromium and any operating system, instead of the old emoji rendering that varied (or fell back to plain text like `US`/`GB`) depending on platform.

### 🔄 New: Automatic Updates section
A new settings section lets you control how the script checks for newer versions:
- **Check and open update** — checks periodically in the background and opens the update page automatically when a newer version is found
- **Notify me about updates** — checks periodically and shows a notification only
- **Disable update checks** — the script never checks on its own

A manual **Check for Updates** button and the current version number are always shown. The panel also clearly explains that native Tampermonkey/Violentmonkey updates are a separate mechanism this setting does not control. The script only ever detects a version number and, at most, opens a page — it never downloads or executes any remote code.

### 🔒 Security fix: API keys are no longer exported
Previously, exporting your settings included your DeepL API key(s) in plain text inside the downloaded file. Exported settings now exclude API keys entirely. Importing a settings file also no longer overwrites your locally stored key(s) — API keys can only be changed through the dedicated DeepL API Keys field.

### 🛡️ Stricter import validation
Imported settings files are now treated as untrusted input. Every field is validated before being applied — language codes must exist in the supported list, theme/engine must be a recognized option, numeric values (request delay, concurrency limits, sound volume, etc.) are clamped to their valid ranges, and the update mode must be one of the three supported options. Anything invalid or unrecognized is safely ignored in favor of your existing setting, instead of being blindly trusted.

### 🎨 UI polish
- Fixed a layout bug where the new Automatic Updates mode buttons could overflow the settings panel with longer localized labels (e.g. German, French, Spanish) — the section now wraps responsively instead
- The Import button and the DeepL "🧪 Test" button each now play their own distinct click sound

---

**Supported UI languages:**  
🇷🇺 Русский · 🇺🇦 Українська · 🇬🇧 English · 🇩🇪 Deutsch · 🇫🇷 Français · 🇪🇸 Español · 🇮🇹 Italiano · 🇧🇷 Português · 🇵🇱 Polski · 🇹🇷 Türkçe · 🇰🇷 한국어 · 🇻🇳 Tiếng Việt · 🇸🇦 العربية · 🇨🇳 中文 · 🇯🇵 日本語

</details>

---

<details>
<summary>🇷🇺 Русский</summary>

## Что нового с v1.0.10

### 🔊 Новое: звуковые эффекты
Полноценная система звуков интерфейса на основе нативного Web Audio API — без внешних аудиофайлов и библиотек. Общий переключатель вкл/выкл, регулятор общей громкости, 13 независимо переключаемых категорий звуков (клики кнопок, перевод, копирование, повтор, панель, вкладки, настройки, переключатели, кэш, история, импорт/экспорт, режимы, автоперевод), 28 уникальных коротких звуков для разных действий и кнопка «▶ Тест звука». Полностью независима от любой функции озвучивания текста, а каждое событие имеет собственную задержку повтора, чтобы звуки не заваливали друг друга.

### 🚩 Новое: офлайн-иконки флагов
Эмодзи-флаги заменены на настоящие, полностью встроенные SVG-иконки флагов для каждого поддерживаемого языка — используются как в выборе **языка интерфейса**, так и **языка перевода**. Для отображения флага не выполняется ни одного сетевого запроса: всё работает полностью офлайн и выглядит одинаково в Chrome, Firefox, Chromium и на любой операционной системе, в отличие от старого рендеринга эмодзи, который отличался (или превращался в обычный текст вроде `US`/`GB`) в зависимости от платформы.

### 🔄 Новое: раздел «Автоматические обновления»
Новый раздел настроек позволяет управлять тем, как скрипт проверяет наличие новых версий:
- **«Проверить и открыть обновление»** — периодическая фоновая проверка с автоматическим открытием страницы обновления при обнаружении новой версии
- **«Уведомлять об обновлениях»** — периодическая проверка только с уведомлением
- **«Отключить проверку обновлений»** — скрипт никогда не проверяет сам

Всегда доступна кнопка ручной проверки **«Проверить обновления»** и отображается текущий номер версии. В панели явно указано, что нативное обновление Tampermonkey/Violentmonkey — отдельный механизм, которым эта настройка не управляет. Скрипт лишь определяет номер версии и в лучшем случае открывает страницу — он никогда не скачивает и не выполняет удалённый код.

### 🔒 Исправление безопасности: API-ключи больше не экспортируются
Раньше при экспорте настроек в скачанный файл в открытом виде попадал ваш API-ключ (ключи) DeepL. Теперь экспортируемые настройки полностью исключают API-ключи. Импорт файла настроек также больше не перезаписывает локально сохранённые ключи — изменить их можно только через специальное поле DeepL API Keys.

### 🛡️ Более строгая проверка импорта
Импортируемые файлы настроек теперь считаются недоверенными данными. Каждое поле проверяется перед применением: коды языков должны существовать в списке поддерживаемых, тема/движок должны быть распознанным вариантом, числовые значения (задержка запроса, лимиты одновременных запросов, громкость звука и т.д.) ограничиваются допустимым диапазоном, а режим обновлений должен быть одним из трёх поддерживаемых значений. Всё некорректное или нераспознанное безопасно игнорируется в пользу текущей настройки, вместо слепого доверия.

### 🎨 Улучшения интерфейса
- Исправлен баг вёрстки, из-за которого кнопки режимов раздела «Автоматические обновления» могли выходить за пределы панели настроек при длинных переведённых подписях (например, на немецком, французском, испанском) — теперь раздел адаптивно переносится на новую строку
- Кнопка «Импорт» и кнопка «🧪 Тест» в разделе DeepL теперь воспроизводят собственные уникальные звуки клика

</details>

---

<details>
<summary>🇺🇦 Українська</summary>

## Що нового з v1.0.10

### 🔊 Нове: звукові ефекти
Повноцінна система звуків інтерфейсу на основі нативного Web Audio API — без зовнішніх аудіофайлів і бібліотек. Загальний перемикач увімк./вимк., регулятор загальної гучності, 13 незалежно перемиканих категорій звуків (кліки кнопок, переклад, копіювання, повтор, панель, вкладки, налаштування, перемикачі, кеш, історія, імпорт/експорт, режими, автопереклад), 28 унікальних коротких звуків для різних дій і кнопка «▶ Тест звуку». Повністю незалежна від будь-якої функції озвучення тексту, а кожна подія має власну затримку повтору, щоб звуки не накладалися одне на одне.

### 🚩 Нове: офлайн-іконки прапорів
Емодзі-прапори замінено на справжні, повністю вбудовані SVG-іконки прапорів для кожної підтримуваної мови — використовуються як у виборі **мови інтерфейсу**, так і **мови перекладу**. Для відображення прапора не виконується жодного мережевого запиту: усе працює повністю офлайн і виглядає однаково в Chrome, Firefox, Chromium та на будь-якій операційній системі, на відміну від старого рендерингу емодзі, який відрізнявся (або перетворювався на звичайний текст на кшталт `US`/`GB`) залежно від платформи.

### 🔄 Нове: розділ «Автоматичні оновлення»
Новий розділ налаштувань дозволяє керувати тим, як скрипт перевіряє наявність нових версій:
- **«Перевірити і відкрити оновлення»** — періодична фонова перевірка з автоматичним відкриттям сторінки оновлення при виявленні нової версії
- **«Повідомляти про оновлення»** — періодична перевірка лише з повідомленням
- **«Вимкнути перевірку оновлень»** — скрипт ніколи не перевіряє сам

Завжди доступна кнопка ручної перевірки **«Перевірити оновлення»** та відображається поточний номер версії. У панелі чітко вказано, що нативне оновлення Tampermonkey/Violentmonkey — окремий механізм, яким це налаштування не керує. Скрипт лише визначає номер версії та в найкращому разі відкриває сторінку — він ніколи не завантажує й не виконує віддалений код.

### 🔒 Виправлення безпеки: API-ключі більше не експортуються
Раніше під час експорту налаштувань у завантажений файл у відкритому вигляді потрапляв ваш API-ключ (ключі) DeepL. Тепер експортовані налаштування повністю виключають API-ключі. Імпорт файлу налаштувань також більше не перезаписує локально збережені ключі — змінити їх можна лише через спеціальне поле DeepL API Keys.

### 🛡️ Суворіша перевірка імпорту
Імпортовані файли налаштувань тепер вважаються недовіреними даними. Кожне поле перевіряється перед застосуванням: коди мов мають існувати в списку підтримуваних, тема/рушій мають бути розпізнаним варіантом, числові значення (затримка запиту, ліміти одночасних запитів, гучність звуку тощо) обмежуються допустимим діапазоном, а режим оновлень має бути одним із трьох підтримуваних значень. Усе некоректне або нерозпізнане безпечно ігнорується на користь поточного налаштування, замість сліпої довіри.

### 🎨 Покращення інтерфейсу
- Виправлено баг вёрстки, через який кнопки режимів розділу «Автоматичні оновлення» могли виходити за межі панелі налаштувань при довгих перекладених підписах (наприклад, німецькою, французькою, іспанською) — тепер розділ адаптивно переноситься на новий рядок
- Кнопка «Імпорт» і кнопка «🧪 Тест» у розділі DeepL тепер відтворюють власні унікальні звуки кліку

</details>

---

<details>
<summary>🇩🇪 Deutsch</summary>

## Was ist neu seit v1.0.10

### 🔊 Neu: Soundeffekte
Ein vollständiges UI-Soundsystem, das komplett auf der nativen Web Audio API basiert — keine externen Audiodateien, keine Bibliotheken. Enthält einen globalen Ein/Aus-Schalter, einen Master-Lautstärkeregler, 13 einzeln umschaltbare Soundkategorien (Klicks, Übersetzung, Kopieren, Wiederholen, Panel, Tabs, Einstellungen, Schalter, Cache, Verlauf, Import/Export, Modi, automatische Übersetzung), 28 unterschiedliche kurze Sounds für verschiedene Aktionen sowie einen „▶ Sound testen"-Button. Vollständig unabhängig von jeglicher Text-to-Speech-Funktion, und jedes Ereignis hat eine eigene Abklingzeit, damit nichts zuspammt.

### 🚩 Neu: Offline-Flaggen-Icons
Unicode-Emoji-Flaggen wurden durch echte, vollständig eingebettete SVG-Flaggen-Icons für jede unterstützte Sprache ersetzt — verwendet sowohl bei der **Oberflächensprache** als auch bei der **Übersetzungssprache**. Für die Anzeige einer Flagge wird keine Netzwerkanfrage mehr gestellt: Alles funktioniert vollständig offline und sieht in Chrome, Firefox, Chromium und auf jedem Betriebssystem identisch aus — anders als beim alten Emoji-Rendering, das je nach Plattform unterschiedlich war (oder auf reinen Text wie `US`/`GB` zurückfiel).

### 🔄 Neu: Bereich „Automatische Updates"
Ein neuer Einstellungsbereich lässt dich steuern, wie das Skript nach neueren Versionen sucht:
- **„Update prüfen und öffnen"** — prüft periodisch im Hintergrund und öffnet die Update-Seite automatisch, wenn eine neuere Version gefunden wird
- **„Über Updates benachrichtigen"** — prüft periodisch und zeigt nur eine Benachrichtigung an
- **„Update-Prüfung deaktivieren"** — das Skript prüft nie von selbst

Ein manueller „Nach Updates suchen"-Button und die aktuelle Versionsnummer werden immer angezeigt. Das Panel erklärt außerdem klar, dass native Tampermonkey/Violentmonkey-Updates ein separater Mechanismus sind, den diese Einstellung nicht steuert. Das Skript erkennt lediglich eine Versionsnummer und öffnet höchstens eine Seite — es lädt oder führt niemals Remote-Code aus.

### 🔒 Sicherheitsfix: API-Schlüssel werden nicht mehr exportiert
Bisher enthielt eine exportierte Einstellungsdatei deinen DeepL-API-Schlüssel im Klartext. Exportierte Einstellungen schließen API-Schlüssel jetzt vollständig aus. Auch beim Import einer Einstellungsdatei werden lokal gespeicherte Schlüssel nicht mehr überschrieben — API-Schlüssel können nur über das dedizierte DeepL-API-Keys-Feld geändert werden.

### 🛡️ Strengere Importvalidierung
Importierte Einstellungsdateien werden jetzt als nicht vertrauenswürdige Eingabe behandelt. Jedes Feld wird vor der Anwendung geprüft — Sprachcodes müssen in der unterstützten Liste existieren, Theme/Engine müssen eine erkannte Option sein, numerische Werte (Anfrageverzögerung, Parallelitätslimits, Lautstärke usw.) werden auf ihren gültigen Bereich begrenzt, und der Update-Modus muss einer der drei unterstützten Optionen entsprechen. Alles Ungültige oder Unbekannte wird sicher ignoriert und die bestehende Einstellung beibehalten, statt blind übernommen zu werden.

### 🎨 UI-Verbesserungen
- Layout-Fehler behoben, bei dem die neuen Buttons im Bereich „Automatische Updates" bei längeren übersetzten Beschriftungen (z. B. Deutsch, Französisch, Spanisch) über das Einstellungspanel hinausragen konnten — der Bereich bricht jetzt responsiv um
- Der „Importieren"-Button und der DeepL-„🧪 Test"-Button spielen nun jeweils einen eigenen, unterschiedlichen Klick-Sound ab

</details>

---

<details>
<summary>🇫🇷 Français</summary>

## Nouveautés depuis v1.0.10

### 🔊 Nouveau : effets sonores
Un système sonore d'interface complet, entièrement basé sur la Web Audio API native — aucun fichier audio externe, aucune bibliothèque. Comprend un interrupteur global, un curseur de volume principal, 13 catégories de sons activables indépendamment (clics de boutons, traduction, copie, réessai, panneau, onglets, paramètres, interrupteurs, cache, historique, import/export, modes, traduction automatique), 28 sons courts distincts pour différentes actions, et un bouton « ▶ Tester le son ». Totalement indépendant de toute fonction de synthèse vocale, et chaque événement respecte un délai de répétition propre pour éviter tout effet de spam.

### 🚩 Nouveau : icônes de drapeaux hors ligne
Les emojis de drapeaux Unicode ont été remplacés par de véritables icônes SVG de drapeaux, entièrement intégrées pour chaque langue prise en charge — utilisées à la fois dans les sélecteurs de **langue de l'interface** et de **langue de traduction**. Aucune requête réseau n'est effectuée pour afficher un drapeau : tout fonctionne entièrement hors ligne et s'affiche à l'identique sur Chrome, Firefox, Chromium et tout système d'exploitation, contrairement à l'ancien rendu emoji qui variait (ou retombait sur du texte brut comme `US`/`GB`) selon la plateforme.

### 🔄 Nouveau : section « Mises à jour automatiques »
Une nouvelle section des paramètres permet de contrôler la façon dont le script vérifie les nouvelles versions :
- **« Vérifier et ouvrir la mise à jour »** — vérifie périodiquement en arrière-plan et ouvre automatiquement la page de mise à jour lorsqu'une nouvelle version est trouvée
- **« Me notifier des mises à jour »** — vérifie périodiquement et affiche seulement une notification
- **« Désactiver la vérification des mises à jour »** — le script ne vérifie jamais de lui-même

Un bouton de vérification manuelle « Vérifier les mises à jour » et le numéro de version actuel sont toujours affichés. Le panneau explique aussi clairement que les mises à jour natives de Tampermonkey/Violentmonkey constituent un mécanisme distinct que ce réglage ne contrôle pas. Le script se contente de détecter un numéro de version et, au mieux, d'ouvrir une page — il ne télécharge ni n'exécute jamais de code distant.

### 🔒 Correctif de sécurité : les clés API ne sont plus exportées
Auparavant, l'export des paramètres incluait votre/vos clé(s) API DeepL en texte brut dans le fichier téléchargé. Les paramètres exportés excluent désormais entièrement les clés API. L'import d'un fichier de paramètres n'écrase plus non plus les clés stockées localement — les clés API ne peuvent être modifiées que via le champ dédié DeepL API Keys.

### 🛡️ Validation d'import plus stricte
Les fichiers de paramètres importés sont désormais traités comme des données non fiables. Chaque champ est validé avant d'être appliqué — les codes de langue doivent exister dans la liste prise en charge, le thème/moteur doit être une option reconnue, les valeurs numériques (délai de requête, limites de concurrence, volume sonore, etc.) sont bornées à leur plage valide, et le mode de mise à jour doit être l'une des trois options prises en charge. Tout ce qui est invalide ou non reconnu est ignoré en toute sécurité au profit du paramètre existant, au lieu d'être accepté aveuglément.

### 🎨 Améliorations de l'interface
- Correction d'un bug de mise en page où les boutons de mode de la nouvelle section « Mises à jour automatiques » pouvaient déborder du panneau avec des libellés traduits plus longs (allemand, français, espagnol, etc.) — la section s'adapte désormais de façon responsive
- Les boutons « Importer » et « 🧪 Tester » de DeepL jouent désormais chacun leur propre son de clic distinct

</details>

---

<details>
<summary>🇪🇸 Español</summary>

## Novedades desde v1.0.10

### 🔊 Nuevo: efectos de sonido
Un sistema de sonido de interfaz completo, basado enteramente en la Web Audio API nativa — sin archivos de audio externos, sin bibliotecas. Incluye un interruptor global, un control de volumen principal, 13 categorías de sonido activables de forma independiente (clics de botones, traducción, copiar, reintentar, panel, pestañas, ajustes, interruptores, caché, historial, importar/exportar, modos, traducción automática), 28 sonidos cortos distintos para diferentes acciones y un botón «▶ Probar sonido». Totalmente independiente de cualquier función de texto a voz, y cada evento respeta su propio tiempo de espera para que nada sature de sonidos.

### 🚩 Nuevo: iconos de banderas sin conexión
Los emojis de banderas Unicode se han sustituido por iconos SVG de banderas reales, totalmente incrustados para cada idioma admitido — usados tanto en el selector de **idioma de la interfaz** como en el de **idioma de traducción**. No se realiza ninguna solicitud de red para mostrar una bandera: todo funciona completamente sin conexión y se ve idéntico en Chrome, Firefox, Chromium y cualquier sistema operativo, a diferencia del antiguo renderizado de emojis, que variaba (o se reducía a texto plano como `US`/`GB`) según la plataforma.

### 🔄 Nuevo: sección «Actualizaciones automáticas»
Una nueva sección de ajustes te permite controlar cómo comprueba el script si hay versiones más recientes:
- **«Comprobar y abrir la actualización»** — comprueba periódicamente en segundo plano y abre automáticamente la página de actualización cuando encuentra una versión más reciente
- **«Notificarme sobre actualizaciones»** — comprueba periódicamente y solo muestra una notificación
- **«Desactivar la comprobación de actualizaciones»** — el script nunca comprueba por su cuenta

Siempre se muestra un botón de comprobación manual «Buscar actualizaciones» y el número de versión actual. El panel también explica claramente que las actualizaciones nativas de Tampermonkey/Violentmonkey son un mecanismo aparte que este ajuste no controla. El script solo detecta un número de versión y, como mucho, abre una página — nunca descarga ni ejecuta código remoto.

### 🔒 Corrección de seguridad: las claves API ya no se exportan
Antes, al exportar los ajustes se incluía tu(s) clave(s) de API de DeepL en texto plano dentro del archivo descargado. Los ajustes exportados ahora excluyen por completo las claves API. Importar un archivo de ajustes tampoco sobrescribe ya las claves guardadas localmente — las claves API solo se pueden cambiar a través del campo dedicado DeepL API Keys.

### 🛡️ Validación de importación más estricta
Los archivos de ajustes importados ahora se tratan como entrada no confiable. Cada campo se valida antes de aplicarse: los códigos de idioma deben existir en la lista compatible, el tema/motor debe ser una opción reconocida, los valores numéricos (retraso de solicitud, límites de concurrencia, volumen de sonido, etc.) se ajustan a su rango válido, y el modo de actualización debe ser una de las tres opciones admitidas. Todo lo inválido o no reconocido se ignora de forma segura a favor del ajuste existente, en lugar de aceptarse ciegamente.

### 🎨 Mejoras de interfaz
- Se corrigió un error de diseño por el cual los botones de modo de la nueva sección «Actualizaciones automáticas» podían desbordar el panel con etiquetas traducidas más largas (alemán, francés, español, etc.) — la sección ahora se ajusta de forma responsiva
- Los botones «Importar» y «🧪 Probar» de DeepL ahora reproducen cada uno su propio sonido de clic distintivo

</details>

---

<details>
<summary>🇮🇹 Italiano</summary>

## Novità dalla v1.0.10

### 🔊 Novità: effetti sonori
Un sistema audio dell'interfaccia completo, basato interamente sulla Web Audio API nativa — nessun file audio esterno, nessuna libreria. Include un interruttore globale, un controllo del volume principale, 13 categorie di suoni attivabili singolarmente (clic sui pulsanti, traduzione, copia, riprova, pannello, schede, impostazioni, interruttori, cache, cronologia, importa/esporta, modalità, traduzione automatica), 28 suoni brevi distinti per azioni diverse e un pulsante «▶ Prova suono». Completamente indipendente da qualsiasi funzione di sintesi vocale, e ogni evento rispetta un proprio tempo di attesa per evitare qualsiasi effetto spam.

### 🚩 Novità: icone di bandiere offline
Le emoji di bandiere Unicode sono state sostituite da vere icone SVG delle bandiere, completamente incorporate per ogni lingua supportata — usate sia nel selettore della **lingua dell'interfaccia** sia in quello della **lingua di traduzione**. Non viene effettuata alcuna richiesta di rete per mostrare una bandiera: tutto funziona completamente offline ed è identico su Chrome, Firefox, Chromium e qualsiasi sistema operativo, a differenza del precedente rendering delle emoji, che variava (o si riduceva a semplice testo come `US`/`GB`) a seconda della piattaforma.

### 🔄 Novità: sezione «Aggiornamenti automatici»
Una nuova sezione delle impostazioni consente di controllare come lo script verifica la presenza di versioni più recenti:
- **«Controlla e apri l'aggiornamento»** — verifica periodicamente in background e apre automaticamente la pagina di aggiornamento quando trova una versione più recente
- **«Notificami gli aggiornamenti»** — verifica periodicamente e mostra solo una notifica
- **«Disattiva il controllo aggiornamenti»** — lo script non verifica mai autonomamente

Sono sempre visibili un pulsante di controllo manuale «Controlla aggiornamenti» e il numero di versione attuale. Il pannello spiega inoltre chiaramente che gli aggiornamenti nativi di Tampermonkey/Violentmonkey sono un meccanismo separato non controllato da questa impostazione. Lo script si limita a rilevare un numero di versione e, al massimo, ad aprire una pagina — non scarica né esegue mai codice remoto.

### 🔒 Correzione di sicurezza: le chiavi API non vengono più esportate
In precedenza, l'esportazione delle impostazioni includeva la tua chiave (o chiavi) API DeepL in chiaro all'interno del file scaricato. Le impostazioni esportate ora escludono completamente le chiavi API. Anche l'importazione di un file di impostazioni non sovrascrive più le chiavi salvate localmente — le chiavi API possono essere modificate solo tramite l'apposito campo DeepL API Keys.

### 🛡️ Validazione dell'importazione più rigorosa
I file di impostazioni importati sono ora trattati come input non attendibile. Ogni campo viene convalidato prima di essere applicato: i codici lingua devono esistere nell'elenco supportato, tema/motore devono essere un'opzione riconosciuta, i valori numerici (ritardo richieste, limiti di concorrenza, volume audio, ecc.) vengono limitati al loro intervallo valido, e la modalità di aggiornamento deve essere una delle tre opzioni supportate. Tutto ciò che non è valido o riconosciuto viene ignorato in sicurezza a favore dell'impostazione esistente, invece di essere accettato ciecamente.

### 🎨 Miglioramenti dell'interfaccia
- Risolto un bug di layout per cui i pulsanti di modalità della nuova sezione «Aggiornamenti automatici» potevano fuoriuscire dal pannello con etichette tradotte più lunghe (tedesco, francese, spagnolo, ecc.) — la sezione ora va a capo in modo responsivo
- I pulsanti «Importa» e «🧪 Prova» di DeepL riproducono ora ciascuno un proprio suono di clic distinto

</details>

---

<details>
<summary>🇧🇷 Português</summary>

## Novidades desde a v1.0.10

### 🔊 Novidade: efeitos sonoros
Um sistema de som de interface completo, baseado inteiramente na Web Audio API nativa — sem arquivos de áudio externos, sem bibliotecas. Inclui um interruptor global, um controle de volume principal, 13 categorias de som ativáveis de forma independente (cliques de botões, tradução, copiar, tentar novamente, painel, abas, configurações, interruptores, cache, histórico, importar/exportar, modos, tradução automática), 28 sons curtos distintos para diferentes ações e um botão «▶ Testar som». Totalmente independente de qualquer função de texto para voz, e cada evento respeita seu próprio intervalo para evitar qualquer excesso de sons.

### 🚩 Novidade: ícones de bandeiras offline
Os emojis de bandeiras Unicode foram substituídos por ícones SVG de bandeiras reais, totalmente incorporados para cada idioma compatível — usados tanto no seletor de **idioma da interface** quanto no de **idioma de tradução**. Nenhuma solicitação de rede é feita para exibir uma bandeira: tudo funciona totalmente offline e é exibido de forma idêntica no Chrome, Firefox, Chromium e em qualquer sistema operacional, ao contrário da renderização de emojis anterior, que variava (ou se resumia a texto simples como `US`/`GB`) dependendo da plataforma.

### 🔄 Novidade: seção «Atualizações automáticas»
Uma nova seção de configurações permite controlar como o script verifica versões mais recentes:
- **«Verificar e abrir atualização»** — verifica periodicamente em segundo plano e abre automaticamente a página de atualização quando encontra uma versão mais recente
- **«Notificar sobre atualizações»** — verifica periodicamente e mostra apenas uma notificação
- **«Desativar verificação de atualizações»** — o script nunca verifica por conta própria

Um botão de verificação manual «Verificar atualizações» e o número da versão atual são sempre exibidos. O painel também explica claramente que as atualizações nativas do Tampermonkey/Violentmonkey são um mecanismo separado que esta configuração não controla. O script apenas detecta um número de versão e, no máximo, abre uma página — nunca baixa nem executa código remoto.

### 🔒 Correção de segurança: as chaves de API não são mais exportadas
Anteriormente, exportar as configurações incluía sua(s) chave(s) de API DeepL em texto simples dentro do arquivo baixado. As configurações exportadas agora excluem completamente as chaves de API. Importar um arquivo de configurações também não sobrescreve mais as chaves armazenadas localmente — as chaves de API só podem ser alteradas por meio do campo dedicado DeepL API Keys.

### 🛡️ Validação de importação mais rigorosa
Os arquivos de configurações importados agora são tratados como entrada não confiável. Cada campo é validado antes de ser aplicado — os códigos de idioma devem existir na lista compatível, o tema/mecanismo deve ser uma opção reconhecida, os valores numéricos (atraso de solicitação, limites de simultaneidade, volume do som, etc.) são limitados ao seu intervalo válido, e o modo de atualização deve ser uma das três opções compatíveis. Tudo o que for inválido ou não reconhecido é ignorado com segurança em favor da configuração existente, em vez de ser aceito cegamente.

### 🎨 Melhorias de interface
- Corrigido um bug de layout em que os botões de modo da nova seção «Atualizações automáticas» podiam ultrapassar o painel com rótulos traduzidos mais longos (alemão, francês, espanhol, etc.) — a seção agora se ajusta de forma responsiva
- Os botões «Importar» e «🧪 Testar» do DeepL agora reproduzem, cada um, seu próprio som de clique distinto

</details>

---

<details>
<summary>🇵🇱 Polski</summary>

## Co nowego od v1.0.10

### 🔊 Nowość: efekty dźwiękowe
Kompletny system dźwięków interfejsu, oparty w całości na natywnym Web Audio API — bez zewnętrznych plików audio, bez bibliotek. Zawiera globalny przełącznik, główny suwak głośności, 13 niezależnie przełączanych kategorii dźwięków (kliknięcia przycisków, tłumaczenie, kopiowanie, ponowienie, panel, zakładki, ustawienia, przełączniki, cache, historia, import/eksport, tryby, automatyczne tłumaczenie), 28 odrębnych krótkich dźwięków dla różnych czynności oraz przycisk «▶ Testuj dźwięk». Całkowicie niezależny od jakiejkolwiek funkcji zamiany tekstu na mowę, a każde zdarzenie ma własny czas odnowienia, dzięki czemu dźwięki się nie nakładają.

### 🚩 Nowość: ikony flag offline
Flagi w postaci emoji Unicode zostały zastąpione prawdziwymi, w pełni osadzonymi ikonami SVG flag dla każdego obsługiwanego języka — używanymi zarówno w selektorze **języka interfejsu**, jak i **języka tłumaczenia**. Wyświetlenie flagi nie wymaga żadnego żądania sieciowego: wszystko działa całkowicie offline i wygląda identycznie w Chrome, Firefox, Chromium i na dowolnym systemie operacyjnym, w przeciwieństwie do dawnego renderowania emoji, które różniło się (lub sprowadzało do zwykłego tekstu jak `US`/`GB`) w zależności od platformy.

### 🔄 Nowość: sekcja «Automatyczne aktualizacje»
Nowa sekcja ustawień pozwala kontrolować sposób sprawdzania nowszych wersji przez skrypt:
- **«Sprawdź i otwórz aktualizację»** — sprawdza okresowo w tle i automatycznie otwiera stronę aktualizacji po znalezieniu nowszej wersji
- **«Powiadamiaj o aktualizacjach»** — sprawdza okresowo i wyświetla tylko powiadomienie
- **«Wyłącz sprawdzanie aktualizacji»** — skrypt nigdy nie sprawdza samodzielnie

Zawsze widoczny jest przycisk ręcznego sprawdzania «Sprawdź aktualizacje» oraz aktualny numer wersji. Panel jasno wyjaśnia też, że natywne aktualizacje Tampermonkey/Violentmonkey to osobny mechanizm, którym to ustawienie nie steruje. Skrypt jedynie wykrywa numer wersji i co najwyżej otwiera stronę — nigdy nie pobiera ani nie wykonuje zdalnego kodu.

### 🔒 Poprawka bezpieczeństwa: klucze API nie są już eksportowane
Wcześniej eksport ustawień zawierał Twój klucz (klucze) API DeepL w postaci jawnego tekstu w pobranym pliku. Eksportowane ustawienia teraz całkowicie wykluczają klucze API. Import pliku ustawień również nie nadpisuje już lokalnie zapisanych kluczy — klucze API można zmienić wyłącznie za pomocą dedykowanego pola DeepL API Keys.

### 🛡️ Ściślejsza walidacja importu
Importowane pliki ustawień są teraz traktowane jako niezaufane dane wejściowe. Każde pole jest weryfikowane przed zastosowaniem — kody języków muszą istnieć na obsługiwanej liście, motyw/silnik musi być rozpoznaną opcją, wartości liczbowe (opóźnienie żądania, limity równoległości, głośność dźwięku itd.) są ograniczane do prawidłowego zakresu, a tryb aktualizacji musi być jedną z trzech obsługiwanych opcji. Wszystko nieprawidłowe lub nierozpoznane jest bezpiecznie ignorowane na rzecz istniejącego ustawienia, zamiast być ślepo akceptowane.

### 🎨 Usprawnienia interfejsu
- Naprawiono błąd układu, przez który przyciski trybów nowej sekcji «Automatyczne aktualizacje» mogły wychodzić poza panel ustawień przy dłuższych przetłumaczonych etykietach (np. niemiecki, francuski, hiszpański) — sekcja teraz responsywnie zawija się do nowego wiersza
- Przycisk «Importuj» oraz przycisk «🧪 Testuj» w sekcji DeepL odtwarzają teraz każdy własny, odrębny dźwięk kliknięcia

</details>

---

<details>
<summary>🇹🇷 Türkçe</summary>

## v1.0.10'dan bu yana yenilikler

### 🔊 Yeni: ses efektleri
Tamamen yerel Web Audio API üzerine kurulu, eksiksiz bir arayüz ses sistemi — harici ses dosyası yok, kütüphane yok. Genel açma/kapama anahtarı, ana ses düzeyi kaydırıcısı, 13 bağımsız olarak açılıp kapatılabilen ses kategorisi (buton tıklamaları, çeviri, kopyalama, tekrar deneme, panel, sekmeler, ayarlar, anahtarlar, önbellek, geçmiş, içe/dışa aktarma, modlar, otomatik çeviri), farklı eylemler için 28 farklı kısa ses ve bir «▶ Sesi test et» düğmesi içerir. Herhangi bir metinden sese dönüştürme özelliğinden tamamen bağımsızdır ve her olay, hiçbir şeyin spam yapmasını önlemek için kendi bekleme süresine sahiptir.

### 🚩 Yeni: çevrimdışı bayrak simgeleri
Unicode emoji bayrakların yerini, desteklenen her dil için doğrudan betiğe gömülü, gerçek SVG bayrak simgeleri aldı — hem **Arayüz Dili** hem de **Çeviri Dili** seçicilerinde kullanılır. Bir bayrağı göstermek için ağdan hiçbir şey getirilmez: her şey tamamen çevrimdışı çalışır ve Chrome, Firefox, Chromium ile herhangi bir işletim sisteminde aynı görünür; platforma bağlı olarak değişen (veya `US`/`GB` gibi düz metne dönüşen) eski emoji görüntülemesinin aksine.

### 🔄 Yeni: «Otomatik Güncellemeler» bölümü
Yeni bir ayarlar bölümü, betiğin daha yeni sürümleri nasıl kontrol edeceğini yönetmenizi sağlar:
- **«Güncellemeyi kontrol et ve aç»** — arka planda periyodik olarak kontrol eder ve daha yeni bir sürüm bulunduğunda güncelleme sayfasını otomatik olarak açar
- **«Güncellemeler hakkında bildir»** — periyodik olarak kontrol eder ve yalnızca bir bildirim gösterir
- **«Güncelleme kontrolünü devre dışı bırak»** — betik kendiliğinden asla kontrol etmez

Her zaman manuel bir «Güncellemeleri kontrol et» düğmesi ve mevcut sürüm numarası gösterilir. Panel ayrıca, Tampermonkey/Violentmonkey'in yerel güncellemelerinin bu ayarın kontrol etmediği ayrı bir mekanizma olduğunu açıkça belirtir. Betik yalnızca bir sürüm numarası tespit eder ve en fazla bir sayfa açar — asla uzaktan kod indirmez veya çalıştırmaz.

### 🔒 Güvenlik düzeltmesi: API anahtarları artık dışa aktarılmıyor
Daha önce, ayarları dışa aktarmak, indirilen dosyanın içinde DeepL API anahtarınızı (anahtarlarınızı) düz metin olarak içeriyordu. Dışa aktarılan ayarlar artık API anahtarlarını tamamen hariç tutuyor. Bir ayar dosyasını içe aktarmak da artık yerel olarak depolanan anahtarların üzerine yazmıyor — API anahtarları yalnızca özel DeepL API Keys alanı aracılığıyla değiştirilebilir.

### 🛡️ Daha sıkı içe aktarma doğrulaması
İçe aktarılan ayar dosyaları artık güvenilmeyen girdi olarak kabul ediliyor. Uygulanmadan önce her alan doğrulanır — dil kodları desteklenen listede bulunmalı, tema/motor tanınan bir seçenek olmalı, sayısal değerler (istek gecikmesi, eşzamanlılık sınırları, ses düzeyi vb.) geçerli aralıklarına sıkıştırılır ve güncelleme modu desteklenen üç seçenekten biri olmalıdır. Geçersiz veya tanınmayan her şey, körü körüne kabul edilmek yerine mevcut ayar lehine güvenle yok sayılır.

### 🎨 Arayüz iyileştirmeleri
- Yeni «Otomatik Güncellemeler» bölümündeki mod düğmelerinin, daha uzun çevrilmiş etiketlerle (Almanca, Fransızca, İspanyolca vb.) ayar panelinden taşabildiği bir düzen hatası düzeltildi — bölüm artık duyarlı bir şekilde yeni satıra geçiyor
- DeepL'deki «İçe Aktar» ve «🧪 Test» düğmeleri artık her biri kendine özgü, farklı bir tıklama sesi çalıyor

</details>

---

<details>
<summary>🇰🇷 한국어</summary>

## v1.0.10 이후 변경 사항

### 🔊 신규: 효과음
네이티브 Web Audio API만을 기반으로 한 완전한 UI 사운드 시스템입니다 — 외부 오디오 파일이나 라이브러리를 사용하지 않습니다. 전체 켜기/끄기 스위치, 마스터 음량 슬라이더, 독립적으로 켜고 끌 수 있는 13개 사운드 카테고리(버튼 클릭, 번역, 복사, 재시도, 패널, 탭, 설정, 토글, 캐시, 기록, 가져오기/내보내기, 모드, 자동 번역), 서로 다른 동작에 대한 28개의 개별 짧은 사운드, 그리고 «▶ 효과음 테스트» 버튼을 포함합니다. 어떤 음성 합성(TTS) 기능과도 완전히 독립적이며, 모든 이벤트는 자체 쿨다운을 두어 소리가 남발되지 않도록 합니다.

### 🚩 신규: 오프라인 국기 아이콘
유니코드 이모지 국기가 지원되는 모든 언어에 대해 스크립트에 직접 내장된 실제 SVG 국기 아이콘으로 대체되었습니다 — **인터페이스 언어**와 **번역 언어** 선택기 모두에 사용됩니다. 국기를 표시하기 위해 네트워크 요청이 전혀 발생하지 않습니다: 완전히 오프라인으로 작동하며 Chrome, Firefox, Chromium 및 모든 운영체제에서 동일하게 보입니다. 이는 플랫폼에 따라 다르게 표시되거나(또는 `US`/`GB` 같은 단순 텍스트로 대체되던) 기존 이모지 렌더링과는 다릅니다.

### 🔄 신규: «자동 업데이트» 섹션
새로운 설정 섹션을 통해 스크립트가 새 버전을 확인하는 방식을 제어할 수 있습니다:
- **«업데이트 확인 후 열기»** — 백그라운드에서 주기적으로 확인하고 새 버전이 발견되면 자동으로 업데이트 페이지를 엽니다
- **«업데이트 알림 받기»** — 주기적으로 확인하고 알림만 표시합니다
- **«업데이트 확인 비활성화»** — 스크립트가 스스로 확인하지 않습니다

수동 «업데이트 확인» 버튼과 현재 버전 번호가 항상 표시됩니다. 패널에서는 Tampermonkey/Violentmonkey의 기본 업데이트가 이 설정으로 제어되지 않는 별도의 메커니즘임을 명확히 설명합니다. 스크립트는 버전 번호만 감지하고 기껏해야 페이지를 열 뿐입니다 — 원격 코드를 다운로드하거나 실행하는 일은 절대 없습니다.

### 🔒 보안 수정: API 키가 더 이상 내보내지지 않음
이전에는 설정을 내보낼 때 다운로드된 파일에 DeepL API 키가 평문으로 포함되었습니다. 이제 내보낸 설정에서는 API 키가 완전히 제외됩니다. 설정 파일을 가져올 때도 로컬에 저장된 키를 더 이상 덮어쓰지 않습니다 — API 키는 전용 DeepL API Keys 필드를 통해서만 변경할 수 있습니다.

### 🛡️ 더 엄격한 가져오기 검증
가져온 설정 파일은 이제 신뢰할 수 없는 입력으로 처리됩니다. 적용되기 전에 모든 필드가 검증됩니다 — 언어 코드는 지원 목록에 있어야 하고, 테마/엔진은 인식된 옵션이어야 하며, 숫자 값(요청 지연, 동시성 제한, 음량 등)은 유효한 범위로 제한되고, 업데이트 모드는 지원되는 세 가지 옵션 중 하나여야 합니다. 유효하지 않거나 인식되지 않는 값은 무조건 신뢰되는 대신 기존 설정을 유지한 채 안전하게 무시됩니다.

### 🎨 UI 개선
- 긴 번역 레이블(독일어, 프랑스어, 스페인어 등)로 인해 새로운 «자동 업데이트» 섹션의 모드 버튼이 설정 패널을 벗어날 수 있던 레이아웃 버그를 수정했습니다 — 이제 섹션이 반응형으로 줄바꿈됩니다
- «가져오기» 버튼과 DeepL의 «🧪 테스트» 버튼이 이제 각각 고유한 클릭 사운드를 재생합니다

</details>

---

<details>
<summary>🇻🇳 Tiếng Việt</summary>

## Những gì mới kể từ v1.0.10

### 🔊 Mới: hiệu ứng âm thanh
Một hệ thống âm thanh giao diện hoàn chỉnh, được xây dựng hoàn toàn trên Web Audio API gốc — không có tệp âm thanh bên ngoài, không có thư viện. Bao gồm công tắc tổng bật/tắt, thanh trượt âm lượng chính, 13 danh mục âm thanh có thể bật/tắt độc lập (nhấp nút, dịch, sao chép, thử lại, bảng điều khiển, thẻ, cài đặt, công tắc, bộ nhớ đệm, lịch sử, nhập/xuất, chế độ, dịch tự động), 28 âm thanh ngắn riêng biệt cho các hành động khác nhau, và nút «▶ Thử âm thanh». Hoàn toàn độc lập với bất kỳ chức năng chuyển văn bản thành giọng nói nào, và mỗi sự kiện đều có thời gian chờ riêng để không gây ồn ào quá mức.

### 🚩 Mới: biểu tượng cờ ngoại tuyến
Các biểu tượng cờ emoji Unicode đã được thay thế bằng các biểu tượng cờ SVG thực sự, được nhúng trực tiếp vào script cho mọi ngôn ngữ được hỗ trợ — dùng trong cả bộ chọn **Ngôn ngữ giao diện** và **Ngôn ngữ dịch**. Không có yêu cầu mạng nào được thực hiện để hiển thị một lá cờ: mọi thứ hoạt động hoàn toàn ngoại tuyến và trông giống hệt nhau trên Chrome, Firefox, Chromium và bất kỳ hệ điều hành nào, khác với cách hiển thị emoji cũ vốn thay đổi (hoặc chuyển về văn bản đơn giản như `US`/`GB`) tùy theo nền tảng.

### 🔄 Mới: mục «Cập nhật tự động»
Một mục cài đặt mới cho phép bạn kiểm soát cách script kiểm tra các phiên bản mới hơn:
- **«Kiểm tra và mở bản cập nhật»** — kiểm tra định kỳ trong nền và tự động mở trang cập nhật khi tìm thấy phiên bản mới hơn
- **«Thông báo khi có bản cập nhật»** — kiểm tra định kỳ và chỉ hiển thị thông báo
- **«Tắt kiểm tra cập nhật»** — script không bao giờ tự kiểm tra

Nút kiểm tra thủ công «Kiểm tra cập nhật» và số phiên bản hiện tại luôn được hiển thị. Bảng điều khiển cũng giải thích rõ ràng rằng cập nhật gốc của Tampermonkey/Violentmonkey là một cơ chế riêng biệt mà cài đặt này không kiểm soát. Script chỉ phát hiện số phiên bản và, nhiều nhất, mở một trang — nó không bao giờ tải xuống hoặc thực thi mã từ xa.

### 🔒 Khắc phục bảo mật: khóa API không còn được xuất ra nữa
Trước đây, việc xuất cài đặt sẽ bao gồm (các) khóa API DeepL của bạn dưới dạng văn bản thuần trong tệp đã tải xuống. Cài đặt đã xuất giờ đây loại trừ hoàn toàn khóa API. Việc nhập tệp cài đặt cũng không còn ghi đè lên (các) khóa đã lưu cục bộ — khóa API chỉ có thể được thay đổi thông qua trường DeepL API Keys chuyên dụng.

### 🛡️ Xác thực nhập nghiêm ngặt hơn
Các tệp cài đặt được nhập giờ đây được coi là đầu vào không đáng tin cậy. Mọi trường đều được xác thực trước khi áp dụng — mã ngôn ngữ phải tồn tại trong danh sách được hỗ trợ, giao diện/công cụ phải là một tùy chọn được nhận dạng, các giá trị số (độ trễ yêu cầu, giới hạn đồng thời, âm lượng, v.v.) được giới hạn trong phạm vi hợp lệ, và chế độ cập nhật phải là một trong ba tùy chọn được hỗ trợ. Bất kỳ giá trị nào không hợp lệ hoặc không được nhận dạng sẽ được bỏ qua một cách an toàn để giữ nguyên cài đặt hiện có, thay vì được tin tưởng một cách mù quáng.

### 🎨 Cải thiện giao diện
- Đã sửa lỗi bố cục khiến các nút chế độ của mục «Cập nhật tự động» mới có thể tràn ra ngoài bảng cài đặt với các nhãn dịch dài hơn (tiếng Đức, tiếng Pháp, tiếng Tây Ban Nha, v.v.) — mục này giờ đây tự động xuống dòng một cách linh hoạt
- Nút «Nhập» và nút «🧪 Thử» của DeepL giờ đây mỗi nút phát ra âm thanh nhấp chuột riêng biệt của mình

</details>

---

<details>
<summary>🇨🇳 中文</summary>

## 自 v1.0.10 以来的更新内容

### 🔊 新增：音效
一套完全基于原生 Web Audio API 构建的完整界面音效系统——不依赖任何外部音频文件或库。包含总开关、主音量滑块、13 个可独立开关的音效分类（按钮点击、翻译、复制、重试、面板、标签页、设置、开关、缓存、历史记录、导入/导出、模式、自动翻译）、针对不同操作的 28 种独立短音效，以及「▶ 测试音效」按钮。与任何文字转语音功能完全独立，且每个事件都有各自的冷却时间，避免声音扎堆。

### 🚩 新增：离线旗帜图标
Unicode 表情符号旗帜已被真实、完全内嵌的 SVG 旗帜图标取代，覆盖所有支持的语言——「界面语言」和「翻译语言」选择器中均已应用。显示旗帜不会发起任何网络请求：完全离线运行，在 Chrome、Firefox、Chromium 及任何操作系统上显示效果一致，不再像旧版表情符号那样因平台不同而渲染各异（甚至退化为 `US`/`GB` 这样的纯文本）。

### 🔄 新增：「自动更新」区块
新增设置区块，让你控制脚本检查新版本的方式：
- **「检查并打开更新」**——在后台定期检查，发现新版本时自动打开更新页面
- **「提醒我更新」**——定期检查，仅显示提醒
- **「禁用更新检查」**——脚本永不自行检查

始终显示手动「检查更新」按钮和当前版本号。面板中也明确说明，Tampermonkey/Violentmonkey 的原生更新是该设置不控制的独立机制。脚本仅会检测版本号，最多打开一个页面——绝不会下载或执行任何远程代码。

### 🔒 安全修复：API 密钥不再被导出
此前，导出设置时会将你的 DeepL API 密钥以明文形式包含在下载的文件中。现在导出的设置已完全排除 API 密钥。导入设置文件也不再覆盖本地已保存的密钥——API 密钥只能通过专用的 DeepL API Keys 字段进行更改。

### 🛡️ 更严格的导入验证
导入的设置文件现在被视为不可信输入。每个字段在应用前都会经过验证——语言代码必须存在于支持列表中，主题/引擎必须是可识别的选项，数值（请求延迟、并发限制、音量等）会被限制在有效范围内，更新模式必须是三种受支持选项之一。任何无效或无法识别的内容都会被安全忽略，转而保留现有设置，而不是被盲目信任。

### 🎨 界面改进
- 修复了一个布局问题：较长的翻译标签（如德语、法语、西班牙语等）可能导致新「自动更新」区块的模式按钮溢出设置面板——该区块现在会自适应换行
- 「导入」按钮和 DeepL 的「🧪 测试」按钮现在各自播放独立的点击音效

</details>

---

<details>
<summary>🇯🇵 日本語</summary>

## v1.0.10 からの変更点

### 🔊 新機能：サウンド効果
ネイティブの Web Audio API のみを基盤とした、完全な UI サウンドシステムです — 外部音声ファイルやライブラリは一切使用しません。全体のオン/オフスイッチ、マスター音量スライダー、個別にオン/オフできる13のサウンドカテゴリー（ボタンクリック、翻訳、コピー、リトライ、パネル、タブ、設定、トグル、キャッシュ、履歴、インポート/エクスポート、モード、自動翻訳）、動作ごとに異なる28種類の短いサウンド、そして「▶ サウンドをテスト」ボタンを含みます。あらゆる音声読み上げ機能とは完全に独立しており、各イベントには専用のクールダウンがあるため、サウンドが連続して鳴りすぎることはありません。

### 🚩 新機能：オフライン国旗アイコン
Unicode の絵文字国旗が、対応するすべての言語について、スクリプトに直接埋め込まれた本物の SVG 国旗アイコンに置き換えられました — 「インターフェース言語」と「翻訳言語」の両方の選択画面で使用されます。国旗を表示するためにネットワークへのリクエストは一切発生しません。完全にオフラインで動作し、Chrome・Firefox・Chromium・どの OS でも同じように表示されます。プラットフォームによって表示が変わったり（あるいは `US`/`GB` のような単純なテキストになってしまったりしていた）従来の絵文字表示とは異なります。

### 🔄 新機能：「自動更新」セクション
新しい設定セクションで、スクリプトが新しいバージョンをどのように確認するかを制御できます：
- **「更新を確認して開く」** — バックグラウンドで定期的に確認し、新しいバージョンが見つかると更新ページを自動的に開きます
- **「更新を通知する」** — 定期的に確認し、通知のみを表示します
- **「更新確認を無効にする」** — スクリプトが自動的に確認することはありません

手動の「更新を確認」ボタンと現在のバージョン番号は常に表示されます。パネルには、Tampermonkey/Violentmonkey のネイティブ更新はこの設定では制御されない別の仕組みであることも明確に説明されています。スクリプトはバージョン番号を検出し、せいぜいページを開くだけです — リモートコードをダウンロードしたり実行したりすることは決してありません。

### 🔒 セキュリティ修正：APIキーがエクスポートされなくなりました
これまでは、設定をエクスポートすると、ダウンロードされたファイルに DeepL の API キーが平文で含まれていました。エクスポートされる設定からは、APIキーが完全に除外されるようになりました。設定ファイルをインポートした際も、ローカルに保存されているキーが上書きされることはなくなりました — APIキーは専用の DeepL API Keys 欄からのみ変更できます。

### 🛡️ より厳格なインポート検証
インポートされた設定ファイルは、信頼できない入力として扱われるようになりました。適用される前にすべての項目が検証されます — 言語コードはサポートされているリストに存在する必要があり、テーマ/エンジンは認識されたオプションである必要があり、数値（リクエスト遅延、同時実行数の上限、音量など）は有効な範囲に制限され、更新モードはサポートされている3つのオプションのいずれかである必要があります。無効な値や認識できない値は、無条件に信頼されるのではなく、既存の設定を維持したまま安全に無視されます。

### 🎨 UIの改善
- 翻訳後のラベルが長い場合（ドイツ語、フランス語、スペイン語など）に、新しい「自動更新」セクションのモードボタンが設定パネルからはみ出すことがあったレイアウトの不具合を修正しました — このセクションは今後レスポンシブに折り返されます
- DeepL の「インポート」ボタンと「🧪 テスト」ボタンが、それぞれ独自のクリック音を再生するようになりました

</details>

# 🌐 Reddit Translator Pro — v1.0.10

<details>
<summary>🇬🇧 English</summary>

## What's new in v1.0.10

### 🌍 5 new UI languages (now 15 total)
Italian, Portuguese, Korean, Vietnamese and Arabic have been added as fully supported interface languages. Every label, button, tooltip and section in the panel is translated — including DeepL and Request Limits sections.

### 🤖 Auto-detect UI language from browser
On first install the interface language is now automatically picked from your browser/system settings. No manual setup needed.

### 🔗 Fixed DeepL help link
The help text in the DeepL API Keys section previously showed `api-free.deepl.com`. It now correctly links to `deepl.com/pro-api` — the actual page where you get your API key.

### 🔑 Full localization of DeepL & Request Limits sections
These two sections were previously displayed in English regardless of the selected UI language. Now fully translated in all 15 supported languages.

### ⏱️ Localized request delay unit
The delay slider now shows the time unit in the correct language (`ms`, `мс`, `毫秒`).

### 👤 Author & links updated
Repository and author metadata updated to reflect the current maintainer.

### ✂️ Fixed truncated button text in DeepL section
In 6 UI languages (Russian, Ukrainian, German, French, Spanish, Turkish) the **Save DeepL Keys** button text was too long and got cut off. Labels have been shortened to fit all screen sizes.

### 🎨 Theme fixes & custom colors improvement
- Light theme removed — Dark, Cyberpunk and Dracula remain available
- Fixed a bug where switching themes did not reset custom colors, causing old colors to persist over the new theme
- Removed the **Text** color picker — it only affected part of the UI text, which was misleading
- Color pickers now correctly update their values when switching themes

### 🔇 Removed TTS (Text-to-Speech)
TTS has been removed as it was not functioning correctly.

---

**Supported UI languages:**  
🇷🇺 Русский · 🇺🇦 Українська · 🇬🇧 English · 🇩🇪 Deutsch · 🇫🇷 Français · 🇪🇸 Español · 🇮🇹 Italiano · 🇧🇷 Português · 🇵🇱 Polski · 🇹🇷 Türkçe · 🇰🇷 한국어 · 🇻🇳 Tiếng Việt · 🇸🇦 العربية · 🇨🇳 中文 · 🇯🇵 日本語

</details>

---

<details>
<summary>🇷🇺 Русский</summary>

## Что нового в v1.0.10

### 🌍 5 новых языков интерфейса (теперь 15)
Добавлены итальянский, португальский, корейский, вьетнамский и арабский языки интерфейса. Переведено всё: кнопки, подписи, подсказки, секции DeepL и ограничений запросов.

### 🤖 Автоопределение языка интерфейса из браузера
При первой установке язык интерфейса теперь автоматически берётся из настроек браузера/системы — без ручной настройки.

### 🔗 Исправлена ссылка DeepL
В тексте подсказки секции DeepL API Keys теперь отображается правильная ссылка `deepl.com/pro-api`.

### 🔑 Полная локализация секций DeepL и «Ограничения запросов»
Ранее эти секции показывались на английском вне зависимости от выбранного языка. Теперь переведены на все 15 языков.

### ⏱️ Локализованная единица задержки
Слайдер задержки теперь показывает единицу времени на нужном языке (`мс`, `ms`, `毫秒`).

### 👤 Обновлены данные об авторе и ссылки

### ✂️ Исправлено обрезание текста на кнопках DeepL
На 6 языках текст кнопки не помещался и обрезался. Надписи укорочены — теперь всё отображается корректно.

### 🎨 Исправления тем и настройки цветов
- Светлая тема удалена — доступны Тёмная, Cyberpunk и Dracula
- Исправлен баг: при переключении темы кастомные цвета не сбрасывались и накладывались на новую тему
- Убран пункт «Текст» из пикера цветов — он менял цвет лишь части текста, что вводило в заблуждение
- Пикеры цветов теперь корректно обновляются при смене темы

### 🔇 Удалена функция TTS (озвучка)
TTS удалён, так как работал некорректно.

</details>

---

<details>
<summary>🇺🇦 Українська</summary>

## Що нового у v1.0.10

### 🌍 5 нових мов інтерфейсу (тепер 15)
Додано італійську, португальську, корейську, в'єтнамську та арабську мови інтерфейсу.

### 🤖 Автовизначення мови інтерфейсу з браузера

### 🔗 Виправлено посилання DeepL — тепер `deepl.com/pro-api`

### 🔑 Повна локалізація секцій DeepL та обмежень запитів

### ⏱️ Локалізована одиниця затримки

### ✂️ Виправлено обрізання тексту на кнопках DeepL
На 6 мовах текст не вміщувався і обрізався. Написи скорочено.

### 🎨 Виправлення тем та налаштування кольорів
- Світла тема видалена — доступні Темна, Cyberpunk та Dracula
- Виправлено баг: при перемиканні теми кастомні кольори не скидалися
- Прибрано пункт «Текст» з пікера кольорів — вводив в оману
- Пікери кольорів тепер коректно оновлюються при зміні теми

### 🔇 Видалено TTS (озвучення) — працював некоректно

</details>

---

<details>
<summary>🇩🇪 Deutsch</summary>

## Was ist neu in v1.0.10

### 🌍 5 neue UI-Sprachen (jetzt 15)

### 🤖 Automatische Spracherkennung aus dem Browser

### 🔗 DeepL-Link korrigiert — zeigt nun `deepl.com/pro-api`

### 🔑 Vollständige Lokalisierung der DeepL- und Anfragelimit-Bereiche

### ⏱️ Lokalisierte Verzögerungseinheit

### ✂️ Abgeschnittener Text auf DeepL-Schaltflächen behoben
In 6 Sprachen war der Text zu lang. Die Beschriftungen wurden gekürzt.

### 🎨 Theme-Korrekturen und Farbanpassungen
- Helles Theme entfernt — Dunkel, Cyberpunk und Dracula bleiben
- Fehler behoben: benutzerdefinierte Farben wurden beim Theme-Wechsel nicht zurückgesetzt
- Farboption „Text" entfernt — betraf nur einen Teil des Textes
- Farbwähler aktualisieren sich beim Theme-Wechsel korrekt

### 🔇 TTS entfernt — funktionierte nicht korrekt

</details>

---

<details>
<summary>🇫🇷 Français</summary>

## Quoi de neuf dans v1.0.10

### 🌍 5 nouvelles langues d'interface (15 au total)

### 🤖 Détection automatique de la langue depuis le navigateur

### 🔗 Lien DeepL corrigé — affiche maintenant `deepl.com/pro-api`

### 🔑 Localisation complète des sections DeepL et limites de requêtes

### ⏱️ Unité de délai localisée

### ✂️ Texte tronqué sur les boutons DeepL corrigé — libellés raccourcis dans 6 langues

### 🎨 Corrections de thèmes et couleurs personnalisées
- Thème clair supprimé — Sombre, Cyberpunk et Dracula restent
- Correction d'un bug où les couleurs personnalisées persistaient lors du changement de thème
- Option couleur «Texte» supprimée
- Les sélecteurs de couleur se mettent à jour correctement lors du changement de thème

### 🔇 TTS supprimé — ne fonctionnait pas correctement

</details>

---

<details>
<summary>🇪🇸 Español</summary>

## Novedades en v1.0.10

### 🌍 5 nuevos idiomas de interfaz (15 en total)

### 🤖 Detección automática de idioma desde el navegador

### 🔗 Enlace DeepL corregido — ahora muestra `deepl.com/pro-api`

### 🔑 Localización completa de DeepL y límites de solicitudes

### ⏱️ Unidad de retraso localizada

### ✂️ Texto truncado en botones DeepL corregido — etiquetas acortadas en 6 idiomas

### 🎨 Correcciones de temas y colores personalizados
- Tema claro eliminado — Oscuro, Cyberpunk y Dracula siguen disponibles
- Corregido un error donde los colores personalizados persistían al cambiar de tema
- Opción de color «Texto» eliminada
- Los selectores de color se actualizan correctamente al cambiar de tema

### 🔇 TTS eliminado — no funcionaba correctamente

</details>

---

<details>
<summary>🇮🇹 Italiano</summary>

## Novità in v1.0.10

### 🌍 5 nuove lingue dell'interfaccia (15 in totale)

### 🤖 Rilevamento automatico della lingua dal browser

### 🔗 Link DeepL corretto — ora mostra `deepl.com/pro-api`

### 🔑 Localizzazione completa delle sezioni DeepL e limiti richieste

### ⏱️ Unità di ritardo localizzata

### 🎨 Correzioni temi e colori personalizzati
- Tema chiaro rimosso — Scuro, Cyberpunk e Dracula restano
- Corretto un bug per cui i colori personalizzati non venivano reimpostati al cambio tema
- Opzione colore «Testo» rimossa
- I selettori di colore si aggiornano correttamente al cambio tema

### 🔇 TTS rimosso — non funzionava correttamente

</details>

---

<details>
<summary>🇧🇷 Português</summary>

## Novidades na v1.0.10

### 🌍 5 novos idiomas de interface (15 no total)

### 🤖 Detecção automática de idioma do navegador

### 🔗 Link DeepL corrigido — agora mostra `deepl.com/pro-api`

### 🔑 Localização completa das seções DeepL e limites de solicitações

### ⏱️ Unidade de atraso localizada

### 🎨 Correções de temas e cores personalizadas
- Tema claro removido — Escuro, Cyberpunk e Dracula permanecem
- Corrigido um bug onde as cores personalizadas persistiam ao mudar de tema
- Opção de cor «Texto» removida
- Os seletores de cor agora são atualizados corretamente ao mudar de tema

### 🔇 TTS removido — não estava funcionando corretamente

</details>

---

<details>
<summary>🇵🇱 Polski</summary>

## Co nowego w v1.0.10

### 🌍 5 nowych języków interfejsu (łącznie 15)

### 🤖 Automatyczne wykrywanie języka z przeglądarki

### 🔗 Poprawiony link DeepL — teraz wyświetla `deepl.com/pro-api`

### 🔑 Pełna lokalizacja sekcji DeepL i limitów żądań

### ⏱️ Zlokalizowana jednostka opóźnienia

### 🎨 Poprawki motywów i kolorów niestandardowych
- Jasny motyw usunięty — dostępne Ciemny, Cyberpunk i Dracula
- Naprawiono błąd, gdzie kolory nie resetowały się przy zmianie motywu
- Usunięto opcję koloru «Tekst»
- Selektory kolorów aktualizują się poprawnie przy zmianie motywu

### 🔇 TTS usunięty — nie działał poprawnie

</details>

---

<details>
<summary>🇹🇷 Türkçe</summary>

## v1.0.10'deki Yenilikler

### 🌍 5 yeni arayüz dili (toplam 15)

### 🤖 Tarayıcıdan otomatik dil algılama

### 🔗 DeepL bağlantısı düzeltildi — artık `deepl.com/pro-api`

### 🔑 DeepL ve istek limiti bölümlerinin tam yerelleştirilmesi

### ⏱️ Yerelleştirilmiş gecikme birimi

### ✂️ DeepL düğmelerindeki kesik metin düzeltildi — 6 dilde etiketler kısaltıldı

### 🎨 Tema düzeltmeleri ve özel renkler
- Açık tema kaldırıldı — Koyu, Cyberpunk ve Dracula mevcut
- Tema değiştirildiğinde özel renklerin sıfırlanmadığı hata düzeltildi
- «Metin» renk seçeneği kaldırıldı
- Renk seçiciler tema değiştirildiğinde doğru güncelleniyor

### 🔇 TTS kaldırıldı — düzgün çalışmıyordu

</details>

---

<details>
<summary>🇰🇷 한국어</summary>

## v1.0.10 새로운 기능

### 🌍 5개의 새로운 UI 언어 (총 15개)

### 🤖 브라우저에서 UI 언어 자동 감지

### 🔗 DeepL 링크 수정 — 이제 `deepl.com/pro-api` 표시

### 🔑 DeepL 및 요청 제한 섹션의 완전한 현지화

### ⏱️ 현지화된 지연 단위

### 🎨 테마 수정 및 사용자 정의 색상 개선
- 라이트 테마 제거 — 다크, Cyberpunk, Dracula 유지
- 테마 전환 시 커스텀 색상이 초기화되지 않던 버그 수정
- «텍스트» 색상 옵션 제거
- 테마 전환 시 색상 선택기가 올바르게 업데이트됨

### 🔇 TTS 제거 — 정상 작동하지 않아 제거됨

</details>

---

<details>
<summary>🇻🇳 Tiếng Việt</summary>

## Tính năng mới trong v1.0.10

### 🌍 5 ngôn ngữ giao diện mới (tổng cộng 15)

### 🤖 Tự động phát hiện ngôn ngữ từ trình duyệt

### 🔗 Sửa liên kết DeepL — hiển thị đúng `deepl.com/pro-api`

### 🔑 Bản địa hóa hoàn toàn các phần DeepL và giới hạn yêu cầu

### ⏱️ Đơn vị độ trễ được bản địa hóa

### 🎨 Sửa lỗi giao diện và màu sắc tùy chỉnh
- Đã xóa giao diện sáng — vẫn còn Tối, Cyberpunk và Dracula
- Đã sửa lỗi màu tùy chỉnh không được đặt lại khi chuyển giao diện
- Đã xóa tùy chọn màu «Văn bản»
- Bộ chọn màu cập nhật đúng khi chuyển giao diện

### 🔇 Đã xóa TTS — không hoạt động đúng

</details>

---

<details>
<summary>🇨🇳 中文</summary>

## v1.0.10 更新内容

### 🌍 新增 5 种界面语言（共 15 种）

### 🤖 从浏览器自动检测界面语言

### 🔗 修复 DeepL 链接 — 现在正确显示 `deepl.com/pro-api`

### 🔑 DeepL 和请求限制部分的完整本地化

### ⏱️ 本地化延迟单位

### 🎨 主题修复与自定义颜色改进
- 移除浅色主题 — 保留深色、Cyberpunk 和 Dracula
- 修复了切换主题时自定义颜色未重置的问题
- 移除「文字」颜色选项
- 切换主题时颜色选择器现在可以正确更新

### 🔇 移除 TTS — 功能无法正常使用

</details>

---

<details>
<summary>🇯🇵 日本語</summary>

## v1.0.10 の新機能

### 🌍 UI言語を5言語追加（計15言語）

### 🤖 ブラウザからのUI言語自動検出

### 🔗 DeepLリンクを修正 — `deepl.com/pro-api` が正しく表示

### 🔑 DeepLとリクエスト制限セクションの完全ローカライズ

### ⏱️ ローカライズされた遅延単位

### 🎨 テーマ修正とカスタムカラー改善
- ライトテーマを削除 — ダーク・Cyberpunk・Draculaは引き続き利用可能
- テーマ切替時にカスタムカラーがリセットされないバグを修正
- 「テキスト」カラーオプションを削除
- テーマ切替時にカラーピッカーが正しく更新されるように修正

### 🔇 TTS削除 — 正常に動作していなかったため削除

</details>

---

> ⚠️ Неофициальный любительский проект · Unofficial amateur project · 非官方业余项目