describe('Jungle App - Product details page', () => {
  it('should visit the home page', ()=> {
    cy.visit('/')
  })

  it('should see the count of the cart button increased by 1 when adding products to it', ()=>{
    cy.get('.btn').contains('Add').click({ force: true })
    cy.get('.nav-item').should("contain.text", "1")
  })
})