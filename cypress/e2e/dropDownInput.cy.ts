describe('working with dropdowns', () => {
    it("working with em dropdowns", () => {
        cy.visit("http://localhost:3000")

        cy.get(".dropdown-test") 
        .select('Option 2')
        .should('have.value', "option2")
    })
})