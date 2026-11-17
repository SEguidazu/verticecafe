import {
  getAvailableCoffees,
  getUpcomingCoffees,
  SCORE_DISCLAIMER,
} from "@/features/catalog/data/catalog.repository";
import { SectionHeading } from "@/features/site/components/SectionHeading";
import { CoffeeCard } from "./CoffeeCard";

export function CatalogSection() {
  const coffees = getAvailableCoffees();
  const upcoming = getUpcomingCoffees();
  return (
    <>
      <section
        id="cafes"
        aria-labelledby="catalogo-title"
        className="relative overflow-hidden bg-[#f8f2e8]"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <SectionHeading
            id="catalogo-title"
            eyebrow="Nuestros cafés"
            title="Orígenes que cuentan una historia."
            intro="Cafés en grano de 1 kg, seleccionados por su procedencia y perfil sensorial."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coffees.map((c) => (
              <CoffeeCard key={c.slug} coffee={c} />
            ))}
          </div>
          <p className="mt-8 text-xs text-muted-foreground">{SCORE_DISCLAIMER}</p>
          <div className="mt-14 grid gap-6 border-t border-border pt-10 lg:grid-cols-[.75fr_1.25fr]">
            <p className="eyebrow text-gold-ink">Cómo leer un café VÉRTICE</p>
            <p className="max-w-3xl leading-relaxed text-muted-foreground">
              El país, la región, la variedad y el proceso ayudan a entender el recorrido de cada
              café. Las notas sensoriales son una guía para anticipar lo que puede expresar en taza.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="proximamente-title"
        className="border-y border-border bg-background"
      >
        <div className="mx-auto max-w-7xl px-5 py-18 md:px-8 md:py-24">
          <SectionHeading
            id="proximamente-title"
            eyebrow="Próximamente"
            title="Orígenes en camino"
            intro="Estos cafés todavía no están disponibles."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {upcoming.map((u) => (
              <li key={u.slug} className="flex flex-col border border-dashed border-input p-5">
                <p className="eyebrow text-muted-foreground">{u.country}</p>
                <p className="mt-3 font-display text-xl leading-snug">{u.name}</p>
                <span className="mt-auto pt-6">
                  <span className="inline-block rounded-full border border-gold-ink px-3 py-1 text-xs font-semibold text-gold-ink">
                    Próximamente
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
