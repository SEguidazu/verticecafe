import { useEffect, useState } from "react";
import { ArrowRight, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import { Logo } from "@/features/brand/Logo";
import { NAV_ITEMS } from "@/features/site/data/site.content";
import { cn } from "@/lib/utils";

function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string>("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

const ids = NAV_ITEMS.map((n) => n.id);

export function SiteHeader() {
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#092820]/95 text-primary-foreground backdrop-blur">
      <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
        <a
          href="#inicio"
          className="inline-flex min-h-11 items-center gap-2.5 text-primary-foreground"
          aria-label="VÉRTICE, ir al inicio"
        >
          <Logo imgClassName="h-11 w-14 rounded-sm object-cover object-center" />
          <span className="hidden border-l border-primary-foreground/35 pl-3 sm:flex sm:flex-col sm:leading-none">
            <span className="font-display text-xl font-semibold tracking-[0.16em]">VÉRTICE</span>
            <span className="mt-1 text-[0.52rem] font-semibold tracking-[0.22em] text-primary-foreground/75">
              CAFÉ DE ESPECIALIDAD
            </span>
          </span>
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "true" : undefined}
                  className={cn(
                    "inline-flex min-h-11 items-center px-3 text-sm transition-colors hover:text-foreground",
                    active === item.id
                      ? "text-primary-foreground underline decoration-gold-light decoration-2 underline-offset-8"
                      : "text-primary-foreground/70",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contacto"
          className="hidden min-h-11 items-center gap-2 rounded-md bg-[#f1d099] px-4 text-xs font-bold uppercase tracking-wide text-[#1f130c] transition hover:bg-[#f7deb0] xl:inline-flex"
        >
          Contacto comercial <ArrowRight className="size-4" aria-hidden="true" />
        </a>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm text-primary-foreground xl:hidden"
              aria-label="Abrir menú de navegación"
            >
              <Menu className="size-6" aria-hidden="true" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background">
            <SheetTitle className="font-display text-2xl">Menú</SheetTitle>
            <SheetDescription className="sr-only">
              Navegación por las secciones del sitio
            </SheetDescription>
            <nav aria-label="Principal móvil" className="mt-6">
              <ul className="flex flex-col">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      aria-current={active === item.id ? "true" : undefined}
                      className={cn(
                        "flex min-h-12 items-center border-b border-border font-display text-2xl",
                        active === item.id ? "text-gold-ink" : "text-foreground",
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-8 flex min-h-12 items-center justify-center gap-2 bg-primary px-4 text-sm font-bold uppercase tracking-wide text-primary-foreground"
            >
              Contacto comercial <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
