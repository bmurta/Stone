// <reference types="Cypress" />
describe("Verificar o saldo", () => {
  it("Autentica o login", () => {
    cy.request({
      method: "POST",
      url:
        "https://sandbox-accounts.openbank.stone.com.br/auth/realms/stone_bank/protocol/openid-connect/token",
      form: true,
      body: {
        client_id: "admin-cli",
        username: "b.murta.sampaio@gmail.com",
        password: "patachoca",
        grant_type: "password"
      }
    }).then(response => {
      Cypress.env("token", response.body.access_token);
    });
  });
  it("Descobre o id", () => {
    cy.request({
      method: "GET",
      url: "https://sandbox-api.openbank.stone.com.br/api/v1/accounts",
      form: true,
      headers: {
        authorization: "Bearer " + Cypress.env("token")
      }
    }).then(response => {
      Cypress.env("id", response.body[0].id);
      Cypress.env("account", response.body[0].account_code);
    });
  });
  it("Faz a transferencia", () => {
    const value = 30
    cy.request(
      {
        method: "POST",
        url:
          "https://sandbox-api.openbank.stone.com.br/api/v1/dry_run/internal_transfers",
        form: true,
        headers: {
          authorization: "Bearer " + Cypress.env("token")
        },
        body: {
          amount: value,
          account_id: Cypress.env("id"),
          target: {
            account: {
              account_code: "307942"
            }
          }
        }
      }
    ).then(response => {
      expect(response.duration).to.lte(1000);
      expect(response.status).to.equal(202);
      expect(response.body.amount).to.equal(value)
      expect(response.body.target_account_owner_name).to.equal("Victor Nascimento")
    })
  });
});
