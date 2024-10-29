import moment from 'moment';
const today = moment();
let startDate = today.clone();
let endDate = today.clone();
endDate = endDate.add(1, 'month');

describe('My fixtures Test Suite', () => {
    let userData:any
    before(() => {
        cy.fixture('orangehrm').then((data) => {
            userData = data
        })
    })

    it.skip('FixturesDemoTest', () => {
        cy.fixture('orangehrm').then((data) => {
            cy.get("input[type='email']").type(data.username)
            cy.get("input[type='password']").type(data.password)
            cy.get(".btn-login__click").click()
        })
    })

    it('FixturesDemoTest with global variable', () => {
        cy.intercept({
            method: 'GET',
            url: `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users?startDate=${startDate}&endDate=${endDate}`,
        }).as('getUsers')

        cy.visit('http://localhost:3000')

        cy.get("input[type='email']").type(userData.username)
        cy.get("input[type='password']").type(userData.password)
        cy.get(".btn-login__click").click()

        cy.wait('@getUsers').then((interception) => {
            assert.isArray(interception.response?.body, '1st API Call')
            assert.isNotNull(interception.response?.body)
            expect(interception.request).contain(`startDate=${startDate}`)
        })
    })
})