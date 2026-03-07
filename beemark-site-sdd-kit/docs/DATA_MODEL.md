# DATA MODEL — Leads Beemark

## Objetivo
Ter um modelo simples, claro e extensível para o MVP.

---

## Tabela principal
`public.leads`

## Campos
- `id` uuid primary key
- `created_at` timestamptz default now()
- `name` text not null
- `company_name` text
- `segment` text
- `whatsapp` text not null
- `email` text not null
- `monthly_revenue_range` text
- `main_bottleneck` text
- `service_interest` text
- `message` text
- `lead_source` text default 'website'
- `consent_lgpd` boolean not null default false
- `status` text not null default 'new'
- `notes` text

---

## Status iniciais permitidos
- `new`
- `contacted`
- `qualified`
- `won`
- `lost`

No MVP, só `new` precisa ser usado automaticamente.

---

## Regras de negócio
1. Sem consentimento LGPD, não salvar
2. E-mail e WhatsApp devem ser minimamente validados
3. Registrar origem da captura
4. Registrar timestamp
5. Não tentar “score” automático ainda

---

## Evoluções futuras possíveis
- score do lead
- origem detalhada da campanha
- UTM source/medium/campaign
- stage do CRM
- atribuição para vendedor
- histórico de contatos
- integração com WhatsApp/IA
