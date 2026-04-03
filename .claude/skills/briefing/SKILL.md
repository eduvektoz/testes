---
name: briefing
description: Pesquisa conteúdo relevante de IA/automação dos últimos 7 dias. Filtra pelo ICP da Vektoz. Classifica como candidato a conteúdo ou atualização. Atualiza backlog-temas.md.
---

# Skill: Briefing Semanal de Conteúdo

## Contexto do ICP (filtro de relevância)

Tudo que não for aplicável a donos/gestores de PME brasileira com gargalos operacionais em atendimento, follow-up, cobrança ou escala via WhatsApp é irrelevante para o briefing.

Pergunta filtro: *"Um dono de clínica, imobiliária, escola ou financeira pequena acharia isso útil ou aplicável à sua operação hoje?"*

## Antes de começar

Leia `projects/criacao-de-conteudo/fontes.md` para obter:
- Canais YouTube configurados (se houver)
- Keywords adicionais do mercado de Eduardo

## Execução

### Etapa 1 — YouTube RSS (canais configurados)

Se `fontes.md` não existir ou não tiver canais configurados (apenas comentários HTML ou seção vazia), pule esta etapa e informe ao final.

Para cada canal listado em `fontes.md` (linhas que não são comentários HTML):
1. Construa a URL do feed: `https://www.youtube.com/feeds/videos.xml?channel_id=[ID]`
2. Use WebFetch para buscar o feed XML. Se o fetch falhar (erro de rede, ID inválido), pule este canal e registre na seção "Canais YouTube" do output: "[Nome do Canal] — erro ao buscar feed."
3. Extraia títulos e datas dos últimos 7 dias
4. Aplique o filtro ICP
5. Marque os relevantes

### Etapa 2 — Web search por keywords

Calcule a data de 7 dias atrás com base na data atual (ex: se hoje é 2026-04-03, use `after:2026-03-27`). Substitua `AAAA-MM-DD` pela data calculada em todas as buscas abaixo.

Keywords base:
- `automação WhatsApp PME IA after:AAAA-MM-DD`
- `agente IA atendimento automático after:AAAA-MM-DD`
- `n8n automação pequena empresa after:AAAA-MM-DD`
- `chatbot follow-up CRM Brasil after:AAAA-MM-DD`
- `automação cobrança IA after:AAAA-MM-DD`

Inclua também as keywords adicionais de `fontes.md`.

Para cada busca: extraia os 3 resultados mais relevantes (título + fonte + resumo em 1 linha).

### Etapa 3 — Classificação

Para cada item encontrado, classifique:

- `[CONTEÚDO]` — tem potencial claro de post LinkedIn + material Notion para o ICP
- `[LEITURA]` — relevante para Eduardo se atualizar, mas não tem ângulo óbvio para publicar

Critério: se você consegue enunciar "Como [isso] resolve [dor do ICP] para [nicho específico]" em 1 frase, é `[CONTEÚDO]`.

### Etapa 4 — Output no terminal

Apresente o digest formatado:

```
## Briefing — [data de hoje]

### Candidatos a Conteúdo [CONTEÚDO]
1. [Título] | [Fonte] | [Por que é candidato: qual dor do ICP resolve]
...

### Atualizações [LEITURA]
1. [Título] | [Fonte] | [Resumo 1 linha]
...

### Canais YouTube
[Se não houver canais configurados em fontes.md, informar aqui]
```

### Etapa 5 — Atualizar backlog

Se não houver nenhum item `[CONTEÚDO]`, informe "Nenhum candidato a conteúdo encontrado nesta rodada." e encerre.

Para cada item `[CONTEÚDO]`, faça append em `projects/criacao-de-conteudo/backlog-temas.md`. Se o arquivo não existir, crie-o antes de escrever.

Formato de cada linha:
```
[DATA] TEMA: [título/tema resumido] | Fonte: [canal/site] | [resumo em 1 linha do ângulo ICP]
```
