import { Button } from "@/components/ui/button";
import { PROFESSIONAL_PILLARS } from "@/features/site/data/site.content";
import cup from "@/assets/coffee-cup.jpg";
import { ArrowRight, Check } from "lucide-react";

export function Professionals() {
  return (
    <section
      id="gastronomia"
      aria-labelledby="profesionales-title"
      className="overflow-hidden bg-[#092c23] text-primary-foreground"
    >
      <div className="mx-auto grid max-w-7xl items-stretch lg:grid-cols-[.72fr_1.28fr]">
        <figure className="min-h-80 lg:min-h-[40rem]">
          <img
            src={cup}
            alt="Taza de café servida para gastronomía"
            className="size-full object-cover"
            loading="lazy"
          />
          <figcaption className="sr-only">Imagen ilustrativa.</figcaption>
        </figure>
        <div className="flex items-center px-5 py-20 md:px-12 lg:px-16">
          <div className="max-w-2xl">
            <p className="eyebrow flex items-center gap-3 text-gold-light before:h-px before:w-10 before:bg-gold-light">
              Para gastronomía
            </p>
            <h2 id="profesionales-title" className="mt-5 text-4xl leading-tight sm:text-5xl">
              Café de especialidad para hacer experiencias.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
              Una propuesta para cafeterías, restaurantes, bares y hoteles que buscan acompañar su
              servicio con origen, información y una conversación comercial directa.
            </p>
            <ul className="mt-9 grid gap-5 sm:grid-cols-3">
              {PROFESSIONAL_PILLARS.map((p) => (
                <li key={p.title} className="border-t border-gold-light/55 pt-4">
                  <Check className="size-5 text-gold-light" aria-hidden="true" />
                  <h3 className="mt-4 text-xl">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                    {p.text}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button asChild variant="gold" size="lg">
                <a href="#contacto">
                  Solicitá una propuesta comercial{" "}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
