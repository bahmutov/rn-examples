import SwitchExample from '.'
it('switches', () => {
  cy.mount(<SwitchExample />)
  const selector = '[data-testid=Auto] :checkbox'
  cy.get(selector).should('be.checked')
  cy.get(selector).should('not.be.checked')
  cy.get(selector).should('be.checked')
})
