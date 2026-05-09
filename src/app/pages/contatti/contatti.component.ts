import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MockDataService } from '../../data/mock-data.service';

const MOTIVI_VISITA = [
  'Visita dermatologica generale',
  'Mappatura dei nei',
  'Dermoscopia singola lesione',
  'Screening melanoma',
  'Acne e rosacea',
  'Psoriasi o dermatite',
  'Fototerapia UVB',
  'Peeling chimico',
  'Botox (tossina botulinica)',
  'Filler con acido ialuronico',
  'Trattamento macchie cutanee',
  'Mesoterapia cutanea',
  'Asportazione neo o lesione benigna',
  'Test epicutanei (patch test)',
  'Altro / da definire'
] as const;

@Component({
  selector: 'app-contatti',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, ReactiveFormsModule],
  template: `
    <section class="page-header">
      <div class="demo-container">
        <h1>Prenota una visita</h1>
        <p>Compila il modulo per richiedere un appuntamento. Risponderemo entro 24 ore lavorative.</p>
      </div>
    </section>

    <article class="demo-container content" *ngIf="info$ | async as info">
      <div class="contact-grid">
        <section class="info-block">
          <h2>Studio Dermatologico Russo</h2>
          <p class="albo">{{ info.albo }}</p>

          <h3>Indirizzo</h3>
          <p>
            {{ info.indirizzo.via }}<br>
            {{ info.indirizzo.cap }} {{ info.indirizzo.citta }} ({{ info.indirizzo.provincia }})<br>
            {{ info.indirizzo.regione }}
          </p>

          <h3>Contatti</h3>
          <ul class="contact-list">
            <li>
              <strong>Telefono:</strong>
              <a [href]="'tel:' + info.contatti.telefono">{{ info.contatti.telefono }}</a>
            </li>
            <li>
              <strong>WhatsApp:</strong>
              <a [href]="whatsAppLink(info.contatti.whatsapp)" target="_blank" rel="noopener">{{ info.contatti.whatsapp }}</a>
            </li>
            <li>
              <strong>Email:</strong>
              <a [href]="'mailto:' + info.contatti.email">{{ info.contatti.email }}</a>
            </li>
          </ul>

          <h3>Orari di apertura</h3>
          <ul class="hours-list">
            <li><span>Lunedì</span><span>{{ info.orari.lunedi }}</span></li>
            <li><span>Martedì</span><span>{{ info.orari.martedi }}</span></li>
            <li><span>Mercoledì</span><span>{{ info.orari.mercoledi }}</span></li>
            <li><span>Giovedì</span><span>{{ info.orari.giovedi }}</span></li>
            <li><span>Venerdì</span><span>{{ info.orari.venerdi }}</span></li>
            <li><span>Sabato</span><span>{{ info.orari.sabato }}</span></li>
            <li><span>Domenica</span><span>{{ info.orari.domenica }}</span></li>
          </ul>

          <div class="gdpr-notice">
            <h3>Informativa privacy</h3>
            <p>
              I dati trasmessi tramite questo modulo sono considerati <strong>dati sanitari</strong> ai sensi del
              <strong>GDPR Reg. UE 2016/679, Art. 9</strong> (categorie particolari di dati personali).
              Il trattamento avviene esclusivamente per finalità di prenotazione e gestione del rapporto medico-paziente,
              nel rispetto del segreto professionale medico e delle disposizioni del Codice di deontologia medica.
              Titolare del trattamento: Studio Dermatologico Russo S.r.l. — info&#64;dermatologorusso.it.
            </p>
          </div>
        </section>

        <section class="form-block">
          <h2>Richiesta appuntamento</h2>
          <form [formGroup]="form" (ngSubmit)="onSubmit()" *ngIf="!submitted(); else thankyou">
            <div class="field">
              <label for="nome">Nome e cognome *</label>
              <input id="nome" type="text" formControlName="nome" autocomplete="name" required />
            </div>
            <div class="field">
              <label for="email">Email *</label>
              <input id="email" type="email" formControlName="email" autocomplete="email" required />
            </div>
            <div class="field">
              <label for="telefono">Telefono *</label>
              <input id="telefono" type="tel" formControlName="telefono" autocomplete="tel" required />
            </div>
            <div class="field">
              <label for="motivoVisita">Motivo della visita *</label>
              <select id="motivoVisita" formControlName="motivoVisita" required>
                <option value="">Seleziona un motivo...</option>
                <option *ngFor="let m of motivi" [value]="m">{{ m }}</option>
              </select>
            </div>
            <div class="row">
              <div class="field">
                <label for="dataPreferenza">Data preferenza</label>
                <input id="dataPreferenza" type="date" formControlName="dataPreferenza" />
              </div>
              <div class="field">
                <label for="fasciaOraria">Fascia oraria</label>
                <select id="fasciaOraria" formControlName="fasciaOraria">
                  <option value="">Indifferente</option>
                  <option value="mattina">Mattina (9:00–13:00)</option>
                  <option value="pomeriggio">Pomeriggio (15:30–18:30)</option>
                </select>
              </div>
            </div>
            <div class="field">
              <label for="note">Note o informazioni aggiuntive</label>
              <textarea id="note" formControlName="note" rows="3"
                placeholder="Descrivi brevemente il problema o le tue necessità..."></textarea>
            </div>
            <div class="field field--checkbox">
              <input id="privacyBase" type="checkbox" formControlName="privacyBase" required />
              <label for="privacyBase">
                Accetto il trattamento dei miei dati personali per la gestione della richiesta di appuntamento,
                ai sensi del GDPR Art. 6 c.1 lett. b. *
              </label>
            </div>
            <div class="field field--checkbox">
              <input id="privacySanitaria" type="checkbox" formControlName="privacySanitaria" required />
              <label for="privacySanitaria">
                Acconsento espressamente al trattamento dei miei <strong>dati sanitari</strong> (GDPR Art. 9 c.2 lett. a)
                ai fini della prenotazione e della gestione del rapporto medico-paziente. *
              </label>
            </div>
            <button type="submit" class="btn btn-primary" [disabled]="form.invalid">
              Invia richiesta appuntamento
            </button>
            <p class="form-disclaimer">
              Demo non funzionale: nessuna richiesta viene realmente inviata. Per prenotare contatta direttamente lo studio.
            </p>
          </form>
          <ng-template #thankyou>
            <div class="thankyou">
              <div class="thankyou__icon" aria-hidden="true">✓</div>
              <h3>Richiesta ricevuta, {{ form.value['nome'] }}!</h3>
              <p>
                Abbiamo ricevuto la tua richiesta per: <strong>{{ form.value['motivoVisita'] }}</strong>.
              </p>
              <p>In un sito reale verrebbe inviata un'email di conferma all'indirizzo indicato entro 24 ore lavorative.</p>
              <button type="button" class="btn btn-secondary" (click)="reset()">Nuova richiesta</button>
            </div>
          </ng-template>
        </section>
      </div>
    </article>
  `,
  styles: [
    `
      .page-header {
        padding: 4rem 1rem 3rem;
        background: var(--color-bg-subtle);
        text-align: center;
        border-bottom: 1px solid var(--color-border);
      }
      .page-header h1 { margin: 0 0 0.5rem; }
      .page-header p {
        color: var(--color-fg-muted);
        margin: 0;
      }
      .content { padding: 3rem 1rem; }
      .contact-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 3rem;
      }
      .info-block h2 {
        margin: 0 0 0.25rem;
        font-size: 1.3rem;
      }
      .albo {
        font-size: 0.8rem;
        color: var(--color-fg-muted);
        font-style: italic;
        margin: 0 0 1.5rem;
      }
      .info-block h3 {
        margin: 1.25rem 0 0.5rem;
        font-size: 1rem;
        color: var(--color-accent);
      }
      .info-block p {
        margin: 0 0 0.5rem;
        color: var(--color-fg-muted);
        font-size: 0.95rem;
      }
      .contact-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .contact-list li { margin-bottom: 0.5rem; font-size: 0.95rem; }
      .hours-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .hours-list li {
        display: flex;
        justify-content: space-between;
        padding: 0.4rem 0;
        border-bottom: 1px dashed var(--color-border);
        font-size: 0.9rem;
      }
      .gdpr-notice {
        margin-top: 1.5rem;
        padding: 1rem;
        background: #fdf2f8;
        border: 1px solid #fbcfe8;
        border-radius: var(--radius-md);
      }
      .gdpr-notice h3 {
        margin: 0 0 0.5rem !important;
        font-size: 0.85rem !important;
        color: var(--color-fg-default) !important;
      }
      .gdpr-notice p {
        font-size: 0.8rem !important;
        line-height: 1.5;
        margin: 0 !important;
      }
      .form-block {
        background: var(--color-bg-subtle);
        padding: 2rem;
        border-radius: var(--radius-lg);
      }
      .form-block h2 { margin: 0 0 1.5rem; }
      .field {
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
      }
      .field label {
        font-size: 0.85rem;
        font-weight: 600;
        margin-bottom: 0.25rem;
        color: var(--color-fg-default);
      }
      .field input,
      .field textarea,
      .field select {
        padding: 0.5rem 0.75rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-sm);
        font-family: inherit;
        font-size: 0.95rem;
        background: #ffffff;
      }
      .field input:focus,
      .field textarea:focus,
      .field select:focus {
        outline: 2px solid var(--color-accent);
        outline-offset: 1px;
        border-color: var(--color-accent);
      }
      .field--checkbox {
        flex-direction: row;
        align-items: flex-start;
        gap: 0.5rem;
      }
      .field--checkbox input[type="checkbox"] {
        margin-top: 0.2rem;
        flex-shrink: 0;
        padding: 0;
        width: 16px;
        height: 16px;
      }
      .field--checkbox label {
        font-weight: 400;
        font-size: 0.8rem;
        color: var(--color-fg-muted);
        line-height: 1.5;
      }
      .row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.75rem;
      }
      .btn {
        display: inline-block;
        padding: 0.7rem 1.5rem;
        border-radius: var(--radius-md);
        text-decoration: none;
        font-weight: 600;
        border: none;
        cursor: pointer;
        font-size: 0.95rem;
        transition: all 0.15s ease;
      }
      .btn-primary {
        background: var(--color-accent);
        color: #ffffff;
        width: 100%;
        margin-top: 0.5rem;
      }
      .btn-primary:hover { background: #be185d; }
      .btn-primary:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      .btn-secondary {
        background: #ffffff;
        color: var(--color-fg-default);
        border: 1px solid var(--color-border);
      }
      .form-disclaimer {
        font-size: 0.75rem;
        color: var(--color-fg-muted);
        font-style: italic;
        margin-top: 0.5rem;
        text-align: center;
      }
      .thankyou {
        text-align: center;
        padding: 2rem 0;
      }
      .thankyou__icon {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: var(--color-accent);
        color: #ffffff;
        font-size: 1.5rem;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1rem;
      }
      .thankyou h3 { color: var(--color-accent); margin-bottom: 0.75rem; }
      .thankyou p { color: var(--color-fg-muted); margin-bottom: 0.5rem; font-size: 0.95rem; }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContattiComponent {
  private readonly mockData = inject(MockDataService);
  private readonly fb = inject(FormBuilder);

  readonly info$ = this.mockData.info$;
  readonly submitted = signal(false);
  readonly motivi = MOTIVI_VISITA;

  readonly form: FormGroup = this.fb.nonNullable.group({
    nome: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required, Validators.pattern(/^[+0-9 ]{6,}$/)]],
    motivoVisita: ['', Validators.required],
    dataPreferenza: [''],
    fasciaOraria: [''],
    note: [''],
    privacyBase: [false, Validators.requiredTrue],
    privacySanitaria: [false, Validators.requiredTrue]
  });

  whatsAppLink(num: string): string {
    const clean = num.replace(/[^0-9]/g, '');
    return `https://wa.me/${clean}`;
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.submitted.set(true);
    }
  }

  reset(): void {
    this.form.reset({ privacyBase: false, privacySanitaria: false });
    this.submitted.set(false);
  }
}
