import { Button } from "@/components/ui/button";
import { PROFESSIONAL_PILLARS } from "@/features/site/data/site.content";
import { SectionHeading } from "./SectionHeading";

export function Professionals() {
  return (
    <section id="profesionales" aria-labelledby="profesionales-title" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading
        id="profesionales-title"
        eyebrow="Para profesionales"
        title="Un socio para tu barra."
        intro="Cafeterías, restaurantes y tostadores que necesitan cafés con información clara y comportamiento estable."
      />
      <ul className="mt-14 grid gap-10 md:grid-cols-3">
        {PROFESSIONAL_PILLARS.map((p) => (
          <li key={p.title} className="border-t-2 border-accent pt-6">
            <h3 className="text-3xl">{p.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{p.text}</p>
          </li>
        ))}
      </ul>
      <div className="mt-14">
        <Button asChild variant="ink" size="lg">
          <a href="#contacto">Contacto comercial</a>
        </Button>
      </div>
    </section>
  );
}

