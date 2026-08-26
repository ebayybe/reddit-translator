# Änderungsprotokoll

Alle wesentlichen Änderungen an diesem Projekt werden in dieser Datei dokumentiert.

## [1.2.0]

### Hinzugefügt
- Bereich „Automatische Updates“ im Einstellungsfeld mit drei Modi:
  - **Prüfen und Update öffnen** — prüft regelmäßig im Hintergrund die vertrauenswürdige Update-Quelle und öffnet die Update-Seite, wenn eine neuere Version gefunden wird
  - **Mich über Updates benachrichtigen** — prüft regelmäßig und zeigt nur eine Benachrichtigung an
  - **Update-Prüfungen deaktivieren** — das Skript prüft nie von selbst auf Updates
- Manuelle Schaltfläche „Auf Updates prüfen“, die neben der aktuellen Skriptversion angezeigt wird (aus den Metadaten des Userskripts gelesen)
- Erklärender Text zur Klarstellung, dass das native automatische Update von Tampermonkey/Violentmonkey ein separater Mechanismus ist, der nicht von dieser Einstellung gesteuert wird
- Soundsystem (SFX), das auf der nativen Web Audio API basiert, ohne externe Audiodatei oder Bibliotheken:
  - Globaler Ein-/Ausschalter und Hauptlautstärkeregler
  - 13 unabhängig umschaltbare Soundkategorien (Schaltflächenklicks, Übersetzung, Kopieren, Wiederholen, Bedienfeld, Registerkarten, Einstellungen, Schalter, Cache, Verlauf, Import/Export, Modi, automatische Übersetzung)
  - Verschiedene kurze Töne für unterschiedliche Aktionen und eine Schaltfläche „Sound testen“
  - Vollständig unabhängig von Text-to-Speech-Funktionen (TTS)
  - Abklingzeiten (Cooldowns) pro Ereignis zur Vermeidung von Sound-Spam, auch bei Stapel-/automatischer Übersetzung
- Echte, selbstdefinierte SVG-Flaggen-Icons für jede unterstützte Sprache in den Sprachauswählern für Benutzeroberfläche und Übersetzung, die die Unicode-Emoji-Flaggen ersetzen. Icons sind direkt im Skript eingebettet; es wird nichts über das Netzwerk geladen
- Unterschiedliche Klick-Töne für die Schaltfläche „Importieren“ und die DeepL-Schaltfläche „Testen“

### Geändert
- Der Versionsvergleich für Update-Prüfungen verwendet einen ordnungsgemäßen numerischen Vergleich semantischer Versionen (kein Zeichenfolgenvergleich)

### Sicherheit
- DeepL API-Schlüssel sind aus exportierten Einstellungsdateien ausgeschlossen
- Das Importieren einer Einstellungsdatei überschreibt lokaler gespeicherte API-Schlüssel nicht mehr; Schlüssel können nur über das dedizierte Feld „DeepL API-Schlüssel“ geändert werden
- Die importierte Konfiguration wird Feld für Feld überprüft, bevor sie angewendet wird (Sprachcodes, Theme, Engine, numerische Bereiche, Soundeinstellungen, Update-Modus); ungültige oder nicht erkannte Werte werden ignoriert und durch bestehende/sichere Standardwerte ersetzt
- Die vertrauenswürdige Update-Quelle ist ein fester Wert im Skript und kann nicht über importierte Einstellungen konfiguriert werden
- Update-Prüfungen lesen nur eine Versionsnummer aus dem abgerufenen Skripttext; es wird zu keinem Zeitpunkt heruntergeladener Code ausgeführt

### Behoben
- Responsives Layout für den Bereich „Automatische Updates“, sodass längere lokalisierte Beschriftungen umgebrochen werden, anstatt das Einstellungsfeld zu überlaufen

## [1.0.10]

### Hinzugefügt
- 5 neue UI-Sprachen: Italienisch, Portugiesisch, Koreanisch, Vietnamesisch, Arabisch — die Benutzeroberfläche unterstützt jetzt insgesamt 15 Sprachen, wobei jede Beschriftung, Schaltfläche, Tooltip und jeder Bereich (einschließlich DeepL und Anfragelimitierungen) vollständig übersetzt ist
- Die UI-Sprache wird nun beim ersten Installieren automatisch aus der Browser-/Systemsprache erkannt

### Geändert
- Autor- und Repository-Metadaten wurden aktualisiert, um den aktuellen Maintainer widerzuspiegeln
- Die Bereiche DeepL API-Schlüssel und Anfragelimitierungen sind jetzt in allen unterstützten UI-Sprachen vollständig lokalisiert (zuvor unabhängig von der ausgewählten Sprache auf Englisch angezeigt)
- Der Schieberegler für die Anfrageverzögerung zeigt seine Zeiteinheit nun in der korrekten Sprache an (z. B. `ms`, `мс`, `毫秒`)
- Benutzerdefinierte Farbauswähler aktualisieren ihre Werte beim Wechseln von Themes nun korrekt

### Entfernt
- Helles Theme (Dunkel, Cyberpunk und Dracula bleiben verfügbar)
- Textfarbauswähler (er beeinflusste nur einen Teil des UI-Texts, was irreführend war)
- Text-to-Speech (TTS) — entfernt, da es nicht ordnungsgemäß funktionierte

### Behoben
- Der DeepL-Hilfelink zeigte zuvor auf `api-free.deepl.com`; verlinkt jetzt korrekt auf `deepl.com/pro-api`
- Der Text der Schaltfläche „DeepL-Schlüssel speichern“ war in 6 UI-Sprachen abgeschnitten (Russisch, Ukrainisch, Deutsch, Französisch, Spanisch, Türkisch); Beschriftungen wurden gekürzt, um auf alle Bildschirmgrößen zu passen
- Das Wechseln von Themes lässt keine veralteten benutzerdefinierten Farben mehr über dem neuen Theme angewendet

[Release anzeigen](https://github.com/ebayybe/reddit-translator/releases#release-v1.0.10)

## [1.0.9]

Beigetragen von [Dylan-ZQL](https://github.com/Dylan-ZQL). Verifiziert durch Vergleich der Quelldateien v1.0.0 und v1.0.9.

### Hinzugefügt
- DeepL-Übersetzungs-Engine neben den bestehenden Google- und MyMemory-Engines
  - Unterstützung für mehrere DeepL API-Schlüssel mit automatischer Rotation und Ausweichlösung bei Schlüsselfehlern
  - Automatische Erkennung von Free- vs. Pro-API-Endpunkten
  - Langer Text wird vor der Übersetzung in anfragegroße Blöcke unterteilt
  - Konfigurierbare Anfragelimitierungen: max. gleichzeitige Anfragen, max. Anfragen pro Sekunde, max. Zeichen pro Anfrage, max. Absätze pro Anfrage
- Automatische Übersetzung beim Scrollen: Ein zusätzlicher `IntersectionObserver` übersetzt Inhalte automatisch, sobald sie in den Ansichtsbereich gelangen, getrennt vom bestehenden Beobachter für die verzögerte Schaltflächeneinbindung
- Umschalt-Schaltfläche „Original anzeigen / Übersetzung anzeigen“, mit der die gesamte Seite zwischen Original- und übersetztem Text umgeschaltet werden kann
- Speicher-Schlüssel-Präfix (`_x9_`), das auf jede gespeicherte Einstellung angewendet wird, um Kollisionen mit anderen Userskripten zu vermeiden
- Grundlegende HTML-Escaping- und safe-JSON-Parsing-Hilfsfunktionen, die im gesamten Übersetzungs-/Anfragecode verwendet werden

### Geändert
- Die Übersetzungswarteschlange wurde neu geschrieben: Die vorherige Kette mit fester Verzögerung wurde durch eine Warteschlange ersetzt, die konfigurierbare Nebenläufigkeit und Ratenbegrenzungen pro Sekunde berücksichtigt
- Die schwimmende Aktionsschaltfläche wurde neu gestaltet: Die beschriftete Schaltfläche „ALLE ÜBERSETZEN“, der Fortschrittsbalken und die Abbrechen-Schaltfläche wurden durch eine einzelne kompakte Icon-Schaltfläche ersetzt, die sichtbare Inhalte bei Klick übersetzt und das Einstellungsfeld bei Doppelklick öffnet
- Die Text-to-Speech-Wiedergabe ist jetzt zustandsbehaftet: Erneutes Klicken auf „Sprechen“ beim selben Text stoppt die Wiedergabe, die aktive Schaltfläche wird visuell hervorgehoben und die bisherige Begrenzung auf 500 Zeichen wurde entfernt

### Entfernt
- Tastaturkurzbefehl „Alle übersetzen“ (`Ctrl+Shift+T`) und seine Einstellung im Bedienfeld — das Übersetzen sichtbarer Inhalte wird nun von der oben beschriebenen neu gestalteten schwimmenden Schaltfläche übernommen

- [Release anzeigen](https://github.com/ebayybe/reddit-translator/releases#release-v1.0.9)

## [1.0.0]

### Hinzugefügt
- Erstveröffentlichung

[Release anzeigen](https://github.com/ebayybe/reddit-translator/releases#release-v1.0.0)
