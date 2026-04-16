# Modelo de Isca (Lead Magnet) — Página Notion

Baseado em análise dos 5 materiais de Igor Miguel (Nexus Mind), validados em produção.

---

## O princípio central

A isca não é um artigo explicativo. É um kit operacional.
Toda isca tem:
1. **Âncora de credibilidade** — case real com número específico
2. **Artefato que você usa hoje** — template, JSON, mensagem, prompt, checklist de implementação

Se a pessoa terminar de ler a isca e não tiver NADA para usar/testar imediatamente, a isca está errada.

---

## Estrutura da Isca (ordem validada)

```
1. CALLOUT DE ABERTURA (1–2 linhas)
   → Quem fez + o que o material é em 1 frase
   → Ex: "Nexus Mind · O processo completo para gerar propostas após cada reunião"

2. IMAGEM / PRINT (visual de resultado ou interface)
   → Screenshot do dashboard, resultado, ou fluxo
   → Aumenta credibilidade e prende atenção

3. O QUE ACONTECEU NA PRÁTICA (case real)
   → Story de 3–5 linhas: contexto → problema → solução → resultado com número
   → "Um dono de imobiliária nos chamou com 11.245 leads parados..."

4. CORPO PRINCIPAL (3–5 seções)
   → Cada seção com título em cor destacada (laranja ou verde)
   → Cada seção tem pelo menos 1 elemento "copia e cola"

5. RESUMO EM CÓDIGO / TABELA
   → Consolida o processo em 4–6 passos em bloco de código ou tabela
   → Fácil de salvar/copiar/imprimir

6. EXPANSÃO DO ICP
   → "Isso funciona além de [nicho]: clínicas, escolas, concessionárias..."
   → Amplia identificação sem sair do tema

7. CTA FINAL
   → "Quer isso implementado na sua operação?"
   → Link para agendar call de 30 min
```

---

## Os artefatos por tipo de ICP

O artefato precisa ser calibrado para o público. Donos de PME não importam JSON no N8N.

| ICP | O que é "copia e cola" para eles |
|---|---|
| Desenvolvedor / técnico | JSON de workflow, prompt exato, configuração de API |
| Dono de imobiliária | Mensagem exata que o agente manda + variações por perfil |
| Dono de clínica | Roteiro de atendimento, mensagem de confirmação/lembrete, lista de regras do agente |
| Dono de escola | Template de mensagem de cobrança, script de qualificação de aluno |
| Equipe comercial | Template de proposta, script de follow-up, critérios de escalada para humano |

---

## Elementos obrigatórios (presentes nos 5 exemplos)

- [ ] Número real no case de abertura (nunca hipotético)
- [ ] Pelo menos 1 texto/mensagem literal para usar (não parafrasear)
- [ ] Tabela ou lista com critérios claros (priorização, escalada, métricas)
- [ ] Estimativa de custo ou tempo economizado
- [ ] Seção "funciona para além de X" — expande o ICP sem perder foco
- [ ] CTA para call de 30 min (implementação, não mais conteúdo)

---

## Exemplos de artefatos por material analisado

### Como Reativar Leads Parados no CRM
**Artefato principal:** Mensagem exata + variações por perfil
```
"Fala [nome], tudo bem? Aqui é da [imobiliária X]. Há [X tempo] você entrou
em contato querendo comprar um imóvel no [bairro X]. Temos boas opções agora
— tem interesse?"
```
**Por que funciona (explicado na isca):**
- É pessoal sem ser invasiva
- Não força — pergunta aberta
- É curta (3 linhas máximo no WhatsApp)

### Proposta Automática com Claude
**Artefato principal:** Arquivo JSON do workflow N8N para download + prompt exato
```
Prompt: Com base em TODAS as informações acima (transcrição + dados CRM),
gere a proposta comercial completa em JSON.
```
+ Prompt para gerar no Claude Code (você cola e gera sua versão adaptada)

### Claude no Manychat
**Artefato principal:** JSON do External Request + template de prompt em 5 blocos
Estrutura do prompt:
- Bloco 1: Identidade
- Bloco 2: Objetivo
- Bloco 3: Regras (o que NUNCA pode fazer)
- Bloco 4: Contexto do negócio
- Bloco 5: CTA final quando lead qualificado

### Claude Skills
**Artefato principal:** Template de skill em 4 blocos (código para copiar)
- Identidade / Tom / Processo / Contexto do negócio
+ 6 erros comuns com exemplo errado vs. certo lado a lado

### Claude + N8N
**Artefato principal:** Passo a passo com screenshots de cada tela
+ Comandos exatos para digitar
+ 3 testes prontos para validar a conexão

---

## O que NÃO fazer

- Não criar checklist diagnóstico ("você está pronto para IA?") — o leitor quer saber como fazer, não se deve fazer
- Não explicar o conceito por 3 seções antes de entregar o artefato
- Não criar seções de "benefícios da automação" sem mostrar como funciona na prática
- Não usar números hipotéticos ("imagine economizar X horas")

---

## Isca da Vektoz criada até agora

### "Como uma clínica reduziu o trabalho da recepção em 60% sem demitir ninguém"
**Status:** Criada, precisa de revisão

**O que tem:**
- Hook com número real ✓
- Seções com callouts ✓
- Checklist diagnóstico (10 perguntas) — isso é o problema

**O que precisa:**
- Trocar checklist diagnóstico por checklist de implementação
- Adicionar "a mensagem que o agente manda" — texto literal
- Adicionar exemplo de conversa real (paciente → agente → resposta)
- Adicionar tabela: o que o agente resolve sozinho vs. o que escala para humano
- Adicionar estimativa de custo/mês de operação

---

## Fontes

Materiais analisados em abril/2026:
- Como Reativar Leads Parados no CRM (Nexus Mind)
- Proposta Automática com Claude (Nexus Mind)
- Como Colocar o Claude no Manychat (Nexus Mind)
- Guia Completo: Conectar Claude ao n8n via MCP (Nexus Mind)
- Claude Skills (Igor Miguel)
