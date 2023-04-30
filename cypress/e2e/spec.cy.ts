describe('RS React app E2E', () => {
  it('should have About page', () => {
    cy.visit('/about');

    cy.get('h1')
      .contains(/About us/i)
      .should('have.text', 'About Us');
  });

  it('should have Forms page', () => {
    cy.visit('/forms');

    cy.get('#userName').should('have.value', '');
    cy.get('#userSurname').should('have.value', '');
    cy.get('#userSurname').should('have.value', '');
    cy.get('#userBirthday').should('have.value', '');
    // cy.get('#userCountry').should('have.value', '');
    cy.get('button').should('have.text', 'Submit');
    cy.get('button').contains('Submit').click();
    cy.get('p.text-red-500').should('have.length', 7);

    cy.get('#userName').type('Name').should('have.value', 'Name');
    cy.get('#userSurname').type('Surame').should('have.value', 'Surame');
  });

  it('should have 404 page', () => {
    cy.visit('/notfound');

    cy.get('h1').contains(/NotFound/i);
  });
});
