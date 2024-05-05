describe('Order Functionality', () => {
  it('should create order', () => {
    cy.visit('http://localhost:5173/');
   

    // Wait for elements to be visible and interactable
    cy.get('#inputID').should('be.visible').type('220000743');
    cy.get('#inputPass').should('be.visible').type('password1');
    cy.get('.login-container > .btn-uic').should('be.visible').click();

    // Verify order
    cy.visit('http://localhost:5173/createOrder');
    cy.get('body').should('be.visible').click();
    //cy.get('.food-grid').should('be.visible').click();
    //cy.get('.food-grid > :nth-child(1) > .color-base').should('be.visible').click();
    cy.get(':nth-child(1) > .color-base > table > :nth-child(3) > .btn-uic').should('be.visible').click();
    cy.get(':nth-child(2) > .color-base > table > :nth-child(3) > .btn-uic').should('be.visible').click();
    cy.get(':nth-child(3) > .color-base > table > :nth-child(3) > .btn-uic').should('be.visible').click();
    cy.get(':nth-child(4) > .color-base > table > :nth-child(3) > .btn-uic').should('be.visible').click();
    cy.get(':nth-child(5) > .color-base > table > :nth-child(3) > .btn-uic').should('be.visible').click();
    cy.get(':nth-child(6) > .color-base > table > :nth-child(3) > .btn-uic').should('be.visible').click();
    cy.get(':nth-child(7) > .color-base > table > :nth-child(3) > .btn-uic').should('be.visible').click();
    cy.get(':nth-child(8) > .color-base > table > :nth-child(3) > .btn-uic').should('be.visible').click();
    cy.get(':nth-child(9) > .color-base > table > :nth-child(3) > .btn-uic').should('be.visible').click();
    cy.get(':nth-child(11) > .color-base > table > :nth-child(3) > .btn-uic').should('be.visible').click();
    cy.get(':nth-child(1) > .d-inline-flex > :nth-child(3) > :nth-child(2)').should('be.visible').click();
    cy.get(':nth-child(2) > .d-inline-flex > :nth-child(3) > :nth-child(2)').should('be.visible').click();
    cy.get('.my-payment > .m-2').should('be.visible').click();
    cy.get('.container-fluid').should('be.visible').click();


  })
  });