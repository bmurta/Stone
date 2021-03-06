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
  it("Verifica o Extrato", () => {
    console.log(Cypress.env("id"));
    cy.request({
      method: "GET",
      url:
        "https://sandbox-api.openbank.stone.com.br/api/v1/accounts/" +
        Cypress.env("id") +
        "/statement",
      form: true,
      headers: {
        authorization: "Bearer " + Cypress.env("token")
      }
    }).then(response => {
      expect(response.duration).to.lte(1000);
      expect(response.status).to.equal(200);
      assert.isObject(response.body.cursor);
      assert.isArray(response.body.data);
    });
  });
});
