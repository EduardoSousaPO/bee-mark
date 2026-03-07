# SPEC — Implementação inicial do site Beemark

## 1. Status desta SPEC
- Tipo: **MVP inicial**
- Contexto: **greenfield**
- Escopo: site público de até 2 páginas + persistência de leads
- Método: implementar **somente** o que está listado aqui

---

## 2. Stack aprovada

- Next.js 15+ com App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Supabase
- Vercel

### Dependências opcionais e controladas
- GSAP: apenas se Framer Motion não resolver um caso específico (aplicado em `FlowSection` com `ScrollTrigger`)
- clsx/cva: para composição de classes e variantes
- zod: para validação de formulário
- react-hook-form: para formulário, se realmente simplificar

---

## 3. Estrutura alvo do projeto

```txt
/
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ diagnostico/
│  │  └─ page.tsx
│  └─ api/
│     └─ leads/
│        └─ route.ts
├─ components/
│  ├─ layout/
│  │  ├─ SiteHeader.tsx
│  │  └─ SiteFooter.tsx
│  ├─ sections/
│  │  ├─ HeroSection.tsx
│  │  ├─ ProblemSection.tsx
│  │  ├─ ServicesSection.tsx
│  │  ├─ FlowSection.tsx
│  │  ├─ DifferentialsSection.tsx
│  │  ├─ TechSection.tsx
│  │  ├─ CredibilitySection.tsx
│  │  └─ FinalCTASection.tsx
│  ├─ ui/
│  │  ├─ Button.tsx
│  │  ├─ Section.tsx
│  │  ├─ AnimatedBackground.tsx
│  │  ├─ HypnoWebGLBackground.tsx
│  │  ├─ MathCanvasBackground.tsx
│  │  ├─ GlowCard.tsx
│  │  ├─ Reveal.tsx
│  │  ├─ MagneticButton.tsx
│  │  └─ Field.tsx
│  └─ forms/
│     └─ DiagnosticForm.tsx
├─ lib/
│  ├─ supabase/
│  │  ├─ client.ts
│  │  └─ server.ts
│  ├─ validations/
│  │  └─ lead.ts
│  ├─ constants/
│  │  ├─ site.ts
│  │  └─ brand.ts
│  └─ utils/
│     └─ cn.ts
├─ types/
│  └─ lead.ts
├─ public/
│  └─ ...
├─ supabase/
│  └─ migrations/
│     └─ 0001_beemark_leads.sql
├─ .env.example
└─ ...
```

---

## 4. CREATE / MODIFY detalhado

## Fase 0 — Bootstrap
### CREATE
- `app/`
- `components/`
- `lib/`
- `types/`
- `supabase/migrations/`
- `.env.example`

### MODIFY
- `package.json`
- `tailwind.config.*`
- `postcss.config.*`
- `tsconfig.json`

### Objetivo
Subir a base técnica limpa, sem já tentar “resolver tudo”.

---

## Fase 1 — Base do layout e identidade
### CREATE
- `app/layout.tsx`
- `app/globals.css`
- `components/layout/SiteHeader.tsx`
- `components/layout/SiteFooter.tsx`
- `lib/constants/site.ts`
- `lib/constants/brand.ts`
- `components/ui/Button.tsx`
- `components/ui/Section.tsx`
- `components/ui/GlowCard.tsx`

### Objetivo
Criar o esqueleto visual e a base da identidade.

### Não fazer nesta fase
- formulário final
- integrações com Supabase
- animações complexas demais

---

## Fase 2 — Motion system
### CREATE
- `components/ui/AnimatedBackground.tsx`
- `components/ui/Reveal.tsx`
- `components/ui/MagneticButton.tsx`
- `components/ui/HypnoWebGLBackground.tsx`
- `components/ui/MathCanvasBackground.tsx`

### MODIFY
- `app/globals.css`
- componentes da home que precisarem de motion
- `components/sections/HeroSection.tsx`
- `components/sections/TechSection.tsx`
- `components/sections/FlowSection.tsx`
- `components/sections/FinalCTASection.tsx`

### Objetivo
Estabelecer um sistema de motion consistente.

### Regras
- máximo de 1 background animado complexo por viewport dominante;
- ter fallback leve para mobile;
- respeitar `prefers-reduced-motion`.
- Canvas/WebGL apenas nas seções estratégicas (Hero e camada tecnológica).
- manter opacidade baixa para preservar legibilidade da copy e foco no CTA.
- GSAP restrito a uma cena de narrativa (timeline de fluxo), sem uso global.
- na seção tecnológica, usar fluxo progressivo interligado (auto-play + clique + scroll) sem comprometer leitura.
- calibrar intensidade visual por breakpoint (desktop > tablet > mobile) para preservar performance e conversão.

---

## Fase 3 — Home page
### CREATE
- `app/page.tsx`
- `components/sections/HeroSection.tsx`
- `components/sections/ProblemSection.tsx`
- `components/sections/ServicesSection.tsx`
- `components/sections/FlowSection.tsx`
- `components/sections/DifferentialsSection.tsx`
- `components/sections/TechSection.tsx`
- `components/sections/CredibilitySection.tsx`
- `components/sections/FinalCTASection.tsx`

### Objetivo
Subir a home completa com narrativa comercial.

### Regras
- cada seção deve ter função clara;
- evitar texto demais;
- manter CTA recorrente;
- usar animação para reforçar hierarquia.

---

## Fase 4 — Página de diagnóstico
### CREATE
- `app/diagnostico/page.tsx`
- `components/forms/DiagnosticForm.tsx`
- `components/ui/Field.tsx`
- `lib/validations/lead.ts`
- `types/lead.ts`

### Objetivo
Criar a página de conversão com formulário estruturado.

### Regras
- formulário simples;
- sem campos supérfluos;
- validação clara;
- excelente UX em mobile.

---

## Fase 5 — Persistência
### CREATE
- `app/api/leads/route.ts`
- `lib/supabase/client.ts`
- `lib/supabase/server.ts`
- `supabase/migrations/0001_beemark_leads.sql`
- `.env.example`

### Objetivo
Persistir leads com segurança e previsibilidade.

### Regras
- nunca expor segredo no client;
- validar payload antes de gravar;
- registrar origem e timestamp;
- manter schema simples.

---

## Fase 6 — Refino
### MODIFY
- todos os componentes necessários
- metadata
- copy final
- acessibilidade
- performance
- motion budget

### Objetivo
Finalizar com qualidade.

---

## 5. Conteúdo mínimo por seção

## Hero
- headline forte
- subheadline explicando a proposta
- CTA principal
- visual tecnológico com background animado premium

## ProblemSection
- o que normalmente falha no marketing das empresas
- por que leads ruins e operação desconectada são um problema

## ServicesSection
- blocos claros do que a Beemark constrói

## FlowSection
- jornada completa do serviço
- visual ideal: passo a passo animado

## DifferentialsSection
- por que a Beemark é diferente
- integração, personalização, IA, métrica e clareza

## TechSection
- percepção tecnológica
- explicar que a tecnologia não substitui a estratégia, ela organiza e acelera
- destacar com prioridade o agente de IA para pré-venda no WhatsApp, com copy enxuta e orientada a conversão

## CredibilitySection
- estrutura, método, processo, diagnóstico, visão de funil
- se não houver cases públicos, usar “como operamos”

## FinalCTASection
- convite forte para diagnóstico

---

## 6. Página de diagnóstico — conteúdo mínimo

- título claro
- breve explicação do que será avaliado
- formulário
- explicação do próximo passo
- CTA para WhatsApp como fallback

---

## 7. Data contract do lead

Campos mínimos:

- `id`
- `created_at`
- `name`
- `company_name`
- `segment`
- `whatsapp`
- `email`
- `monthly_revenue_range`
- `main_bottleneck`
- `service_interest`
- `message`
- `lead_source`
- `consent_lgpd`
- `status`
- `notes`

`status` inicial:
- `new`

---

## 8. Restrições de implementação

1. Não criar dashboard interno neste momento
2. Não criar autenticação sem necessidade
3. Não adicionar CMS
4. Não adicionar dependência pesada só por estética
5. Não criar páginas além das aprovadas
6. Não mudar escopo sem atualizar PRD e DECISIONS
7. Não inventar integrações externas

---

## 9. Sequência executável

1. bootstrap do projeto
2. tokens visuais e layout base
3. motion system
4. home
5. página diagnóstico
6. api + supabase
7. validação
8. acessibilidade
9. performance
10. deploy

---

## 10. Checklist de validação

### Build
- projeto builda sem erro

### UX
- CTA visível
- scroll agradável
- formulário claro
- estados bem definidos

### Data
- lead salva corretamente
- sem duplicar envios por clique múltiplo
- campos validados

### Acessibilidade
- teclado
- foco
- contraste
- reduced motion

### Performance
- sem travamentos em mobile
- sem animações excessivas

### Consistência
- respeita a marca
- respeita o PRD
- respeita as rules
