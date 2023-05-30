import { Utils } from "../Utils/utils.cy"
const util = new Utils()
export class LeaseInfoPage {

    LeaseInfoPage() {

    }
    assertPropName(propName) {
        cy.get('#readOnly_A42F0126-BF24-415D-9410-38B81253574D__A42F0126-BF24-415D-9410-38B81253574D__PropertyName').contains(propName + '').should('be.visible')
    }
    assertLeaseName(leaseName) {
        cy.get('#readOnly_13EB22CE-FAA3-4B71-9359-396D0BCD284E__13EB22CE-FAA3-4B71-9359-396D0BCD284E__DBA_Name').contains(leaseName + '').should('be.visible')
    }
    showAllSpace() {



        cy.get('.lnkShowAllSuites', { timeout: 30000 }).click()
    }

    linkSpaceOpen() {

        cy.url().then((url) => {
            var arr = new Array()
            var arr = {
                "LeaseUrl": url
            }

            var urlFileName = 'cypress/fixtures/genUrls.json'
            util.writeJson(urlFileName, arr)
        })
        cy.window().then((win) => {
            cy.url().then(url => {

                cy.stub(win, 'open', url => {
                    win.location.href = url;
                }).as("popup")
            })

        })
        cy.get('.ellipsisCell').eq(0).click()
        cy.get('@popup').should('be.called')

        // cy.window().then((win) => {
        //     cy.url().then(url => {
        //         const parts = url.split('?')
        //         const secondPart = parts[1] // the second part of the URL
        //         const urlFinal = 'https://qa.testamt.com/PortfolioInsight/Lease/SpaceSuiteEntry' + '&' + secondPart
        //         cy.stub(win, 'open', url => {
        //             win.location.href = urlFinal;
        //         }).as("popup")
        //     })

        // })
        // cy.get('a[onclick="SpaceSuiteDetailAdd(485614,\'39464d9f1361435583c38797a6f08a48\');return').click()
        // cy.get('@popup')
        //     .should("be.called")
        cy.wait(6000)
    }
    leaseIDStore() {
        cy.wait(2000)
        cy.url().then(url => {
            console.log(url)
            const sec = url.split('&')
            const secondSec = sec[1]

            
            var urlFileName = 'cypress/fixtures/Ids.json'
            util.appendJson(urlFileName, secondSec)
            var arr = new Array()
            var arr = {
                "LeaseUrl": url
            }
            var urlFileName = 'cypress/fixtures/genUrls.json'
            util.writeJson(urlFileName, arr)
        })

    }

    addNewSpace() {
        const url1 = ''
        cy.wait(25000)
        cy.url().should('contain', 'Lease').then(() => {

            // cy.window().then((win) => {
            //   cy.stub(win, 'open', url => {
            //     win.location.href = 'https://qa.testamt.com/PortfolioInsight/Lease/SpaceSuiteEntry';
            //   }).as("popup")
            // })
            // cy.get('a.c-button.btnSpaceManagement_DetailAdd').eq(0).click({force:true})
            // cy.get('@popup')
            // .should("be.called").then(()=>{
            //  // createPropRunner.enterInformation()
            //   cy.wait(4000);
            // }) 
            cy.get('a.c-button.btnSpaceManagement_DetailAdd').eq(0).click({ force: true }).then(($btn) => {

                const onClickFunction = $btn.prop('onclick')
                // cy.execute(()=>{
                //     const arr= onClickFunction.split("'")
                //     const word=arr[arr.length-2]
                console.log(onClickFunction)


            })

            // })

            // cy.wait(3000)


            // cy.get('.btnSpaceManagement_DetailAdd').then(($btn) => {
            //     const onClickFunction = $btn.prop('onclick')
            //     cy.execute(()=>{
            //         const arr= onClickFunction.split("'")
            //         const word=arr[arr.length-2]
            //         console.log(word)
            //     })

            //     // const s_id=onClickFunction.get('SUITE_ID');
            //     // cy.window().then((win) => {
            //     //         cy.stub(win, 'open', url => {
            //     //             win.location.href = 'https://qa.testamt.com/PortfolioInsight/Lease/SpaceSuiteEntry?'+onClickFunction;
            //     //         }).as("popup")
            //     //     })
            //     //     cy.contains('Add New Space').click({ force: true })
            //     //     cy.get('@popup')
            //     //         .should("be.called").then(() => {

            //     //         })

            //   });


            // cy.wait(6000)
        })
        
    }
    openSpacePage(){
    //     cy.readFile("cypress/fixtures/Ids.json").then((data)=>{
    //         var spaceUrl="https://qa.testamt.com/PortfolioInsight/Lease/SpaceSuiteEntry?"+data[0]+"&FlagID=0&"+data[1]
    //         cy.visit(spaceUrl)
    // })
    cy.window().then((win) => {
        cy.stub(win, 'open', url => {
          win.location.href = url;
        }).as("popup")
      })
      cy.get('a.c-button.btnSpaceManagement_DetailAdd').eq(0).click({force:true})
        
    }

    addCharge() {
        cy.window().then((win) => {
              cy.stub(win, 'open', url => {
                win.location.href = url;
              }).as("popup")
            })
            cy.get('.btnPaymentsReceivables_DetailAdd').click({force:true})
// cy.readFile("cypress/fixtures/Ids.json").then((data)=>{
//     var spaceUrl="https://qa.testamt.com/portfolioInsight/Lease/RecurringChargeDetailNew?"+data[0]+"&FlagID=0&"+data[1]
//     cy.visit(spaceUrl)
// })

    }
}