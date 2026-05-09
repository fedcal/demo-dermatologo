import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

import { MockDataService } from '../../data/mock-data.service';

@Component({
  selector: 'app-chi-siamo',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf],
  template: `
    <section class="page-header">
      <div class="demo-container">
        <h1>Chi siamo</h1>
        <p>Un team di specialisti al tuo servizio per la salute e la bellezza della tua pelle.</p>
      </div>
    </section>

    <article class="demo-container content">
      <section class="story">
        <h2>Lo Studio Dermatologico Russo</h2>
        <p>
          Lo Studio Dermatologico Russo nasce a Bari nel 2006 dalla volontà della Dr.ssa Valentina Russo di
          offrire un ambulatorio dermatologico di eccellenza che coniugasse la precisione diagnostica della
          dermatologia clinica con i più avanzati trattamenti di dermatologia estetica.
        </p>
        <p>
          In quasi 20 anni di attività abbiamo accolto oltre 12.000 pazienti, eseguito più di 8.000 mappature
          dei nei e individuato precocemente oltre 200 melanomi. La diagnosi precoce rimane la nostra missione
          primaria.
        </p>
        <p>
          Lo studio è dotato di videodermatoscopio FotoFinder di ultima generazione con sistema AI per
          l'analisi comparativa delle lesioni nel tempo, laser Nd:YAG Q-switched, lampada UVB a banda
          stretta e radiofrequenza frazionata.
        </p>
      </section>

      <section class="values">
        <h2>I nostri valori</h2>
        <ul class="values-grid">
          <li>
            <h3>Diagnosi precoce</h3>
            <p>La prevenzione e la diagnosi precoce del melanoma e delle patologie cutanee sono la nostra priorità assoluta.</p>
          </li>
          <li>
            <h3>Evidence-based</h3>
            <p>Ogni trattamento è fondato su linee guida internazionali e letteratura scientifica peer-reviewed aggiornata.</p>
          </li>
          <li>
            <h3>Approccio personale</h3>
            <p>Ogni paziente riceve un piano terapeutico individualizzato, pensato per le sue specifiche esigenze e storia clinica.</p>
          </li>
          <li>
            <h3>Formazione continua</h3>
            <p>Il team partecipa annualmente ai principali congressi dermatologici italiani e internazionali (SIDeMaST, AAD, EADV).</p>
          </li>
        </ul>
      </section>

      <section class="team" *ngIf="team$ | async as team">
        <h2>Il team</h2>
        <ul class="team-grid">
          <li *ngFor="let m of team.team" class="team-card">
            <div class="team-card__avatar" aria-hidden="true">{{ m.nome.charAt(0) }}</div>
            <h3>{{ m.nome }}</h3>
            <p class="team-card__role">{{ m.ruolo }}</p>
            <p class="team-card__spec">{{ m.specializzazione }}</p>
            <p class="team-card__albo">{{ m.albo }}</p>
            <p class="team-card__bio">{{ m.bio }}</p>
            <p class="team-card__exp">{{ m.anniEsperienza }} anni di esperienza</p>
            <ul class="team-card__skills">
              <li *ngFor="let s of m.specialita">{{ s }}</li>
            </ul>
          </li>
        </ul>
      </section>

      <section class="faq-section" *ngIf="faq$ | async as faq">
        <h2>Domande frequenti</h2>
        <ul class="faq-list">
          <li *ngFor="let item of faq.faq" class="faq-item">
            <h3>{{ item.domanda }}</h3>
            <p>{{ item.risposta }}</p>
          </li>
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
      .story {
        max-width: 720px;
        margin: 0 auto 4rem;
      }
      .story h2 { margin-bottom: 1rem; }
      .story p {
        line-height: 1.7;
        margin-bottom: 1rem;
        color: var(--color-fg-muted);
      }
      .values { margin-bottom: 4rem; }
      .values h2 {
        text-align: center;
        margin-bottom: 2rem;
      }
      .values-grid {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.5rem;
      }
      .values-grid li {
        padding: 1.5rem;
        background: var(--color-bg-subtle);
        border-radius: var(--radius-md);
        border-left: 3px solid var(--color-accent);
      }
      .values-grid h3 {
        margin: 0 0 0.5rem;
        color: var(--color-accent);
      }
      .values-grid p {
        margin: 0;
        color: var(--color-fg-muted);
        font-size: 0.9rem;
      }
      .team h2 {
        text-align: center;
        margin-bottom: 2rem;
      }
      .team-grid {
        list-style: none;
        padding: 0;
        margin: 0 0 4rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
      }
      .team-card {
        padding: 1.5rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        text-align: center;
      }
      .team-card__avatar {
        width: 72px;
        height: 72px;
        border-radius: 50%;
        background: var(--color-accent);
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.75rem;
        font-weight: 700;
        margin: 0 auto 1rem;
      }
      .team-card h3 { margin: 0 0 0.25rem; font-size: 1.05rem; }
      .team-card__role {
        margin: 0 0 0.5rem;
        color: var(--color-accent);
        font-weight: 600;
        font-size: 0.9rem;
      }
      .team-card__spec {
        font-size: 0.8rem;
        color: var(--color-fg-muted);
        margin: 0 0 0.25rem;
      }
      .team-card__albo {
        font-size: 0.75rem;
        color: var(--color-fg-muted);
        font-style: italic;
        margin: 0 0 0.75rem;
      }
      .team-card__bio {
        font-size: 0.88rem;
        color: var(--color-fg-muted);
        margin: 0 0 0.5rem;
        text-align: left;
        line-height: 1.5;
      }
      .team-card__exp {
        font-size: 0.8rem;
        font-weight: 600;
        margin: 0 0 0.75rem;
      }
      .team-card__skills {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 0.4rem;
        flex-wrap: wrap;
        justify-content: center;
      }
      .team-card__skills li {
        font-size: 0.7rem;
        background: #fdf2f8;
        color: var(--color-accent);
        padding: 0.2rem 0.5rem;
        border-radius: 9999px;
        font-weight: 500;
      }
      .faq-section h2 {
        text-align: center;
        margin-bottom: 2rem;
      }
      .faq-list {
        list-style: none;
        padding: 0;
        margin: 0;
        max-width: 800px;
        margin-inline: auto;
      }
      .faq-item {
        padding: 1.5rem 0;
        border-bottom: 1px solid var(--color-border);
      }
      .faq-item:last-child { border-bottom: none; }
      .faq-item h3 {
        margin: 0 0 0.75rem;
        font-size: 1rem;
        color: var(--color-fg-default);
      }
      .faq-item p {
        margin: 0;
        color: var(--color-fg-muted);
        font-size: 0.95rem;
        line-height: 1.6;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChiSiamoComponent {
  private readonly mockData = inject(MockDataService);

  readonly team$ = this.mockData.team$;
  readonly faq$ = this.mockData.faq$;
}
