import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { MockDataService } from '../../data/mock-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, NgFor, NgIf, RouterLink],
  template: `
    <section class="hero">
      <div class="demo-container">
        <p class="hero-eyebrow">Studio Dermatologico Russo — Bari</p>
        <h1>Dermatologia clinica<br>ed estetica</h1>
        <p class="hero-tagline">
          Dr.ssa Valentina Russo, specialista in Dermatologia e Venereologia.<br>
          Mappatura nei, screening melanoma, trattamenti estetici avanzati.
        </p>
        <div class="hero-actions">
          <a routerLink="/contatti" class="btn btn-primary">Prenota una visita</a>
          <a routerLink="/servizi" class="btn btn-secondary">I nostri servizi</a>
        </div>
      </div>
    </section>

    <section class="features demo-container">
      <h2>Perché scegliere lo Studio Russo</h2>
      <ul class="feature-grid">
        <li>
          <span class="feature-icon" aria-hidden="true">🔬</span>
          <h3>Dermoscopia digitale</h3>
          <p>Videodermatoscopio FotoFinder con AI per mappatura e monitoraggio dei nei nel tempo.</p>
        </li>
        <li>
          <span class="feature-icon" aria-hidden="true">🧬</span>
          <h3>Diagnosi precoce</h3>
          <p>Screening melanoma con analisi algoritmica. La diagnosi precoce salva vite.</p>
        </li>
        <li>
          <span class="feature-icon" aria-hidden="true">✨</span>
          <h3>Estetica medica</h3>
          <p>Botox, filler, peeling e laser sotto supervisione medica dermatologica.</p>
        </li>
        <li>
          <span class="feature-icon" aria-hidden="true">🏥</span>
          <h3>Albo Medici Bari</h3>
          <p>Dottoressa iscritta all'Albo dei Medici della Provincia di Bari. Membro SIDeMaST.</p>
        </li>
      </ul>
    </section>

    <section class="featured demo-container" *ngIf="featuredServizi$ | async as servizi">
      <div class="section-header">
        <h2>Servizi in evidenza</h2>
        <a routerLink="/servizi" class="link-more">Tutti i servizi →</a>
      </div>
      <ul class="servizi-grid">
        <li *ngFor="let s of servizi" class="servizio-card">
          <div class="servizio-card__head">
            <h3>{{ s.nome }}</h3>
            <span class="servizio-card__price">da {{ s.prezzo | currency: 'EUR' : 'symbol' : '1.0-0' }}</span>
          </div>
          <p class="servizio-card__desc">{{ s.descrizione }}</p>
          <p class="servizio-card__durata">Durata: {{ s.durata }}</p>
        </li>
      </ul>
    </section>

    <section class="cta-band">
      <div class="demo-container">
        <h2>Prenota la tua visita dermatologica</h2>
        <p>Ambulatorio aperto dal lunedì al venerdì. Risposta entro 24 ore lavorative.</p>
        <div class="hero-actions">
          <a routerLink="/contatti" class="btn btn-primary">Prenota ora</a>
          <a routerLink="/chi-siamo" class="btn btn-secondary">Scopri il team</a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        padding: 5rem 1rem;
        text-align: center;
        background: linear-gradient(180deg, #fdf2f8 0%, #ffffff 100%);
        border-bottom: 1px solid var(--color-border);
      }
      .hero-eyebrow {
        font-size: 0.85rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--color-accent);
        margin: 0 0 0.75rem;
      }
      .hero h1 {
        font-size: clamp(2rem, 5vw, 3.5rem);
        margin: 0 0 1rem;
        color: var(--color-fg-default);
        line-height: 1.2;
      }
      .hero-tagline {
        font-size: 1.1rem;
        color: var(--color-fg-muted);
        margin: 0 0 2rem;
        line-height: 1.6;
      }
      .hero-actions {
        display: flex;
        gap: 0.75rem;
        justify-content: center;
        flex-wrap: wrap;
      }
      .btn {
        display: inline-block;
        padding: 0.7rem 1.5rem;
        border-radius: var(--radius-md);
        text-decoration: none;
        font-weight: 600;
        transition: all 0.15s ease;
      }
      .btn-primary {
        background: var(--color-accent);
        color: #ffffff;
      }
      .btn-primary:hover {
        background: #be185d;
        text-decoration: none;
      }
      .btn-secondary {
        background: #ffffff;
        color: var(--color-fg-default);
        border: 1px solid var(--color-border);
      }
      .btn-secondary:hover {
        background: var(--color-bg-subtle);
        text-decoration: none;
      }
      .features {
        padding: 4rem 1rem;
      }
      .features h2 {
        text-align: center;
        margin-bottom: 2rem;
      }
      .feature-grid {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.5rem;
      }
      .feature-grid li {
        text-align: center;
        padding: 1.5rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
      }
      .feature-icon {
        font-size: 2.5rem;
        display: block;
        margin-bottom: 0.75rem;
      }
      .feature-grid h3 {
        margin: 0 0 0.5rem;
        font-size: 1.05rem;
      }
      .feature-grid p {
        margin: 0;
        color: var(--color-fg-muted);
        font-size: 0.9rem;
      }
      .featured {
        padding: 4rem 1rem;
        background: var(--color-bg-subtle);
        border-radius: var(--radius-lg);
        margin: 0 1rem 4rem;
      }
      .section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        flex-wrap: wrap;
        gap: 0.5rem;
      }
      .section-header h2 {
        margin: 0;
      }
      .link-more {
        color: var(--color-accent);
        text-decoration: none;
        font-weight: 600;
      }
      .servizi-grid {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1rem;
      }
      .servizio-card {
        background: #ffffff;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        padding: 1.25rem;
      }
      .servizio-card__head {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 0.75rem;
        margin-bottom: 0.5rem;
      }
      .servizio-card__head h3 {
        margin: 0;
        font-size: 1rem;
        flex: 1;
      }
      .servizio-card__price {
        color: var(--color-accent);
        font-weight: 700;
        font-size: 0.9rem;
        white-space: nowrap;
      }
      .servizio-card__desc {
        color: var(--color-fg-muted);
        font-size: 0.88rem;
        margin: 0 0 0.5rem;
        line-height: 1.5;
      }
      .servizio-card__durata {
        font-size: 0.8rem;
        color: var(--color-fg-muted);
        font-style: italic;
        margin: 0;
      }
      .cta-band {
        padding: 4rem 1rem;
        background: var(--color-fg-default);
        color: #ffffff;
        text-align: center;
      }
      .cta-band h2 {
        margin: 0 0 0.75rem;
        color: #ffffff;
      }
      .cta-band p {
        color: rgba(255, 255, 255, 0.85);
        margin: 0 0 2rem;
      }
      .cta-band .btn-secondary {
        background: transparent;
        color: #ffffff;
        border-color: rgba(255, 255, 255, 0.3);
      }
      .cta-band .btn-secondary:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private readonly mockData = inject(MockDataService);

  readonly featuredServizi$ = this.mockData.servizi$.pipe(
    map((data) => data.servizi.filter((s) => s.featured).slice(0, 3))
  );
}
