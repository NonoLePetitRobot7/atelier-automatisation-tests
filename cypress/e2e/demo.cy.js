describe('Démo Cypress', () => {

  it('Test 1 - Navigation et interaction', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    cy.url().should('include', '/commands/actions')

    cy.get('.action-email')
      .type('test@example.com')
      .should('have.value', 'test@example.com')
  })


  it('Test 2 - Vérification de contenu', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('Cypress').should('be.visible')
  })


  it('Test 3 - Test qui échoue (démo)', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('TEXTE QUI NEXISTE PAS')
  })

})