## Olá, este é o meu desafio de QA da Stone

Para validar, bastar clonar o projeto e executar:

```
npm i
npm run cypress (Para rodar todos os testes direto do terminal)
ou
npm run cypress:open (Para abrir a interface gráfica do Cypress e ver a execução step por step)
```

Os testes se encontram na pasta *cypress\integration*, e os cenários de teste estão na pasta *features*.

Os cenários foram escritos na sintaxe brasileira de Gherkin. E não foram integrados via cucumber devido a uma opnião pessoal minha sobre o uso do cucumber com o Cypress.

Toda a execução do Cypress está integrada com uma Github Action, que é executada a cada push. Simulando uma integração continua.
