/* eslint-disable no-undef */
describe("Application should handle user login", () => {
  it("user email type should update state", () => {
    cy.visit("http://localhost:3000");

    cy.get('input[type="email"]').type("kolaniyi3@gmail.com");

    cy.get('input[type="email"]').should("have.value", "kolaniyi3@gmail.com");
  });

  it("user password type should populate password field", () => {
    cy.visit("http://localhost:3000");

    cy.get('input[type="password"]').type("abcdefgh");

    cy.get('input[type="password"]').should("have.value", "abcdefgh");
  });

  it("user should be redirected to login page after successful login", () => {
    cy.visit("http://localhost:3000");

    cy.get('input[type="email"]').type("kolaniyi3@gmail.com");
    cy.get('input[type="password"]').type("abcdefgh");

    cy.get(".btn-login__click").click();
  });
});

