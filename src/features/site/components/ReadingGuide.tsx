import { READING_GUIDE } from "@/features/site/data/site.content";
import { SectionHeading } from "./SectionHeading";

export function ReadingGuide() {
  return (
    <section id="como-leer" aria-labelledby="como-leer-title" className="bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-16 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeading
          id="como-leer-title"
          eyebrow="Guía editorial"
          title="Cómo leer un café VÉRTICE"
          intro="Cada ficha está pensada para leerse en tres capas. Juntas cuentan de dónde viene un café y qué podés encontrar en la taza."
        />
        <ol className="divide-y divide-border border-y border-border">
          {READING_GUIDE.map((step) => (
            <li key={step.n} className="grid gap-4 py-8 sm:grid-cols-[4rem_1fr]">
              <span className="font-display text-4xl text-gold-ink" aria-hidden="true">{step.n}</span>
              <div>
                <h3 className="text-3xl">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

