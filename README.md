# Nome del Progetto
CODITEC SITE

## Descrizione
Sito del comitato CODITEC

Questo progetto è un sito web sviluppato con **Vite** e **React**. Fornisce la possibilità di visualizzare gli eventi corsi e altre info del comitato CODITEC. 

## Screenshot

![Homepage del sito](public/assets/img/screenshots/home.png)


## Tecnologie Utilizzate

- **React** - Libreria JavaScript per la creazione di interfacce utente
- **Vite** - Bundler per un'ottima esperienza di sviluppo
- **TypeScript** - Linguaggio che migliora la produttività aggiungendo il typing a JavaScript
- **Bootstrap 5** - Framework CSS per uno sviluppo front-end veloce e responsive

## Funzionalità

- [Chi siamo] (informazioni generali su CODITEC)
- [Corsi] (informazioni su corsi passati e futuri)
- [Mentors] (informazioni sullo staff di CODITEC)
- [Eventi] (Eventi futuri organizzati da CODITEC)
- [Gallery] (Gallerio d'immagini tipo PINTERES)
- [Contatti] (Informazioni su come contattarci)

## Requisiti di Sistema

- **Node.js** v20.11.0
- **npm** 10.4.0

## Installazione

Segui questi passaggi per installare e avviare il progetto in locale.

1. Eseguire ```npm install``` per scaricare i pacchetti

2. Eseguire ```npm run dev``` per eseguire app in locale

## Buildare il progetto in fase di sviluppo

1. Eseguire ```npm install -g serve``` Installa serve globalmente (solo la prima volta se non avete serve installato)

2. Eseguire ```npm run build``` per buildare il porogetto

3. Eseguire ```serve -s dist``` per buieseguire il progetto buildato

## Buildare il progetto in produzione (gitHub)

Nella pipeline viene eseguita ```npm run build:production``` perchè bisogna caricare una variabile d'ambiente 
```VITE_PUBLIC_URL``` diversa per gestire le immagine di un progetto buildato su github.
Nello specifico la variabile ```VITE_PUBLIC_URL``` vale:
1. '/' nella modalita development (build locale)
2. '/coditec/' nella modalita production 

## Come committare

1. Eseguire ```npm run commit``` selezionado 

### Dove chiesto :

1. Are there any breaking changes? ```rispondere NO ```
2. Does this change affect any open issues? ```rispondere YES ```

# Gestione dei Contenuti del Sito
Il sito gestisce i contenuti attraverso file JSON situati nella cartella ```data```. Ogni file JSON rappresenta una pagina o una sezione del sito, e le modifiche ai contenuti si riflettono direttamente nelle pagine senza dover modificare il codice.

## Modifiche ai Contenuti
Per aggiungere, modificare o eliminare contenuti del sito, è necessario aggiornare i file JSON corrispondenti all'interno della cartella data. Ogni JSON contiene i dati relativi a una specifica pagina o sezione del sito.

## Struttura della Cartella data
La cartella data contiene i file JSON organizzati come segue:

1. home.json: Contiene i dati per la pagina principale (home page).
2. courses.json: Contiene le informazioni sui corsi offerti.
3. trainers.json: Contiene i dettagli relativi ai trainers.

Altri file JSON corrispondenti ad altre sezioni del sito.

### Esempio di Gestione della Home Page
La home page utilizza i dati presenti nel file ```home.json```, ma attinge anche da altri file JSON come 
```courses.json``` e ```trainers.json``` per mostrare informazioni aggiuntive, come i corsi e i trainers nella sezione principale.

### Come Aggiungere o Modificare i Contenuti
1. Aggiungere nuovi dati: Basta aggiungere un nuovo oggetto all'interno del file JSON corrispondente.
Attenzione agli oggetti con il campo id non create id UNIVOCI
2. Modificare i dati esistenti: Trova l'oggetto da modificare nel file JSON e aggiorna i campi necessari.
3. Eliminare dati: Rimuovi l'oggetto corrispondente dal file JSON.

# Gestione delle Immagini
Tutte le immagini utilizzate nel sito sono memorizzate sotto la cartella ```public/assets/img```.
La struttura delle immagini è organizzata per pagina, facilitando la gestione e l'aggiornamento.

## Struttura della Cartella delle Immagini
1. public/assets/img/: Cartella principale per tutte le immagini.
2. courses/: Cartella contenente le immagini relative alla sezione corsi.
3. trainers/: Cartella contenente le immagini dei trainers.
4. Altre cartelle: Per altre pagine o sezioni del sito, create cartelle con nomi appropriati.

## Come Aggiungere, Modificare o Cancellare Immagini
### Aggiungere Immagini:

Inserisci le nuove immagini nella cartella corrispondente sotto ```public/assets/img```. Ad esempio, per aggiungere un'immagine alla pagina ```courses```, salvala nella cartella ```courses```/.
E utilizzatela poi nel json data ```courses.ts```

### Modificare Immagini:

Se devi aggiornare un'immagine esistente, sostituisci il file con una versione aggiornata mantenendo lo stesso nome e percorso. In caso contrario, aggiorna i riferimenti alle immagini nei file JSON o nel codice sorgente se necessario.

### Cancellare Immagini:

Rimuovi il file dalla cartella corrispondente sotto public/assets/img. Assicurati di aggiornare anche i riferimenti alle immagini nel sito per evitare errori di visualizzazione.

## Note Importanti
1. Verifica sempre che l'immagine sia posizionata nella cartella corretta per garantire che venga visualizzata correttamente nelle pagine del sito.
2. Assicurati che il nome del file e l'estensione siano corretti e che i riferimenti alle immagini nel sito siano aggiornati.


# Gestione della Galleria di Immagini


### Rinominare le immagini della galleria (passo-passo)

Se le immagini nella cartella `public/assets/img/gallery` non sono numerate in modo coerente, puoi usare lo script fornito per rinominarle automaticamente. Lo script è sicuro: esegue prima una simulazione (dry-run) per mostrare le modifiche senza applicarle.

1. Posizionati nella root del progetto (es. `D:/CD/SITO/coditec`).

2. (Opzionale ma consigliato) Crea un backup della cartella gallery prima di procedere:

```bash
cp -r public/assets/img/gallery public/assets/img/gallery_backup_$(date +%Y%m%d_%H%M%S)
```

3. Esegui lo script (da root):

```bash
npm run rename-images
```

oppure lancia direttamente lo script:

```bash
sh ./sh/rename_gallery_images.sh
# oppure (se preferisci eseguire con bash):
./sh/rename_gallery_sequential.sh
```

4. Interazioni durante l'esecuzione:
- Lo script chiede prima conferma: `Vuoi procedere con la rinomina? (y/N)` — rispondi `y` per procedere.
- Poi chiede se vuoi fare prima una simulazione (dry-run): `Vuoi fare prima una simulazione (dry-run)? (Y/n)`.
    - Premendo Invio (o rispondendo `Y`) eseguirai solo la simulazione: vedrai tutte le modifiche proposte ma i file non verranno toccati.
    - Rispondendo `n` la rinomina verrà applicata realmente.

5. Regola di padding (come vengono nominati i file):
- Lo script applica un padding automatico in base al numero totale di immagini:
    - Se sono meno di 10: `1.jpg`, `2.jpg`, ... (width = 1)
    - Se sono tra 10 e 99: `01.jpg`, `02.jpg`, ... (width = 2)
    - Se sono tra 100 e 999: `001.jpg`, `002.jpg`, ... (width = 3)
- Questa stessa regola è usata anche dalla funzione `createImagesArray` in `src/utils/utils.ts`.

6. Nota sulla sicurezza:
- Lo script usa una directory temporanea per evitare collisioni durante la rinomina.
- Esegui sempre prima la simulazione (dry-run) per verificare l'output.

s### Note Importanti
1. Verifica il percorso: Assicurati che imageDirectory punti alla cartella corretta dove sono memorizzate le immagini.
2. Assicurati che tutte le immagini necessarie siano presenti e numerate correttamente.

## Configurazione del Deploy FTP per il Progetto su Aruba

Per gestire il deploy FTP del progetto su un server Aruba, è necessario configurare alcune variabili in GitHub Actions. Queste variabili consentono di stabilire la connessione al server FTP.

### Variabili Secrete

Nella sezione **Actions secrets and variables** di GitHub, assicurati di configurare le seguenti variabili segrete (il valore non sarà visibile):

- **FTP_SERVER**: Indirizzo del server FTP.
- **FTP_USERNAME**: Nome utente per l'accesso FTP.
- **FTP_PASSWORD**: Password per l'accesso FTP.

### Variabile d'Ambiente

Inoltre, è disponibile una variabile d'ambiente chiamata **ENABLE_FTP_DEPLOY**. Il suo valore predefinito è `false`. Se desideri abilitare il deploy FTP su Aruba, imposta questa variabile su `true`. Se non è valorizzata o è impostata su `false`, il processo di deploy FTP sarà saltato.

## Deploy in produzione

Una volta modificata la variabile d'ambinete **ENABLE_FTP_DEPLOY** a `true` fare un commie e push su main.

## Struttura del progetto 

```
|src
│   ├── App.css
│   ├── App.tsx
│   ├── assets
│   │   ├── css
│   │   │   ├── custom.css     # style custom
│   │   │   ├── gallery.css    # style gallery
│   │   │   ├── main.css       # style theme principale
│   │   │   ├── modal.css      # style modale gallery
│   │   ├── vendor
│   │   │   ├── bootstrap       # pacchetto esterno
│   │   │   ├── bootstrap-icons # pacchetto esterno
│   ├── components
│   │   ├── About
│   │   │   ├── Testimonials.tsx 
│   │   ├── Common
│   │   │   ├── About.tsx        
│   │   │   ├── Counts.tsx
│   │   │   ├── Courses.tsx
│   │   │   ├── PageTitle.tsx
│   │   ├── Courses
│   │   │   ├── Filters.tsx
│   │   ├── Footer.tsx
│   │   ├── Footer_canc.tsx
│   │   ├── Gallery
│   │   │   ├── GalleryItems.tsx
│   │   │   ├── GalleryModal.tsx
│   │   ├── Header.tsx
│   │   ├── Home
│   │   │   ├── Features.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── TrainersIndex.tsx
│   │   │   ├── WhyUs.tsx
│   │   ├── Widget
│   │   │   ├── GoogleTranslate.tsx
│   ├── context
│   │   ├── AboutTypes.ts
│   │   ├── AppContext.tsx    # gestione del contesto del sito
│   │   ├── Contact.ts
│   │   ├── CourseTypes.ts
│   │   ├── EventType.ts
│   │   ├── GalleryTypes.ts
│   │   ├── HomeType.ts
│   │   ├── TrainerType.ts
│   │   ├── Type.ts
│   │   ├── UiTypes.ts
│   ├── data                  # data contiene tutti i json coi contenuti da visualizzare  
│   │   ├── about.ts          # dati per la pagina a about (chi siamo)
│   │   ├── contact.ts        # dati per la pagina a contact (contatti)
│   │   ├── course.ts         # dati per la pagina a course (corsi)
│   │   ├── events.ts         # dati per la pagina a events (eventi)
│   │   ├── footer.ts         # dati per il footer
│   │   ├── gallery.ts        # dati per la pagina a gallery (galleria)
│   │   ├── home.ts           # dati per la pagina home la home mostra idati anche da altre sezioni
│   │   ├── manageui.ts       # dati per la gestione dell'interfaccia
│   │   ├── trainers.ts       # dati per la gestione dei trainers (mentors)
│   ├── pages
│   │   ├── About.tsx         # pagina about (chi siamo)
│   │   ├── Contact.tsx       # pagina contact (contatti)
│   │   ├── CourseDetail.tsx  # pagina dettaglio di un corso se il corso prevede un dettaglio
│   │   ├── Courses.tsx       # pagina courses (corsi)
│   │   ├── Events.tsx        # pagina events (eventi)
│   │   ├── Gallery.tsx       # pagina gallery (galleria)
│   │   ├── Home.tsx          # pagina home
│   │   ├── Trainers.tsx      # pagina trainers (mentors)
│   ├── route
│   │   ├── AppRoutes.tsx     # gestione delle rotte del sito
│   ├── utils
│   │   ├── utils.ts          # utility varie

