import { Utils } from "../Utils/utils.cy"
const util=new Utils()
export class PropertyInfoPage {
    PropertyInfoPage() {

    }
    assertPropertyName(propName) {
        cy.get('#id_507756_C_ctl01_ucPS_lblPropertyNameValue').contains(propName + '')
            .should('be.visible')
    }
    assertPropAdrres(propAddrs1) {
        cy.get('#id_507756_C_ctl01_ucPS_lbAddress1Value').contains(propAddrs1)
            .should('be.visible')
    }
    clicksSpace() {
        cy.get('#anchor_id_507761').click()
    }
    clickCloseButton() {
        cy.get('#btnClose').click({ force: true })
    }
    getURL() {
        return cy.url()
    }
    clickAddSpace() {
        cy.get('.rdTitleBar').eq(4).click()
        // cy.wait(12000)
    }
    clickAddLease() {
        cy.get('.rdTitleBar').eq(2).click()
    }
    clickAdd() {

        cy.get('a[onclick="return EnterEditMode(\'Spaces\', false);"]').click()
        cy.get('.rgEditRow',{timeout: 30000}).find('td').eq(1).should('be.visible')
      //  cy.wait(14000)

    }
    getpropId(){
        cy.url().then(url => {
            const parts = url.split('?')
            const secondPart = parts[1] // the second part of the URL

            // var arr= new Array()
            // var arr={
            //     "PropID":secondPart
            // }
         
            var urlFileName='cypress/fixtures/Ids.json'
            util.writeJson(urlFileName,secondPart)})

    }
    clickAddLease() {
      
        cy.wait(12000)
        cy.window().then((win) => {
            cy.url().then(url => {
                const parts = url.split('?')
                const secondPart = parts[1] // the second part of the URL
                const urlFinal='https://qa.testamt.com/PortfolioInsight/Widgets/Lease?'+secondPart
                // var arr= new Array()
                // var arr={
                //     "PropID":secondPart
                // }
             
                // var urlFileName='cypress/fixtures/Ids.json'
                // util.writeJson(urlFileName,arr)
             
                
                cy.stub(win, 'open', url => {
                    win.location.href = urlFinal;
                  }).as("popup")
                })
           
          })
        cy.get('a[onclick="ucPSPC_AddContract(this); return false;"]').click()
        cy.get('@popup')
      .should("be.called")
      cy.wait(6000)
        // cy.window().then((win) => {
        //     cy.wrap(win).should('include.url', 'Lease')
        // })

        // cy.wait(12000)
    }

}