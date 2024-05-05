describe('Tally Functionality', () => {
  it('should tally order', () => {
    cy.visit('http://localhost:5173/');
   

    // Wait for elements to be visible and interactable
    cy.get('#inputID').should('be.visible').type('220000743');
    cy.get('#inputPass').should('be.visible').type('password1');
    cy.get('.login-container > .btn-uic').should('be.visible').click();

    // Verify tally
    cy.visit('http://localhost:5173/createOrder');
    cy.get('body').should('be.visible').click();
    //cy.get('.food-grid').should('be.visible').click();
    //cy.get('.food-grid > :nth-child(1) > .color-base').should('be.visible').click();
    cy.get(':nth-child(1) > .color-base > table > :nth-child(3) > .btn-uic').should('be.visible').click();
    cy.get(':nth-child(2) > .color-base > table > :nth-child(3) > .btn-uic').should('be.visible').click();
    cy.get('[value="Tally"]').should('be.visible').click();
    cy.get('.container-fluid').should('be.visible').click();
    cy.get('.logout-btn').should('be.visible').click();

    //cashier tally
    cy.get('#inputID').should('be.visible').type('12345678');
    cy.get('#inputPass').should('be.visible').type('87654321');
    cy.get('.login-container > .btn-uic').should('be.visible').click();
    cy.visit('http://localhost:5173/viewOrders');
    cy.get('body').should('be.visible').click();


  })
  });