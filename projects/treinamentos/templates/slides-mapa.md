# Mapa de Slides — Treinamento de IA

**Template Google Slides ID:** [ID_DO_TEMPLATE] ← preencher após Eduardo criar o template

---

## Slides Padrão (não alterar por empresa)

Estes slides têm conteúdo fixo e não precisam de personalização:

| Nº | Título | Motivo |
|----|--------|--------|
| 3  | O que é IA | conteúdo técnico universal |
| 4  | O que são LLMs | conteúdo técnico universal |
| 5  | Como funcionam (simplificado) | conteúdo técnico universal |
| 6  | Glossário | termos universais |
| 7  | Evolução da IA 2023→2026 | linha do tempo universal |
| 12 | Estrutura do Prompt Perfeito | framework universal |
| 16 | Como criar GPTs/Gems | passo a passo universal |
| 20 | Pulos do Gato | comandos avançados universais |
| 21 | Vídeos e Referências | referências universais |

---

## Slides Personalizáveis (alterar por empresa)

Estes slides precisam de conteúdo específico da empresa:

| Nº | Título | O que personalizar |
|----|--------|-------------------|
| 1  | Capa | Nome da empresa, data |
| 2  | Por Que IA Agora? | Dado de impacto mais relevante pro setor |
| 8  | Agenda do Dia | Módulos a cobrir (ajustar por duração) |
| 9  | Níveis de Uso — Exemplos | Exemplos do setor no lugar dos genéricos |
| 13 | Exemplo Completo de Prompt | Exemplo aplicado ao setor |
| 14 | Exemplos de Uso por Área | Foco nas áreas que participam |
| 15 | Contexto = Game Changer | Exemplo de contexto do setor |
| 17 | Caso de Uso [SETOR] | Case ou cenário específico da empresa |
| 22 | Próximos Passos | Ações práticas para o setor |

---

## Como a skill usa este mapa

1. Ler o mapa para saber quais slides editar
2. Duplicar o template via Google Drive MCP
3. Para cada slide personalizável: gerar o conteúdo novo e registrar no output
4. Eduardo faz o paste manual dos conteúdos gerados nos slides duplicados
   (enquanto não tiver API do Google Slides disponível via MCP)

---

## Limitação atual

O Google Drive MCP atual (read_file_content, create_file) não suporta edição direta de slides individuais. A skill `/treinamento-slides` gera o conteúdo personalizado slide a slide e tenta duplicar o template — Eduardo faz o paste. Se o MCP evoluir para suportar edição de slides, a skill é atualizada.
