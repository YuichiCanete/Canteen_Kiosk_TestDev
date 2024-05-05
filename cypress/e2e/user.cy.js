describe('Login functionality', () => {
  it('should login with correct credentials', () => {
    cy.visit('http://localhost:5173/');
   

    // Wait for elements to be visible and interactable
    //Student
    cy.get('#inputID').should('be.visible').type('220000743');
    cy.get('#inputPass').should('be.visible').type('password1');
    cy.get('.login-container > .btn-uic').should('be.visible').click();

    //student and personell
    cy.visit('http://localhost:5173/createOrder');
    cy.get('body').should('be.visible').click();
    cy.get('.logout-btn').should('be.visible').click();

    //Cashier
    cy.get('#inputID').should('be.visible').type('12345678');
    cy.get('#inputPass').should('be.visible').type('87654321');
    cy.get('.login-container > .btn-uic').should('be.visible').click();
    cy.visit('http://localhost:5173/viewOrders');
    cy.get('body').should('be.visible').click();

    

  });

  it('should not login with incorrect credentials', () => {
    cy.visit('http://localhost:5173/');
    

    // Wait for elements to be visible and interactable
    cy.get('#inputID').should('be.visible').type('9291737');
    cy.get('#inputPass').should('be.visible').type('12DABDHD');
    cy.get('.login-container > .btn-uic').should('be.visible').click();

    // Verify login failure by checking for error message or other indication
   // cy.contains('Login Failed. Please check your ID and password.', { timeout: 10000 }); // Adjust this assertion based on the actual error message displayed
  });
});