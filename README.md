# 🛒 Mercado Tech

Este projeto é uma aplicação de catálogo dinâmico desenvolvida para consolidar as competências da **Jornada de Aprendizagem de Engenheiro Front-End**. A aplicação simula o ecossistema real de uma loja virtual, focando em arquitetura de componentes, gerenciamento de estado e escalabilidade.

## 🛠️ Tecnologias e Ferramentas
Baseado no currículo técnico da formação:
- **Core:** React (Hooks: useState, useEffect).
- **Linguagem:** JavaScript Moderno (ES6+).
- **Tooling:** Vite para build e Git para controle de versão.
- **Styling:** CSS3 com foco em Responsividade (Flexbox e Grid).

## 🚀 Explicação do Desenvolvimento (Para Recrutadores)

O desenvolvimento foi estruturado em etapas estratégicas para garantir a qualidade do software e a melhor experiência do usuário:

### 1. Estruturação Semântica e Controle de Versão
Iniciei o projeto aplicando os fundamentos de **HTML semântico** e **Git**. Cada funcionalidade foi versionada individualmente para garantir um histórico de alterações limpo e rastreável, prática essencial para o trabalho colaborativo em grandes times de engenharia.

### 2. Lógica de Programação e Interatividade
Utilizei **JavaScript moderno** para manipular o estado da aplicação. Implementei o cadastro de produtos através de **formulários controlados**, onde cada entrada do usuário é validada e sincronizada com o estado do React em tempo real.

### 3. Engenharia de Componentes com React
A aplicação foi construída seguindo o conceito de **Componentes Reutilizáveis** e a passagem de **Props**. Isso permite que o componente `ProdutoCard` seja utilizado em diferentes partes do sistema sem duplicação de código, respeitando princípios de *Clean Code*.

### 4. Ciclo de Vida e Simulação de API
Para simular um ambiente real de requisições externas, utilizei o hook `useEffect` para gerenciar o **ciclo de vida** do componente. Implementei uma programação assíncrona para buscar dados mockados, exibindo um estado de *loading* para garantir o feedback visual ao usuário enquanto os dados são carregados.

### 5. Responsividade e Layout Fluido
Apliquei **CSS Grid** e **Flexbox** para garantir que o layout seja centralizado e adaptável. O catálogo utiliza um sistema de grade inteligente que se reorganiza automaticamente entre dispositivos móveis, tablets e desktop, mantendo o enquadramento perfeito em qualquer tela.