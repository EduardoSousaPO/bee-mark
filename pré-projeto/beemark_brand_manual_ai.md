# Beemark — Especificação de Marca para Agente de IA que Codifica

> Documento técnico em Markdown, estruturado para orientar com segurança um agente de IA responsável por implementar interfaces, sites, landing pages, criativos e componentes digitais da marca **Beemark**.
>
> **Base principal:** `POSICIONAMENTO DE MARCA.pdf`.
> **Base complementar para aumentar a precisão visual:** `MARCA.pdf`, `LOGOS E MASCOTE.pdf` e `MOCKUPS .pdf`.
>
> Este arquivo separa **fatos observáveis** do material enviado, **inferências visuais de baixa ambiguidade** e **pontos não definidos** que exigem validação humana antes de codificação definitiva.

---

## 1. Objetivo deste documento

Este documento existe para transformar o manual de marca recebido em uma especificação operacional para desenvolvimento.

Ele deve permitir que um agente de IA:

1. implemente interfaces coerentes com a identidade visual da Beemark;
2. evite inventar elementos de branding não aprovados;
3. use cores, tipografia, frases e sinais visuais de forma consistente;
4. saiba o que pode assumir e o que **não** pode assumir;
5. tenha uma base pronta para gerar tokens de design, tema CSS/Tailwind e componentes reutilizáveis.

---

## 2. Confiabilidade da fonte

### 2.1 Fonte primária

A peça principal informa explicitamente os seguintes elementos da identidade da marca:

- paleta de cores: `#FFF002`, `#000000`, `#FFFFFF`, `#C1C1C1`, `#434343`; fileciteturn1file0L1-L15
- nome/elemento “ZIRO”; fileciteturn1file0L2-L2
- frase da marca: “A GENTE ENTRA QUANDO SEU O MARKETING FALHA.”; fileciteturn1file0L3-L6
- fonte textual: “ANTON”; fileciteturn1file0L7-L10
- fonte de título: “BEBAS NEUE”; fileciteturn1file0L10-L13
- identificador social: `@beemarkofc`. fileciteturn1file0L14-L15

### 2.2 Fontes complementares

Os materiais complementares reforçam:

- uso recorrente do slogan “A gente entra quando o marketing falha”; fileciteturn1file3L1-L1
- tríade verbal “ESTRATÉGIA | POSICIONAMENTO | RESULTADO”; fileciteturn1file4L70-L76 fileciteturn1file4L113-L126
- existência de mockups e aplicações em peças digitais e físicas, além do mascote e variações de logo. fileciteturn1file4L4-L10

### 2.3 Observação importante sobre precisão

O material enviado é visual e condensado. Ele **não** contém grid formal, espaçamentos normativos, tamanhos mínimos, área de proteção, regras de animação, design system completo, nem manual técnico de UI. Portanto:

- este documento traduz o que está claramente visível;
- onde houver lacuna, a recomendação será conservadora;
- o agente **não deve inventar** regras rígidas onde o manual não definiu nada.

---

## 3. Essência percebida da marca

## 3.1 Nome da marca

**Beemark**

Representação visual predominante observada:

- palavra em caixa alta;
- alto contraste;
- leitura forte e direta;
- aplicações em amarelo sobre preto e em preto sobre amarelo;
- presença frequente da separação visual “BEE / MARK” em algumas composições. fileciteturn1file4L113-L116

## 3.2 Posicionamento verbal percebido

A comunicação transmite uma marca de:

- correção de marketing falho;
- execução com energia e atitude;
- foco em resultado;
- linguagem provocativa, direta e memorável;
- estética urbana, forte, ousada e contrastante.

## 3.3 Pilares verbais explícitos encontrados

Os mockups reforçam três palavras centrais:

- **Estratégia**
- **Posicionamento**
- **Resultado** fileciteturn1file4L70-L76

Esses três termos devem ser tratados como eixos semânticos prioritários em páginas, seções, cards, títulos e materiais institucionais.

---

## 4. Paleta oficial observada

## 4.1 Cores identificadas

### Primárias

- **Amarelo principal:** `#FFF002`
- **Preto principal:** `#000000`
- **Branco:** `#FFFFFF`
- **Cinza claro:** `#C1C1C1`
- **Cinza escuro:** `#434343` fileciteturn1file0L1-L1

### Variação observada em outro arquivo

Um material complementar mostra um cinza escuro muito próximo, `#414141`, em vez de `#434343`. fileciteturn1file2L6-L6

### Regra operacional segura

Para implementação digital, adotar como **fonte da verdade principal**:

- `#FFF002`
- `#000000`
- `#FFFFFF`
- `#C1C1C1`
- `#434343`

E tratar `#414141` como:

- variante tolerada de mockup;
- cor secundária opcional para superfícies escuras, **somente se houver validação humana**.

## 4.2 Hierarquia de uso recomendada

### Uso dominante

1. **Preto** como base de fundo principal
2. **Amarelo** como cor de impacto
3. **Branco** como cor de respiro/contraste
4. **Cinzas** como apoio e neutralização

### Composições mais seguras

- amarelo sobre preto;
- preto sobre amarelo;
- branco sobre preto;
- preto sobre branco;
- amarelo + preto como combinação principal da marca.

### Composições a evitar

- uso excessivo de cinzas como protagonistas;
- fundos coloridos fora da paleta;
- gradientes sem aprovação;
- combinações suaves/pastel, pois contradizem o contraste da identidade observada.

---

## 5. Tipografia oficial

## 5.1 Fonte de título

**BEBAS NEUE** foi apresentada como fonte de título. fileciteturn1file0L10-L13

### Papel da fonte

Deve ser usada para:

- headlines principais;
- títulos de seções;
- palavras de impacto;
- chamadas curtas;
- labels institucionais fortes;
- assinaturas visuais com pegada de campanha.

### Características visuais percebidas

- condensada;
- alta legibilidade em caixa alta;
- forte presença gráfica;
- adequada para estética bold, urbana e publicitária.

## 5.2 Fonte textual

**ANTON** foi apresentada como fonte textual. fileciteturn1file0L7-L10

### Observação crítica

Do ponto de vista técnico de produto/UI, **Anton não é uma fonte de corpo ideal para grandes blocos de texto**, embora o manual a chame de “fonte textual”. Como o objetivo aqui é dar suporte seguro a um agente de IA que codifica, a regra deve ser:

### Regra segura de implementação

- usar **Anton** em:
  - textos curtos;
  - destaques;
  - botões grandes;
  - números/labels de campanha;
  - frases de alto impacto;
- **não** usar Anton em:
  - parágrafos longos;
  - FAQs extensas;
  - textos legais;
  - blocos de leitura longa.

### Solução conservadora para produto digital

Quando o projeto exigir corpo de texto realmente legível, o agente deve:

1. manter **Bebas Neue** para títulos;
2. usar **Anton** apenas em trechos curtos e promocionais;
3. solicitar aprovação humana para introduzir uma fonte de apoio para corpo de texto, porque isso **não está definido no manual**.

Se não houver aprovação humana e for obrigatório publicar algo funcional, usar a stack de fallback do sistema sem alterar a identidade principal:

```txt
Bebas Neue, sans-serif
Anton, sans-serif
system-ui, Arial, sans-serif
```

Isso preserva a segurança sem fingir que existe uma terceira fonte oficial.

---

## 6. Frases, slogans e linguagem

## 6.1 Frase de marca principal

A frase exibida no material principal é:

**“A GENTE ENTRA QUANDO SEU O MARKETING FALHA.”** fileciteturn1file0L3-L6

## 6.2 Ajuste de linguagem para implementação

Há forte indício de que o texto contém um desvio de redação (“seu o marketing”). Nos outros materiais, o slogan aparece como:

**“A gente entra quando o marketing falha.”** fileciteturn1file3L1-L1 fileciteturn1file4L97-L99

### Regra segura

- considerar como **versão provável e semanticamente correta**:
  - **A gente entra quando o marketing falha.**
- considerar a versão com “seu o” como:
  - texto do arquivo original;
  - potencial erro de digitação/edição;
  - item que deve ser validado por humano antes de uso institucional definitivo.

### Política para o agente

- em interfaces públicas, usar a forma **“A gente entra quando o marketing falha.”**;
- registrar no código/comentários que houve divergência visual entre as peças;
- nunca corrigir silenciosamente outros textos da marca sem sinalizar a revisão.

## 6.3 Tríade institucional complementar

Os mockups mostram repetidamente:

**ESTRATÉGIA | POSICIONAMENTO | RESULTADO** fileciteturn1file4L70-L76

Essa tríade pode ser usada como:

- subtítulo institucional;
- rodapé de hero section;
- faixa de apoio em landing pages;
- tagline secundária;
- assinatura de cards ou seções de serviços.

## 6.4 Tom de voz percebido

Tom recomendado para interfaces e conteúdo:

- direto;
- ousado;
- objetivo;
- confiante;
- provocativo na medida certa;
- focado em resolver falhas e gerar resultado.

Evitar:

- linguagem excessivamente corporativa e fria;
- texto genérico de agência tradicional;
- tom “fofo”, delicado ou minimalista neutro demais;
- excesso de explicação antes do impacto da mensagem.

---

## 7. Logos e sistema visual

## 7.1 Elementos observados

Pelos materiais visuais, a marca aparenta possuir ao menos os seguintes ativos:

1. **Logotipo tipográfico “BEEMARK”** em destaque;
2. **Monograma/assinatura gráfica “BM”** em traço fluido, aplicado em superfícies pretas e materiais físicos;
3. **Variações horizontais em cápsula/placa** com fundo preto ou amarelo;
4. **Composição em duas linhas “BEE / MARK”** em algumas aplicações;
5. **Mascote ZIRO** como ativo de apoio visual.

Esses elementos aparecem visualmente nos arquivos enviados, embora nem todos estejam descritos textualmente. A presença é clara no painel principal do material visual e nos mockups anexos. fileciteturn1file0L1-L15 fileciteturn1file4L105-L116

## 7.2 Regra de uso segura para o agente

Sem arquivo vetorial oficial nem manual técnico de construção, o agente deve seguir esta ordem:

### Para UI e site

Preferir:

1. **logo principal em palavra “BEEMARK”**;
2. **monograma BM** como favicon, watermark, selo ou assinatura;
3. **variações em cápsula** apenas se o arquivo final aprovado estiver disponível.

### Não fazer

- redesenhar o logo manualmente;
- alterar espessura, proporção ou curvatura do monograma;
- aplicar sombras, bevel, glow exagerado ou efeitos 3D sem aprovação;
- criar contornos aleatórios em torno do logo;
- rotacionar ou distorcer o logotipo.

## 7.3 Área de proteção

O manual enviado **não define área de proteção**.

### Regra conservadora provisória

Até aprovação humana, manter espaço mínimo ao redor do logo equivalente a:

- **0.5x da altura do próprio logo** em todas as direções;
- em mobile, nunca encostar logo em borda, imagem ou botão.

Isso é uma regra operacional, não uma regra oficial de branding.

## 7.4 Tamanho mínimo

O material **não define tamanho mínimo**.

### Regra provisória para digital

- logo principal: mínimo de `120px` de largura em desktop e `88px` em mobile;
- monograma isolado: mínimo de `28px` de largura em UI.

Esses valores são apenas técnicos para legibilidade.

---

## 8. Mascote “ZIRO”

## 8.1 Existência do mascote

O nome **ZIRO** aparece explicitamente no manual. fileciteturn1file0L2-L2

Além disso, o painel visual mostra um personagem/mascote associado à Beemark. O mockup sugere um mascote de linguagem urbana e energética.

## 8.2 Papel do mascote

O mascote deve ser entendido como:

- ativo de apoio de branding;
- elemento de diferenciação;
- recurso para campanhas, landing pages e social;
- não necessariamente substituto do logo principal.

## 8.3 Regra de uso segura

O agente pode usar o mascote em:

- hero illustrations;
- seções de destaque;
- cards institucionais;
- páginas de campanha;
- loading/empty state temático, se houver aprovação.

O agente **não deve**:

- redesenhar o mascote do zero sem referência oficial;
- simplificar demais a ponto de descaracterizar;
- alterar paleta do mascote fora das cores da marca;
- transformar o mascote em estilo incompatível com a identidade sem instrução explícita.

## 8.4 Status técnico

Sem SVG, guia de poses ou biblioteca de assets, o mascote deve ser tratado como **asset fechado**. O agente só deve posicioná-lo e escalá-lo, não reinterpretá-lo.

---

## 9. Identidade visual percebida

## 9.1 Direção estética predominante

Pelos materiais, a direção visual é:

- alta energia;
- alto contraste;
- visual agressivo e memorável;
- mistura de street, campanha publicitária e branding de performance;
- uso forte de preto e amarelo;
- sensação de movimento, impacto e atitude.

## 9.2 Formas recorrentes percebidas

- blocos retangulares fortes;
- faixas horizontais;
- cápsulas e placas arredondadas;
- aplicações em superfícies escuras;
- uso de texto como elemento gráfico;
- composições que lembram anúncio, poster e comunicação de ação.

## 9.3 Elementos semânticos adicionais encontrados

No material complementar aparecem frases como:

- “LUZ, CÂMERA... É DISSO QUE SEU NEGÓCIO PRECISA”;
- “AÇÃO!”; fileciteturn1file4L42-L46 fileciteturn1file4L63-L68

Esses elementos indicam uma linguagem de produção, mídia, campanha e execução, coerente com uma marca voltada a marketing e aquisição.

---

## 10. Tradução segura para interface digital

## 10.1 Diretrizes gerais de layout

Para site, landing page ou dashboard institucional, o agente deve priorizar:

- fundos pretos ou muito escuros como base principal;
- seções alternadas com amarelo, branco ou cinza claro como respiro;
- headlines em caixa alta com Bebas Neue;
- CTAs grandes e claros;
- blocos de conteúdo curtos e visuais;
- contraste muito alto entre texto e fundo;
- uso de linhas de apoio, faixas e selos visuais;
- seções com forte hierarquia visual.

## 10.2 Estrutura visual recomendada

### Hero section

Deve conter idealmente:

- logo Beemark;
- headline forte;
- slogan principal;
- subtítulo baseado em “Estratégia | Posicionamento | Resultado”;
- CTA principal;
- eventual uso do mascote ou de shape/assinatura BM.

### Seções internas

Devem privilegiar:

- cards curtos;
- prova visual;
- mockups;
- blocos com números ou benefícios;
- pouco texto corrido;
- visual editorial/publicitário.

### Rodapé

Pode usar:

- `@beemarkofc`; fileciteturn1file0L14-L15
- assinatura em preto/amarelo;
- mini tagline institucional.

---

## 11. Design tokens prontos para implementação

## 11.1 Tokens em JSON

```json
{
  "brand": {
    "name": "Beemark",
    "handle": "@beemarkofc",
    "slogan_primary": "A gente entra quando o marketing falha.",
    "tagline_secondary": [
      "Estratégia",
      "Posicionamento",
      "Resultado"
    ],
    "mascot": "Ziro"
  },
  "colors": {
    "yellow": "#FFF002",
    "black": "#000000",
    "white": "#FFFFFF",
    "gray_light": "#C1C1C1",
    "gray_dark": "#434343"
  },
  "typography": {
    "display": "Bebas Neue, sans-serif",
    "accent": "Anton, sans-serif",
    "body_fallback": "system-ui, Arial, sans-serif"
  }
}
```

## 11.2 Variáveis CSS

```css
:root {
  --bm-yellow: #FFF002;
  --bm-black: #000000;
  --bm-white: #FFFFFF;
  --bm-gray-100: #C1C1C1;
  --bm-gray-900: #434343;

  --bm-font-display: "Bebas Neue", sans-serif;
  --bm-font-accent: "Anton", sans-serif;
  --bm-font-body: system-ui, Arial, sans-serif;

  --bm-radius-sm: 10px;
  --bm-radius-md: 16px;
  --bm-radius-lg: 24px;

  --bm-shadow-soft: 0 10px 30px rgba(0, 0, 0, 0.18);
  --bm-border-strong: 2px solid var(--bm-black);
}
```

## 11.3 Extensão Tailwind sugerida

```ts
export const beemarkTheme = {
  colors: {
    bm: {
      yellow: '#FFF002',
      black: '#000000',
      white: '#FFFFFF',
      grayLight: '#C1C1C1',
      grayDark: '#434343'
    }
  },
  fontFamily: {
    display: ['Bebas Neue', 'sans-serif'],
    accent: ['Anton', 'sans-serif'],
    body: ['system-ui', 'Arial', 'sans-serif']
  },
  borderRadius: {
    bmSm: '10px',
    bmMd: '16px',
    bmLg: '24px'
  }
}
```

> Os tokens de raio e sombra acima **não vieram do manual**; foram adicionados apenas como defaults técnicos neutros para implementação. Eles podem ser alterados pelo time sem ferir a marca, porque não há especificação oficial sobre isso.

---

## 12. Regras práticas para componentes

## 12.1 Botões

### Botão primário

- fundo amarelo `#FFF002`
- texto preto `#000000`
- fonte curta de impacto, preferencialmente Anton ou Bebas Neue
- aparência forte, sem visual “delicado”

### Botão secundário

- fundo preto
- texto branco ou amarelo
- borda amarela ou branca, se necessário

### Evitar

- gradientes multicoloridos;
- botão fantasma excessivamente sutil em contexto principal;
- cantos muito orgânicos ou infantis;
- microtipografia pequena demais.

## 12.2 Cards

- fundos pretos, brancos ou cinza claro;
- títulos curtos e fortes;
- uso econômico de amarelo para destaque;
- bordas visíveis ou contraste de superfície;
- boa separação entre card e fundo.

## 12.3 Seções de destaque

Boas combinações:

- fundo preto + headline amarela;
- fundo amarelo + headline preta;
- fundo branco + selo preto/amarelo;
- bloco escuro com monograma BM em watermark discreto.

## 12.4 Inputs e formulários

Como o manual não define formulários, usar abordagem funcional:

- fundo branco ou cinza claro;
- texto preto;
- foco/outline em amarelo;
- labels curtos e claros;
- CTA final com alto contraste.

---

## 13. Regras para imagens, mockups e peças

## 13.1 Aplicação visual percebida

Os mockups mostram uso da marca em:

- roupas;
- bonés;
- bandeiras e banners;
- papelaria;
- embalagens/caixas;
- posts digitais. fileciteturn1file4L4-L10

## 13.2 Interpretação para produto digital

Isso indica que a marca funciona bem quando:

- aplicada com forte contraste;
- usada em fundos sólidos;
- inserida em superfícies escuras premium;
- apresentada como sistema de campanha, não apenas como logo solto.

## 13.3 Regra para assets de interface

O agente deve preferir:

- mockups em fundo escuro;
- imagens com amarelo da marca preservado;
- composições com sensação de energia e performance;
- tratamento visual consistente com alta nitidez e contraste.

---

## 14. Acessibilidade e legibilidade

Mesmo com estética agressiva, o agente precisa manter legibilidade.

## 14.1 Contraste

Priorizar:

- preto/amarelo;
- preto/branco;
- branco/preto.

## 14.2 Cuidado com amarelo

O amarelo puro pode perder legibilidade em texto muito pequeno sobre branco ou cinzas claros. Portanto:

- não usar amarelo como cor de texto em tamanhos pequenos sobre fundo claro;
- preferir amarelo em fundos pretos ou em elementos grandes;
- para textos corridos, usar preto ou branco.

## 14.3 Corpo de texto

Por segurança de UX:

- textos longos devem usar fallback legível, se aprovados;
- títulos podem seguir o padrão visual mais agressivo;
- sempre priorizar leitura real em mobile.

---

## 15. O que o agente PODE assumir

O agente pode assumir com segurança que:

1. a marca principal é **Beemark**;
2. a paleta central é amarelo/preto com branco e cinzas de apoio; fileciteturn1file0L1-L1
3. **Bebas Neue** é fonte de título; fileciteturn1file0L10-L13
4. **Anton** é uma fonte aprovada pela marca, embora o uso em corpo extenso deva ser cauteloso; fileciteturn1file0L7-L10
5. o slogan principal gira em torno de “A gente entra quando o marketing falha”; fileciteturn1file3L1-L1
6. “Estratégia | Posicionamento | Resultado” é uma assinatura verbal compatível com a marca; fileciteturn1file4L70-L76
7. existe um mascote chamado **Ziro**; fileciteturn1file0L2-L2
8. `@beemarkofc` é um identificador oficial apresentado no material. fileciteturn1file0L14-L15

---

## 16. O que o agente NÃO PODE assumir sem aprovação humana

O agente não pode assumir, sem validação:

1. área de proteção oficial do logo;
2. tamanhos mínimos oficiais;
3. versão vetorial correta de cada variação;
4. grid oficial;
5. sistema de espaçamento oficial;
6. motion language oficial;
7. biblioteca oficial de ícones;
8. terceira fonte oficial para corpo;
9. proporções geométricas do monograma BM;
10. regras oficiais de uso do mascote em diferentes contextos;
11. se `#414141` substitui oficialmente `#434343`;
12. que a frase com “seu o marketing” é a redação final aprovada.

---

## 17. Política de implementação segura para IA

Sempre que este documento for usado por um agente de IA que codifica, aplicar o seguinte protocolo:

### 17.1 Ordem de prioridade

1. seguir os fatos explícitos do manual;
2. seguir as inferências visuais de baixa ambiguidade;
3. usar defaults técnicos conservadores para o que não foi definido;
4. marcar como `TODO: validate with brand owner` tudo que exigir decisão de branding.

### 17.2 Em caso de conflito

Se houver conflito entre estética desejada e material oficial:

- o material oficial vence;
- o agente não deve “melhorar a marca” por conta própria;
- o agente deve reduzir invenção e aumentar fidelidade.

### 17.3 Em caso de texto institucional

Se precisar escrever copy de interface baseada na marca:

- usar frases curtas;
- priorizar impacto;
- enfatizar execução e resultado;
- evitar tom burocrático.

---

## 18. Prompt-base para outro agente de IA usar esta especificação

```txt
Use o arquivo beemark_brand_manual_ai.md como fonte única de verdade para branding.

Regras obrigatórias:
1. Não invente novas cores fora da paleta documentada.
2. Use Bebas Neue para títulos e Anton apenas em textos curtos de destaque.
3. Preserve o tom visual de alto contraste, energia e impacto.
4. Trate Ziro como mascote oficial, mas não redesenhe o personagem sem asset aprovado.
5. Considere “A gente entra quando o marketing falha.” como slogan operacional padrão.
6. Use “Estratégia | Posicionamento | Resultado” como assinatura secundária quando fizer sentido.
7. Tudo que não estiver definido no manual deve ser implementado com defaults técnicos conservadores e marcado para validação humana.
8. Nunca redesenhe o logo ou altere suas proporções.
```

---

## 19. Resumo executivo para desenvolvimento

A Beemark é uma marca de alta energia e alto contraste, centrada em preto e amarelo, com linguagem direta, ousada e orientada a resolver falhas de marketing. Os elementos explicitamente identificados são a paleta `#FFF002`, `#000000`, `#FFFFFF`, `#C1C1C1`, `#434343`, as fontes **Bebas Neue** e **Anton**, o mascote **Ziro**, o identificador `@beemarkofc` e o slogan em torno de **“A gente entra quando o marketing falha.”**. O material complementar reforça o eixo verbal **Estratégia | Posicionamento | Resultado**. O agente de IA deve implementar com alta fidelidade visual, evitar invenções e sinalizar qualquer decisão não definida no manual para validação humana.

---

## 20. Referências utilizadas

- `POSICIONAMENTO DE MARCA.pdf` — fonte principal. fileciteturn1file0L1-L15
- `POSICIONAMENTO DE MARCA.pdf` — variação carregada no histórico do projeto. fileciteturn1file1L1-L26
- `MARCA.pdf` — reforço de paleta complementar. fileciteturn1file2L6-L6
- `LOGOS E MASCOTE.pdf` — reforço do slogan. fileciteturn1file3L1-L1
- `MOCKUPS .pdf` — reforço de aplicações, linguagem e tríade institucional. fileciteturn1file4L4-L10 fileciteturn1file4L70-L76
