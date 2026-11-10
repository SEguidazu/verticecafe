import type { CoffeeProduct, UpcomingCoffee } from "./types";

/**
 * Mock repository. Replace the bodies with Sanity (GROQ) queries later;
 * components only depend on these functions and the types.
 */
const PRODUCTS: CoffeeProduct[] = [
  {
    slug: "santos-cerrado",
    name: "Santos Cerrado",
    country: "Brasil",
    colorId: "#325D29",
    species: "Arábica",
    variety: "Mundo Novo",
    process: "Natural",
    region: "Cerrado Mineiro, Minas Gerais",
    altitude: "900–1.000 m",
    screen: "17/18",
    supplierScore: 81,
    sensoryProfile: "Frutos secos, cacao, cuerpo pleno y baja acidez.",
    format: "Café en grano",
    presentation: "1 kg",
  },
  {
    slug: "santos-lavado",
    name: "Santos Lavado",
    country: "Brasil",
    colorId: "#045190",
    species: "Arábica",
    variety: "Catuaí Amarelo",
    process: "Lavado",
    region: "Brejetuba, Espírito Santo",
    altitude: "920 m",
    screen: "17/18",
    supplierScore: 85,
    sensoryProfile: "Notas florales y cítricas, frutilla, mora y azúcar mascabo.",
    format: "Café en grano",
    presentation: "1 kg",
  },
  {
    slug: "colombia-supremo",
    name: "Colombia Supremo",
    country: "Colombia",
    colorId: "#D79805",
    species: "Arábica",
    variety: "Castillo",
    process: "Lavado",
    region: "Valle del Cauca",
    altitude: "1.400–1.700 m",
    screen: "17/18",
    supplierScore: 83,
    sensoryProfile: "Caramelo, cacao, frutal suave, acidez media y cuerpo medio.",
    format: "Café en grano",
    presentation: "1 kg",
  },
];

const UPCOMING: UpcomingCoffee[] = [
  { slug: "brasil-bourbon", country: "Brasil", name: "Bourbon Fazenda Mossa Senhora Aparecida" },
  { slug: "colombia-huila", country: "Colombia", name: "Huila" },
  { slug: "costa-rica-tarrazu", country: "Costa Rica", name: "Tarrazú" },
  { slug: "peru-cajamarca", country: "Perú", name: "Cajamarca" },
  { slug: "guatemala-antigua", country: "Guatemala", name: "Antigua" },
];

export const SCORE_DISCLAIMER =
  "Puntaje informado por el proveedor. No constituye una certificación SCA.";

export function getAvailableCoffees(): CoffeeProduct[] {
  return PRODUCTS;
}

export function getUpcomingCoffees(): UpcomingCoffee[] {
  return UPCOMING;
}

