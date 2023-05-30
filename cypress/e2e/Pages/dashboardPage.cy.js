import { CreatePropertyRunner } from "../TestRunners/createPropertyRunner.cy"
const createPropRunner= new CreatePropertyRunner();
export class DashboardPage{
    DashboardPage(){

    }
    visitDashboard(){
        cy.visit('https://qa.testamt.com/Home/Index')
    }
    assertDashboardText(text){
        cy.get('.active').contains(text+'').should('be.visible')
    }
    assertSearchButton(){
        cy.get('.hidden-lg > .glyphicon').should('be.visible')
    }
    clickPortfolioInsight(){
        cy.contains('Portfolio Insight').click()
    }
    clickPortfolioAdd(){
        cy.get(':nth-child(1) > [href=""]').click()
        cy.window().then((win) => {
            cy.stub(win, 'open', url => {
              win.location.href = 'https://qa.testamt.com/PI/Property/Property.aspx?PropertyID=-1';
            }).as("popup")
          })
    }
    clickAddLocation(){
        cy.contains('Location').click({ force: true })
          cy.get('@popup')
            .should("be.called").then(()=>{
              createPropRunner.enterInformation()
              cy.wait(4000);
            }) 
    }
    clickAddLease(){
        cy.get(':nth-child(1) > [href=""]').click()
        cy.contains('Lease').click({ force: true })
        cy.contains('DEFAULT').click({ force: true })
        cy.window().then((win) => {
          cy.stub(win, 'open', url => {
            win.location.href = 'https://qa.testamt.com/PortfolioInsight/Widgets/Lease?ContractTypeId=871330&AccountingSystemId=871329&LeaseID=-1';
          }).as("popup")
        })
        cy.contains('Real Estate Contract').click({ force: true })
        cy.get('@popup')
          .should("be.called")
        cy.wait(6000)
     
    }
}