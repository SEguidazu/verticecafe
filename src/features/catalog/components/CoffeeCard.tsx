import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { CoffeeProduct } from "@/features/catalog/data/types";
import { CoffeeSpecs } from "./CoffeeSpecs";

export function CoffeeCard({ coffee }: { coffee: CoffeeProduct }) {
  const titleId = `cafe-${coffee.slug}`;
  return (
    <article aria-labelledby={titleId} className="flex flex-col border border-border bg-card">
      {/* Línea de color identificadora, decorativa */}
      <div className="h-2" style={{ backgroundColor: coffee.colorId }} aria-hidden="true" />
      <div className="flex flex-1 flex-col p-7">
        <p className="eyebrow text-muted-foreground">{coffee.country}</p>
        <h3 id={titleId} className="mt-3 text-3xl">{coffee.name}</h3>
        <p className="mt-1 text-xs text-muted-foreground">Identificador de línea {coffee.colorId}</p>
        <p className="mt-5 leading-relaxed">{coffee.sensoryProfile}</p>
        <ul className="mt-6 flex flex-wrap gap-2 text-xs" aria-label="Datos principales">
          <li className="rounded-sm bg-secondary px-2.5 py-1">{coffee.process}</li>
          <li className="rounded-sm bg-secondary px-2.5 py-1">{coffee.variety}</li>
          <li className="rounded-sm bg-secondary px-2.5 py-1">{coffee.altitude}</li>
        </ul>
        <div className="mt-auto pt-8">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ink" size="lg" className="w-full">
                Ver ficha completa<span className="sr-only"> de {coffee.name}</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[90vh] overflow-y-auto bg-background sm:max-w-lg">
              <DialogHeader>
                <p className="eyebrow text-gold-ink">{coffee.country} · {coffee.format} · {coffee.presentation}</p>
                <DialogTitle className="font-display text-4xl font-medium">{coffee.name}</DialogTitle>
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

