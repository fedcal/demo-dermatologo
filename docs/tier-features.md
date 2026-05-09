# Funzionalità per Tier — Studio Russo Bari Dermatologia

Tre livelli di template per dermatologo privato, dalla presentazione base al melanoma screening AI e skin diary tracker.

## Tier Base — €500-800 (consegna 2-3 settimane)

**Per chi**: Dermatologo freelance che vuole sito professionale + prenotazioni online.  
**Sforzo stimato**: ~120h.

### Funzionalità incluse

- **Home Hero** con foto studio + CTA "Prenota Visita"
- **Booking Prenotazioni**
  - Calendario visita realtime
  - Slot 30min selezionabili
  - Conferma email + SMS
  
- **Profilo Medico**
  - Laurea + specializzazione + iscrizione FNOMCeO
  - Curriculum + premi
  - Aree specializzazione (acne, melanoma, dermatite, etc)
  
- **Menu Prestazioni**
  - Visita dermatologica €60-100
  - Asportazione neo €80-200 per size
  - Crioterapia €40-80
  - Laser treatment €150-500
  
- **Contact Form** + WhatsApp booking
- **GDPR Compliance** (sensibilità dati Art.9)
- **Schema MedicalBusiness JSON-LD** per SEO
- **Mobile-first responsive** (LCP <2.5s)
- **HTTPS + SSL certificate** gratis Let's Encrypt

### Cosa NON è incluso

- Telemedicina
- AI melanoma screening
- Skin diary tracking
- Fototerapia management
- OCR cosmetics analysis
- Virtual consultation

---

## Tier Intermedio — €1.500-2.200 (consegna 4-6 settimane)

**Per chi**: Dermatologo consolidato che vuole telemedicina e foto cliniche.  
**Sforzo stimato**: ~280h.

### Funzionalità incluse (oltre al Base)

- **Telemedicina Pay-Per-View**
  - Zoom/Meet integrate
  - Triage questione pelle via foto + chat
  - €20-40 consulto breve (limit FNOMCeO)
  - Recording disabled GDPR Art.9
  - Ricetta PDF firmata PKIX
  
- **Foto Cliniche Management**
  - Patient uploads foto lesione pre-visita
  - Comparison before/after fototerapia
  - DICOM viewer per immagini cliniche
  - Archive cronologico per evoluzione
  
- **Skin Diary Semplice**
  - Paziente traccia irritazione/prurito giornaliero
  - Note libere + foto selfie
  - Export PDF report settimanale
  - Correlazione visibike con therapies
  
- **E-Prescription Generator**
  - Firma digitale PKIX medico
  - QR code ricetta per farmacia
  - Storage protetto GDPR
  
- **Multi-lingua IT/EN** (pazienti EU)
- **Admin Dashboard** modifica orari/prezzi
- **Newsletter opt-in** consigli dermatologici

### Integrazioni disponibili

| Stack | Costo/anno | Note |
|-------|-----------|------|
| Zoom API | €229/anno pro | Telemedicina |
| Stripe | 1.4% + €0.30 per transazione | Payment processor |
| SendGrid Email | Free (100/giorno) | Newsletter |
| DocuSign / Yousign | €15-30/mo | E-signature PKIX |

---

## Tier Avanzato — €4.000-6.000 (consegna 10-12 settimane)

**Per chi**: Dermatologo innovativo con volume pazienti 1000+ e esigenze AI avanzate.  
**Sforzo stimato**: ~490h.

### Funzionalità incluse (oltre all'Intermedio)

- **AI Melanoma Screening**
  - LLaVA ABCDE rule (Asymmetry/Border/Color/Diameter/Evolving)
  - Risk score 1-100 (NO diagnosi, only triage)
  - Disclaimer legale FNOMCeO
  - Raccomandazione dermatoscopia/biopsia
  - Archive screening history
  
- **Fototerapia Tracker**
  - UVA/UVB sessioni registrate (data, dose, durata)
  - Cumulative dose tracking (psoriasi, vitiligine)
  - Efficacia tracking (foto before/after 4 sett)
  - Protocol sheet per categoria (psoriasi/vitiligine/alopecia)
  
- **Skin Diary AI Compare**
  - Paziente carica foto lesione settimanale
  - LLaVA compara pre/post auto
  - Severity Pillsbury scale 0-10 calcolato
  - Trend chart efficacia therapy
  - Automazione report per follow-up
  
- **Acne Severity Tracker**
  - LLaVA Pillsbury scale 0-10 (comedoni + papule)
  - Lesion count auto-detection
  - Trend 8 settimane during isotretinoina
  - Laboratory integration (roaccutan monitoring LFT)
  
- **Cosmetics INCI Alert**
  - Paziente fotografa etichetta cosmetico
  - OCR estrae ingredienti INCI
  - Database irritanti (SDS matching)
  - Alert se ingrediente vietato per condizione
  
- **Virtual Estetica Consultation**
  - Selfie paziente + morphing AI
  - Rinoplastica simulator (profilo attuale vs target)
  - Botox/filler mapper (zone injection)
  - Stripe quotation integrato
  
- **Advanced Analytics**
  - Efficacia therapy per diagnosis (psoriasi €150 vs acne €80)
  - Patient retention rate
  - Revenue per prestazione
  - Churn prediction (pazienti no-show drop)

### Integrazioni Enterprise

| Stack | Costo/anno | Note |
|-------|-----------|------|
| Ollama AI (on-prem) | €0 | LLaVA melanoma + skin diary AI |
| Zoom API | €229/anno | Telemedicina enterprise |
| Stripe | 1.4% + €0.30 | Payment processor |
| Yousign | €15-30/mo | E-prescription PKIX |
| OCR Tesseract | €0 | INCI ingredient extraction |

---

## Confronto Tier

| Funzionalità | Base | Intermedio | Avanzato |
|---|:---:|:---:|:---:|
| Booking Prenotazioni | ✓ | ✓ | ✓ |
| Profilo Medico | ✓ | ✓ | ✓ |
| Menu Prestazioni | ✓ | ✓ | ✓ |
| **Telemedicina** | — | ✓ | ✓ |
| **Foto Cliniche** | — | ✓ | ✓ |
| **Skin Diary** | — | ✓ | ✓ |
| **Melanoma AI** | — | — | ✓ |
| **Fototerapia Tracker** | — | — | ✓ |
| **Acne Tracker** | — | — | ✓ |
| **INCI Alert** | — | — | ✓ |
| **Virtual Estetica** | — | — | ✓ |

---

## Manutenzione Ricorrente

| Piano | €/mese | Incluso |
|-------|---------|---------|
| **Basic** | €50 | Hosting + SSL + backup + email support |
| **Standard** | €100 | Basic + 4h modifiche/mese + monitoring + phone support |
| **Premium** | €200 | Standard + 12h modifiche/mese + CDN + AI model updates + FNOMCeO compliance |

---

## Partnership & Supporto

**Hosting** — Hetzner VPS (EU-based, GDPR compliant)  
**SSL/CDN** — Cloudflare free tier  
**Payment** — Stripe + Pagamenti italiani  
**Support** — Federico Calò, email + Telegram

**Normativa**: GDPR Art.9 (dati sensibili), FNOMCeO telemedicina, detraibilità 19%, SIAE copyright foto

---

**Scegli il tier adatto. Contatta Federico per quotazione personalizzata.**
