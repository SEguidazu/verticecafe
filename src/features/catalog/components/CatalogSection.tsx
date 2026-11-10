import { getAvailableCoffees, getUpcomingCoffees, SCORE_DISCLAIMER } from "@/features/catalog/data/catalog.repository";
import { SectionHeading } from "@/features/site/components/SectionHeading";
import { CoffeeCard } from "./CoffeeCard";

export function CatalogSection() {
  const coffees = getAvailableCoffees();
  const upcoming = getUpcomingCoffees();
  return (
    <>
      <section id="catalogo" aria-labelledby="catalogo-title" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeading
          id="catalogo-title"
          eyebrow="Catálogo disponible"
          title="Tres cafés, tres lecturas del origen."
          intro="Todos se presentan como café en grano, en formato de 1 kg."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coffees.map((c) => (
            <CoffeeCard key={c.slug} coffee={c} />
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground">Los puntajes son informados por el proveedor. {SCORE_DISCLAIMER.split(". ")[1]}</p>
      </section>

      <section aria-labelledby="proximamente-title" className="border-y border-dashed border-input">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
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

