import { Logo } from "@/features/brand/Logo";
import { NAV_ITEMS, SITE } from "@/features/site/data/site.content";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-16 md:flex-row md:items-start md:justify-between md:px-8">
        <div>
          <Logo className="text-primary-foreground" imgClassName="h-12" />
          <p className="mt-4 text-sm text-primary-foreground/75">Café de especialidad · Argentina</p>
          <p className="mt-1 text-sm text-gold-light">{SITE.domain}</p>
        </div>
        <nav aria-label="Secundaria">
          <ul className="grid grid-cols-2 gap-x-10 sm:grid-cols-3">
            {NAV_ITEMS.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="inline-flex min-h-11 items-center text-sm text-primary-foreground/80 hover:text-primary-foreground">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="border-t border-primary-foreground/15 py-6 text-center text-xs text-primary-foreground/70">
        © {new Date().getFullYear()} VÉRTICE. Las imágenes son ilustrativas.
      </p>
    </footer>
  );
}

