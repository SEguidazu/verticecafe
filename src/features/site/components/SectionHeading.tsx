import { cn } from "@/lib/utils";

interface Props {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
  className?: string;
}

export function SectionHeading({ id, eyebrow, title, intro, tone = "light", className }: Props) {
  return (
    <header className={cn("max-w-2xl", className)}>
      <p className={cn("eyebrow", tone === "dark" ? "text-gold-light" : "text-gold-ink")}>{eyebrow}</p>
      <h2 id={id} className="mt-4 text-4xl leading-tight md:text-5xl">
        {title}
      </h2>
      {intro && (
        <p className={cn("mt-5 text-base leading-relaxed md:text-lg", tone === "dark" ? "text-primary-foreground/80" : "text-muted-foreground")}>
          {intro}
        </p>
      )}
    </header>
  );
}

