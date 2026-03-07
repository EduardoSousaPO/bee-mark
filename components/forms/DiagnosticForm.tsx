"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Field } from "@/components/ui/Field";
import { leadSchema, type LeadFormState } from "@/lib/validations/lead";

const SEGMENT_OPTIONS = [
  { value: "saude", label: "Saúde / Clínicas" },
  { value: "estetica", label: "Estética" },
  { value: "advocacia", label: "Advocacia" },
  { value: "consultoria", label: "Consultoria" },
  { value: "b2b", label: "B2B" },
  { value: "local", label: "Negócio local" },
  { value: "outro", label: "Outro" },
];

const REVENUE_OPTIONS = [
  { value: "", label: "Prefiro não informar" },
  { value: "ate-50", label: "Até 50k/mês" },
  { value: "50-200", label: "50k a 200k/mês" },
  { value: "200-500", label: "200k a 500k/mês" },
  { value: "acima-500", label: "Acima de 500k/mês" },
];

const BOTTLENECK_OPTIONS = [
  { value: "leads_ruins", label: "Leads ruins ou pouco qualificados" },
  { value: "atendimento_lento", label: "Atendimento lento" },
  { value: "sem_tráfego", label: "Não tenho tráfego pago" },
  { value: "funil_desconectado", label: "Funil desconectado (tráfego, CRM, venda)" },
  { value: "sem_visibilidade", label: "Falta de visibilidade e métricas" },
  { value: "outro", label: "Outro" },
];

const SERVICE_OPTIONS = [
  { value: "posicionamento", label: "Posicionamento e estratégia" },
  { value: "landing", label: "Landing pages e presença digital" },
  { value: "trafego", label: "Tráfego pago e criativos" },
  { value: "ia_crm", label: "IA + CRM e qualificação" },
  { value: "integrado", label: "Operação integrada completa" },
  { value: "diagnostico", label: "Só diagnóstico por agora" },
];

const INITIAL: LeadFormState = {
  name: "",
  company_name: "",
  segment: "",
  whatsapp: "",
  email: "",
  monthly_revenue_range: "",
  main_bottleneck: "",
  service_interest: "",
  message: "",
  lead_source: "website",
  consent_lgpd: false,
};

export function DiagnosticForm() {
  const [form, setForm] = useState<LeadFormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormState, string>>>({});
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const update = (name: keyof LeadFormState, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = leadSchema.safeParse(form);
    if (!parsed.success) {
      const next: Partial<Record<keyof LeadFormState, string>> = {};
      parsed.error.errors.forEach((err) => {
        const key = err.path[0] as keyof LeadFormState;
        if (key && !next[key]) next[key] = err.message;
      });
      setErrors(next);
      return;
    }
    setErrors({});
    setState("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...parsed.data,
          company_name: parsed.data.company_name || null,
          segment: parsed.data.segment || null,
          monthly_revenue_range: parsed.data.monthly_revenue_range || null,
          main_bottleneck: parsed.data.main_bottleneck || null,
          service_interest: parsed.data.service_interest || null,
          message: parsed.data.message || null,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message ?? "Erro ao enviar.");
      }
      setState("success");
      setForm(INITIAL);
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div
        className="rounded-bmMd border border-bm-yellow/50 bg-bm-yellow/10 p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <h3 className="font-display text-xl uppercase text-bm-yellow">
          Enviado com sucesso
        </h3>
        <p className="mt-2 text-bm-grayLight">
          Em breve entraremos em contato pelo WhatsApp ou e-mail informado.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-xl space-y-6"
      noValidate
      aria-busy={state === "loading"}
    >
      <Field
        id="name"
        label="Nome"
        name="name"
        value={form.name}
        onChange={(e) => update("name", e.target.value)}
        error={errors.name}
        required
        autoComplete="name"
      />
      <Field
        id="company_name"
        label="Empresa"
        name="company_name"
        value={form.company_name}
        onChange={(e) => update("company_name", e.target.value)}
        autoComplete="organization"
      />
      <Field
        id="segment"
        label="Segmento"
        name="segment"
        type="text"
        value={form.segment}
        onChange={(e) => update("segment", e.target.value)}
        options={SEGMENT_OPTIONS}
      />
      <Field
        id="whatsapp"
        label="WhatsApp"
        name="whatsapp"
        type="tel"
        value={form.whatsapp}
        onChange={(e) => update("whatsapp", e.target.value)}
        error={errors.whatsapp}
        required
        placeholder="(00) 00000-0000"
        autoComplete="tel"
      />
      <Field
        id="email"
        label="E-mail"
        name="email"
        type="email"
        value={form.email}
        onChange={(e) => update("email", e.target.value)}
        error={errors.email}
        required
        autoComplete="email"
      />
      <Field
        id="monthly_revenue_range"
        label="Faturamento mensal (opcional)"
        name="monthly_revenue_range"
        value={form.monthly_revenue_range}
        onChange={(e) => update("monthly_revenue_range", e.target.value)}
        options={REVENUE_OPTIONS}
      />
      <Field
        id="main_bottleneck"
        label="Principal gargalo hoje"
        name="main_bottleneck"
        value={form.main_bottleneck}
        onChange={(e) => update("main_bottleneck", e.target.value)}
        options={BOTTLENECK_OPTIONS}
      />
      <Field
        id="service_interest"
        label="Serviço de maior interesse"
        name="service_interest"
        value={form.service_interest}
        onChange={(e) => update("service_interest", e.target.value)}
        options={SERVICE_OPTIONS}
      />
      <Field
        id="message"
        label="Mensagem (opcional)"
        name="message"
        type="textarea"
        value={form.message}
        onChange={(e) => update("message", e.target.value)}
        rows={4}
      />
      <Field
        id="consent_lgpd"
        label="Aceito o uso dos meus dados para contato e comunicação da Beemark, em conformidade com a LGPD."
        name="consent_lgpd"
        type="checkbox"
        value={form.consent_lgpd}
        onChange={(e) => update("consent_lgpd", (e.target as HTMLInputElement).checked)}
        error={errors.consent_lgpd}
        required
      />
      {state === "error" && (
        <p className="text-sm text-red-400" role="alert">
          Não foi possível enviar. Tente de novo ou entre em contato pelo WhatsApp.
        </p>
      )}
      <Button
        type="submit"
        variant="primary"
        disabled={state === "loading"}
        className="w-full sm:w-auto"
        aria-label={state === "loading" ? "Enviando..." : "Enviar diagnóstico"}
      >
        {state === "loading" ? "Enviando..." : "Enviar diagnóstico"}
      </Button>
    </form>
  );
}
