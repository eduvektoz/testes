---
name: pesquisa-temas
description: Use when Eduardo precisa de temas novos para posts LinkedIn da Vektoz. Pesquisa em três camadas (dores permanentes do ICP + novidades do ecossistema de ferramentas + tendências LinkedIn), aplica filtro de empatia pelo olhar do ICP, e sugere 6-10 temas prontos para usar em /post-linkedin.
---

# Pesquisa de Temas LinkedIn

## Overview

Gerar 6-10 sugestões de temas para posts LinkedIn + iscas (Vektoz / Eduardo). Os temas devem resolver dores reais do ICP — gestores e donos de PME brasileira com problemas no comercial — e ter deliverable concreto imaginável.

**Regra de ouro**: se o tema não tiver uma isca prática e direta, não entra.

---

## Pré-voo

Antes de pesquisar, ler:

1. `projects/criacao-de-conteudo/backlog-temas.md` — extrair todos os temas com `[POSTADO]` para exclusão
2. `projects/criacao-de-conteudo/memoria-editorial.md` — identificar o que está funcionando no momento

---

## Camada 1 — Dores Permanentes (sem busca externa)

Gerar 3-4 ângulos frescos sobre dores conhecidas do ICP que **ainda não foram cobertos** no backlog.

Dores a explorar:
- Vendedor não preenche CRM / pipeline bagunçado
- Lead chegando no WhatsApp sem qualificação
- Follow-up esquecido / nenhuma previsibilidade de fechamento
- Agenda manual / no-show sem confirmação automática
- Proposta demorada / vendedor sem autonomia para responder
- Cobrança manual / inadimplência sem régua automatizada
- Relatório de vendas feito na mão

**Critério**: o ângulo deve ser suficientemente específico para gerar um deliverable concreto (template, prompt, automação, checklist).

---

## Camada 2 — Novidades do Ecossistema

WebSearch (Firecrawl se disponível, senão WebSearch puro — a skill não trava sem créditos).

Buscar updates recentes de ferramentas que o ICP já usa:
- **CRMs**: RD Station, Kommo, Pipedrive
- **Automação**: N8N, Make.com
- **Canal principal**: WhatsApp Business API

Filtro obrigatório (aplicar antes de incluir qualquer tema):
- Incluir apenas se criar oportunidade de **integração via N8N** — não de configuração nativa dentro da ferramenta
- Novidades de WhatsApp Business AI ou Flows nativos só entram se o ângulo for "como integrar via automação", nunca "ative dentro do WhatsApp e pronto"
- Ignorar features enterprise, configuração standalone ou recursos que não exijam integração externa

Queries de referência:
- `"RD Station novidades 2026 IA"`
- `"N8N atualização 2026"`
- `"WhatsApp Business API Brasil 2026"`

---

## Camada 3 — Tendências LinkedIn

WebSearch com `site:linkedin.com` para capturar posts públicos indexados pelo Google — sem login, sem risco de shadowban.

Queries de referência:
- `site:linkedin.com "automação" "CRM" "PME" 2026`
- `site:linkedin.com "N8N" "automação comercial" 2026`
- `site:linkedin.com "WhatsApp" "automação" "vendas" 2026`
- `site:linkedin.com "agente IA" "vendas" 2026`

Extrair de cada resultado:
- Hook / primeiras linhas do post
- Tema central
- Ângulo usado (mecanismo, prova, dor)
- Data (se disponível)

Usar para: identificar o que o mercado está escrevendo, quais ângulos estão saturados, onde há espaço para diferenciação.

**Não disponível via este método**: contagem de likes/comentários — não usar engajamento como critério de seleção.

---

## Filtro ICP

Aplicar em **todos** os candidatos antes do output final. Para cada tema, avaliar:

1. "Se eu fosse um gestor de PME vendo esse post — pararia o scroll?"
2. "Esse tema resolve uma dor que já sinto mas não sei nomear?"
3. "O material prometido seria algo que eu realmente quero acessar agora?"

Descartar se não passar em pelo menos 2 de 3.

---

## Output (no chat, 6-10 temas)

```
## Tema X: [TÍTULO DIRETO — máx 8 palavras]
Dor central: [Frase específica — a dor do ICP]
Por que agora: [Por que relevante neste momento]
Ângulo: Mecanismo (ferramenta + capacidades) OU Prova (case + número real)
Isca potencial: [O que entregar como material gratuito]
Keyword CTA: [Palavra que o ICP comentaria para receber o material]
Filtro ICP: [Avaliação direta — clicaria? Qual dor latente resolve?]
Fonte: Camada 1 / Camada 2 - [ferramenta] / Camada 3
```

Após apresentar todos os temas:
> "Quais temas quer adicionar ao backlog? (Ex: 1, 3, 5 ou 'todos')"

---

## Backlog Update

Para cada tema aprovado por Eduardo, adicionar ao final de `projects/criacao-de-conteudo/backlog-temas.md`:

```
[YYYY-MM-DD] TEMA: [nome] | Camada X | [resumo em 1 linha] | [BACKLOG]
```

---

## Regras

- Nunca sugerir tema com mesmo ângulo de um `[POSTADO]` — verificar backlog antes
- Temas `[BACKLOG]` existentes podem inspirar variações, mas não copiar ângulo idêntico
- Mínimo 1 tema de cada camada no output final
- ICP nunca citado pelo segmento no tema (não "para clínicas") — usar descrição da dor
- Todo tema deve ter um deliverable concreto imaginável antes de entrar no output
- Nunca usar jargão de IA com o ICP: "LLM", "token", "fine-tuning", "modelo"
- A entrega da Vektoz é feita via N8N — nunca sugerir temas cujo ângulo implique configuração nativa dentro de WhatsApp, RD Station ou qualquer outra ferramenta fechada
- O output do tema não deve sugerir autossuficiência do lead. Descrever a dor e o deliverable possível — não prometer que o lead faz tudo sozinho
