
describe('Match Image Snapshot', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo')
  })

  it('displays two todo items by default', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    // After that, we use toMatchImageSnapshot to take a snapshot of an element or the entire page.
    cy.get('.todoapp').should('be.visible').toMatchImageSnapshot();
    // Snapshot will add to package  __image_snapshots__ after run.
    // The first snapshot is the standard, another snapshot will be compared with a first.
  })
})
