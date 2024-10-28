# S206L1

Repositório da matéria **Qualidade de Software**

## Como executar o projeto

1. **Clone o repositório:**

2. **Instalar o Cypress:**

```bash
    Copiar código
    npm install cypress
```

3. **Para abrir o Cypress, execute um dos comandos abaixo:**
```bash
    ./node_modules/.bin/cypress open
```

## Relatório de Testes
Instale as dependências necessárias para gerar o relatório de testes:

```bash
    npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
```
## Para rodar os testes e gerar o relatório, use o comando:

```bash
    ./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
```
