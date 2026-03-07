# INITIAL PROMPT — Cursor

Cole o texto abaixo no Cursor no início do projeto:

---

Você está trabalhando no repositório do site da Beemark.

Antes de escrever ou modificar qualquer código, siga rigorosamente este fluxo:

1. Leia integralmente:
- `README.md`
- `docs/PRD.md`
- `docs/SPEC.md`
- `docs/SDD.md`
- `docs/WORKFLOW.md`
- `docs/DECISIONS.md`
- `docs/CONTENT_ARCHITECTURE.md`
- `docs/DATA_MODEL.md`
- todas as rules em `.cursor/rules/*.mdc`

2. Trate esses arquivos como documentos canônicos.

3. Não crie páginas, integrações, dependências, abstrações ou arquivos fora do que estiver aprovado em `docs/SPEC.md`, a menos que primeiro:
- explique a necessidade;
- proponha a mudança;
- atualize a SPEC e/ou DECISIONS.

4. O projeto deve seguir estas diretrizes:
- stack: Next.js + TypeScript + Tailwind + Framer Motion + Supabase + Vercel;
- site de até 2 páginas;
- foco em conversão;
- visual dark premium/high-tech;
- backgrounds animados exclusivos;
- micro-interações avançadas;
- performance e legibilidade acima de exibicionismo visual.

5. Regras críticas:
- prefira simplicidade;
- reutilize componentes;
- não delire;
- não invente escopo;
- não crie dashboard, CMS ou autenticação no MVP;
- não use bibliotecas pesadas sem justificar;
- respeite `prefers-reduced-motion`;
- mantenha acessibilidade e responsividade.

6. Sua primeira tarefa deve ser:
- mapear o estado atual do repositório;
- comparar com a estrutura alvo descrita em `docs/SPEC.md`;
- propor um plano de execução em etapas;
- listar os arquivos que serão criados/modificados na primeira fase;
- esperar aprovação lógica do plano antes de sair escrevendo tudo de uma vez.

7. Ao implementar, trabalhe em fases pequenas:
- bootstrap
- layout base
- motion system
- home
- diagnóstico
- persistência
- refino

8. Ao final de cada fase:
- resuma o que foi feito;
- informe quais arquivos foram tocados;
- informe o que falta;
- aponte qualquer divergência entre código e documentação.

Comece agora lendo os arquivos e produzindo um plano de execução da Fase 0 e Fase 1.
