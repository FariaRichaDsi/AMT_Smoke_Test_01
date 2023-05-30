
export class addcharge{
    chargeType(chargeType){
        cy.get('.k-input-inner').eq(2).type('{downArrow}')
    }
    Frequency(Frequency){
        cy.get('.k-input-inner').eq(3).type('{downArrow}').type('{downArrow}')
    }

    Escalation(esc){
        cy.get('.k-input-inner').eq(4).type('{downArrow}').type('{downArrow}')
    }
    LeaseType(lType){
        cy.get('.k-input-inner').eq(5).type('{downArrow}').type('{downArrow}')
    }
    LeaseDefined(lDefine){
        cy.get('.k-input-inner').eq(6).type('{downArrow}')
    }
    clickSave(){
        cy.get('#RecurringCharge_SaveButton').click()
    }
    clickRentalAct(){
        cy.wait(4000)
        cy.get('#btnRecCharge_AddNewRow').click({force:true})
          Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    }
    enterEffDate(){
        cy.wait(1000)
      // console.log(cy.get('.sStartDate').toString())
        cy.get('#EFF_DATE').type('01012020')
    }
    enterEndDate(){
        cy.get('#END_DATE').type('12312022')
    }
    enterAmount(){
       // cy.get('#grdRentalActivityDetail_active_cell > .k-numerictextbox > [data-validate="false"]').type('2000')
       cy.get('#vamount',{force: true}).type('2000',{force: true}).type('{enter}',{force:true})
    }
    clickUpdate(){
        cy.get('#btnUpdate').click({force:true})
    }
    clickLinkedForms(){
        cy.wait(4000)
        cy.window().then((win) => {
            cy.stub(win, 'open', url => {
              win.location.href = url;
            }).as("popup")
          })
        cy.get('#ddl_LinkedCustomForm41').click({force:true})
        cy.get('.k-list-item').eq(3).click({force:true})
       
    }
}