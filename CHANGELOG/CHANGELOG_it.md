# Registro delle modifiche

Tutte le modifiche rilevanti a questo progetto saranno documentate in questo file.

## [1.2.0]

### Aggiunto
- Sezione "Aggiornamenti automatici" nel pannello delle impostazioni con tre modalità:
  - **Controlla e apri aggiornamento** — controlla periodicamente la fonte di aggiornamento affidabile in background e apre la pagina di aggiornamento quando viene trovata una versione più recente
  - **Notificami gli aggiornamenti** — controlla periodicamente e mostra solo una notifica
  - **Disabilita controllo aggiornamenti** — lo script non controlla mai autonomamente
- Pulsante manuale "Controlla aggiornamenti", mostrato accanto alla versione corrente dello script (letta dai metadati dello script utente)
- Testo esplicativo che chiarisce che l'aggiornamento automatico nativo di Tampermonkey/Violentmonkey è un meccanismo separato non controllato da questa impostazione
- Sistema di effetti sonori (SFX) basato sull'API Web Audio nativa, senza file audio o librerie esterne:
  - Interruttore globale di abilitazione/disabilitazione e controllo del volume principale
  - 13 categorie di suoni attivabili indipendentemente (clic sui pulsanti, traduzione, copia, riprova, pannello, schede, impostazioni, interruttori, cache, cronologia, importazione/esportazione, modalità, traduzione automatica)
  - Suoni brevi distinti per diverse azioni e un pulsante "Testa suono"
  - Completamente indipendente da qualsiasi funzionalità di sintesi vocale (TTS)
  - Tempi di attesa (cooldowns) per evento per evitare lo spam sonoro, anche durante la traduzione automatica/in batch
- Vere icone di bandiere SVG autonome per ogni lingua supportata nei selettori della lingua dell'interfaccia e della lingua di traduzione, sostituendo le bandiere emoji Unicode. Le icone sono incorporate direttamente nello script; nulla viene scaricato dalla rete per visualizzarle
- Suoni di clic distinti per il pulsante "Importa" e il pulsante "Test" di DeepL

### Modificato
- Il confronto delle versioni per i controlli di aggiornamento utilizza un confronto numerico corretto delle versioni semantiche (non un confronto di stringhe)

### Sicurezza
- Le chiavi API DeepL sono escluse dai file di impostazioni esportati
- L'importazione di un file di impostazioni non sovrascrive più le chiavi API memorizzate localmente; le chiavi possono essere modificate solo tramite il campo dedicato "Chiavi API DeepL"
- La configurazione importata viene convalidata campo per campo prima di essere applicata (codici lingua, tema, motore, intervalli numerici, impostazioni audio, modalità di aggiornamento); i valori non validi o non riconosciuti vengono ignorati e sostituiti con valori predefiniti esistenti/sicuri invece di essere accettati
- La fonte di aggiornamento affidabile è un valore fisso nello script e non è configurabile tramite le impostazioni importate
- I controlli di aggiornamento leggono solo un numero di versione dal testo dello script recuperato; nessun codice scaricato viene eseguito in alcun momento

### Corretto
- Layout reattivo per la sezione Aggiornamenti automatici, in modo che le etichette localizzate più lunghe vadano a capo invece di traboccare dal pannello delle impostazioni

## [1.0.10]

### Aggiunto
- 5 nuove lingue dell'interfaccia: italiano, portoghese, coreano, vietnamita, arabo — l'interfaccia ora supporta 15 lingue in totale, con ogni etichetta, pulsante, tooltip e sezione (inclusi DeepL e limiti di richiesta) completamente tradotti
- La lingua dell'interfaccia viene ora rilevata automaticamente dalle impostazioni regionali del browser/sistema al primo utilizzo

### Modificato
- Metadati dell'autore e del repository aggiornati per riflettere l'attuale manutentore
- Le sezioni Chiavi API DeepL e Limiti di richiesta sono ora completamente localizzate in tutte le lingue dell'interfaccia supportate (precedentemente mostrate in inglese indipendentemente dalla lingua selezionata)
- Il cursore del ritardo di richiesta ora visualizza la sua unità di tempo nella lingua corretta (es. `ms`, `мс`, `毫秒`)
- I selettori di colore personalizzati aggiornano ora correttamente i loro valori quando si cambia tema

### Rimosso
- Tema chiaro (i temi Scuro, Cyberpunk e Dracula rimangono disponibili)
- Selettore del colore del testo (influenzava solo parte del testo dell'interfaccia utente, il che era fuorviante)
- Sintesi vocale (TTS) — rimossa poiché non funzionava correttamente

### Corretto
- Il link di aiuto di DeepL puntava precedentemente a `api-free.deepl.com`; ora punta correttamente a `deepl.com/pro-api`
- Il testo del pulsante "Salva chiavi DeepL" era troncato in 6 lingue dell'interfaccia (russo, ucraino, tedesco, francese, spagnolo, turco); etichette accorciate per adattarsi a tutte le dimensioni dello schermo
- Il cambio di tema non lascia più vecchi colori personalizzati applicati sopra il nuovo tema

[Visualizza release](https://github.com/ebayybe/reddit-translator/releases#release-v1.0.10)

## [1.0.9]

Contributo di [Dylan-ZQL](https://github.com/Dylan-ZQL). Verificato confrontando i file sorgente v1.0.0 e v1.0.9.

### Aggiunto
- Motore di traduzione DeepL, insieme ai motori Google e MyMemory esistenti
  - Supporto per più chiavi API DeepL con rotazione automatica e ripristino in caso di errore di una chiave
  - Rilevamento automatico degli endpoint API Free vs. Pro
  - Il testo lungo viene suddiviso in blocchi della dimensione di una richiesta prima della traduzione
  - Limiti di richiesta configurabili: max richieste simultanee, max richieste al secondo, max caratteri per richiesta, max paragrafi per richiesta
- Traduzione automatica durante lo scorrimento: un `IntersectionObserver` aggiuntivo traduce automaticamente il contenuto mentre entra nella viewport, separato dall'osservatore di iniezione pigra dei pulsanti esistente
- Pulsante di switch "Mostra originale / Mostra traduzione", che consente di scambiare l'intera pagina tra testo originale e tradotto
- Prefisso della chiave di archiviazione (`_x9_`) applicato a ogni impostazione salvata per evitare collisioni con altri userscript
- Helper di escape HTML di base e di parsing JSON sicuro utilizzati in tutto il codice di traduzione/richiesta

### Modificato
- Riscritta la coda delle richieste di traduzione: sostituita la precedente catena a ritardo fisso con una coda che rispetta la concorrenza configurabile e i limiti di frequenza al secondo
- Riprogettato il pulsante di azione fluttuante: sostituito il pulsante con etichetta "TRANSLATE ALL", la barra di avanzamento e il pulsante di annullamento con un singolo pulsante con icona compatto che traduce il contenuto visibile al clic e apre il pannello delle impostazioni al doppio clic
- La riproduzione della sintesi vocale è ora con stato: fare nuovamente clic su "parla" sullo stesso testo interrompe la riproduzione, il pulsante attivo viene evidenziato visivamente e il precedente limite di troncamento a 500 caratteri è stato rimosso

### Rimosso
- La scorciatoia da tastiera "Traduci tutto" (`Ctrl+Shift+T`) e la relativa impostazione del pannello — la traduzione del contenuto visibile è ora gestita dal pulsante fluttuante riprogettato descritto sopra

- [Visualizza release](https://github.com/ebayybe/reddit-translator/releases#release-v1.0.9)

## [1.0.0]

### Aggiunto
- Rilascio pubblico iniziale

[Visualizza release](https://github.com/ebayybe/reddit-translator/releases#release-v1.0.0)
