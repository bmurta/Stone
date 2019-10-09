#language: pt
Funcionalidade: Consultar Saldo
    Chamada na API para checar o saldo do usuário logado

    Cenário: Eu quero checar o saldo da minha conta
        Dado que eu realize o login na API
        E armazene o valor do meu Bearer Token
        E eu armazene o valor do meu ID de usuário
        Quando eu fizer um request do tipo GET no endpoint balance, passando meu ID e Bearer Token
        Então a API deve retornar uma responsta de status 200
        E retornar os campos balance, blocked_balance e scheduled_balance
        E estes campos devem possuir valor