import React, { useState } from 'react'
import { View, Switch, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1rem',
  },
})

it('calls the onValueChange callback', () => {
  // create a stub function that returns the first argument
  const enabledSpy = cy.stub().returnsArg(0).as('enabledSpy')
  const TestSwitch = () => {
    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = () => {
      // when "setIsEnabled" is called, call the stub too
      return setIsEnabled(enabledSpy(!isEnabled))
    }

    return (
      <View style={styles.container}>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          testID="switch"
        />
      </View>
    )
  }

  cy.mount(<TestSwitch />)
  // our switch has "input type=checkbox" inside with the actual value
  const switchSelector = '[data-testid=switch] :checkbox'
  // confirm the first values and the interaction
  // that calls the function stub
  cy.get(switchSelector).should('not.be.checked').click()
  cy.get('@enabledSpy')
    .should('have.been.calledWith', true)
    .invoke('resetHistory')
  cy.get(switchSelector).should('be.checked').click()
  cy.get('@enabledSpy').should('have.been.calledWith', false)
})
