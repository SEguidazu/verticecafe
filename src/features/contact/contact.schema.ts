import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Ingresá tu nombre.").max(100, "El nombre debe tener menos de 100 caracteres."),
  email: z.string().trim().min(1, "Ingresá tu email.").email("Ingresá un email válido.").max(255, "El email es demasiado largo."),
  subject: z.string().trim().min(1, "Ingresá un asunto.").max(150, "El asunto debe tener menos de 150 caracteres."),
  message: z.string().trim().min(10, "El mensaje debe tener al menos 10 caracteres.").max(2000, "El mensaje debe tener menos de 2000 caracteres."),
});

export type ContactValues = z.infer<typeof contactSchema>;
export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

export function validateContact(values: ContactValues): ContactErrors {
  const r = contactSchema.safeParse(values);
  if (r.success) return {};
  const errors: ContactErrors = {};
  for (const issue of r.error.issues) {
    const key = issue.path[0] as keyof ContactValues;
    if (!errors[key]) errors[key] = issue.message;
  }
  return errors;
}

