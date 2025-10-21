# Guida al Deployment su Vercel

Questa guida ti aiuterà a pubblicare il sito web di Multiservizi Privati e Aziende su Vercel in pochi minuti.

## 📋 Prerequisiti

- Account GitHub (gratuito)
- Account Vercel (gratuito)
- Dominio personalizzato (opzionale)

## 🚀 Passaggi per il Deployment

### Passo 1: Crea un Account GitHub

1. Vai su [github.com](https://github.com)
2. Clicca su "Sign up"
3. Completa la registrazione con email e password
4. Verifica il tuo email

### Passo 2: Crea un Repository su GitHub

1. Accedi a GitHub
2. Clicca su "+" in alto a destra → "New repository"
3. Nomina il repository: `multiservizi-web` (o il nome che preferisci)
4. Descrizione: "Sito web professionale per Multiservizi Privati e Aziende"
5. Seleziona "Public" (per Vercel gratuito)
6. Clicca "Create repository"

### Passo 3: Carica il Codice su GitHub

Nel terminale del tuo computer, esegui:

```bash
# Naviga nella cartella del progetto
cd /home/ubuntu/multiservizi_web

# Aggiungi il remote GitHub
git remote add origin https://github.com/TUO_USERNAME/multiservizi-web.git

# Rinomina il branch a main (opzionale ma consigliato)
git branch -M main

# Carica il codice su GitHub
git push -u origin main
```

**Nota**: Sostituisci `TUO_USERNAME` con il tuo username GitHub.

### Passo 4: Crea un Account Vercel

1. Vai su [vercel.com](https://vercel.com)
2. Clicca "Sign Up"
3. Scegli "Continue with GitHub"
4. Autorizza Vercel ad accedere al tuo account GitHub
5. Completa la registrazione

### Passo 5: Importa il Progetto su Vercel

1. Accedi a Vercel
2. Clicca "Add New..." → "Project"
3. Seleziona il repository `multiservizi-web`
4. Clicca "Import"
5. Vercel rileverà automaticamente che è un progetto Next.js
6. Clicca "Deploy"

**Vercel farà il deploy automaticamente!** ✅

### Passo 6: Aggiungi un Dominio Personalizzato (Opzionale)

Dopo il deploy, puoi aggiungere un dominio personalizzato:

1. Nel dashboard Vercel, vai al tuo progetto
2. Clicca su "Settings" → "Domains"
3. Aggiungi il tuo dominio (es: `multiservizi-privati.it`)
4. Segui le istruzioni per configurare i DNS del tuo registrar

## 🔄 Deploy Automatico

Dopo il primo setup, ogni volta che farai un `git push` su GitHub, Vercel farà automaticamente il deploy della nuova versione!

```bash
# Per aggiornare il sito in futuro, basta:
git add .
git commit -m "Descrizione delle modifiche"
git push origin main
```

## 📊 Monitorare il Deployment

Nel dashboard Vercel puoi:
- Vedere lo stato del deployment
- Visualizzare i log
- Configurare variabili d'ambiente
- Aggiungere domini personalizzati
- Gestire le impostazioni di sicurezza

## 🔐 Variabili d'Ambiente (Se Necessarie)

Se in futuro avrai bisogno di variabili d'ambiente (API keys, ecc.):

1. Nel dashboard Vercel, vai a "Settings" → "Environment Variables"
2. Aggiungi le variabili necessarie
3. Vercel le renderà disponibili durante il build

## 📱 URL Finale

Dopo il deploy, il tuo sito sarà disponibile su:
- **URL Vercel**: `https://multiservizi-web.vercel.app` (o simile)
- **Dominio personalizzato**: `https://multiservizi-privati.it` (se configurato)

## 🆘 Risoluzione Problemi

### Il deploy fallisce?
1. Controlla i log nel dashboard Vercel
2. Assicurati che il `package.json` sia corretto
3. Verifica che non ci siano errori TypeScript

### Il sito non si aggiorna?
1. Attendi qualche minuto (il deploy può impiegare 1-2 minuti)
2. Svuota la cache del browser (Ctrl+Shift+Del)
3. Controlla lo stato del deployment nel dashboard

### Problemi con il dominio?
1. Verifica che i DNS siano configurati correttamente
2. Attendi fino a 48 ore per la propagazione DNS
3. Contatta il supporto Vercel se il problema persiste

## 📞 Supporto

- **Documentazione Vercel**: https://vercel.com/docs
- **Documentazione Next.js**: https://nextjs.org/docs
- **Supporto Vercel**: https://vercel.com/support

## ✅ Checklist Finale

- [ ] Account GitHub creato
- [ ] Repository GitHub creato
- [ ] Codice caricato su GitHub
- [ ] Account Vercel creato
- [ ] Progetto importato su Vercel
- [ ] Deploy completato con successo
- [ ] Sito raggiungibile online
- [ ] Dominio personalizzato configurato (opzionale)

---

**Congratulazioni! Il tuo sito è ora online! 🎉**

Per domande o assistenza, contatta il supporto Vercel o la documentazione ufficiale.

