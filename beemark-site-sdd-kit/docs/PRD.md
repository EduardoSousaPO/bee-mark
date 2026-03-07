# PRD — Site Beemark

## 1. Visão do produto

A Beemark é uma operação de crescimento que conecta:

- posicionamento de marca;
- identidade visual;
- landing pages;
- campanhas de tráfego pago;
- criativos;
- mensuração de performance;
- IA para qualificação e pré-venda no WhatsApp;
- CRM e banco de dados em nuvem;
- passagem do lead qualificado para o fechamento humano.

O site deve comunicar isso de forma clara, premium e moderna.

---

## 2. Problema que o site resolve

Empresas contratam marketing de forma fragmentada:
- branding separado de tráfego;
- tráfego separado de atendimento;
- atendimento separado de CRM;
- métricas dispersas;
- baixa visibilidade sobre custo, qualidade do lead e gargalos do funil.

A Beemark resolve isso propondo uma operação integrada.

---

## 3. Objetivo de negócio

O site deve:

1. apresentar a Beemark como parceira estratégica e tecnológica;
2. deixar clara a proposta de valor;
3. transmitir sofisticação e competência;
4. converter visitantes em leads qualificados;
5. registrar os leads em Supabase para acompanhamento e futura automação.

---

## 4. Objetivo do usuário

Ao entrar no site, o visitante deve rapidamente entender:

- o que a Beemark faz;
- para quem faz;
- qual problema resolve;
- por que é diferente de uma agência comum;
- como funciona o processo;
- qual é a próxima ação recomendada.

---

## 5. ICP inicial

### ICP principal
Empresas de serviço, negócios locais premium e operações comerciais que dependem de geração constante de leads.

### Segmentos possíveis
- clínicas e profissionais da saúde;
- estética;
- advocacia;
- consultorias;
- empresas B2B;
- negócios locais com ticket médio relevante;
- empresas que já anunciam, mas têm vazamento no funil.

### Perfil de maturidade
- já investem ou pretendem investir em marketing;
- não têm processo comercial bem conectado;
- querem previsibilidade, clareza e personalização;
- valorizam tecnologia, organização e métrica.

---

## 6. Proposta de valor

A Beemark não entrega só peças de marketing.

Ela desenha e opera o fluxo completo:

**posicionamento → presença digital → aquisição → pré-venda e qualificação por IA → CRM → fechamento humano**

---

## 7. Posicionamento verbal

### Frase central
**“Entramos quando o seu marketing falha.”**

### Eixos verbais
- estratégia;
- posicionamento;
- resultado;
- clareza;
- tecnologia;
- integração;
- inteligência operacional.

### O que evitar
- linguagem genérica de agência;
- excesso de jargão publicitário;
- tom infantilizado;
- promessas milagrosas;
- copy agressiva sem substância.

---

## 8. Escopo do MVP

## Incluído
- site com até 2 páginas;
- home com narrativa em scroll;
- página de diagnóstico/contato;
- formulário funcional com persistência em Supabase;
- design dark premium;
- backgrounds animados exclusivos;
- micro-interações avançadas;
- CTA para diagnóstico;
- responsividade total;
- estrutura preparada para evolução futura.

## Não incluído neste MVP
- CRM interno completo com interface administrativa rica;
- autenticação de usuários finais;
- dashboard analítico interno completo;
- automações de WhatsApp prontas;
- agente de IA funcional no front público;
- blog;
- CMS;
- múltiplos idiomas;
- área do cliente;
- integrações com RD, HubSpot, Pipedrive etc.

---

## 9. Arquitetura de informação

## Página 1 — Home
Objetivo: vender a proposta e converter.

### Seções previstas
1. Hero
2. Problema de mercado / dor do cliente
3. O que a Beemark faz
4. Fluxo completo da operação
5. Diferenciais
6. Motion demo / percepção tecnológica
7. Provas ou estrutura de credibilidade
8. CTA final

## Página 2 — Diagnóstico
Objetivo: coletar lead com contexto.

### Blocos previstos
1. Introdução curta
2. Formulário estruturado
3. O que acontece depois
4. CTA secundário para WhatsApp

---

## 10. Requisitos funcionais

### RF-01 — Navegação simples
O site deve ter no máximo 2 páginas principais.

### RF-02 — Scroll guiado
A home deve funcionar com narrativa em scroll fluido.

### RF-03 — Captura de leads
O formulário deve coletar, no mínimo:
- nome;
- empresa;
- segmento;
- WhatsApp;
- e-mail;
- faturamento/faixa opcional;
- principal gargalo;
- serviço de interesse;
- origem;
- consentimento LGPD.

### RF-04 — Persistência
Os leads devem ser enviados e gravados no Supabase.

### RF-05 — Feedback de envio
O usuário deve ver estados claros:
- idle;
- carregando;
- sucesso;
- erro.

### RF-06 — CTA consistente
Deve haver CTA principal recorrente para diagnóstico.

### RF-07 — Responsividade
Experiência completa em desktop e mobile.

### RF-08 — SEO básico
Metadados principais, títulos, descrições e estrutura semântica.

---

## 11. Requisitos visuais e de experiência

### RV-01 — Estética
Dark premium, high-tech, limpa, sofisticada.

### RV-02 — Paleta base
Usar como base:
- amarelo marca;
- branco;
- preto;
- cinzas escuros e médios.

### RV-03 — Motion
O site deve usar motion com propósito narrativo, não ornamental.

### RV-04 — Backgrounds animados exclusivos
Aplicar fundos animados em pontos estratégicos, ligados à ideia de:
- fluxo de dados;
- inteligência;
- conexões;
- atividade do funil;
- energia controlada.

### RV-05 — Micro-interações
Aplicar em:
- botões;
- cards;
- blocos de destaque;
- navegação;
- inputs e estados de formulário.

### RV-06 — Legibilidade
Toda animação deve preservar leitura, hierarquia e foco no CTA.

### RV-07 — Destaque de IA comercial
A seção tecnológica deve destacar com clareza a oferta de agente de IA para pré-venda no WhatsApp, enfatizando:
- atendimento imediato;
- qualificação por estágios;
- follow-up inteligente;
- repasse contextualizado para fechamento humano.

---

## 12. Direção de motion

### Bibliotecas preferenciais
1. **Framer Motion** para maioria das interações
2. **CSS keyframes** para animações leves e repetitivas
3. **GSAP** apenas para cenas específicas e justificadas
4. **Canvas/WebGL** apenas para fundos realmente estratégicos e leves

### Exemplos de motion desejado
- reveal elegante por scroll;
- parallax sutil;
- hover com glow e profundidade;
- gradientes animados discretos;
- linhas, grids, partículas ou ondas muito controladas;
- motion progressivo da jornada “marketing → IA → CRM → vendas”.

### O que evitar
- excesso de bounce;
- efeitos “gamer”;
- ruído visual;
- partículas demais;
- transições lentas demais;
- degradação de performance.

---

## 13. Requisitos não funcionais

### RNF-01 — Performance
- LCP e INP devem permanecer saudáveis;
- evitar bibliotecas pesadas sem necessidade;
- respeitar mobile.

### RNF-02 — Acessibilidade
- contraste adequado;
- foco visível;
- `prefers-reduced-motion`;
- labels e semântica adequadas.

### RNF-03 — Manutenibilidade
- componentes reutilizáveis;
- separação clara entre layout, conteúdo, motion e dados.

### RNF-04 — Clareza de escopo
Somente criar os arquivos aprovados em `SPEC.md`.

---

## 14. Métricas de sucesso do MVP

### Métricas de produto
- formulário funcionando sem erro;
- dados persistidos corretamente;
- experiência responsiva;
- lighthouse aceitável.

### Métricas de negócio
- taxa de clique no CTA;
- taxa de envio do formulário;
- qualidade percebida dos leads;
- clareza da proposta em testes qualitativos.

---

## 15. Premissas

- A primeira versão será um site institucional-comercial enxuto.
- O objetivo não é demonstrar tudo tecnicamente, e sim vender bem a lógica da Beemark.
- O CRM interno pode começar apenas no banco de dados.
- A IA pode ser apresentada como parte da oferta, mesmo sem interface pública funcional neste MVP.

---

## 16. Riscos

- excesso de animação prejudicar performance;
- excesso de informação prejudicar clareza;
- prometer funcionalidades não implementadas visualmente como se já estivessem operacionais;
- arquitetura crescer cedo demais.

---

## 17. Critérios de aceite

O MVP será considerado pronto quando:
1. a home apresentar claramente a proposta da Beemark;
2. a página de diagnóstico estiver funcional;
3. os leads forem gravados no Supabase;
4. o visual parecer premium, coerente e tecnológico;
5. as animações reforçarem a mensagem;
6. a estrutura estiver pronta para crescer sem retrabalho grande.
