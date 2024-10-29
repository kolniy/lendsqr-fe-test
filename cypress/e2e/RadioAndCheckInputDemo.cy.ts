
describe("check UI elements", () => {
  it("Checking Radio Buttons", () => {
    cy.visit("http://localhost:3000");

    // visibility of radio buttons
    cy.get(".form-radio-yes").should("be.visible");
    cy.get(".form-radio-no").should("be.visible");

    // selecting radio buttons
    cy.get(".form-radio-yes").check().should("be.checked");
    cy.get(".form-radio-no").should("not.be.checked");
    cy.get(".check-state-display").then((element) => {
      const paraText = element.text();
      expect(paraText).to.equal("Yes");
    });

    // selecting radio buttons
    cy.get(".form-radio-no").check().should("be.checked");
    cy.get(".form-radio-yes").should("not.be.checked");
    cy.get(".check-state-display").then((element) => {
      const paraText = element.text();
      expect(paraText).to.equal("No");
    });
  });

  it("Checking Checkboxes", () => {
    cy.visit("http://localhost:3000");

    // visibility of radio buttons
    cy.get(".check-test").should("be.visible");
    cy.get(".check-test").check().should("be.checked");
    cy.get(".check-test").uncheck().should("not.be.checked");
    
  });
});
