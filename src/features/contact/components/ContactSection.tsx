import { useState, type FormEvent } from "react";
import { ArrowRight, AtSign, Instagram, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SITE } from "@/features/site/data/site.content";
import { SectionHeading } from "@/features/site/components/SectionHeading";
import {
  validateContact,
  type ContactErrors,
  type ContactValues,
} from "@/features/contact/contact.schema";

const EMPTY: ContactValues = { name: "", email: "", subject: "", message: "" };
const FIELDS: { key: keyof ContactValues; label: string; type?: string; autoComplete?: string }[] =
  [
    { key: "name", label: "Nombre", autoComplete: "name" },
    { key: "email", label: "Email", type: "email", autoComplete: "email" },
    { key: "subject", label: "Asunto" },
  ];

export function ContactSection() {
  const [values, setValues] = useState<ContactValues>(EMPTY);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [validated, setValidated] = useState(false);

  const set = (k: keyof ContactValues, v: string) => {
    setValues((s) => ({ ...s, [k]: v }));
    setValidated(false);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validateContact(values);
    setErrors(errs);
    const first = Object.keys(errs)[0];
    if (first) {
      document.getElementById(`contact-${first}`)?.focus();
      setValidated(false);
    } else {
      setValidated(true);
    }
  };

  const fieldProps = (k: keyof ContactValues) => ({
    id: `contact-${k}`,
    name: k,
    value: values[k],
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `contact-${k}-error` : undefined,
    className: "min-h-12 rounded-sm bg-card text-base",
  });

  return (
    <section id="contacto" aria-labelledby="contacto-title" className="bg-[#f4ecdf]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[.72fr_1.28fr]">
        <div className="flex flex-col justify-between py-2">
          <SectionHeading
            id="contacto-title"
            eyebrow="Contacto comercial"
            title="Hablemos de tu proyecto."
            intro="Contanos sobre tu propuesta gastronómica y nos pondremos en contacto a la brevedad."
          />
          <address className="mt-10 grid gap-3 not-italic">
            <a
              href={`mailto:${SITE.email}`}
              className="group flex min-h-14 items-center gap-4 border border-border bg-background px-4 transition hover:border-gold-ink"
            >
              <span className="grid size-9 place-items-center rounded-full bg-secondary text-gold-ink">
                <Mail className="size-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs text-muted-foreground">Correo electrónico</span>
                <span className="text-sm font-semibold">{SITE.email}</span>
              </span>
              <ArrowRight
                className="ml-auto size-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            {SITE.instagramUrl ? (
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-14 items-center gap-4 border border-border bg-background px-4 transition hover:border-gold-ink"
              >
                <span className="grid size-9 place-items-center rounded-full bg-secondary text-gold-ink">
                  <Instagram className="size-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs text-muted-foreground">Instagram</span>
                  <span className="text-sm font-semibold">{SITE.instagramHandle}</span>
                </span>
                <ArrowRight
                  className="ml-auto size-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
                <span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
            ) : null}
          </address>
          <div className="mt-10 border-l-2 border-gold-ink pl-5">
            <AtSign className="size-6 text-gold-ink" aria-hidden="true" />
            <p className="mt-3 text-xl font-medium">Sumá VÉRTICE a tu propuesta gastronómica.</p>
          </div>
        </div>

        <form
          noValidate
          onSubmit={onSubmit}
          aria-describedby="contact-note"
          className="border border-border bg-background p-6 shadow-[0_12px_28px_rgba(54,38,17,.08)] sm:p-8"
        >
          <p
            id="contact-note"
            className="mb-7 border-l-2 border-accent bg-secondary/45 px-4 py-3 text-sm"
          >
            El envío del formulario aún no está habilitado. Podés validarlo aquí y luego escribirnos
            a{" "}
            <a href={`mailto:${SITE.email}`} className="font-semibold underline">
              {SITE.email}
            </a>
            .
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {FIELDS.map((f) => (
              <div
                key={f.key}
                className={f.key === "subject" ? "space-y-2 sm:col-span-2" : "space-y-2"}
              >
                <Label htmlFor={`contact-${f.key}`}>
                  {f.label} <span aria-hidden="true">*</span>
                </Label>
                <Input
                  {...fieldProps(f.key)}
                  type={f.type ?? "text"}
                  autoComplete={f.autoComplete}
                  required
                  onChange={(e) => set(f.key, e.target.value)}
                />
                {errors[f.key] && (
                  <p id={`contact-${f.key}-error`} className="text-sm text-destructive">
                    {errors[f.key]}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-message">
              Mensaje <span aria-hidden="true">*</span>
            </Label>
            <Textarea
              {...fieldProps("message")}
              rows={6}
              required
              onChange={(e) => set("message", e.target.value)}
            />
            {errors.message && (
              <p id="contact-message-error" className="text-sm text-destructive">
                {errors.message}
              </p>
            )}
          </div>
          <Button type="submit" variant="ink" size="lg" className="mt-6 w-full">
            Validar consulta <Send className="size-4" aria-hidden="true" />
          </Button>
          <div role="status" aria-live="polite" className="text-sm">
            {validated && (
              <p className="bg-background px-4 py-3">
                Los datos son válidos, pero el mensaje <strong>no fue enviado</strong>: el envío
                estará disponible próximamente. Podés escribirnos a {SITE.email}.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
