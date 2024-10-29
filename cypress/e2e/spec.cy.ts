describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('Our home Page', () => {
  it('it visits the home page', () => {
    cy.visit('http://localhost:3000')

    cy.contains('Log In').click()
  })

  it('it should display page title', () => {
    cy.visit('http://localhost:3000')

    cy.title().should('eq', 'LendSqr')
  })
})

// describe('My First Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(true)
//   })
// })

// describe('My First fail Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(false)
//   })
// })