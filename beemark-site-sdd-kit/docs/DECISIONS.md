# DECISIONS — Registro de decisões

## Como usar
Registrar aqui decisões arquiteturais, visuais ou de escopo que alteram o projeto de forma relevante.

---

## 2026-03-07 — Fundação do projeto
### Decisão
Criar o site da Beemark como um projeto de até 2 páginas, com foco em narrativa comercial, conversão e preparação para evolução futura.

### Motivo
Manter escopo enxuto, velocidade de execução e clareza de proposta.

### Implicações
- sem CMS no MVP
- sem dashboard completo no MVP
- sem autenticação no MVP
- Supabase apenas para persistência de leads inicialmente

---

## 2026-03-07 — Escolha de stack
### Decisão
Usar Next.js + TypeScript + Tailwind + Framer Motion + Supabase + Vercel.

### Motivo
Boa produtividade, ótimo deploy, compatibilidade com Vercel e boa base para site premium com motion.

### Implicações
- motion principal em Framer Motion
- GSAP só se necessário
- estrutura App Router
- formulário e API integrados ao Supabase

---

## 2026-03-07 — Direção visual
### Decisão
Adotar visual dark premium, high-tech, com backgrounds animados exclusivos e micro-interações avançadas.

### Motivo
Posicionar a Beemark como operação moderna, tecnológica e premium.

### Implicações
- motion com propósito
- glow controlado
- performance deve ser monitorada
- evitar exagero visual

---

## 2026-03-07 — Bootstrap e Fase 1 na raiz do repo
### Decisão
Criar o app Next.js na raiz do repositório `bee-mark` (não dentro de `beemark-site-sdd-kit`). Fase 0 (bootstrap) e Fase 1 (layout base e identidade) implementadas.

### Motivo
O `create-next-app` não roda em diretório com conteúdo; a raiz já contém `.cursor`, `beemark-site-sdd-kit` e `pré-projeto`. Estrutura alvo da SPEC foi criada na raiz para um único projeto deployável.

### Implicações
- Documentos canônicos permanecem em `beemark-site-sdd-kit/docs/`
- Código em `app/`, `components/`, `lib/`, `types/`, `supabase/migrations/` na raiz
- Migração Supabase copiada para `supabase/migrations/0001_beemark_leads.sql`
- Tokens de marca (beemark_brand_manual_ai.md) aplicados em Tailwind e globals.css

---

## 2026-03-07 — Banco de dados via MCP Supabase
### Decisão
Usar o MCP do Supabase (project-0-bee-mark-supabase) para operações de banco: migração da tabela `leads` foi aplicada via `apply_migration`; tipos TypeScript gerados via `generate_typescript_types` e salvos em `types/database.ts`.

### Motivo
Projeto já conectado ao Supabase; MCP garante que o schema no cloud esteja alinhado ao código.

### Implicações
- Migração `create_leads_table` aplicada no projeto Supabase (aoaavlnbfmrmcovwloff)
- Inserção de leads na API usa `createAdminClient()` com `SUPABASE_SERVICE_ROLE_KEY`
- Chaves e URL devem estar em `.env.local` (ver README)

---

## 2026-03-07 — Fase 6 Refino
### Decisão
Implementada Fase 6 da SPEC: metadata completa (Open Graph, Twitter, keywords), skip link de acessibilidade, estilos de foco visível (`:focus-visible`), formulário com `aria-busy` no loading, e `.env.example` com `NEXT_PUBLIC_SITE_URL` opcional.

### Motivo
Atender checklist de validação (acessibilidade, UX, consistência) e preparar para deploy.

### Implicações
- Skip link “Pular para o conteúdo” visível apenas no foco (teclado)
- Metadata com template de título para páginas filhas
- Motion já respeitava `prefers-reduced-motion` (Reveal, AnimatedBackground, globals)

---

## 2026-03-07 — Motion avançado com Canvas/WebGL
### Decisão
Adicionar dois backgrounds estratégicos: `HypnoWebGLBackground` no Hero e `MathCanvasBackground` na seção de tecnologia, mantendo `AnimatedBackground` como fallback para mobile, ausência de suporte gráfico e `prefers-reduced-motion`.

### Motivo
Elevar percepção premium/high-tech com efeitos matemáticos e artísticos mais autorais sem comprometer clareza comercial, performance e acessibilidade.

### Implicações
- Sem dependências novas (GSAP continua opcional e não foi necessário nesta etapa)
- Apenas 1 fundo complexo por viewport dominante
- `Reveal` ajustado para reduzir motion de forma real quando o usuário prefere menos animação
- Hero e Tech agora têm camadas visuais mais fortes, mantendo CTA e legibilidade como prioridade

---

## 2026-03-07 — Fluxo com GSAP + TechSection orientada a IA comercial
### Decisão
Aplicar GSAP (`ScrollTrigger`) exclusivamente na `FlowSection` para reforçar narrativa de processo (progress line + entrada dos cards) e reestruturar a `TechSection` em layout bento interativo com foco principal na oferta de agente de IA para pré-venda no WhatsApp.

### Motivo
Atender a necessidade de maior sofisticação visual e interatividade sem transformar o site em playground. O objetivo foi aumentar percepção tecnológica e clareza comercial da proposta de IA com copy curta.

### Implicações
- GSAP foi adicionado como dependência controlada e usado de forma localizada
- `FlowSection` ganhou roteiro visual mais forte com scripts de scroll
- `TechSection` passou a enfatizar atendimento imediato, qualificação por estágios, follow-up e handoff para humano
- `FinalCTASection` recebeu reforço curto da camada de IA + CRM

---

## 2026-03-07 — TechSection em fluxo interligado e progressivo
### Decisão
Evoluir a `TechSection` para um fluxo visual interligado (cards conectados por linhas animadas), com progressão automática e por scroll (GSAP) e interação por clique, mantendo responsividade e copy enxuta.

### Motivo
Materializar melhor a lógica do agente de IA como processo comercial contínuo, aumentando retenção visual e compreensão da jornada sem adicionar excesso de texto.

### Implicações
- Estrutura de layout mais complexa (grid/flex) na camada tecnológica
- Conectores animados por CSS keyframes (`dataDash`) para percepção de fluxo
- Estado ativo sincronizado entre auto-play, scroll e clique do usuário

---

## 2026-03-07 — Calibração de intensidade por breakpoint
### Decisão
Aplicar perfis de intensidade por largura de tela para WebGL (Hero), Canvas (Tech) e progressão temporal das etapas da TechSection, mantendo efeito premium no desktop e reduzindo ruído visual em telas menores.

### Motivo
Preservar impacto visual hipnótico sem sacrificar leitura, foco em CTA e estabilidade de performance em tablet/mobile.

### Implicações
- WebGL com uniforms dinâmicos (`intensity`, `speed`, `noise`) e DPR adaptativo
- Canvas com densidade, velocidade, rastro e vida das partículas ajustados por breakpoint
- Auto-play da jornada de IA com intervalo adaptativo por largura da viewport

---

## 2026-03-07 — TechSection simplificada para linha do tempo clean
### Decisão
Reduzir densidade de texto e blocos na TechSection, adotando uma linha do tempo clean com pontos conectados e progressão visual (desktop horizontal, mobile vertical), mantendo interatividade por scroll, clique e hover.

### Motivo
Priorizar leitura rápida, percepção de fluxo e clareza comercial sem poluição visual.

### Implicações
- Menos copy na camada tecnológica
- Estrutura visual centrada em etapas conectadas
- Fluxo progressivo preservado com animação mais sutil

---

## 2026-03-07 — Efeitos ativos em mobile e tablet com perfil leve
### Decisão
Manter os efeitos de fundo e interações também em mobile/tablet, usando perfis de baixa carga (FPS, DPR e intensidade adaptativos) e fallback animado somente em casos críticos (dispositivo muito pequeno, reduced motion ou ausência de suporte).

### Motivo
Garantir consistência visual da experiência entre desktop, tablet e mobile sem travamento ou perda de legibilidade.

### Implicações
- Hero WebGL ativo na maior parte dos dispositivos móveis/tablets
- Tech Canvas ativo na maior parte dos dispositivos móveis/tablets
- Parallax com amplitude reduzida em telas menores

---

## 2026-03-07 — Correção de corte no mobile e fallback visual do Hero
### Decisão
Ajustar responsividade do header e do bloco de tags do Hero para eliminar corte horizontal no mobile, além de trocar fallback do Hero para `gradient` quando WebGL não estiver disponível.

### Motivo
Garantir integridade visual da primeira dobra em iPhone/Android e manter percepção de fundo animado mesmo em fallback.

### Implicações
- Header com CTA reduzido em telas pequenas (`Diagnóstico`)
- Linha de tags com quebra controlada e sem clipping
- Fallback do Hero mais perceptível que grid em telas pequenas

---

## 2026-03-09 — Reestruturação comercial da landing para prova, ICP e oferta
### Decisão
Reorganizar a narrativa da home para progressão comercial mais clara: impacto pós-hero, autoridade estrutural, prova de resultados, ICP explícito, oferta principal (`Diagnóstico Beemark`), bloco institucional do fundador e fechamento com CTA forte.

### Motivo
A estrutura anterior comunicava bem processo e tecnologia, mas deixava menos explícito:
- resultado concreto;
- para quem a operação é;
- o que exatamente está sendo comprado.

### Implicações
- Nova ordem de seções na home para reduzir fricção de entendimento
- Inclusão de casos reais (automotivo e consultoria de investimentos) para reforço de credibilidade
- CTA principal padronizado para “diagnóstico estratégico”
- Metadata com canonical explícito para `/` e `/diagnostico`
- Copy mais orientada a conversão e clareza comercial (marketing + IA + qualificação + processo comercial)

---

## Template de nova decisão

## AAAA-MM-DD — título curto
### Decisão
...

### Motivo
...

### Implicações
...
