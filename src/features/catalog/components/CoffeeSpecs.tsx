import type { CoffeeProduct } from "@/features/catalog/data/types";
import { SCORE_DISCLAIMER } from "@/features/catalog/data/catalog.repository";

/** Ordered: perfil sensorial, proceso, variedad, región, altura, malla. */
export function CoffeeSpecs({ coffee }: { coffee: CoffeeProduct }) {
  const rows: [string, string][] = [
    ["Proceso", coffee.process],
    ["Variedad", `${coffee.species} · ${coffee.variety}`],
    ["Región", `${coffee.region}, ${coffee.country}`],
    ["Altura", coffee.altitude],
    ["Malla", coffee.screen],
    ["Formato", `${coffee.format} · ${coffee.presentation}`],
  ];
  return (
    <div>
      <h4 className="eyebrow text-gold-ink">Perfil sensorial</h4>
      <p className="mt-2 font-display text-2xl leading-snug">{coffee.sensoryProfile}</p>
      <dl className="mt-6 divide-y divide-border border-y border-border text-sm">
        {rows.map(([k, v]) => (
          <div key={k} className="grid grid-cols-[7rem_1fr] gap-4 py-3">
            <dt className="text-muted-foreground">{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
        <div className="grid grid-cols-[7rem_1fr] gap-4 py-3">
          <dt className="text-muted-foreground">Puntaje</dt>
          <dd>
            {coffee.supplierScore} puntos*
            <p className="mt-1 text-xs text-muted-foreground">*{SCORE_DISCLAIMER}</p>
          </dd>
        </div>
      </dl>
    </div>
  );
}

