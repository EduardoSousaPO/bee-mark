import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/validations/lead";
import { createAdminClient } from "@/lib/supabase/admin";
import type { LeadInsert } from "@/types/database";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = leadSchema.safeParse(body);
    if (!parsed.success) {
      const first = parsed.error.errors[0];
      const message = first ? `${first.path.join(".")}: ${first.message}` : "Dados inválidos";
      return NextResponse.json({ message }, { status: 400 });
    }

    const data = parsed.data;
    const insert: LeadInsert = {
      name: data.name,
      company_name: data.company_name || null,
      segment: data.segment || null,
      whatsapp: data.whatsapp,
      email: data.email,
      monthly_revenue_range: data.monthly_revenue_range || null,
      main_bottleneck: data.main_bottleneck || null,
      service_interest: data.service_interest || null,
      message: data.message || null,
      lead_source: data.lead_source || "website",
      consent_lgpd: data.consent_lgpd,
      status: "new",
    };

    const supabase = createAdminClient();
    const { error } = await supabase.from("leads").insert(insert);

    if (error) {
      console.error("[leads] insert error:", error.message);
      return NextResponse.json(
        { message: "Erro ao salvar. Tente novamente." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[leads] unexpected error:", e);
    return NextResponse.json(
      { message: "Erro inesperado." },
      { status: 500 }
    );
  }
}
