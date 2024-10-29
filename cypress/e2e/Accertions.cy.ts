describe("Assertions Demo", () => {
  it("Implicit assertions", () => {
    cy.visit("http://localhost:3000/");

    cy.url()
      .should("include", "localhost")
      .should("eq", "http://localhost:3000/")
      .should("contain", "localhost");

    cy.title().should("eq", "LendSqr");

    cy.get(".illustrator-image__container > img")
      .should("be.visible")
      .and("exist");
  });

  it("Explicit assertions", () => {
    cy.visit("http://localhost:3000/");

    const userSignInEmail = "kolaniyi3@gmail.com";

    cy.get('input[type="email"]').type(userSignInEmail);
    cy.get('input[type="password"]').type("abcdefgh");

    cy.get(".btn-login__click").click();

    cy.get(".logged-user-name").then((element) => {
      const loggedInUsername = element.text();
      expect(loggedInUsername).to.equal(userSignInEmail);
      expect(loggedInUsername).to.not.equal("username");

      assert.equal(loggedInUsername, userSignInEmail);
      assert.notEqual(loggedInUsername, "some random user");
    });
  });
});
