# Dziennik zmian

Wszystkie istotne zmiany w tym projekcie są dokumentowane w tym pliku.

## [1.2.0]

### Dodano
- Sekcja „Automatyczne aktualizacje” w panelu ustawień z trzema trybami:
  - **Sprawdzaj i otwieraj aktualizację** — okresowo sprawdza zaufane źródło aktualizacji w tle i otwiera stronę aktualizacji po znalezieniu nowszej wersji
  - **Powiadamiaj mnie o aktualizacjach** — okresowo sprawdza i wyświetla tylko powiadomienie
  - **Wyłącz sprawdzanie aktualizacji** — skrypt nigdy nie sprawdza aktualizacji samodzielnie
- Ręczny przycisk „Sprawdź aktualizacje”, wyświetlany obok aktualnej wersji skryptu (odczytywanej z metadanych samego skryptu użytkownika)
- Tekst objaśniający wyjaśniający, że natywna automatyczna aktualizacja Tampermonkey/Violentmonkey jest osobnym mechanizmem niezależnym od tego ustawienia
- System efektów dźwiękowych (SFX) zbudowany na natywnym Web Audio API, bez zewnętrznych plików audio ani bibliotek:
  - Globalny przełącznik włączania/wyłączania i główna kontrola głośności
  - 13 niezależnie przełączanych kategorii dźwięków (kliknięcia przycisków, tłumaczenie, kopiowanie, ponowne próby, panel, karty, ustawienia, przełączniki, pamięć podręczna, historia, import/eksport, tryby, automatyczne tłumaczenie)
  - Różne krótkie dźwięki dla różnych akcji oraz przycisk „Testuj dźwięk”
  - Całkowicie niezależny od funkcji syntezy mowy (TTS)
  - Czas odnowienia (cooldown) dla każdego zdarzenia, aby zapobiec spamowaniu dźwiękiem, w tym podczas tłumaczenia masowego/automatycznego
- Prawdziwe, samodzielne ikony flag SVG dla każdego obsługiwanego języka w wybierakach języka interfejsu i tłumaczenia, zastępujące flagi emoji Unicode. Ikony są wbudowane bezpośrednio w skrypt; nic nie jest pobierane z sieci w celu ich wyświetlenia
- Różne dźwięki kliknięcia dla przycisku „Importuj” i przycisku „Test” DeepL

### Zmieniono
- Porównywanie wersji dla sprawdzania aktualizacji używa właściwego liczbowego porównywania wersji semantycznych (a nie porównywania ciągów znaków)

### Bezpieczeństwo
- Klucze DeepL API zostały wykluczone z eksportowanych plików ustawień
- Importowanie pliku ustawień nie nadpisuje już lokalnie zapisanych kluczy API; klucze można zmienić tylko za pomocą dedykowanego pola „Klucze DeepL API”
- Zaimportowana konfiguracja jest sprawdzana pole po polu przed zastosowaniem (kody języków, motyw, silnik, zakresy liczbowe, ustawienia dźwięku, tryb aktualizacji); nieprawidłowe lub nierozpoznane wartości są ignorowane i zastępowane istniejącymi/bezpiecznymi wartościami domyślnymi zamiast ich akceptowania
- Zaufane źródło aktualizacji jest stałą wartością w skrypcie i nie można go skonfigurować za pomocą zaimportowanych ustawień
- Sprawdzanie aktualizacji odczytuje tylko numer wersji z pobranego tekstu skryptu; pobrany kod nie jest wykonywany w żadnym momencie

### Naprawiono
- Elastyczny układ sekcji Automatyczne aktualizacje, dzięki czemu dłuższe zlokalizowane etykiety zawijają się zamiast wykraczać poza panel ustawień

## [1.0.10]

### Dodano
- 5 nowych języków interfejsu: włoski, portugalski, koreański, wietnamski, arabski — interfejs obsługuje teraz łącznie 15 języków, a każda etykieta, przycisk, podpowiedź i sekcja (w tym DeepL i limity żądań) są w pełni przetłumaczone
- Język interfejsu jest teraz automatycznie wykrywany z ustawień regionalnych przeglądarki/systemu przy pierwszej instalacji

### Zmieniono
- Zaktualizowano metadane autora i repozytorium, aby odzwierciedlić aktualnego opiekuna
- Sekcje Klucze DeepL API i Limity żądań są teraz w pełni zlokalizowane we wszystkich obsługiwanych językach interfejsu (wcześniej wyświetlane po angielsku bez względu na wybrany język)
- Suwak opóźnienia żądania wyświetla teraz jednostkę czasu w odpowiednim języku (np. `ms`, `мс`, `毫秒`)
- Niestandardowe wybieraki kolorów poprawnie aktualizują teraz swoje wartości podczas zmiany motywu

### Usunięto
- Jasny motyw (motywy Ciemny, Cyberpunk i Dracula pozostają dostępne)
- Wybierak koloru tekstu (wpływał tylko na część tekstu interfejsu, co wprowadzało w błąd)
- Synteza mowy (TTS) — usunięta, ponieważ nie działała prawidłowo

### Naprawiono
- Link do pomocy DeepL wcześniej wskazywał na `api-free.deepl.com`; teraz poprawnie prowadzi do `deepl.com/pro-api`
- Tekst przycisku „Zapisz klucze DeepL” był obcięty w 6 językach interfejsu (rosyjskim, ukraińskim, niemieckim, francuskim, hiszpańskim, tureckim); etykiety skrócono, aby pasowały do wszystkich rozmiarów ekranu
- Zmiana motywu nie pozostawia już nieaktualnych niestandardowych kolorów nałożonych na nowy motyw

[Zobacz wydanie](https://github.com/ebayybe/reddit-translator/releases#release-v1.0.10)

## [1.0.9]

Wkład od [Dylan-ZQL](https://github.com/Dylan-ZQL). Zweryfikowano poprzez porównanie plików źródłowych v1.0.0 i v1.0.9.

### Dodano
- Silnik tłumaczeniowy DeepL obok istniejących silników Google i MyMemory
  - Obsługa wielu kluczy API DeepL z automatyczną rotacją i przełączaniem awaryjnym w przypadku niepowodzenia klucza
  - Automatyczne wykrywanie punktów końcowych Free vs. Pro API
  - Długi tekst jest dzielony na fragmenty o wielkości żądania przed tłumaczeniem
  - Konfigurowalne limity żądań: maks. liczba jednoczesnych żądań, maks. liczba żądań na sekundę, maks. liczba znaków na żądanie, maks. liczba akapitów na żądanie
- Automatyczne tłumaczenie podczas przewijania: dodatkowy `IntersectionObserver` automatycznie tłumaczy zawartość po wejściu do obszaru roboczego, niezależnie od istniejącego obserwatora leniwej injekcji przycisków
- Przełącznik „Pokaż oryginał / Pokaż tłumaczenie”, pozwalający przełączać całą stronę między tekstem oryginalnym a przetłumaczonym
- Prefiks klucza pamięci masowej (`_x9_`) stosowany do każdego zapisanego ustawienia w celu uniknięcia kolizji z innymi skryptami użytkownika
- Podstawowe funkcje pomocnicze do kodowania HTML i bezpiecznego parsowania JSON używane w całym kodzie tłumaczenia/żądań

### Zmieniono
- Przepisano kolejkę żądań tłumaczenia: zastąpiono poprzedni łańcuch o stałym opóźnieniu kolejką uwzględniającą konfigurowalną współbieżność i limity szybkości na sekundę
- Przeprojektowano pływający przycisk akcji: zastąpiono etykietowany przycisk „TRANSLATE ALL”, pasek postępu i przycisk anulowania jednym kompaktowym przyciskiem z ikoną, który tłumaczy widoczną zawartość po kliknięciu i otwiera panel ustawień po dwukrotnym kliknięciu
- Odtwarzanie syntezy mowy jest teraz stanowe: ponowne kliknięcie „mów” na tym samym tekście zatrzymuje odtwarzanie, aktywny przycisk jest wizualnie podświetlony, a poprzednie ograniczenie przycinania do 500 znaków zostało usunięte

### Usunięto
- Skrót klawiszowy „Przetłumacz wszystko” (`Ctrl+Shift+T`) i jego ustawienie w panelu — tłumaczenie widocznej zawartości jest teraz obsługiwane przez przeprojektowany pływający przycisk opisany powyżej

- [Zobacz wydanie](https://github.com/ebayybe/reddit-translator/releases#release-v1.0.9)

## [1.0.0]

### Dodano
- Pierwsze publiczne wydanie

[Zobacz wydanie](https://github.com/ebayybe/reddit-translator/releases#release-v1.0.0)
