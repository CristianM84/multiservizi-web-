# Multiservizi Privati e Aziende - Sito Web Professionale

Sito web moderno e responsivo per Multiservizi Privati e Aziende di Milia Cristian, specializzato in servizi di giardinaggio, manutenzione verde e edilizia da giardino.

## 🎯 Caratteristiche Principali

- **Homepage Accattivante**: Hero section con CTA prominenti e showcase dei servizi
- **18 Servizi Dettagliati**: Descrizione completa di tutti i servizi offerti
- **Blog Professionale**: Articoli e guide su giardinaggio e manutenzione verde
- **Form Contatti**: Modulo di contatto funzionale per richieste clienti
- **Responsive Design**: Perfettamente ottimizzato per desktop, tablet e mobile
- **SEO Ottimizzato**: Meta tag, title, description e struttura semantica
- **Design Moderno**: Utilizza Tailwind CSS per uno stile professionale e pulito
- **Logo Aziendale**: Integrato nell'header per branding coerente
- **Pronto Intervento H24**: Evidenziato in tutte le pagine

## 📁 Struttura del Progetto

```
multiservizi_web/
├── app/
│   ├── components/
│   │   ├── Header.tsx         # Navigazione principale
│   │   └── Footer.tsx         # Footer con info aziendali
│   ├── styles/
│   │   └── globals.css        # Stili globali e Tailwind
│   ├── servizi/
│   │   └── page.tsx           # Pagina dei servizi
│   ├── blog/
│   │   └── page.tsx           # Pagina del blog
│   ├── chi-siamo/
│   │   └── page.tsx           # Chi siamo
│   ├── contatti/
│   │   └── page.tsx           # Contatti e form
│   ├── layout.tsx             # Layout principale
│   └── page.tsx               # Homepage
├── public/
│   └── images/
│       └── logo.jpg           # Logo aziendale
├── package.json               # Dipendenze
├── tsconfig.json              # Configurazione TypeScript
├── tailwind.config.js         # Configurazione Tailwind
├── postcss.config.js          # Configurazione PostCSS
└── next.config.js             # Configurazione Next.js
```

## 🚀 Come Avviare il Progetto

### Sviluppo Locale

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Apri il browser su http://localhost:3000
```

### Build per Produzione

```bash
# Crea la build di produzione
npm run build

# Avvia il server di produzione
npm start
```

## 📱 Pagine Disponibili

1. **Homepage** (`/`) - Pagina principale con hero section e showcase servizi
2. **Servizi** (`/servizi`) - Elenco completo dei 18 servizi con descrizioni
3. **Blog** (`/blog`) - Articoli e guide su giardinaggio e manutenzione
4. **Chi Siamo** (`/chi-siamo`) - Informazioni aziendali e valori
5. **Contatti** (`/contatti`) - Form contatti e informazioni di contatto

## 🎨 Personalizzazione

### Colori
I colori principali sono definiti in Tailwind CSS:
- **Verde Principale**: `#16a34a` (green-600)
- **Verde Scuro**: `#15803d` (green-700)
- **Grigio**: `#111827` (gray-900)

### Informazioni Aziendali
Aggiorna i seguenti dati nel Footer e nelle pagine:
- **Telefono**: 346 4311027
- **Email**: multiservizi.privati.aziende@gmail.com
- **Indirizzo**: Marsciano (PG) 06055
- **P.IVA**: 03709160547
- **C.F.**: MLICST84H18B354H

### Logo
Sostituisci `/public/images/logo.jpg` con il tuo logo aziendale.

## 🔍 SEO

Il sito è ottimizzato per i motori di ricerca con:
- Meta tag title e description
- Heading structure semantica (H1, H2, H3)
- Link interni ben strutturati
- Immagini con alt text
- Schema markup per azienda locale

## 📞 Contatti Aziendali

- **Azienda**: Multiservizi Privati e Aziende di Milia Cristian
- **Proprietario**: Milia Cristian
- **Telefono**: 346 4311027 (Pronto Intervento H24)
- **Email**: multiservizi.privati.aziende@gmail.com
- **Indirizzo**: Marsciano (PG) 06055
- **P.IVA**: 03709160547
- **C.F.**: MLICST84H18B354H

## 🛠 Tecnologie Utilizzate

- **Next.js 15**: Framework React moderno
- **React 19**: Libreria UI
- **Tailwind CSS 4**: Framework CSS utility-first
- **TypeScript**: Tipizzazione statica
- **PostCSS**: Processore CSS

## 📝 Note di Sviluppo

- Il sito utilizza il nuovo App Router di Next.js
- Tutti i componenti sono funzionali con hooks React
- Il form contatti è un placeholder - implementare backend per l'invio email
- Le immagini del blog sono placeholder emoji - sostituire con immagini reali
- Implementare un sistema di blog dinamico per articoli aggiuntivi

## 🚀 Deployment

Per deployare il sito:

1. **Vercel** (consigliato):
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Altre piattaforme**: Seguire la documentazione di Next.js per il deployment

## 📄 Licenza

Tutti i diritti riservati © 2024 Multiservizi Privati e Aziende di Milia Cristian

---

**Creato con ❤️ per Multiservizi Privati e Aziende**

