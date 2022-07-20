describe("SolarSystemContainer", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000/explore");
  })

  it('should have working planet select buttons', () => {
    cy.get('.mercury').click();
    cy.get('.detail-planet-name').should('contain', 'Mercury');
  })
})