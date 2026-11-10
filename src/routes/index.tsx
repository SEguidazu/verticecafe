import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/features/site/components/SiteHeader";
import { Hero } from "@/features/site/components/Hero";
import { Essence } from "@/features/site/components/Essence";
import { ReadingGuide } from "@/features/site/components/ReadingGuide";
import { CatalogSection } from "@/features/catalog/components/CatalogSection";
import { OriginToCup } from "@/features/site/components/OriginToCup";
import { Professionals } from "@/features/site/components/Professionals";
import { ContactSection } from "@/features/contact/components/ContactSection";
import { SiteFooter } from "@/features/site/components/SiteFooter";

const TITLE = "VÉRTICE — Café de especialidad argentino | El origen nos define";
const DESC =
  "VÉRTICE, marca argentina independiente de café de especialidad. Cafés en grano seleccionados en origen, con trazabilidad y perfil sensorial claro.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_AR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#contenido" className="sr-only z-50 bg-background px-4 py-3 focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="contenido">
        <Hero />
        <Essence />
        <ReadingGuide />
        <CatalogSection />
        <OriginToCup />
        <Professionals />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}

