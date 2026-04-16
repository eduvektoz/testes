---
name: isca-linkedin
description: Cria o conteúdo de isca (lead magnet) prometido no post do LinkedIn. Input: tema + promessa do post. Output: outline aprovado + página Notion criada.
---

# Skill: Isca LinkedIn — Criação de Lead Magnet no Notion

## Contexto do ICP (sempre em mente)

Público-alvo: donos e gestores de PME brasileira (clínicas, imobiliárias, escolas/cursos, financeiras pequenas, serviços locais).
- Faturamento: R$ 80k–400k/mês, 5–40 funcionários
- Canal crítico: WhatsApp
- Dores: resposta lenta, lead perdido, follow-up inconsistente, cobrança manual
- Linguagem que funciona: resultado operacional (tempo, receita, custo, escala)
- Nunca: jargão de IA, linguagem de tech, termos como "LLM", "token", "fine-tuning"

## Identidade Vektoz (aplicar em todo conteúdo gerado)

- Autor: Eduardo Salles, CEO da Vektoz
- Posicionamento: "Ajudo empresários a implementarem IA de forma estratégica e assertiva"
- CTA final obrigatório: cal.com/vektoz-ed/bate-papo
- Tom: direto, sem enrolação, frases curtas, verbo no início quando possível
- Nunca mencionar: Igor Miguel, Lucas, Nexus, Nexusmind, Nexus Mind, Nexus-mind, ou qualquer player concorrente
- Nunca incluir: links de comunidade Discord de terceiros, convites para grupos externos

## Padrão de excelência — aprendido das páginas de referência

Esta skill foi calibrada com base em análise profunda de 5 páginas validadas em produção. Os padrões abaixo são obrigatórios.

### Estrutura de página (ordem exata)

1. **Callout de abertura** com ícone relevante, fundo colorido (brown_bg ou blue_bg), hook em 1 linha + tempo de leitura
   - Exemplo: `Guia passo a passo para [resultado concreto]. Tempo de leitura: X minutos. Sem enrolação.`

2. **Divisória** `---`

3. **Seção "O problema que este guia resolve"** — 2–3 parágrafos curtos, linguagem do ICP
   - Mostre que entende a dor antes de apresentar qualquer solução
   - Use frases como: "Todo dono de [negócio] já perdeu [X] por causa de [Y]."
   - Nomeie o ciclo de falha que se repete: `→ situação → consequência → resultado ruim`

4. **Divisória** `---`

5. **Índice numerado** — lista todas as seções antes do conteúdo

6. **Seções do guia** com subtítulos numerados `## 1)`, `## 2)`, etc.

7. **CTA final** — padrão Vektoz (ver abaixo)

### Padrão de CTA final (obrigatório)

```
## Quer implementar [X] por completo em sua operação?

Eu sou Eduardo Salles, fundador da Vektoz e ajudo empresários a implementarem IA de
forma estratégica e assertiva em suas operações.

Todo mês, aceito um pequeno grupo de empresários que querem potencializar sua companhia,
reduzir custos e aumentar o ROI.

Se tiver interesse: agende uma reunião de 30 minutos comigo →

[Marcador — cole o link e escolha "Criar marcador"]
https://cal.com/vektoz-ed/bate-papo
```

> **Nota pós-criação:** O MCP não suporta criação de marcadores via API. Após criar a página no Notion, adicione manualmente: cole `https://cal.com/vektoz-ed/bate-papo` no final da página → selecione **"Criar marcador"**. Aparece o card com nome, descrição e foto do Eduardo.

### Elementos obrigatórios dentro das seções

- **Callouts** para pontos de atenção, dicas e viradas de chave:
  - `💡` para insight chave
  - `⚠️` para alertas e pré-requisitos
  - `✅` para confirmações e resultados
  - `📌` para regras de ouro
  - Fundo: `brown_bg` para dicas, `green_bg` para resultados, `gray_bg` para templates

- **Tabelas** para comparações antes/depois, opções, fluxos com etapas:
  - Antes vs. Depois
  - Prioridade + Perfil + Ação
  - Etapa + O que acontece

- **Checklists** `- [ ]` para ações que o lead vai executar — mínimo 1 por guia

- **Blocos de código** para prompts, JSON, configurações técnicas — sempre com rótulo claro

- **Citações em destaque** `>` para mensagens modelo, exemplos de abordagem, mensagens de WhatsApp

- **Números reais**: use dados específicos quando possível. "MILHARES de oportunidades" ou "11.245 leads" > "muitos leads"

### Padrões de tom observados

- Frases curtas. Máximo 15 palavras.
- Resultado antes de conceito: "O agente faz X → o resultado é Y" — não "Y acontece porque X"
- Ciclo de falha nomeado explicitamente antes da solução: `→ etapa 1 → consequência → resultado ruim`
- Tabela "antes vs depois" sempre que houver transformação relevante
- Variações por perfil/nicho quando a solução é adaptável (clínica, imobiliária, escola)
- Resumo no final da seção principal em bloco de código simples: `1. Faça X / 2. Faça Y`

### O que NÃO copiar das referências

- Capa, logo, foto de perfil
- Seções "quem sou eu" com marca de terceiros
- Links de cal.com de outros players
- Convites para Discord ou comunidades externas
- Menção de "Nexus Mind" ou qualquer outro player

---

## Regras aprendidas em produção

Erros reais cometidos e corrigidos. Seguir sempre.

### Coerência com o post do LinkedIn

O ângulo da isca deve ser **100% coerente com o ângulo do post**. Se o post fala sobre "não gastar dinheiro com designer", a isca entrega exatamente isso — não um ângulo diferente sobre "como a ferramenta funciona".

Na Etapa 1, os ângulos propostos devem refletir e aprofundar o que o post prometeu — não inventar direções novas. Se o ângulo já está claro no post, diga isso e proponha variações dentro do mesmo tema.

### Versões de ferramentas externas

Nunca citar versão específica de ferramenta (Claude, Gemini, etc.) sem pesquisar antes com WebSearch. Versões desatualizam rápido e comprometem a credibilidade do guia. Se não pesquisou: use "versão mais recente disponível".

### Conteúdo: sempre em português

Todo o conteúdo da isca deve estar em português. Exceção: prompts destinados a ferramentas de geração de imagem (como Gemini/Nano Banana 2) funcionam melhor em inglês — nesse caso, instruir o Claude a gerar o prompt em inglês e deixar isso explícito no guia.

### Prompts para outras IAs dentro da isca

Quando a isca ensina o lead a usar uma IA (ex: Claude + Gemini para design), o prompt ensinado precisa de:
- **Persona sênior específica** — não apenas "atue como X", mas "X com Y anos de experiência em Z"
- **Campo de texto visível na imagem** — se o lead quer texto na peça, precisa informar explicitamente. Sem esse campo, o modelo deixa espaço mas não gera o texto.
- **Instrução de identidade visual** — o prompt deve pedir ao modelo que use a imagem de referência enviada (logo, peça anterior) para manter cores, tipografia e estilo da marca
- **Limite de linhas** — definir máximo (ex: 7 linhas) para o prompt não ficar gigante
- **Idioma do output** — especificar se o output deve ser em inglês (para ferramentas que geram melhor resultado com inglês)

### Template genérico + exemplo preenchido

Nunca usar apenas um exemplo de nicho específico (ex: só clínica). Sempre fornecer:
1. O template genérico com campos em colchetes — funciona para qualquer negócio
2. Um exemplo preenchido com nicho específico — ilustra o uso

### CTA com ponte temática

O CTA final não é genérico. Deve fazer a ponte explícita entre o tema da isca e o que a Vektoz implementa. Estrutura:
1. "Você aprendeu a fazer X com IA"
2. "A mesma lógica se aplica a [outros processos operacionais]"
3. "Isso é o que a Vektoz implementa"
4. Link cal.com

### Placeholder de screenshot

Guias que prometem resultado visual (imagens, peças, outputs de ferramentas) devem incluir um callout `gray_bg` com instrução para Eduardo inserir um print real antes de publicar. Sem prova visual, o guia não converte.

### Autoavaliação antes de apresentar

Antes de entregar o conteúdo final para aprovação: faça uma autoavaliação honesta (nota de 0 a 10, com justificativa). Se identificar pontos fracos, corrija antes de apresentar — não espere o feedback para corrigir o óbvio.

---

## Antes de começar

Leia `projects/criacao-de-conteudo/memoria-editorial.md` para incorporar feedbacks de performance anteriores. Se estiver vazio, continue normalmente sem mencionar isso.

---

## Fluxo (siga sempre nessa ordem)

### Etapa 1 — Ângulos para o ICP

**Atenção:** o ângulo principal já está definido pelo post do LinkedIn. Os ângulos propostos devem ser variações dentro do mesmo tema — não direções novas. Se o ângulo já está claro, diga isso diretamente e confirme antes de continuar.

Dado o tema fornecido, gere **3 opções de ângulo**. Para cada uma:
- Nome do ângulo (ex: "Como não perder lead por demora no atendimento")
- Qual dor do ICP resolve (específico)
- Qual o ganho percebido em linguagem operacional (sem jargão)
- Exemplo de nicho onde aplica melhor (clínica, imobiliária, escola...)
- Nível de atratividade: Alto / Médio (justifique com base na memoria-editorial.md se houver dados)

**Apresente as 3 opções e aguarde Eduardo escolher antes de continuar.**

### Etapa 2 — Outline

Com o ângulo escolhido, gere o outline:
- 5 a 7 seções com título + 2 bullets do que vai conter cada uma
- A primeira seção deve estabelecer o problema (identificação com o ICP)
- Deve haver pelo menos 1 seção com template/checklist copiável
- A última seção é sempre o CTA

**Apresente o outline e aguarde aprovação antes de continuar.** Se Eduardo quiser ajustar alguma seção, aplique a mudança específica sem regenerar o outline inteiro.

### Etapa 3 — Geração da página Notion

Com outline aprovado, gere o conteúdo completo seguindo o padrão de excelência acima.

Tom: direto, sem enrolação, frases curtas, verbo no início quando possível. Sem emojis excessivos. Sem palavras de guru. Resultado antes de conceito.

**Apresente o conteúdo completo no chat e aguarde aprovação de Eduardo antes de criar no Notion.**

### Etapa 4 — Criação no Notion

Após aprovação, use `mcp__claude_ai_Notion__notion-create-pages` para criar a página como subpágina de "Materiais e Tutoriais".

Para encontrar o ID da página pai, use `mcp__claude_ai_Notion__notion-search` com o termo "Materiais e Tutoriais" e selecione o resultado correto.

Se a página pai não existir: interrompa e informe Eduardo que ele precisa criar a página "Materiais e Tutoriais" no Notion antes de continuar.

Se a criação falhar: informe o erro e apresente o conteúdo da Etapa 3 no terminal para Eduardo copiar manualmente.

Após criar com sucesso: informe a URL da página criada.

**Nota pós-criação:** Adicione o link do calendário manualmente no final da página — cole `https://cal.com/vektoz-ed/bate-papo` e escolha **"Criar marcador"**.
