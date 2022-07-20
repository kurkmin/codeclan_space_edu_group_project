describe("SolarSystemContainer", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000/explore");
  })

  it('should have working planet select buttons', () => {
    cy.get('.mercury').click();
    cy.get('.detail-planet-name').should('contain', 'Mercury');
  })

  it('should have working planet select buttons', () => {
    cy.get('.venus').click();
    cy.get('.detail-planet-name').should('contain', 'Venus');
  })

  it('should have working planet select buttons', () => {
    cy.get('.earth').click();
    cy.get('.detail-planet-name').should('contain', 'Earth');
  })

  it('should have working planet select buttons', () => {
    cy.get('.mars').click();
    cy.get('.detail-planet-name').should('contain', 'Mars');
  })

  it('should have working planet select buttons', () => {
    cy.get('.jupiter').click();
    cy.get('.detail-planet-name').should('contain', 'Jupiter');
  })

  it('should have working planet select buttons', () => {
    cy.get('.saturn').click();
    cy.get('.detail-planet-name').should('contain', 'Saturn');
  })

  it('should have working planet select buttons', () => {
    cy.get('.uranus').click();
    cy.get('.detail-planet-name').should('contain', 'Uranus');
  })

  it('should have working planet select buttons', () => {
    cy.get('.neptune').click();
    cy.get('.detail-planet-name').should('contain', 'Neptune');
  })

})