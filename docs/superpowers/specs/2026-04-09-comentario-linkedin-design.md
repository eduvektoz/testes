# Spec: Skill /comentario-linkedin

**Data:** 2026-04-09
**Status:** Aprovado pelo usuário

---

## Objetivo

Skill que recebe o print de um post do LinkedIn e gera um comentário pronto para copiar e publicar — com diagnóstico do contexto antes do comentário.

Objetivo do comentário: construir autoridade e gerar engajamento. Sem CTA comercial. O lead qualificado chega no DM por iniciativa própria após ver o comentário.

---

## Input

- Print do post (imagem) — obrigatório
- Linha de contexto do Eduardo — opcional (pode forçar classificação ou dar informação que não aparece no print)

**Se o print for de carrossel, vídeo ou imagem sem texto legível:** perguntar antes de gerar — "Não consigo ler o conteúdo do post nesse print. Cola o texto aqui ou descreve o tema?"

---

## Classificação automática

A skill classifica o post antes de gerar o comentário:

| Sinal no post | Classificação |
|---|---|
| Alto número de seguidores, perfil público/influencer, conteúdo editorial | Player |
| Cargo/empresa compatível com ICP (clínica, imobiliária, escola, financeira), tom operacional, post sobre dor do dia a dia | Lead |
| Ambíguo ou sem sinal claro | Skill pergunta antes de gerar |

**Quando ambíguo:** perguntar com contexto, não em aberto.
> "O post parece ser de [descrição breve]. Você quer tratar como Player (foco em ser visto pela audiência) ou Lead (foco em abrir conversa com o dono)?"

Se Eduardo fornecer contexto que contradiz os sinais visuais, seguir o Eduardo. Não avisar nem questionar.

---

## Estratégia por tipo

**Player**
- Valida o ponto principal do post
- Complementa com perspectiva ou dado não coberto
- Termina com pergunta aberta à audiência — para que outras pessoas respondam no comentário do Eduardo, amplificando o alcance
- **Não forçar ângulo de automação** — o tema do post define o ângulo. Se o post for sobre liderança, cultura ou estratégia, o comentário segue esse território

**Lead**
- Valida o problema descrito
- Complementa com experiência real ou dado de "um cliente" (sempre anônimo)
- Termina com pergunta genuinamente curiosa sobre a experiência de quem leu — sem revelar intenção comercial
- **Posicionar automação como resposta natural quando aplicável** — identificar se o post implica uma solução alternativa (CRM, contratação, treinamento) e reposicionar o ângulo para que automação seja a saída natural. Só aplicar quando o tema do post permitir sem forçar

---

## Regras de voz

1. **Primeira palavra sempre em primeira pessoa** — "Na minha experiência", "O que vejo na prática", "Minha percepção", "Na prática"
2. **Comprimento proporcional ao post:** Lead: 25–60 palavras. Player: 20–40 palavras. Comentário muito longo em post curto parece calculado.
3. **Frases com no máximo 12 palavras** — se ficou grande, quebra
4. **Sem adjetivos vazios** — "ótimo", "incrível", "excelente", "fantástico" → DELETE
5. **Dado externo só como reforço** — nunca como abertura. Aparece depois da experiência, não no lugar dela. Usar apenas dados verificáveis e conhecidos. Se não houver dado real disponível, omitir e usar experiência anônima de cliente no lugar. Nunca inventar estatística.
6. **Nunca mencionar Vektoz** — pode citar "um cliente meu" de forma anônima com dado real quando reforçar o ponto
7. **Sem CTA comercial** — a pergunta final é curiosidade real, não qualificação disfarçada
8. **Sem estrutura de post** — nenhuma frase pode soar como bullet de post, copy de anúncio ou conteúdo produzido
9. **Teste do WhatsApp** — antes de entregar, verificar: "Eu mandaria isso numa conversa de WhatsApp com um conhecido?" Se soar formal, reescrever
10. **Idioma:** comentar em português por padrão. Se o post for em inglês, comentar em inglês.

---

## Pergunta final — regras específicas

- Específica ao tema do post — o leitor só responde se viveu aquilo
- Genuinamente curiosa, sem agenda aparente
- Não pode revelar intenção de venda ou qualificação

Exemplos ruins:
- "Como você tá estruturando isso hoje?" *(soa como qualificação)*
- "Você já pensou em automação pra resolver isso?" *(pitch explícito)*

Exemplos bons:
- "Qual parte desse processo você acha mais difícil de mudar?"
- "O que travou quando você tentou resolver isso antes?"

---

## Formato de saída

```
Contexto: [player / lead] — [1 linha explicando o raciocínio da classificação]
Ângulo: [o que o comentário foi otimizado para fazer]

---
[comentário pronto para copiar]
---

Copiar apenas o bloco entre os traços.
```

---

## Exemplo de saída

**Input:** print de um lead postando sobre dificuldade de follow-up com clientes

```
Contexto: lead — post sobre perda de leads por falta de follow-up, perfil de gestor de imobiliária
Ângulo: valida o problema, reposiciona a causa real (escala, não disciplina), pergunta curiosa sem agenda comercial

---
Na minha experiência, o follow-up não falha por falta de vontade.
Falha porque em volume, fazer cinco toques em cada lead no manual é humanamente impossível.
Tive um cliente que perdia em média 15 negócios por mês só nessa etapa — não por falta de interesse do lead, por falta de toque na hora certa.
Qual parte desse processo você acha mais difícil de mudar?
---

Copiar apenas o bloco entre os traços.
```

---

## O que a skill NÃO faz

- Não gera variações — entrega 1 comentário com diagnóstico completo
- Não sugere imagem
- Não distribui lead magnet
- Não faz pitch ou CTA de serviço

---

## Contexto estratégico

Baseado em dados de 2026: comentário estratégico consistente (10–15/dia) gera 3–5 DMs inbound por semana de potenciais clientes sem nenhum CTA direto. O lead qualificado chega até Eduardo porque o comentário demonstrou que ele entende o problema melhor do que o próprio dono do post.

CTA explícito de venda num comentário quebra esse mecanismo — transforma autoridade em pitch.
