import { Button } from "@/components/ui/button";
import texture from "@/assets/coffee-texture.jpg";

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      <img
        src={texture}
        alt=""
        width={1600}
        height={1000}
        className="absolute inset-0 -z-10 size-full object-cover opacity-70"
      />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" aria-hidden="true" />
      <div className="mx-auto flex min-h-[86vh] max-w-6xl flex-col justify-end px-5 pb-20 pt-32 md:px-8 md:pb-28">
        <p className="eyebrow text-gold-light">Café de especialidad · Argentina</p>
        <h1 id="hero-title" className="mt-4 max-w-3xl text-5xl leading-[1.02] sm:text-6xl md:text-8xl">
          El origen nos define.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
          Seleccionamos cafés por su procedencia y los presentamos con información clara, para leer cada taza desde su origen.
        </p>
        <div className="mt-10">
          <Button asChild variant="gold" size="lg">
            <a href="#catalogo">Ver catálogo</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

