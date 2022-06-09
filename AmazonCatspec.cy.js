describe('AmazonCategory Test', () => {

  it('Test Amazon Categorie search', () => {

    cy.visit('https://www.amazon.co.uk/')  //visiting website
    cy.get('div.nav-left').should('have.text', 'All') 

    cy.get('div.nav-left').click()
    cy.contains('Alexa Skills').click(); //checking categories 'skills'
    cy.url().should('include', 'Skills') //ensuring the link works

    cy.get('div.nav-left').click();
    cy.contains('All Departments').click()
    cy.url().should('include', 'Departments')

    cy.get('div.nav-left').click();
    cy.contains('Amazon Devices').click()
    cy.url().should('include', 'Devices')
    
    cy.get('div.nav-left').click();
    cy.contains('Baby').click()
    cy.url().should('include', 'baby')
    
    cy.get('div.nav-left').click();
    cy.contains('Beauty').click()
    cy.url().should('include', 'beauty') 
    
    cy.get('div.nav-left').click();
    cy.contains('Books').click()
    cy.url().should('include', 'books') 

  


  })

})

