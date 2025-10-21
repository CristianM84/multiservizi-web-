# 🚀 Guida Rapida al Deployment

## Opzione 1: Deployment Automatico su Vercel (Consigliato)

### Passaggi Rapidi:

1. **Crea Account GitHub**: https://github.com/signup
2. **Crea Repository**: Nuovo repo chiamato `multiservizi-web`
3. **Carica il Codice**:
   ```bash
   git remote add origin https://github.com/TUO_USERNAME/multiservizi-web.git
   git branch -M main
   git push -u origin main
   ```
4. **Crea Account Vercel**: https://vercel.com/signup
5. **Importa Progetto**: Seleziona il repository GitHub
6. **Deploy**: Clicca "Deploy" e attendi 1-2 minuti

**Fatto!** Il tuo sito è online su `https://multiservizi-web.vercel.app`

---

## Opzione 2: Deployment Manuale su Vercel

Se preferisci non usare GitHub:

1. Installa Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Dalla cartella del progetto:
   ```bash
   cd /home/ubuntu/multiservizi_web
   vercel
   ```

3. Segui le istruzioni a schermo
4. Il sito sarà online in pochi minuti

---

## Opzione 3: Altre Piattaforme

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=.next
```

### Railway
1. Vai su https://railway.app
2. Collega il tuo GitHub
3. Seleziona il repository
4. Deploy automatico

---

## 🌐 Aggiungere un Dominio Personalizzato

Dopo il deployment, puoi aggiungere un dominio come `multiservizi-privati.it`:

1. Nel dashboard Vercel/Netlify, vai a "Domains"
2. Aggiungi il tuo dominio
3. Configura i DNS dal tuo registrar
4. Attendi la propagazione (max 48 ore)

---

## 📊 Monitorare il Sito

Dopo il deployment puoi:
- Visualizzare analytics
- Configurare email notifications
- Gestire variabili d'ambiente
- Controllare i log

---

## 🔄 Aggiornare il Sito

Per aggiornare il sito in futuro:

```bash
# Apporta le modifiche
# Poi:
git add .
git commit -m "Descrizione delle modifiche"
git push origin main
```

Vercel farà il deploy automaticamente! ✅

---

## 📞 Supporto

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs

---

**Hai bisogno di aiuto? Contatta il supporto della piattaforma che scegli!**

