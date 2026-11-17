import { Award, Coffee, MapPinned } from "lucide-react";
import cup from "@/assets/coffee-cup.jpg";

export function Essence() {
  return (
    <section id="vertice" aria-labelledby="vertice-title" className="bg-background">
      <div className="border-y border-border bg-[#fbf5e9]">
        <ul className="mx-auto grid max-w-7xl divide-y divide-border px-5 py-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-8">
          {[
            ["Especialidad", "Datos técnicos confirmados", Award],
            ["Orígenes", "Seleccionados en Latinoamérica", MapPinned],
            ["Para gastronomía", "Cafés para hacer experiencias", Coffee],
          ].map(([title, text, Icon]) => {
            const FeatureIcon = Icon as typeof Award;
            return (
              <li key={title as string} className="flex items-center gap-3 px-3 py-3 sm:px-5">
                <FeatureIcon className="size-7 shrink-0 text-gold-ink" aria-hidden="true" />
                <span>
                  <strong className="block text-xs uppercase tracking-wide">
                    {title as string}
                  </strong>
                  <span className="text-xs text-muted-foreground">{text as string}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mx-auto grid max-w-7xl items-stretch lg:grid-cols-[.95fr_1.05fr]">
        <figure className="min-h-72 overflow-hidden lg:min-h-[34rem]">
          <img
            src={cup}
            alt="Taza de café en una mesa de madera"
            className="size-full object-cover object-bottom"
            loading="lazy"
          />
          <figcaption className="sr-only">Imagen ilustrativa.</figcaption>
        </figure>
        <div className="flex items-center px-5 py-16 md:px-12 lg:px-16">
          <div className="max-w-xl">
            <p className="eyebrow text-gold-ink">VÉRTICE</p>
            <h2 id="vertice-title" className="mt-5 text-4xl leading-tight sm:text-5xl">
              El punto de encuentro entre origen, calidad y gastronomía.
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
              Una selección de cafés de especialidad, trazables y consistentes, pensados para
              quienes valoran la información y la experiencia en taza.
            </p>
            <div className="mt-9 grid gap-4 border-t border-border pt-7 sm:grid-cols-3">
              {[
                ["Origen", "Procedencia clara"],
                ["Perfil", "Lectura sensorial"],
                ["Formato", "Café en grano · 1 kg"],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="eyebrow text-gold-ink">{label}</p>
                  <p className="mt-2 text-sm font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
