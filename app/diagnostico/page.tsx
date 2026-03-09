import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { DiagnosticForm } from "@/components/forms/DiagnosticForm";

export const metadata: Metadata = {
  title: "Solicitar diagnóstico estratégico",
  description:
    "Solicite um diagnóstico do seu funil de marketing. Conte seu cenário e receba uma análise da Beemark.",
  alternates: {
    canonical: "/diagnostico",
  },
  openGraph: {
    title: "Solicitar diagnóstico estratégico | Beemark",
    url: "/diagnostico",
    description:
      "Conte seu negócio e seu principal gargalo. Avaliamos e retornamos com os próximos passos.",
  },
};

export default function DiagnosticoPage() {
  return (
    <main className="min-h-screen">
      <Section id="diagnostico" className="px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-bm-yellow/70">
            Diagnóstico
          </p>
          <h1 className="mt-3 font-display text-3xl uppercase leading-tight tracking-wide text-bm-white sm:text-4xl lg:text-5xl">
            Solicitar{" "}
            <span className="text-bm-yellow">diagnóstico estratégico</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-bm-grayLight/80">
            Conte seu negócio, seu principal gargalo e o que mais te interessa.
            Avaliamos e retornamos com os próximos passos.
          </p>
          <div className="mt-12">
            <DiagnosticForm />
          </div>
          <p className="mt-10 text-center text-sm text-bm-grayDark">
            Prefere falar direto?{" "}
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bm-yellow transition-colors hover:text-bm-yellow/80 hover:underline"
            >
              WhatsApp
            </a>
          </p>
        </div>
      </Section>
    </main>
  );
}
