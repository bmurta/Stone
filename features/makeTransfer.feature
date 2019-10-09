makeTransfer#language: pt
Funcionalidade: Simular Uma Transferência Interna
    Chamada na API para fazer uma transferência simulada para uma conta definida

    Cenário: Eu quero fazer uma transferencia para conta 30794-2
        Dado que eu realize o login na API
        E armazene o valor do meu Bearer Token
        E eu armazene o valor do meu ID de usuário
        Quando eu fizer um request do tipo POST no endpoint dry_run/internal_transfers, passando meu ID, Bearer Token, numero de conta 307942 e valor
        Então a API deve retornar uma resposta ao menos 1 segundo
        E a resposta deve possuir status 202
        E o campo amount deve ser igual ao valor passado
        E o nome da conta alvo deve ser Victor Nascimento
