import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SITE } from "@/features/site/data/site.content";
import { SectionHeading } from "@/features/site/components/SectionHeading";
import { validateContact, type ContactErrors, type ContactValues } from "@/features/contact/contact.schema";

const EMPTY: ContactValues = { name: "", email: "", subject: "", message: "" };
const FIELDS: { key: keyof ContactValues; label: string; type?: string; autoComplete?: string }[] = [
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
    <section id="contacto" aria-labelledby="contacto-title" className="bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <SectionHeading id="contacto-title" eyebrow="Contacto" title="Conversemos." intro="Consultas generales o comerciales." />
          <address className="mt-10 space-y-4 not-italic">
            <p>
              <span className="eyebrow block text-muted-foreground">Email</span>
              <a href={`mailto:${SITE.email}`} className="inline-flex min-h-11 items-center text-lg underline decoration-accent underline-offset-4">
                {SITE.email}
              </a>
            </p>
            <p>
              <span className="eyebrow block text-muted-foreground">Redes</span>
              {SITE.instagramUrl ? (
                <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-lg underline decoration-accent underline-offset-4">
                  Instagram<span className="sr-only"> (se abre en una pestaña nueva)</span>
                </a>
              ) : (
                <span className="inline-flex min-h-11 items-center text-lg text-muted-foreground">{SITE.instagramHandle}</span>
              )}
            </p>
          </address>
        </div>

        <form noValidate onSubmit={onSubmit} aria-describedby="contact-note" className="space-y-6">
          <p id="contact-note" className="border-l-2 border-accent bg-background px-4 py-3 text-sm">
            El envío del formulario estará disponible próximamente. Mientras tanto, escribinos a {SITE.email}.
          </p>
          {FIELDS.map((f) => (
            <div key={f.key} className="space-y-2">
              <Label htmlFor={`contact-${f.key}`}>{f.label} <span aria-hidden="true">*</span></Label>
              <Input {...fieldProps(f.key)} type={f.type ?? "text"} autoComplete={f.autoComplete} required onChange={(e) => set(f.key, e.target.value)} />
              {errors[f.key] && <p id={`contact-${f.key}-error`} className="text-sm text-destructive">{errors[f.key]}</p>}
            </div>
          ))}
          <div className="space-y-2">
            <Label htmlFor="contact-message">Mensaje <span aria-hidden="true">*</span></Label>
            <Textarea {...fieldProps("message")} rows={6} required onChange={(e) => set("message", e.target.value)} />
            {errors.message && <p id="contact-message-error" className="text-sm text-destructive">{errors.message}</p>}
          </div>
          <Button type="submit" variant="ink" size="lg">Validar mensaje</Button>
          <div role="status" aria-live="polite" className="text-sm">
            {validated && (
              <p className="bg-background px-4 py-3">
                Los datos son válidos, pero el mensaje <strong>no fue enviado</strong>: el envío estará disponible próximamente. Podés escribirnos a {SITE.email}.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

