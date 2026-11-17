import { Button } from "@/components/ui/button";
import texture from "@/assets/coffee-texture.jpg";
import cup from "@/assets/coffee-cup.jpg";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-[#082b22] text-primary-foreground"
    >
      <img
        src={texture}
        alt=""
        width={1600}
        height={1000}
        className="absolute inset-0 -z-10 size-full object-cover opacity-35"
      />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[35rem] max-w-7xl items-center gap-10 px-5 py-16 md:min-h-[40rem] md:grid-cols-[1.05fr_.95fr] md:px-8 lg:min-h-[42rem]">
        <div className="relative z-10 max-w-2xl pt-8 md:pt-0">
          <p className="eyebrow flex items-center gap-3 text-gold-light before:h-px before:w-10 before:bg-gold-light">
            Café de especialidad
          </p>
          <h1
            id="hero-title"
            className="mt-5 text-5xl leading-[0.94] sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Grandes orígenes.
            <br />
            <span className="text-primary-foreground/75">Una misma pasión.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            Cafés seleccionados en Latinoamérica, con información clara sobre su origen y una
            propuesta pensada para disfrutar cada taza.
          </p>
          <div className="mt-9">
            <Button asChild variant="gold" size="lg">
              <a href="#cafes">
                Conocé nuestros cafés <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
        <div className="relative self-end md:absolute md:bottom-0 md:right-0 md:h-[94%] md:w-[52%]">
          <div
            className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#082b22] to-transparent md:hidden"
            aria-hidden="true"
          />
          <img
            src={cup}
            alt="Taza de café VÉRTICE sobre una superficie de madera"
            className="h-64 w-full object-cover object-center sm:h-80 md:h-full"
          />
        </div>
      </div>
    </section>
  );
}
