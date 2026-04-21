# Estrutura Otimizada — Treinamento "Do Zero ao Avançado"

> Proposta de currículo mesclando os 3 PDFs.
> Lógica: progressão de contexto → fundamento → habilidade → ferramenta → automação → ação.
> Duração sugerida: 5–6h (presencial) ou modular em blocos.

---

## Lógica de Progressão

```
Por quê → O que é → Como funciona → Como usar → Usar bem → Ferramentas → Automação → Ação
```

Nenhum módulo pressupõe o anterior ser ignorado. Cada bloco resolve um nível de maturidade:
- Blocos 1–3: leva o iniciante a entender o que tem nas mãos
- Blocos 4–6: leva o usuário casual a usar com método
- Blocos 7–9: leva o usuário com método a expandir para ferramentas avançadas
- Blocos 10–11: abre a porta para automação e agentes
- Bloco 12: fecha com plano concreto

---

## Estrutura de Slides

---

### BLOCO 1 — Contexto e Urgência
*Objetivo: criar senso de realidade, não de hype*

**Slide 1 — Capa**
- Título do treinamento + empresa + data
- *(Fonte: PDF 2 template)*

**Slide 2 — Por que IA agora (dados de mercado)**
- US$1,3T mercado global IA generativa até 2032 (Bloomberg, CAGR >42%)
- 72% das organizações já adotam IA em ao menos uma função (McKinsey 2024 — dobrou em 12 meses)
- 2,2× ganho médio de produtividade em tarefas intelectuais com LLM (MIT/BCG)
- Dado de impacto do setor da empresa [DADO_IMPACTO_SETOR]
- *(Fonte: PDF 3)*

**Slide 3 — A linha do tempo que você vive**
- Tabela: 2000s (ERP) → 2010s (SaaS) → 2020-22 (RPA) → 2023-24 (LLMs) → 2025+ (Agentes)
- Mensagem: cada onda comprimiu a anterior. A próxima está comprimindo em meses.
- *(Fonte: PDF 3)*

**Slide 4 — Antes vs Agora: impacto prático**
- Tabela com 5 tipos de tarefa: relatório executivo, análise de contrato, atendimento, briefing, onboarding
- Coluna "operação tradicional" vs "operação aumentada com IA" com tempos reais
- *(Fonte: PDF 3)*

**Slide 5 — Citação de impacto**
- "IA não vai substituir você. Pessoas que usam IA vão substituir pessoas que não usam." — Harvard Business Review
- Ou: citação Geoffrey Hinton (1.000 Einsteins) para audiências menos técnicas
- *(Fonte: PDF 3 ou PDF 1 — escolher pelo tom da empresa)*

---

### BLOCO 2 — O que é IA (sem magia, com precisão)
*Objetivo: desmistificar sem simplificar demais*

**Slide 6 — Definição operacional de IA**
- IA não é robô. Não pensa. Prevê a resposta mais provável com base no que foi treinada.
- Separação: IA Generativa (foco do treinamento) vs IA Preditiva vs IA de Automação
- *(Fonte: PDF 2)*

**Slide 7 — O que é um LLM**
- LLM = previsor de próximas palavras em escala industrial
- Treinado em trilhões de tokens — aprende padrões estatísticos da linguagem
- Analogia: "colega júnior brilhante" (não banco de dados inteligente)
- *(Fonte: PDF 3 — melhor framing para uso prático)*

**Slide 8 — Como funciona (5 passos, versão leiga)**
- Passo a passo visual: você escreve → tokenização → cálculo → geração → contexto
- Analogia: "autocomplete muito avançado que leu quase tudo que já foi escrito na internet"
- *(Fonte: PDF 2 — mais acessível para leigos)*

**Slide 9 — O ecossistema de IAs**
- Tabela: ChatGPT (OpenAI), Gemini (Google), Claude (Anthropic), Llama (Meta/open source), Copilot (Microsoft)
- Não existe uma única IA para tudo — cada uma tem sua especialidade
- *(Fonte: PDF 1 + PDF 3)*

**Slide 10 — Glossário essencial**
- 6 termos: Prompt, Token, Context Window, Temperatura, Alucinação, Agente
- Formato: tabela com termo + explicação em 1 linha
- *(Fonte: PDF 2)*

**Slide 11 — Os 4 limites estruturais (o que a IA NÃO faz)**
- Alucinações, data cutoff, vazamento de dados, viés cultural
- Para cada limite: como mitigar na prática
- *(Fonte: PDF 3 — mais completo e acionável)*

---

### BLOCO 3 — Nivelamento do Time
*Objetivo: alinhar expectativas e criar consciência de onde cada um está*

**Slide 12 — Níveis de maturidade no uso de IA**
- Tabela: Nível 1 (Iniciante) → Nível 2 (Usuário Regular) → Nível 3 (Avançado) → Nível 4 (Automatizador)
- Objetivo do treinamento: mover todos do Nível 1 → Nível 2, preparar os interessados para o Nível 3
- *(Fonte: PDF 2)*

**Slide 13 — ATIVIDADE: Mão na Massa (primeiro contato)**
- Instrução: abra o ChatGPT, Gemini ou Claude agora. Faça uma pergunta sobre algo do seu trabalho diário.
- Tempo: 10 minutos
- *(Fonte: PDF 2)*

---

### BLOCO 4 — Engenharia de Prompt (habilidade central)
*Objetivo: a habilidade mais importante — dominar prompts transforma o resultado*

**Slide 14 — O prompt é a nova interface**
- "Quem domina a escrita de prompts extrai 3× mais valor do mesmo modelo."
- Prompt ruim = output ruim. Lixo entra, lixo sai.
- *(Fonte: PDF 3)*

**Slide 15 — Os 3 níveis de prompt**
- Nível 1 (Simples): pergunta direta sem contexto → resultado genérico
- Nível 2 (Com Contexto): inclui situação real → resultado útil
- Nível 3 (Com Processo): papel + tarefa + dados + formato → resultado estratégico
- *(Fonte: PDF 1 — melhor progressão didática)*

**Slide 16 — O Framework de 6 Blocos (CLEAR)**
- Tabela: Papel | Contexto | Tarefa | Formato | Restrições | Exemplo
- Para cada bloco: pergunta guia + exemplo
- Regra de ouro: quanto mais contexto, melhor o resultado
- *(Fonte: PDF 2 + PDF 3 — equivalentes, usar o que tiver visual melhor)*

**Slide 17 — Prompt completo aplicado ao setor**
- Exemplo real preenchido com os 6 blocos para o setor da empresa
- [PROMPT_APLICADO_AO_SETOR]
- *(Fonte: PDF 2 template — placeholder a preencher)*

**Slide 18 — Os 5 erros que destroem 80% da qualidade**
- Lista dos 5 erros (sem contexto, aceitar primeira resposta, sem formato, confiar em números, mega-prompt)
- *(Fonte: PDF 3 — mais específico e acionável do que as versões anteriores)*

**Slide 19 — O loop de refinamento (como usar de forma profissional)**
- 5 passos: Encomendar → Criticar → Restringir → Reiterar → Salvar
- Prompt é diálogo, não disparo único
- *(Fonte: PDF 3)*

**Slide 20 — Contexto é tudo: antes e depois**
- Comparativo visual: prompt sem contexto (resultado genérico) vs com contexto (resultado acionável)
- *(Fonte: PDF 2)*

**Slide 21 — ATIVIDADE: Reescreva com contexto**
- Exercício: pegue um e-mail ou documento do dia a dia e reescreva com os 6 blocos
- Tempo: 15 minutos
- *(Fonte: PDF 1 — Atividade 3)*

---

### BLOCO 5 — Técnicas Avançadas de Prompt
*Objetivo: separar quem usa IA de quem usa IA bem*

**Slide 22 — Pulos do gato: técnicas que fazem diferença**
- Tabela: Chain of Thought | Few-shot | Role Stacking | Iteração Dirigida | Persona Negativa | Output Estruturado | Prompt de Sistema
- Para cada: como usar + quando usar
- *(Fonte: PDF 2 — tabela completa)*

**Slide 23 — Prompts com referências de pensamento**
- "Se você fosse Elon Musk..." / "Se você fosse Warren Buffett..." / "Se você fosse Simon Sinek..."
- Útil para análise estratégica e brainstorming
- *(Fonte: PDF 1)*

**Slide 24 — ATIVIDADE: Me ajude a analisar isso**
- Exercício: levar dado real (planilha, contrato, relatório) e pedir análise estruturada com prompt de nível 3
- Tempo: 15 minutos
- *(Fonte: PDF 1 — Atividade 2)*

---

### BLOCO 6 — Casos Reais por Departamento
*Objetivo: tornar concreto o que foi abstraído*

**Slide 25 — Como cada área usa IA**
- Tabela por área: Comercial | RH | Financeiro | Marketing | Operacional/Administrativo
- Para cada: 3–4 casos práticos específicos
- *(Fonte: PDF 1 para casos detalhados + PDF 2 para estrutura genérica)*

**Slide 26 — Caso real do setor [SETOR]**
- Problema → Solução com IA → Resultado mensurável
- [CASO_USO_SETOR] — preencher antes do treinamento
- *(Fonte: PDF 2 template)*

**Slide 27 — Sinais de que uma tarefa pode ser feita com IA**
- Consome muito tempo | É repetitiva | Envolve escrita | Exige leitura de dados
- "Se você já pensou 'alguém podia fazer isso pra mim' ou copiou e colou algo mais de uma vez na mesma semana — a IA pode fazer isso."
- *(Fonte: PDF 1)*

---

### BLOCO 7 — Arsenal de Ferramentas
*Objetivo: expandir além do chat básico — o ChatGPT tem muito mais*

**Slide 28 — Deep Research**
- Pesquisa profunda cruzando múltiplas fontes automaticamente
- Caso: análise completa de concorrentes em menos de 10 minutos
- *(Fonte: PDF 1)*

**Slide 29 — Análise de planilhas (Excel & CSV)**
- Upload direto no ChatGPT ou Gemini → insights em linguagem natural sem fórmulas
- Caso: análise de fluxo de caixa com identificação automática dos 3 maiores gargalos
- *(Fonte: PDF 1)*

**Slide 30 — Auditoria de PDFs e documentos**
- Contratos, relatórios, laudos → extração de cláusulas críticas, resumo executivo
- Caso: auditoria de contratos com identificação de riscos em menos de 2 minutos
- *(Fonte: PDF 1)*

**Slide 31 — Transcrição e ata de reunião inteligente**
- Áudio/vídeo → ata estruturada com decisões, pendências e responsáveis
- Caso: reunião de 45 minutos → ata executiva em menos de 1 minuto
- *(Fonte: PDF 1)*

**Slide 32 — Brainstorming e advogado do diabo**
- IA para criticar planos, identificar riscos invisíveis, gerar inovações
- Caso: IA identificou 4 riscos críticos no plano de expansão antes da apresentação ao conselho
- *(Fonte: PDF 1)*

---

### BLOCO 8 — Gemini & Multimodalidade
*Objetivo: abrir o segundo degrau de produtividade — o que está fora do texto*

**Slide 33 — Por que multimodalidade muda o jogo**
- 80% das operações acontecem fora de texto puro: dashboards, gravações, fotos, plantas
- Gemini foi concebido como multimodal nativo — imagem, texto, áudio e vídeo no mesmo espaço vetorial
- *(Fonte: PDF 3)*

**Slide 34 — ChatGPT vs Gemini: quando usar cada um**
- Tabela comparativa: texto puro | imagem | documentos longos | planilhas | pesquisa ao vivo | vídeo
- Não é ou um, ou outro — é usar cada um onde ele brilha
- *(Fonte: PDF 3)*

**Slide 35 — Casos multimodais reais**
- Marketing: análise competitiva visual (100 screenshots → clustering de narrativas)
- Operações: digitalização de documentos legados (-86% custo vs outsourcing)
- Qualidade: inspeção visual em linha (+41% defeitos interceptados)
- *(Fonte: PDF 3)*

---

### BLOCO 9 — Custom GPTs e Gems
*Objetivo: criar assistentes permanentes — parar de repetir contexto*

**Slide 36 — O que são Custom GPTs e Gems**
- Configure uma vez → use para sempre. Substitui ter que repetir o contexto toda vez.
- *(Fonte: PDF 2)*

**Slide 37 — Passo a passo: criar seu assistente**
- ChatGPT Custom GPT: 6 passos
- Google Gemini Gems: 5 passos
- *(Fonte: PDF 2)*

**Slide 38 — Ideias de assistentes por área**
- Comercial (propostas, objeções, roteiros) | RH (vagas, triagem, onboarding) | Financeiro (DRE, simulações) | Marketing (calendários, anúncios)
- *(Fonte: PDF 2)*

**Slide 39 — ATIVIDADE: Crie seu Custom GPT**
- Instrução: escolha sua função principal, escreva o prompt de sistema com os 6 blocos, crie o GPT, teste com 3 situações reais
- Tempo: 20 minutos
- *(Fonte: PDF 2)*

---

### BLOCO 10 — Agentes de IA (visão geral)
*Objetivo: abrir a porta do nível 4 sem prometer que sai do treinamento implementando*

**Slide 40 — O salto de categoria: do chat ao agente**
- "Chat pede instruções. Agente tem objetivo. Você supervisiona, não opera."
- IA + ferramentas (APIs, CRM, banco de dados, WhatsApp) operando de forma semi-autônoma
- *(Fonte: PDF 3 + PDF 1)*

**Slide 41 — Anatomia de um agente (4 componentes)**
- Modelo (o cérebro) | Ferramentas (o que o agente pode acionar) | Memória (curto + longo prazo) | Loop de reflexão (o que separa agente de script)
- *(Fonte: PDF 3)*

**Slide 42 — O ciclo fundamental do agente**
- Observar → Planejar → Agir → Refletir → Aprender
- *(Fonte: PDF 3)*

**Slide 43 — Exemplos reais de agentes**
- Customer Success: agente de renovação (+18% NRR)
- Supply Chain: agente de compras (-34% tempo de ciclo)
- Jurídico: triagem contratual (5× volume processado)
- [Exemplos customizados por setor da empresa]
- *(Fonte: PDF 3 para métricas + PDF 1 para casos por área)*

**Slide 44 — Quando um agente vira um projeto real**
- Implantar um agente não é apertar um botão — é um projeto: diagnóstico → prompts → integração → segurança → treinamento
- *(Fonte: PDF 1)*

---

### BLOCO 11 — Governança e Segurança
*Objetivo: o que o jurídico e o C-level vão perguntar*

**Slide 45 — Governança que destrava, não que trava**
- 5 pontos: classificação de dados | LGPD & dados pessoais | Logs & auditoria | Human in the loop | Revisão trimestral
- *(Fonte: PDF 3)*

---

### BLOCO 12 — Plano de Ação
*Objetivo: sair com próximos passos concretos — não só inspirado*

**Slide 46 — Onde você está agora**
- Revisitar o nível de maturidade do slide 12
- Onde cada um se vê hoje vs onde quer chegar
- *(Fonte: PDF 2)*

**Slide 47 — Mapeamento pessoal (atividade final)**
- 3 perguntas: quais 2 tarefas repetitivas você executa toda semana? | Qual momento do mês gera mais estresse/retrabalho? | Em que momentos você precisaria de pesquisa ou consultoria externa?
- *(Fonte: PDF 1)*

**Slide 48 — Plano de ação: próximas 4 semanas**
- Semana 1 — Fundação: criar conta, identificar 3 tarefas repetitivas, criar o primeiro prompt com os 6 blocos
- Semana 2 — Hábito: usar IA 1×/dia em tarefa real, salvar prompts, compartilhar 1 aprendizado com o time
- Semana 3 — Expansão: criar Custom GPT ou Gem para a área, testar 1 automação simples
- Semana 4 — Resultado: medir tempo economizado, documentar processo, agendar review
- *(Fonte: PDF 2 — mais operacional)*

**Slide 49 — Para as empresas que querem ir além: Roadmap 30/60/90**
- Versão executiva (slide opcional para C-level): horizonte 1 (fundação), horizonte 2 (escala), horizonte 3 (agentes)
- *(Fonte: PDF 3)*

**Slide 50 — O que você aprendeu hoje (síntese)**
- 5 convicções para levar: LLM é previsor de token | Prompt é a nova interface | Multimodal é default | Do chat ao agente é salto de categoria | Implantação vale mais que tecnologia
- *(Fonte: PDF 3)*

**Slide 51 — Encerramento + Parceria Vektoz**
- 3 caminhos: Diagnóstico (Vektoz AI Audit) | Capacitação (Immersion Program) | Implantação (Vektoz Agent Studio)
- *(Fonte: PDF 3)*

---

## Resumo da Estrutura

| Bloco | Slides | Duração estimada | Objetivo |
|---|---|---|---|
| 1 — Contexto | 1–5 | 20min | Criar urgência real, não hype |
| 2 — O que é IA | 6–11 | 25min | Fundamento técnico com intuição |
| 3 — Nivelamento | 12–13 | 15min | Alinhar expectativas + atividade inicial |
| 4 — Engenharia de Prompt | 14–21 | 60min | Habilidade central do treinamento |
| 5 — Técnicas Avançadas | 22–24 | 30min | Separar usuário de profissional |
| 6 — Casos por Área | 25–27 | 25min | Tornar concreto o que foi abstraído |
| 7 — Arsenal de Ferramentas | 28–32 | 30min | Expandir além do chat básico |
| 8 — Multimodalidade | 33–35 | 25min | Segundo degrau produtivo |
| 9 — Custom GPTs e Gems | 36–39 | 35min | Criar assistentes permanentes |
| 10 — Agentes | 40–44 | 30min | Abrir a porta do nível 4 |
| 11 — Governança | 45 | 10min | Endereçar questões jurídicas/segurança |
| 12 — Plano de Ação | 46–51 | 30min | Sair com próximos passos concretos |
| **Total** | **51 slides** | **~5h30** | |

---

## Notas de Implementação

**Para adaptar por empresa:**
- Slides 2 (dado de mercado do setor), 17 (prompt do setor), 26 (caso real do setor), 25 (casos por departamento da empresa) são os que precisam ser personalizados
- Slides 40–44 (agentes): ajustar exemplos para os departamentos da empresa

**Para versões mais curtas:**
- Treinamento de 3h: remover blocos 7 e 8, condensar bloco 5 em 1 slide
- Treinamento de 4h: remover bloco 8 (multimodalidade)
- Treinamento de 6h: manter tudo + adicionar demos ao vivo

**Atividades práticas incluídas:**
- Slide 13: Primeiro contato com IA (10min)
- Slide 21: Reescreva com contexto (15min)
- Slide 24: Análise de dado real (15min)
- Slide 39: Crie seu Custom GPT (20min)
- Slide 47: Mapeamento pessoal (10min)
