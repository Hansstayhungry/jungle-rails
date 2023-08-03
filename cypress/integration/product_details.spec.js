describe('Jungle App - Product details page', () => {
  it('should visit the home page', ()=> {
    cy.visit('/')
  })

  it('should see the product detail when click on the product', ()=>{
    cy.contains('.products article', 'Scented Blade').click()
    cy.get('.products-show').should('be.visible')
  })
})