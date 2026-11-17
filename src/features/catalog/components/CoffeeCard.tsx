import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { CoffeeProduct } from "@/features/catalog/data/types";
import { CoffeeSpecs } from "./CoffeeSpecs";
import { ArrowRight } from "lucide-react";

export function CoffeeCard({ coffee }: { coffee: CoffeeProduct }) {
  const titleId = `cafe-${coffee.slug}`;
  return (
    <article
      aria-labelledby={titleId}
      className="group flex flex-col overflow-hidden border border-border bg-card shadow-[0_12px_28px_rgba(54,38,17,.08)]"
    >
      <div
        className="relative flex min-h-72 items-center justify-center overflow-hidden bg-[#ede3d0] p-8"
        aria-label={`Presentación ilustrativa de ${coffee.name}`}
      >
        <div
          className="absolute inset-x-0 top-0 h-2"
          style={{ backgroundColor: coffee.colorId }}
          aria-hidden="true"
        />
        <div className="relative flex h-60 w-40 flex-col justify-between rounded-sm border border-stone-300 bg-[#faf8f1] px-4 py-5 text-center shadow-[8px_10px_13px_rgba(31,19,12,.18)] transition-transform duration-300 group-hover:-translate-y-1">
          <span className="text-[0.6rem] font-bold tracking-[.22em] text-[#1f130c]">VÉRTICE</span>
          <span className="mx-auto h-px w-10 bg-[#a87d40]" />
          <span className="text-[.65rem] font-semibold uppercase tracking-[.14em] text-[#1f130c]">
            Café de especialidad
          </span>
          <span
            className="block px-1 py-2 text-xs font-extrabold uppercase leading-tight text-white"
            style={{ backgroundColor: coffee.colorId }}
          >
            {coffee.country}
            <br />
            {coffee.name}
          </span>
          <span className="text-[.62rem] font-semibold text-[#1f130c]">Café en grano · 1 kg</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <p className="eyebrow text-gold-ink">{coffee.country}</p>
        <h3 id={titleId} className="mt-2 text-3xl">
          {coffee.name}
        </h3>
        <p className="mt-4 leading-relaxed text-muted-foreground">{coffee.sensoryProfile}</p>
        <ul className="mt-5 flex flex-wrap gap-2 text-xs" aria-label="Datos principales">
          <li className="rounded-sm bg-secondary px-2.5 py-1">{coffee.process}</li>
          <li className="rounded-sm bg-secondary px-2.5 py-1">{coffee.variety}</li>
          <li className="rounded-sm bg-secondary px-2.5 py-1">{coffee.altitude}</li>
        </ul>
        <div className="mt-auto pt-8">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ink" size="lg" className="w-full">
                Ver ficha completa <ArrowRight className="size-4" aria-hidden="true" />
                <span className="sr-only"> de {coffee.name}</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[90vh] overflow-y-auto bg-background sm:max-w-lg">
              <DialogHeader>
                <p className="eyebrow text-gold-ink">
                  {coffee.country} · {coffee.format} · {coffee.presentation}
                </p>
                <DialogTitle className="font-display text-4xl font-medium">
                  {coffee.name}
                </DialogTitle>
                <DialogDescription>Ficha técnica del café {coffee.name}.</DialogDescription>
              </DialogHeader>
              <CoffeeSpecs coffee={coffee} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </article>
  );
}
