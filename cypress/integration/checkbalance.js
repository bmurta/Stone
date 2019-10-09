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
    });
  });
  it("Verifica o saldo", () => {
    cy.request({
      method: "GET",
      url:
        "https://sandbox-api.openbank.stone.com.br/api/v1/accounts/" +
        Cypress.env("id") +
        "/balance",
      form: true,
      headers: {
        authorization: "Bearer " + Cypress.env("token")
      }
    }).then(response => {
      if (response.body.balance === 0) {
        cy.log("To pobre :(");
      } else {
        cy.log("To rico :)");
      }
      expect(response.duration).to.lte(1000);
      expect(response.status).to.equal(200);
      assert.isNotNull(
        response.body.balance &&
          response.body.blocked_balance &&
          response.body.scheduled_balance
      );
    });
  });
});
