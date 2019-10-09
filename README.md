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



# Feedback sobre as APIs:

Muito bem pensada, a API de openbanking representa uma maneira simples de terceiros realizarem transações e possuam uma forma de interagir com o banco ou até mesmo manter a sua propria versão de um banco. As chamadas são eficientes, seguras, e possuem um tempo de resposta consideravelmente rapido. Enquanto que a documentação é exemplar, com facil navegação e simuladores em diversas linguagens. Não há o que criticar negativamente.