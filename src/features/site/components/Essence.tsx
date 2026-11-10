import { ESSENCE } from "@/features/site/data/site.content";
import { SectionHeading } from "./SectionHeading";

export function Essence() {
  return (
    <section id="esencia" aria-labelledby="esencia-title" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading id="esencia-title" eyebrow="Nuestra esencia" title="Café elegido desde su procedencia." />
      <ul className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {ESSENCE.map((item, i) => (
          <li key={item.title} className="bg-background p-8">
            <span className="font-display text-lg text-gold-ink" aria-hidden="true">0{i + 1}</span>
            <h3 className="mt-6 text-2xl">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

