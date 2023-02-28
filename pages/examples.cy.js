import IndexPage from '.'

it('shows all examples', () => {
  cy.mount(<IndexPage />)
  cy.get('[role=list] li').should('have.length.above', 10)
})

it.skip('navigates', () => {
  cy.mount(<IndexPage />)
  cy.contains('[role=list] li', 'button')
    // tries to navigate, router is null
    // Cannot read properties of null (reading 'push')
    .click()
})
