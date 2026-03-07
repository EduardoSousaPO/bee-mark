-- Beemark leads table - MVP
create extension if not exists "pgcrypto";

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  company_name text,
  segment text,
  whatsapp text not null,
  email text not null,
  monthly_revenue_range text,
  main_bottleneck text,
  service_interest text,
  message text,
  lead_source text not null default 'website',
  consent_lgpd boolean not null default false,
  status text not null default 'new',
  notes text
);

alter table public.leads enable row level security;

do $$
begin
  if not exists (
    select 1
    from pg_policies
    where schemaname = 'public'
      and tablename = 'leads'
      and policyname = 'service_role_full_access_on_leads'
  ) then
    create policy "service_role_full_access_on_leads"
      on public.leads
      for all
      to service_role
      using (true)
      with check (true);
  end if;
end $$;
