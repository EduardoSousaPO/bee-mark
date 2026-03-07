# BeeMark Site SDD Kit

Kit inicial de documentação para desenvolver o site da **Beemark** com **Cursor + Supabase + Vercel**, seguindo **SDD (Spec-Driven Development)**.

## Objetivo
Evitar escopo nebuloso, improviso técnico e mudanças desorganizadas.  
Este kit existe para que o Cursor:

1. entenda o negócio;
2. respeite a marca;
3. implemente apenas o que foi especificado;
4. mantenha o projeto simples, elegante e performático.

## Estrutura

```txt
beemark-site-sdd-kit/
├─ README.md
├─ docs/
│  ├─ PRD.md
│  ├─ SPEC.md
│  ├─ SDD.md
│  ├─ WORKFLOW.md
│  ├─ DECISIONS.md
│  ├─ CONTENT_ARCHITECTURE.md
│  ├─ DATA_MODEL.md
│  ├─ FEATURE_TEMPLATE.md
│  └─ INITIAL_PROMPT_CURSOR.md
├─ .cursor/
│  └─ rules/
│     ├─ 00-project-context.mdc
│     ├─ 01-sdd-process.mdc
│     ├─ 02-brand-design-motion.mdc
│     ├─ 03-copy-conversion.mdc
│     ├─ 04-code-architecture.mdc
│     ├─ 05-supabase-data.mdc
│     └─ 06-quality-validation.mdc
└─ supabase/
   └─ migrations/
      └─ 0001_beemark_leads.sql
```

## Ordem recomendada de uso

1. Leia `docs/PRD.md`
2. Leia `docs/SPEC.md`
3. Leia `docs/SDD.md`
4. Leia `docs/WORKFLOW.md`
5. Leia todas as rules em `.cursor/rules/`
6. Use `docs/INITIAL_PROMPT_CURSOR.md` como prompt inicial no Cursor
7. Só então inicie a implementação

## Stack alvo
- **Next.js 15+**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** para motion principal
- **GSAP** apenas se houver necessidade real e localizada
- **Supabase** para leads e diagnóstico
- **Vercel** para deploy

## Observação importante
Este kit assume um repositório **greenfield** ou em fase muito inicial.  
Se você já tiver código criado, o Cursor deve primeiro mapear a base atual e atualizar `PRD.md`, `SPEC.md` e `DECISIONS.md` antes de modificar a aplicação.

## Resultado esperado
Um site de até **2 páginas**, com scroll fluido, estética premium, dark/high-tech, backgrounds animados exclusivos, micro-interações avançadas e foco em:

- posicionamento;
- explicação clara da oferta;
- geração de leads;
- registro estruturado em banco;
- preparação para evolução futura com IA e CRM.
