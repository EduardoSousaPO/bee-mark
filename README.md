# Beemark — Site

Site institucional da **Beemark**: operação integrada de crescimento (posicionamento, tráfego, IA, CRM).

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Supabase** (leads)
- **Vercel** (deploy)

## Como rodar

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha com as credenciais do seu projeto Supabase:

- `NEXT_PUBLIC_SUPABASE_URL` — URL do projeto (Dashboard Supabase → Settings → API)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — chave anon (pública)
- `SUPABASE_SERVICE_ROLE_KEY` — chave service role (somente servidor; nunca exponha no client)

A tabela `leads` deve existir no Supabase (migração em `supabase/migrations/0001_beemark_leads.sql` ou via MCP Supabase).

## Estrutura

- `app/` — rotas e layout
- `components/` — layout, seções, UI, formulários
- `lib/` — Supabase, validações (zod), constantes, utils
- `types/` — tipos TypeScript e tipos gerados do banco

## Documentação do projeto

- Especificação e PRD: `beemark-site-sdd-kit/docs/`
- Regras do agente: `.cursor/rules/`

## Repositório

- GitHub: [github.com/EduardoSousaPO/bee-mark](https://github.com/EduardoSousaPO/bee-mark)
