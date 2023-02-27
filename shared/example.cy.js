import Example from './example'

it('shows example', () => {
  cy.mount(<Example title="Test" />)
  cy.contains('[role=heading]', 'Test')
  cy.get('a[aria-label=Back]')
})
