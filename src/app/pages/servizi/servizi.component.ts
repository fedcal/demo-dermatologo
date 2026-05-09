import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { map } from 'rxjs';

import { MockDataService } from '../../data/mock-data.service';
import type { Servizio } from '../../data/types';

interface ServiziView {
  categorie: { id: string; nome: string; servizi: Servizio[] }[];
}

@Component({
  selector: 'app-servizi',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, NgFor, NgIf],
  template: `
    <section class="page-header">
      <div class="demo-container">
        <h1>I nostri servizi</h1>
        <p>15 prestazioni dermatologiche · clinica, diagnostica ed estetica · €80 – €450</p>
      </div>
    </section>

    <article class="demo-container" *ngIf="view$ | async as view">
      <section *ngFor="let cat of view.categorie" class="servizi-category">
        <h2>{{ cat.nome }}</h2>
        <ul class="servizi-list">
          <li *ngFor="let s of cat.servizi" class="servizio-item">
            <div class="servizio-item__head">
              <h3>{{ s.nome }}</h3>
              <span class="servizio-item__price">{{ s.prezzo | currency: 'EUR' : 'symbol' : '1.0-0' }}</span>
            </div>
            <p class="servizio-item__desc">{{ s.descrizione }}</p>
            <p class="servizio-item__durata">Durata: {{ s.durata }}</p>
          </li>
        </ul>
      </section>

      <p class="disclaimer">
        I prezzi si intendono per singola prestazione IVA inclusa. Alcuni percorsi prevedono pacchetti pluriseduta con tariffe agevolate.
        Per preventivi personalizzati contattare lo studio. Le prestazioni sono effettuate da personale medico qualificato e iscritto all'Albo.
      </p>
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
      .page-header h1 {
        margin: 0 0 0.5rem;
      }
      .page-header p {
        color: var(--color-fg-muted);
        margin: 0;
      }
      .servizi-category {
        padding: 3rem 1rem 1.5rem;
      }
      .servizi-category h2 {
        font-size: 1.4rem;
        margin: 0 0 1.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid var(--color-accent);
        display: inline-block;
      }
      .servizi-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 1.25rem;
      }
      .servizio-item {
        padding: 1.25rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        background: #ffffff;
      }
      .servizio-item__head {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: 0.5rem;
      }
      .servizio-item__head h3 {
        margin: 0;
        font-size: 1rem;
        flex: 1;
      }
      .servizio-item__price {
        color: var(--color-accent);
        font-weight: 700;
        flex-shrink: 0;
      }
      .servizio-item__desc {
        color: var(--color-fg-muted);
        font-size: 0.9rem;
        margin: 0 0 0.5rem;
        line-height: 1.5;
      }
      .servizio-item__durata {
        font-size: 0.8rem;
        color: var(--color-fg-muted);
        font-style: italic;
        margin: 0;
      }
      .disclaimer {
        font-size: 0.8rem;
        color: var(--color-fg-muted);
        font-style: italic;
        text-align: center;
        margin: 3rem 1rem;
        padding: 1rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        background: var(--color-bg-subtle);
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiziComponent {
  private readonly mockData = inject(MockDataService);

  readonly view$ = this.mockData.servizi$.pipe(
    map((data): ServiziView => ({
      categorie: data.categorie
        .sort((a, b) => a.ordine - b.ordine)
        .map((cat) => ({
          id: cat.id,
          nome: cat.nome,
          servizi: data.servizi.filter((s) => s.categoria === cat.id)
        }))
    }))
  );
}
