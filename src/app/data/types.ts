// Tipi TypeScript per i dati mock dello Studio Dermatologico

export interface Indirizzo {
  via: string;
  citta: string;
  provincia: string;
  cap: string;
  regione: string;
  paese: string;
  lat: number;
  lng: number;
}

export interface Contatti {
  telefono: string;
  whatsapp: string;
  email: string;
  social: {
    instagram?: string;
    facebook?: string;
  };
}

export interface OrariApertura {
  lunedi: string;
  martedi: string;
  mercoledi: string;
  giovedi: string;
  venerdi: string;
  sabato: string;
  domenica: string;
}

export interface MetaSeo {
  title: string;
  description: string;
  keywords: string[];
}

export interface InfoAttivita {
  ragioneSociale: string;
  nomeCommerciale: string;
  tagline: string;
  albo: string;
  indirizzo: Indirizzo;
  contatti: Contatti;
  orari: OrariApertura;
  metaSeo: MetaSeo;
}

export interface CategoriaServizio {
  id: string;
  nome: string;
  ordine: number;
}

export interface Servizio {
  id: number;
  categoria: string;
  nome: string;
  descrizione: string;
  prezzo: number;
  durata: string;
  featured: boolean;
}

export interface ServiziData {
  categorie: CategoriaServizio[];
  servizi: Servizio[];
}

export interface Membro {
  id: number;
  nome: string;
  ruolo: string;
  specializzazione: string;
  albo: string;
  bio: string;
  anniEsperienza: number;
  image: string;
  specialita: string[];
}

export interface Team {
  team: Membro[];
}

export interface Tecnologia {
  id: number;
  nome: string;
  categoria: string;
  descrizione: string;
  utilizzo: string;
}

export interface TecnologieData {
  tecnologie: Tecnologia[];
}

export interface FaqItem {
  domanda: string;
  risposta: string;
}

export interface Faq {
  faq: FaqItem[];
}
