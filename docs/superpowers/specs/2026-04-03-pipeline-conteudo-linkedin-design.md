# Design: Pipeline de Conteúdo LinkedIn + Notion

**Data:** 2026-04-03  
**Contexto:** Eduardo é CEO da Vektoz, agência de automações e IA para PMEs brasileiras. O objetivo é construir um pipeline que gere conteúdo educativo sobre IA/automação no LinkedIn (isca digital), que leva a materiais no Notion como lead magnets. Meta imediata: 30k MRR em 3 meses.

---

## Problema que este sistema resolve

Eduardo precisa publicar conteúdo consistente no LinkedIn para atrair o ICP da Vektoz (donos/gestores de PME com operações dependentes de WhatsApp). O gargalo é duplo: encontrar temas relevantes e produzir conteúdo de qualidade. Hoje ambos consomem horas por peça.

---

## ICP incorporado ao sistema

Todo conteúdo é filtrado por esta lente:

- **Quem:** Dono ou gestor de PME brasileira (clínica, imobiliária, escola/curso, financeira pequena, serviços locais)
- **Faturamento:** R$ 80k–400k/mês, 5–40 funcionários
- **Problema:** Operação dependente de WhatsApp, processos manuais, atendimento descentralizado
- **Dores prioritárias:** resposta lenta, lead perdido, follow-up inconsistente, cobrança manual
- **Linguagem que funciona:** resultado operacional (tempo, receita, escala) — nunca jargão de IA
- **Não falar para:** curioso de IA, dev, empresa grande, microempresa sem caixa

---

## Arquitetura: dois skills + arquivos de suporte

```
/briefing → backlog-temas.md → /novo-conteudo → Notion (via MCP) + copy LinkedIn
                                      ↑
                             memoria-editorial.md (feedback acumulado)
```

---

## Skill 1: `/briefing`

**Propósito:** Compilar o que saiu de relevante em IA/automação nos últimos 7 dias e identificar o que tem potencial de conteúdo para o ICP da Vektoz.

**O que faz (em ordem):**

1. Lê `projects/criacao-de-conteudo/fontes.md` para obter canais YouTube e palavras-chave configurados
2. Faz fetch dos feeds RSS dos canais YouTube definidos (filtra últimos 7 dias)
3. Executa web searches com filtro de data para cada keyword do ICP:
   - `automação WhatsApp PME IA after:[data-7-dias]`
   - `agente IA atendimento automático after:[data-7-dias]`
   - `n8n automação pequena empresa after:[data-7-dias]`
   - `chatbot follow-up CRM after:[data-7-dias]`
4. Filtra resultados pelo critério: **"um dono de PME com gargalo operacional acharia isso útil ou aplicável?"**
5. Classifica cada item como:
   - `[CONTEÚDO]` — tem potencial de post + material Notion
   - `[LEITURA]` — relevante para Eduardo se atualizar, não para publicar
6. Apresenta digest formatado no terminal
7. Salva os itens `[CONTEÚDO]` em `projects/criacao-de-conteudo/backlog-temas.md` com data

**Output esperado:** 8–12 itens classificados, digest de leitura rápida (2 min).

**Limitações conhecidas:**
- LinkedIn posts não são indexados de forma confiável — não é fonte primária
- Twitter/X não está incluído (API paga)
- YouTube canais precisam ser configurados manualmente em `fontes.md` na primeira vez

---

## Skill 2: `/novo-conteudo [tema]`

**Propósito:** Transformar um tema (do backlog ou manual) em conteúdo pronto para revisão — página Notion + copy LinkedIn.

**O que faz (com gates de aprovação):**

### Etapa 1 — Filtro de ângulo pelo ICP
Lê `memoria-editorial.md` para calibrar com histórico. Gera 3 opções de ângulo, cada uma com:
- Qual dor do ICP resolve
- Qual o ganho percebido (em linguagem operacional)
- Exemplo de nicho onde aplica (clínica, imobiliária, escola...)
- Nível de atratividade estimado (baseado na memória editorial)

**→ Eduardo escolhe um ângulo antes de continuar**

### Etapa 2 — Outline
Gera estrutura com 5–7 seções, cada uma com título + 2 bullets do que vai conter.

**→ Eduardo aprova ou ajusta o outline antes de continuar**

### Etapa 3 — Geração completa
Produz em paralelo:
- **Página Notion** no formato do material Claude Skills (callout de abertura, problema, índice, seções práticas com exemplos, template/checklist copiável, CTA para agendar conversa com Eduardo)
- **3 variações de copy para LinkedIn** no formato: hook (1 linha) → problema (2–3 linhas) → virada → lista com bullets → CTA

### Etapa 4 — Criação no Notion
Cria a página via MCP sob a página pai "Materiais e Tutoriais" (mesma localização do Claude Skills). Se a página pai não existir, interrompe com mensagem de erro orientando Eduardo a criá-la primeiro no Notion.

**→ Eduardo revisa tudo antes de publicar (fase MVP)**

---

## Arquivos de suporte

### `projects/criacao-de-conteudo/fontes.md`
Configuração manual (preenchida uma vez). Formato:
```
## Canais YouTube
- NomeDoCanal | channel_id: UCxxxxxxxxxxxxxxxxxxxxxxxx
- NomeDoCanal | channel_id: UCxxxxxxxxxxxxxxxxxxxxxxxx

## Keywords adicionais
- automação clínica WhatsApp
- agente IA imobiliária
```
Eduardo preenche os canais que já acompanha. O `/briefing` lê este arquivo antes de rodar.

### `projects/criacao-de-conteudo/backlog-temas.md`
Acumulador de temas candidatos do `/briefing`. Formato:
```
[2026-04-03] CONTEÚDO: Título do tema | Fonte: YouTube - NomeDoCanal | Resumo em 1 linha
```

### `projects/criacao-de-conteudo/memoria-editorial.md`
Feedback de performance. Atualizado com `/feedback [aprendizado]`. Formato:
```
[2026-04-03] Tutorial com template copiável → alto engajamento + 3 DMs (clínica)
[2026-04-03] Post conceitual sobre LLMs → engajamento médio, zero DM
```

Ambos os skills leem este arquivo antes de gerar sugestões.

### Skill auxiliar: `/feedback [aprendizado]`
Appenda uma linha datada ao `memoria-editorial.md` com o que Eduardo observou sobre performance de um post ou qualidade do conteúdo gerado. Não gera nada, apenas registra. Exemplo de uso:
```
/feedback posts com checklist no final geram mais compartilhamentos que posts só com texto
/feedback ângulo "como não perder lead" teve 5x mais DMs que ângulo conceitual sobre IA
```

---

## O que está fora do escopo (deliberadamente)

- **Imagem para LinkedIn:** usar templates fixos no Canva (3–5 templates por tipo de conteúdo). O skill sugere qual template usar, mas não gera a imagem.
- **Automação via n8n:** fase posterior, depois que o fluxo estiver validado com posting manual
- **Análise automática de métricas do LinkedIn:** API restrita. Feedback é manual via `/feedback`
- **Instagram:** fora do escopo do MVP. LinkedIn é o canal primário.

---

## Fluxo completo

```
Toda semana:
/briefing → revisa digest → backlog atualizado

Quando quiser produzir:
/novo-conteudo [tema do backlog ou novo] 
  → escolhe ângulo ICP
  → aprova outline
  → recebe Notion pronto + 3 copies LinkedIn
  → revisa e ajusta
  → aplica template Canva para imagem
  → publica no LinkedIn
  → após resultado: /feedback [o que aprendeu]
```

**Tempo estimado por peça (após calibração):** 20–30 minutos de Eduardo vs. 2–3 horas hoje.

---

## Fases de rollout

| Fase | O que construir | Gatilho para avançar |
|------|----------------|----------------------|
| MVP | `/novo-conteudo` + arquivos de suporte | Eduardo tem temas na cabeça, foco em produção |
| Fase 2 | `/briefing` + `fontes.md` | Após 4–6 posts, Eduardo sabe o que quer monitorar |
| Fase 3 | Migração para n8n | Após validar que o funil converte (leads reais) |

---

## Verificação (como testar)

1. Rodar `/novo-conteudo "como automatizar follow-up no WhatsApp"` e verificar se os ângulos gerados falam a língua do ICP (resultado operacional) e não de tecnologia
2. Verificar se a página Notion criada via MCP aparece como subpágina de "Materiais e Tutoriais"
3. Verificar se os 3 copies LinkedIn seguem o formato: hook → problema → virada → lista → CTA
4. Rodar `/briefing` e verificar se itens classificados como `[CONTEÚDO]` são realmente aplicáveis ao ICP (não notícias genéricas de IA)
5. Após 2 ciclos, rodar `/feedback` e confirmar que o próximo `/novo-conteudo` incorpora o histórico nas sugestões de ângulo
