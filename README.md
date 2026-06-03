# Landing Page – Dra. Ana Beatriz Mello (Psicóloga Clínica)

Este projeto consiste em uma landing page responsiva, moderna e otimizada para a Dra. Ana Beatriz Mello, psicóloga clínica com especialização em Terapia Cognitivo-Comportamental (TCC).

A página foi projetada com foco em experiência do usuário (UX), acessibilidade, carregamento rápido e estética premium.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web fundamentais:
- **HTML5**: Estrutura semântica e SEO.
- **CSS3 (Vanilla)**: Estilização responsiva, layout flexbox/grid e variáveis nativas para um tema elegante, sem uso de frameworks externos de CSS.
- **JavaScript (Vanilla)**: Interatividade, animações de scroll dinâmicas (Intersection Observer), validação de formulários de contato e integração com WhatsApp.
- **Google Fonts**: Tipografia moderna usando as fontes *Cormorant Garamond* (para títulos sofisticados) e *Inter* (para máxima legibilidade corporal).

## 📂 Estrutura do Projeto

```text
├── index.html       # Estrutura principal da página
├── style.css        # Estilos globais, temas de cores e responsividade
├── script.js        # Lógica de interatividade e animações
├── profile.png      # Imagem de perfil profissional do Hero / Sobre
└── .gitignore       # Arquivo de exclusão para versionamento no Git
```

## 🛠️ Como Executar Localmente

Como a aplicação é estática e utiliza HTML, CSS e JavaScript puros, não há necessidade de instalação de dependências ou buildstep de produção.

Para testar localmente:

1. **Abertura Direta**:
   Basta abrir o arquivo [index.html](file:///c:/Users/26513600820/Documents/GOOGLE%20ATG%202606/02%20Landing%20Page/index.html) diretamente em qualquer navegador moderno.

2. **Servidor Local (Recomendado para simular ambiente real)**:
   Se tiver o VS Code instalado, recomendamos o uso da extensão **Live Server** para obter recarregamento em tempo real (Hot Reload).
   Alternativamente, caso tenha o Node.js/Python instalado:
   - **Com Node.js (via npx)**:
     ```bash
     npx serve .
     ```
   - **Com Python 3**:
     ```bash
     python -m http.server 8000
     ```
     Depois, acesse `http://localhost:8000`.

## 📦 Publicação e Versionamento

O repositório remoto está configurado em:
`https://github.com/professortoniati/2606-psicologia.git`

Para conectar o repositório local e publicar suas alterações, você pode utilizar o script utilitário automatizado `setup-git.bat` incluído na pasta raiz.
