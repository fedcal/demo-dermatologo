import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

import { MockDataService } from '../../data/mock-data.service';

@Component({
  selector: 'app-tecnologie',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf],
  template: `
    <section class="page-header">
      <div class="demo-container">
        <h1>Tecnologie e strumentazione</h1>
        <p>Dermoscopio digitale, laser, fototerapia e radiofrequenza per diagnosi e trattamenti di eccellenza.</p>
      </div>
    </section>

    <article class="demo-container content" *ngIf="tecnologie$ | async as data">
      <section class="intro">
        <p>
          Lo Studio Dermatologico Russo investe costantemente nell'aggiornamento della strumentazione diagnostica
          e terapeutica. Utilizziamo esclusivamente dispositivi certificati CE Medical con documentazione clinica
          pubblicata su riviste peer-reviewed.
        </p>
      </section>

      <ul class="tech-grid">
        <li *ngFor="let t of data.tecnologie" class="tech-card">
          <div class="tech-card__header">
            <span class="tech-card__category">{{ t.categoria }}</span>
            <h2>{{ t.nome }}</h2>
          </div>
          <p class="tech-card__desc">{{ t.descrizione }}</p>
          <div class="tech-card__footer">
            <span class="tech-card__label">Utilizzo clinico:</span>
            <span class="tech-card__utilizzo">{{ t.utilizzo }}</span>
          </div>
        </li>
      </ul>

      <section class="certifications">
        <h2>Certificazioni e standard qualitativi</h2>
        <ul class="cert-list">
          <li>Tutti i dispositivi medici sono certificati CE in classe IIa o superiore secondo MDR 2017/745.</li>
          <li>Il personale medico aggiorna annualmente le competenze sui dispositivi attraverso corsi ECM accreditati.</li>
          <li>I protocolli di utilizzo seguono le linee guida delle società scientifiche internazionali (SIDeMaST, EADV, AAD).</li>
          <li>I laser e i dispositivi a radiofrequenza sono soggetti a manutenzione certificata semestrale.</li>
        </ul>
      </section>
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
      .intro {
        max-width: 720px;
        margin: 0 auto 3rem;
        text-align: center;
      }
      .intro p {
        color: var(--color-fg-muted);
        line-height: 1.7;
        margin: 0;
      }
      .tech-grid {
        list-style: none;
        padding: 0;
        margin: 0 0 4rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
        gap: 1.5rem;
      }
      .tech-card {
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        overflow: hidden;
        background: #ffffff;
        display: flex;
        flex-direction: column;
      }
      .tech-card__header {
        background: var(--color-bg-subtle);
        padding: 1.25rem 1.5rem 1rem;
        border-bottom: 1px solid var(--color-border);
      }
      .tech-card__category {
        display: inline-block;
        font-size: 0.7rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--color-accent);
        background: #fdf2f8;
        padding: 0.2rem 0.6rem;
        border-radius: 9999px;
        margin-bottom: 0.5rem;
      }
      .tech-card__header h2 {
        margin: 0;
        font-size: 1rem;
        line-height: 1.4;
      }
      .tech-card__desc {
        padding: 1rem 1.5rem;
        color: var(--color-fg-muted);
        font-size: 0.9rem;
        line-height: 1.6;
        margin: 0;
        flex: 1;
      }
      .tech-card__footer {
        padding: 0.75rem 1.5rem 1.25rem;
        border-top: 1px solid var(--color-border);
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
      }
      .tech-card__label {
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: var(--color-fg-muted);
      }
      .tech-card__utilizzo {
        font-size: 0.88rem;
        color: var(--color-fg-default);
      }
      .certifications {
        padding: 2rem;
        background: var(--color-bg-subtle);
        border-radius: var(--radius-md);
        border: 1px solid var(--color-border);
      }
      .certifications h2 {
        margin: 0 0 1.25rem;
        font-size: 1.2rem;
      }
      .cert-list {
        margin: 0;
        padding-left: 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      .cert-list li {
        font-size: 0.9rem;
        color: var(--color-fg-muted);
        line-height: 1.5;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TecnologieComponent {
  private readonly mockData = inject(MockDataService);

  readonly tecnologie$ = this.mockData.tecnologie$;
}
