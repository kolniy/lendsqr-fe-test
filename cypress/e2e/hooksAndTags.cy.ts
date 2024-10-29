describe('Hook/tags test suite', () => {
    before(() => {
        cy.log("**** Launch app *****")
    })

    after(() => {
        cy.log("***** close App ******")
    })

    beforeEach(() => {
        cy.log("*** Login ***")
    })

    afterEach(() => {
        cy.log("*** Logout ****")
    })

    it('search', () => {

    })

    it.skip('advanced search', () => {
        
    })

    it('does what its supposed to', () => {
        
    })

    it.only('list products', () => {
        
    })
})