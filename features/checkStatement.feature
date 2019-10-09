#language: pt
Funcionalidade: Consultar Extrato
    Chamada na API para checar o extrato do usuário logado

    Cenário: Eu quero checar o extrato da minha conta
        Dado que eu realize o login na API
        E armazene o valor do meu Bearer Token
        E eu armazene o valor do meu ID de usuário
        Quando eu fizer um request do tipo GET no endpoint statement, passando meu ID e Bearer Token
        Então a API deve retornar uma resposta ao menos 1 segundo
        E a resposta deve possuir status 200
        E retornar o objeto cursor
        E retornar o array data