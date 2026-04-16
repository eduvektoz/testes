# Projeto Treinamentos

Treinamentos presenciais e online de "Implementação de IA para Empresas" pela Vektoz.
Duração: 4–6h. Público: equipes de PMEs brasileiras.

## Skills disponíveis
- `/treinamento-material` — gera o material de apoio (Google Doc) personalizado por empresa
- `/treinamento-slides` — duplica o template de slides e gera conteúdo para os slides personalizáveis

## Arquivos de referência
- `content/base-curriculum.md` — currículo completo (13 módulos)
- `content/dados-mercado.md` — estatísticas de IA no Brasil com fontes
- `templates/material-apoio-template.md` — template do material para alunos
- `templates/slides-mapa.md` — mapa de slides padrão vs personalizáveis + ID do template

## Fluxo de uso
1. Executar `/treinamento-material` → gera Google Doc com material personalizado
2. Executar `/treinamento-slides` → se briefing já existe, usa o salvo; senão, faz o briefing
3. Abrir o Google Slides duplicado e fazer paste dos conteúdos gerados

## Briefings
Cada empresa tem um arquivo em `briefings/[nome-empresa-slug]-[YYYY-MM-DD].md`.
Nunca sobrescrever — criar novo arquivo por execução.

## Outputs
Links e conteúdos gerados ficam em `outputs/[nome-empresa-slug]-[YYYY-MM-DD].md`.

## Pendente
- Eduardo precisa criar o Google Slides template e preencher o ID em `templates/slides-mapa.md`
