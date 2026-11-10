import cup from "@/assets/coffee-cup.jpg";
import { SectionHeading } from "./SectionHeading";

export function OriginToCup() {
  return (
    <section id="origen" aria-labelledby="origen-title" className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-2">
        <div>
          <SectionHeading
            id="origen-title"
            tone="dark"
            eyebrow="Del origen a la taza"
            title="Lo que sucede lejos se encuentra en tu taza."
          />
          <div className="mt-8 space-y-5 leading-relaxed text-primary-foreground/80">
            <p>Detrás de cada café hay un lugar, un clima y una forma de trabajar el fruto. Esa historia no se ve, pero se percibe al servirlo.</p>
            <p>En VÉRTICE nos interesa que esa lectura llegue completa: informar lo que sabemos, sin agregar lo que no, y dejar que el café hable por sí mismo.</p>
          </div>
        </div>
        <figure>
          <img
            src={cup}
            alt="Taza de café negro sobre un mantel de lino claro"
            width={1200}
            height={1600}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
          <figcaption className="mt-3 text-xs text-primary-foreground/70">Imagen ilustrativa.</figcaption>
        </figure>
      </div>
    </section>
  );
}

