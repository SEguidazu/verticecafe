/** Domain types for the catalog. Shaped to map 1:1 onto future Sanity documents. */
export interface CoffeeProduct {
  slug: string;
  name: string;
  country: string;
  /** Identificador de color de la línea (hex). */
  colorId: string;
  species: string;
  variety: string;
  process: string;
  region: string;
  altitude: string;
  screen: string;
  /** Puntaje informado por el proveedor. No es una certificación SCA. */
  supplierScore: number;
  sensoryProfile: string;
  format: string;
  presentation: string;
}

export interface UpcomingCoffee {
  slug: string;
  country: string;
  name: string;
}

