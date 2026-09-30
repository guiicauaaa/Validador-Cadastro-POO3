# Validador de Cadastro Simples

Exercício de POO3: um formulário com Nome, E-mail e Senha, validado com JavaScript puro.

## Como abrir

- **Online (GitHub Pages):** https://guiicauaaa.github.io/Validador-Cadastro-POO3/
- **VS Code:** abra a pasta e use o Live Server ("Go Live") no `index.html`.
- **Sem servidor:** dois cliques no `index.html`.

## O que o JavaScript faz

1. Impede o envio padrão do formulário com `e.preventDefault()`.
2. Pega os valores dos três campos com `document.getElementById`.
3. Se algum campo estiver vazio, mostra um alerta em vermelho na tag de erro.
4. Se todos estiverem preenchidos, mostra a mensagem de sucesso e limpa os campos.

Os elementos da tela são referenciados com `const`. O `trim()` faz um campo preenchido só com espaços contar como vazio. O formulário usa `novalidate` para a validação ficar por conta do JavaScript, e não do navegador.

## Arquivos

- `index.html`: o formulário e as tags das mensagens.
- `css/estilo.css`: o visual, com o alerta de erro em vermelho e a mensagem de sucesso em verde.
- `js/validador.js`: a validação.
