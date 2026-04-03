---
name: novo-conteudo
description: Cria conteúdo educativo sobre IA/automação para LinkedIn + Notion. Input: tema. Output: ângulos para ICP, outline, página Notion criada, 3 copies LinkedIn.
---

# Skill: Criação de Conteúdo — Pipeline LinkedIn + Notion

## Contexto do ICP (sempre em mente)

Público-alvo: donos e gestores de PME brasileira (clínicas, imobiliárias, escolas/cursos, financeiras pequenas, serviços locais).
- Faturamento: R$ 80k–400k/mês, 5–40 funcionários
- Canal crítico: WhatsApp
- Dores: resposta lenta, lead perdido, follow-up inconsistente, cobrança manual
- Linguagem que funciona: resultado operacional (tempo, receita, custo, escala)
- Nunca: jargão de IA, linguagem de tech, termos como "LLM", "token", "fine-tuning"

## Antes de começar

Leia `projects/criacao-de-conteudo/memoria-editorial.md` para incorporar feedbacks de performance anteriores nas suas sugestões. Se o arquivo estiver vazio, continue normalmente sem mencionar isso.

## Fluxo (siga sempre nessa ordem)

### Etapa 1 — Ângulos para o ICP

Dado o tema fornecido, gere **3 opções de ângulo**. Para cada uma:
- Nome do ângulo (ex: "Como não perder lead por demora no atendimento")
- Qual dor do ICP resolve (específico)
- Qual o ganho percebido em linguagem operacional (sem jargão)
- Exemplo de nicho onde aplica melhor (clínica, imobiliária, escola...)
- Nível de atratividade: Alto / Médio (justifique com base na memoria-editorial.md se houver dados)

**Apresente as 3 opções e aguarde Eduardo escolher antes de continuar.** Se nenhum ângulo servir, peça mais detalhes sobre o tema e gere 3 novos ângulos.

### Etapa 2 — Outline

Com o ângulo escolhido, gere o outline:
- 5 a 7 seções com título + 2 bullets do que vai conter cada uma
- A primeira seção deve estabelecer o problema (identificação com o ICP)
- Deve haver pelo menos 1 seção com template/checklist copiável
- A última seção é sempre o CTA

**Apresente o outline e aguarde aprovação antes de continuar.** Se Eduardo quiser ajustar alguma seção, aplique a mudança específica sem regenerar o outline inteiro.

### Etapa 3 — Geração completa

Com outline aprovado, gere em sequência:

#### 3a. Página Notion

Estrutura obrigatória (nesta ordem):
- Callout de abertura: hook em 1 linha + tempo de leitura estimado
- Linha divisória
- Seção "O problema que este guia resolve" (2-3 parágrafos, linguagem do ICP)
- Índice numerado
- Seções do outline com:
  - Explicações práticas (não teóricas)
  - Exemplos reais ou hipotéticos do nicho identificado
  - Callouts para pontos de atenção e dicas práticas
  - Template/checklist em callout copiável onde couber
- CTA final: Eduardo Salles, Vektoz, link para reunião cal.com/vektoz-ed/bate-papo

Tom: direto, sem enrolação, frases curtas, verbo no início quando possível. Sem emojis excessivos. Sem palavras de guru. Resultado antes de conceito.

#### 3b. 3 variações de copy para LinkedIn

Cada variação usa o formato:
- **Hook** (1 linha — deve parar o scroll)
- **Problema** (2-3 linhas — o ICP precisa se reconhecer)
- **Virada** (1-2 linhas — o que muda com a solução)
- **Bullets práticos** (3-5 pontos com →)
- **CTA** (1 linha — direcionar para o material Notion ou conversa)

As 3 variações devem ter hooks diferentes: uma baseada em dor, uma em resultado, uma em erro comum.

### Etapa 4 — Criação no Notion

**Antes de criar:** apresente o conteúdo gerado na Etapa 3a e aguarde confirmação de Eduardo para prosseguir.

Use a ferramenta `mcp__claude_ai_Notion__notion-create-pages` para criar a página como subpágina de "Materiais e Tutoriais".

Para encontrar o ID da página pai, use `mcp__claude_ai_Notion__notion-search` com o termo "Materiais e Tutoriais" e selecione o resultado correto.

Se a página pai não existir: interrompa e informe Eduardo que ele precisa criar a página "Materiais e Tutoriais" no Notion antes de continuar.

Se a criação falhar por qualquer motivo: informe o erro e apresente o conteúdo da Etapa 3a no terminal para Eduardo copiar manualmente.

Após criar com sucesso: informe a URL da página criada.
