import SwitchExample from '.'
it('switches', () => {
  cy.mount(<SwitchExample />)
  cy.get('[data-testid=Auto] :checkbox').should('be.checked')
  cy.get('[data-testid=Auto] :checkbox').should('not.be.checked')
  cy.get('[data-testid=Auto] :checkbox').should('be.checked')
})
