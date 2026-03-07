# WORKFLOW — Fluxo operacional do projeto

## Fluxo mestre

```txt
INÍCIO
  ↓
PESQUISA
  ↓
PRD
  ↓
SPEC
  ↓
IMPLEMENTAÇÃO
  ↓
TESTAR / VALIDAR
  ↓
ATUALIZAR DOCS
  ↓
FIM
```

---

## 1. Pesquisa

### O que fazer
- mapear estrutura atual do repo;
- ler `docs/PRD.md`, `docs/SPEC.md`, `docs/SDD.md`;
- ler `.cursor/rules/*.mdc`;
- localizar componentes reutilizáveis;
- verificar o impacto da mudança;
- buscar docs oficiais das libs necessárias.

### Entregável da pesquisa
- lista dos arquivos envolvidos;
- dependências necessárias;
- riscos;
- dúvidas;
- proposta simples de execução.

---

## 2. PRD

### O que deve entrar
- objetivo;
- problema;
- escopo;
- não-escopo;
- critérios de aceite;
- riscos;
- impacto na experiência.

### Perguntas obrigatórias
- por que isso existe?
- quem usa?
- o que exatamente deve acontecer?
- o que não deve acontecer?

---

## 3. SPEC

### O que deve entrar
- lista de arquivos CREATE / MODIFY;
- ordem de execução;
- dependências;
- validações;
- limites.

### Perguntas obrigatórias
- quais arquivos serão tocados?
- por que esses arquivos?
- que sequência reduz risco?
- o que será explicitamente evitado?

---

## 4. Implementação

### Regras
- executar a SPEC na ordem;
- não abrir escopo;
- manter componentes pequenos;
- evitar abstração cedo demais;
- usar motion com propósito;
- preservar performance.

---

## 5. Testar / Validar

### Checklist mínimo
- `npm run build`
- lint
- revisar home em desktop
- revisar home em mobile
- revisar página de diagnóstico
- testar envio de lead
- revisar estados de erro/sucesso
- revisar reduced motion
- revisar contraste/foco

---

## 6. Atualizar docs

### Atualizar quando necessário
- `docs/DECISIONS.md`
- `docs/PRD.md`
- `docs/SPEC.md`

### Exemplo
Se uma seção nova foi adicionada porque melhorou a narrativa:
- registrar essa decisão;
- atualizar a SPEC;
- garantir que o PRD reflita a nova estrutura.

---

## 7. Workflow por futura feature

Use o arquivo `docs/FEATURE_TEMPLATE.md` para novas evoluções, como:
- chatbot/IA pública;
- mini CRM interno;
- dashboard;
- integrações;
- blog/cases;
- tracking mais avançado.

---

## 8. Regra de ouro
**Não codar no improviso.**
