describe('RS React app E2E', () => {
  it('should have About page', () => {
    cy.visit('/about');

    cy.get('h1')
      .contains(/About us/i)
      .should('be.visible');
  });

  it('should have Forms page', () => {
    cy.visit('/forms');

    cy.get('#userName').should('have.value', '');
    cy.get('#userSurname').should('have.value', '');
    cy.get('#userSurname').should('have.value', '');
    cy.get('#userBirthday').should('have.value', '');
    cy.get('button').should('have.text', 'Submit');
    cy.get('button').contains('Submit').click();
    cy.get('p.text-red-500').should('have.length', 7);

    cy.get('#userName').type('Name').should('have.value', 'Name');
    cy.get('#userSurname').type('Surame').should('have.value', 'Surame');

    cy.get('#userGender-male').click().should('have.checked');
    cy.get('#userGender-female').click().should('have.checked');
    cy.get('#userTerms').click().should('have.checked');
    cy.get('#userPromotions').click().should('have.checked');
  });

  it('should have 404 page', () => {
    cy.visit('/notfound');

    cy.get('h1')
      .contains(/NotFound/i)
      .should('be.visible');
  });

  it('should have home page with initial images', () => {
    cy.visit('/');

    cy.get('#search').should('have.value', '');

    cy.get('img').should('have.length', 10);

    cy.get('div > img').first().click();
  });

  it('should have home page with no images after applying unhandled search string', () => {
    cy.visit('/');
    cy.get('input').type('qwertyuiopijn').should('have.value', 'qwertyuiopijn');

    cy.get('button').click();

    cy.get('img').should('have.length', 0);
    cy.get('h2')
      .contains(/No Data to display/i)
      .should('be.visible');
  });
});
