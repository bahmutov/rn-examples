import IndexPage from '.'

it('shows all examples', () => {
  cy.mount(<IndexPage />)
  cy.get('[role=list] li').should('have.length.above', 10)
})
