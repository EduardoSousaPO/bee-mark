export type LeadFormPayload = {
  name: string;
  company_name?: string;
  segment?: string;
  whatsapp: string;
  email: string;
  monthly_revenue_range?: string;
  main_bottleneck?: string;
  service_interest?: string;
  message?: string;
  lead_source: string;
  consent_lgpd: boolean;
};

export type LeadFormState = "idle" | "loading" | "success" | "error";
