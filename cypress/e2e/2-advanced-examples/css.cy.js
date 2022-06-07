
context('CSS', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/')
  })

  it('expect($el).to.have.css(name, [value]) - check css for an element', () => {
    cy.get('.banner').should('have.css', 'background-color', '#00bf88')
    expect('.banner').to.have.css('background-color', '#00bf88')
  })

  it('expect($el).not.to.have.css(name, [value]) - check for missing css for an element', () => {
    cy.get('.banner').should('not.have.css', 'background-color', '#3c836f')
    expect('.banner').not.to.have.css('background-color', '#3c836f')
  })
})
