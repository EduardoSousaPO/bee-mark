# SDD — Spec-Driven Development para o site Beemark

## 1. Objetivo
Este repositório segue **Spec-Driven Development**.  
Isso significa que nenhuma mudança relevante deve começar direto no código.

A ordem correta é:

1. pesquisa
2. PRD
3. SPEC
4. implementação
5. validação
6. atualização da documentação

---

## 2. Documentos canônicos do repositório

Os seguintes arquivos são a fonte oficial de verdade:

- `docs/PRD.md`
- `docs/SPEC.md`
- `docs/SDD.md`
- `docs/WORKFLOW.md`
- `docs/DECISIONS.md`
- `.cursor/rules/*.mdc`

Quando houver conflito:
1. PRD define o **porquê** e o **o quê**
2. SPEC define **como executar**
3. rules definem **limites e comportamento do agente**
4. DECISIONS registra exceções e escolhas

---

## 3. Regra principal
**Nenhuma feature relevante deve ser implementada sem passar por PRD e SPEC.**

---

## 4. Processo oficial por feature

## Etapa A — Pesquisa
Antes de editar arquivos:
- mapear a base do projeto;
- identificar arquivos já existentes;
- localizar padrões reutilizáveis;
- checar regras em `.cursor/rules/`;
- consultar docs oficiais de libs se necessário;
- registrar dúvidas e decisões.

### Resultado esperado
Um entendimento claro do estado atual.

---

## Etapa B — Atualizar ou criar PRD
O PRD deve responder:
- qual problema será resolvido;
- qual objetivo de negócio;
- qual objetivo do usuário;
- o que entra;
- o que não entra;
- riscos;
- critérios de aceite.

### Regra
Se a mudança mexer em escopo, UX, integração, arquitetura, dados ou fluxo, o PRD deve ser tocado.

---

## Etapa C — Atualizar ou criar SPEC
A SPEC deve responder:
- quais arquivos serão criados;
- quais arquivos serão modificados;
- em que ordem;
- quais limites;
- quais validações serão feitas.

### Regra
Sem lista de arquivos, não existe autorização de implementação.

---

## Etapa D — Implementação
A implementação deve:
- seguir a SPEC;
- criar/modificar apenas os arquivos listados;
- manter o código simples;
- evitar abstrações prematuras;
- respeitar a marca e o escopo;
- manter performance e acessibilidade.

---

## Etapa E — Validação
Antes de considerar pronto:
- build
- lint
- testes possíveis
- revisão visual
- responsividade
- a11y
- persistência de dados
- revisão contra PRD

---

## Etapa F — Fechamento documental
Após concluir:
- atualizar `docs/DECISIONS.md` se houve decisão relevante;
- atualizar PRD/SPEC se o resultado final mudou algo importante;
- remover divergências entre código e documentação.

---

## 5. O que exige atualização de PRD/SPEC

Atualize PRD/SPEC antes de codar quando houver:
- nova página;
- novo fluxo;
- nova integração;
- mudança grande de copy;
- alteração do modelo de dados;
- nova biblioteca importante;
- mudança da arquitetura;
- mudança do visual sistêmico;
- mudança de posicionamento.

---

## 6. O que pode ser feito sem abrir grande nova SPEC

Mudanças muito pequenas e locais, como:
- correção textual pontual;
- bug visual isolado;
- ajuste de espaçamento;
- correção de typo;
- pequeno refactor sem impacto de comportamento.

Mesmo assim, o agente deve registrar a lógica no próprio contexto da tarefa.

---

## 7. Proibições

- Não criar arquivos fora do escopo sem necessidade real
- Não duplicar componentes
- Não mudar naming sem motivo
- Não introduzir dependências pesadas por impulso
- Não “melhorar” o projeto inventando features
- Não reescrever arquitetura sem registrar decisão

---

## 8. Padrão de decisão

Quando houver dúvida entre 2 opções:
1. escolher a mais simples;
2. escolher a mais legível;
3. escolher a mais coerente com o PRD;
4. escolher a que gere menos acoplamento.

---

## 9. Política de documentação viva

Este repositório deve continuar pequeno, limpo e compreensível.

A documentação deve ser:
- curta o suficiente para ser usada;
- completa o suficiente para guiar;
- atualizada o suficiente para não mentir.

---

## 10. Definition of done

Uma tarefa só está pronta quando:
- respeita PRD/SPEC;
- código funciona;
- build passa;
- não quebra mobile;
- não quebra a experiência;
- documentação não ficou desatualizada.
