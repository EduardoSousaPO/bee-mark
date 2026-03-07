import { z } from "zod";

const phoneRegex = /^[\d\s()+-\s]+$/;

export const leadSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(200),
  company_name: z.string().max(200).optional().or(z.literal("")),
  segment: z.string().max(100).optional().or(z.literal("")),
  whatsapp: z
    .string()
    .min(10, "WhatsApp inválido")
    .max(20)
    .regex(phoneRegex, "Use apenas números e símbolos de telefone"),
  email: z.string().email("E-mail inválido"),
  monthly_revenue_range: z.string().max(50).optional().or(z.literal("")),
  main_bottleneck: z.string().max(200).optional().or(z.literal("")),
  service_interest: z.string().max(200).optional().or(z.literal("")),
  message: z.string().max(2000).optional().or(z.literal("")),
  lead_source: z.string().default("website"),
  consent_lgpd: z.literal(true, {
    errorMap: () => ({ message: "É necessário aceitar o uso dos dados." }),
  }),
});

export type LeadInput = z.infer<typeof leadSchema>;

/** Form state allows consent_lgpd to be false until submitted */
export type LeadFormState = Omit<LeadInput, "consent_lgpd"> & { consent_lgpd: boolean };
