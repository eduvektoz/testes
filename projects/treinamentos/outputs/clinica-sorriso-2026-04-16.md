# Output — Clínica Sorriso — 2026-04-16

## Google Doc — Material de Apoio
https://docs.google.com/document/d/1-bsxTIsWfny66sIOFKbZs5kG5jVZzEoS7mQuRZBtG0E/edit

## Personalizações aplicadas
1. **Dado de impacto setorial:** "IA pode automatizar até 40% das tarefas administrativas de clínicas" — substituiu o genérico de produtividade
2. **Linguagem nível 0:** analogia do "estagiário que nunca trabalhou em clínica", todos os termos técnicos explicados em linguagem do dia a dia, exemplos concretos de WhatsApp e OdontoSystem
3. **Módulo 7 focado nas áreas participantes:** Recepção/Atendimento, Financeiro e Gestão — Marketing e RH não detalhados

## Campos [A CONFIRMAR]
- `[cidade]` no prompt de contexto do Módulo 8 e Módulo 5
- Email e site da Vektoz (já preenchido com eduardo@vektoz.com.br e vektoz.com.br)

---

## Conteúdo dos Slides (para /treinamento-slides)

### SLIDE 1 — Capa
**Título:** Clínica Sorriso
**Subtítulo:** Treinamento de IA para Empresas — 16 de abril de 2026
**Rodapé:** Facilitado por Vektoz

---

### SLIDE 2 — Por Que IA Agora?
**Destaque principal:**
> "IA pode automatizar até 40% das tarefas administrativas de clínicas, liberando equipe para o atendimento ao paciente."

**3 dados de contexto Brasil:**
- 96% das PMEs têm familiaridade com IA, mas só 15% usam com frequência (Sebrae/FGV Ibre)
- +14% de produtividade média em empresas que implementaram IA generativa (Bain, 2025)
- Custo dos modelos de IA caiu ~280x desde 2022 — acesso nunca foi tão barato

**Mensagem de encerramento do slide:**
> A ferramenta já está disponível. O uso ainda está raso. Quem aprender a usar bem agora sai na frente.

---

### SLIDE 8 — Agenda do Dia (5h)
1. O que é IA e como funciona (Módulo 1)
2. Glossário — termos que vão aparecer hoje (Módulo 2)
3. Evolução da IA 2023–2026 (Módulo 3)
4. Os 4 Níveis de Uso (Módulo 4)
5. Como fazer um bom prompt — framework em 6 blocos (Módulo 5)
6. Custom GPTs e Gems — assistentes personalizados (Módulo 6)
7. IA na prática: Recepção, Financeiro e Gestão (Módulo 7)
8. Contexto = Game Changer (Módulo 8)
9. Pulos do gato — técnicas avançadas (Módulo 9)
10. Próximos 30 dias com IA

*(Coffee break: entre módulo 4 e 5 | Almoço: após módulo 6)*

---

### SLIDE 9 — Níveis de Uso — Exemplos (Clínica Odontológica)

| Nível | O que é | Exemplo na clínica |
|-------|---------|-------------------|
| 1 — Google turbinado | Pergunta solta, sem contexto | "Como redigir uma cobrança no WhatsApp?" |
| 2 — Analista assistido | Contexto curto + análise | Colar lista de inadimplentes e pedir mensagens personalizadas |
| 3 — Copiloto de processo | Contexto rico + co-criação | Criar GPT da recepção com protocolo completo da Clínica Sorriso |
| 4 — Orquestração (n8n) | IA + sistemas, roda sozinha | Paciente falta → IA cria mensagem → WhatsApp dispara automaticamente |

---

### SLIDE 13 — Exemplo Completo de Prompt (Reativação de Paciente)

```
PAPEL: Você é uma recepcionista experiente de clínica odontológica,
comunicativa e acolhedora.

OBJETIVO: Criar mensagens de WhatsApp para reativar pacientes
inativos há mais de 6 meses.

CONTEXTO: Clínica Sorriso, clínica odontológica. Atendemos
particulares e convênio. Tom: próximo, sem pressão,
focado no cuidado com a saúde.

TAREFAS:
1. Criar 3 versões (curta, média e com oferta especial)
2. Mencionar que a equipe sentiu falta do paciente
3. Incluir CTA claro para agendar

FORMATO: 3 mensagens prontas para WhatsApp, máx. 3 linhas cada.

RESTRIÇÕES: Tom acolhedor. Não pressionar. Não mencionar dívidas.
```

---

### SLIDE 14 — Exemplos de Uso por Área (Clínica Sorriso)

**Recepção / Atendimento**
- Mensagens de confirmação por procedimento (limpeza ≠ canal ≠ aparelho)
- Cobranças personalizadas por perfil de inadimplência
- FAQ de dúvidas frequentes de pacientes

**Financeiro**
- Classificar lançamentos do extrato por tipo
- Resumo mensal de fluxo de caixa em linguagem simples
- Simulação de cenário: impacto de mudança no reembolso de convênio

**Gestão**
- Resumo de reuniões com próximos passos
- Política de cancelamento em linguagem clara para o paciente
- Análise de feedbacks e identificação de padrões

---

### SLIDE 15 — Contexto = Game Changer

**Sem contexto → resposta genérica:**
Pergunta: "Como reduzir inadimplência na clínica?"
Resposta: sugestões que valem para qualquer empresa.

**Com contexto → resposta útil:**
```
Contexto: somos a Clínica Sorriso, odontologia, 15 funcionários.
Atendemos particulares e convênio (Unimed, SulAmérica).
Usamos WhatsApp e OdontoSystem.
Inadimplência concentrada em pacientes de convênio que não pagam
a parte particular do procedimento.
Tom: acolhedor, sem pressão.
```
Resposta: IA entende o problema específico e propõe abordagem para aquele perfil de paciente.

---

### SLIDE 17 — Caso de Uso — Odontologia

**O problema:** Pacientes somem. Follow-up não acontece. Agenda cheia de buracos.

**Antes:**
- Confirmações manuais no WhatsApp, uma por uma
- Pacientes faltosos raramente recebem contato de retorno
- Sem processo de reativação para inativos há 6+ meses

**Com IA (Nível 2–3):**
- Recepcionista exporta lista de inativos do OdontoSystem, cola no ChatGPT → 30 mensagens personalizadas em 10 minutos
- Custom GPT com protocolo da clínica orienta a recepção sem chamar a sócia-gestora
- Auxiliar financeira cola extrato → resumo do mês pronto em 5 minutos

**Resultado esperado:** menos tempo operacional, mais pacientes retornando, gestão mais clara.

---

### SLIDE 22 — Próximos Passos — Clínica Sorriso

**Semana 1:**
- [ ] Usar IA 1x por dia em tarefas reais (mensagens, cobranças, resumos)
- [ ] Testar o prompt de reativação de paciente esta semana

**Semana 2:**
- [ ] Criar o Custom GPT de recepção com o FAQ da Clínica Sorriso
- [ ] Testar com casos reais de dúvidas de pacientes

**Semana 3–4:**
- [ ] Montar o "contexto padrão" da Clínica Sorriso em um arquivo de texto
- [ ] Testar o assistente financeiro com o fechamento do mês

---

## Verificação das personalizações (Task 8, Step 2 e 4)

### Material de apoio
- [x] Exemplos de clínica (não genéricos) — confirmação, cobrança, reativação, OdontoSystem
- [x] Linguagem acessível para nível 0 — analogias simples, zero jargão técnico sem explicação
- [x] Dado de impacto: 40% automatização de tarefas admin em clínicas
- [x] Glossário sem jargão excessivo — todos os termos explicados em uma linha

### Slides
- [x] Slide 1 (Capa): nome da empresa + data
- [x] Slide 2 (Por Que IA Agora?): dado setorial de clínicas
- [x] Slide 8 (Agenda): 10 módulos para 5h com coffee e almoço
- [x] Slide 9 (Níveis): exemplos específicos de clínica odontológica
- [x] Slide 13 (Prompt): prompt de reativação de paciente
- [x] Slide 14 (Exemplos por Área): só Recepção, Financeiro e Gestão (sem Marketing/RH)
- [x] Slide 15 (Contexto): exemplo com OdontoSystem e convênio
- [x] Slide 17 (Caso de Uso): cenário antes/depois específico da Clínica Sorriso
- [x] Slide 22 (Próximos Passos): ações concretas para clínica odontológica

### Briefing reutilizado
- [x] /treinamento-slides leria o briefing salvo em `briefings/clinica-sorriso-2026-04-16.md` sem repetir perguntas
