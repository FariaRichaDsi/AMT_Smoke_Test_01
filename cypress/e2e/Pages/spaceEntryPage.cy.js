export class SpaceEntryPage {
    SpaceEntryPage() {

    }
    enterLocation(locationName) {
        cy.get('.ShowReqMarks > .form-element > .editMode > .k-input > .k-input-inner').type(locationName).type('{enter}')

    }
    enterSuiteStatus(status) {
        cy.get('#df8a3cbb-a086-4644-866e-87af57fda475 > .k-input-value-text').select(status)
    }
    enterSpaceName(spaceName) {
        cy.get('#EDBFA431-2509-477B-98EB-FEB6F337EC1A__EDBFA431-2509-477B-98EB-FEB6F337EC1A__SUITE_NUMBER').type(spaceName)
    }
    enterNoFloor(noFloor) {
        cy.get('#EDBFA431-2509-477B-98EB-FEB6F337EC1A__EDBFA431-2509-477B-98EB-FEB6F337EC1A__FLOOR_NUMBER').type(noFloor)
    }
    checkLinked() {
        cy.get('#EDBFA431-2509-477B-98EB-FEB6F337EC1A__EDBFA431-2509-477B-98EB-FEB6F337EC1A__Linked').check()

    }
    enterRentableLease(rentableLease) {
        cy.window().scrollTo(0, 1000)
        cy.window().scrollTo(500, 0)
        cy.get('#EDBFA431-2509-477B-98EB-FEB6F337EC1A__EDBFA431-2509-477B-98EB-FEB6F337EC1A__RENTABLE_SQFT', { force: true }).invoke('attr', 'style', 'display: block !important;').click({ force: true })

            .type(rentableLease)

    }
    enterRentableActual(rentableActual) {
        cy.get('#EDBFA431-2509-477B-98EB-FEB6F337EC1A__EDBFA431-2509-477B-98EB-FEB6F337EC1A__RENTABLE_SQFT_ACTUAL').type(rentableActual)
    }
    enterUsableLease(usableLease) {
        cy.get('#EDBFA431-2509-477B-98EB-FEB6F337EC1A__EDBFA431-2509-477B-98EB-FEB6F337EC1A__USEABLE_SQFT_LEASE').type(usableLease)
    }
    enterUsableActual(usableActual) {
        cy.get('#EDBFA431-2509-477B-98EB-FEB6F337EC1A__EDBFA431-2509-477B-98EB-FEB6F337EC1A__USEABLE_SQFT_ACTUAL').type(usableActual)
    }
    clickSave() {
                // cy.get('.FormSaveButton').click({ force: true })

                // cy.wait(2000)
              
            // cy.intercept('POST', 'https://qa.testamt.com/PortfolioInsight/Portfolio/PostCustomizedForm', (req) => {
            //     req.reply((res) => {
            //       if (res.Message.toString().equals("Data saved successfully.")) {
            //            cy.readFile('cypress/fixtures/genUrls.json').then((data) => {

            //             cy.visit(data[0].LeaseUrl, { force: true })

            //         })
            //       }
            //     })
            //   })
       

       cy.get('.FormSaveButton').click({ force: true })
       cy.wait(1000)
       Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
      cy.readFile('cypress/fixtures/genUrls.json').then((data) => {

                    cy.visit(data[0].LeaseUrl, { force: true })
                })
        //  cy.request({
        //     method: 'POST',
        //     url: 'https://qa.testamt.com/PortfolioInsight/Portfolio/PostCustomizedForm',
        //     failOnStatusCode: false // Pass the option here,

        // },{ force: true }).then((response) => {
        //     if (response.status === 200 && response.body.success){
        //         cy.end()
        //         cy.readFile('cypress/fixtures/genUrls.json').then((data) => {

        //             cy.visit(data[0].LeaseUrl, { force: true })
        //         })
        //     }
        // })
//         cy.intercept('POST', 'https://qa.testamt.com/PortfolioInsight/Portfolio/PostCustomizedForm').as('postData')

// cy.wait('@postData').then((interception) => {
//   const responseBody = interception.response.body
//   cy.wrap(responseBody).should('contain', 'Data saved successfully.').then(()=>{
//     cy.readFile('cypress/fixtures/genUrls.json').then((data) => {

//                     cy.visit(data[0].LeaseUrl, { force: true })
//                 })
//   })
//   // perform any other action based on the message here
// })

        // .then(()=>{
        //     // cy.url().then((url)=>{
        //     //     var newUrl=url;
        //     //     var fArr = newUrl.split('?')
        //     //     var p1 = fArr[1]
        //     //     var finalsArr=p1.split('&')
        //     //     var suiteIdString=finalsArr[0]
        //     //     var idArr=suiteIdString.split('=')
        //     //     var suiteId=idArr[1]
        //     //     console.log(suiteId)

        //     // })
         

        // })
        // cy.request({
        //     method: 'POST',
        //     url: 'https://qa.testamt.com/PortfolioInsight/Lease/GetSpaceCount',
        //     failOnStatusCode: false // Pass the option here

        // }).then((response) => {
        //     if (response.status == 500) {
        //         cy.readFile('cypress/fixtures/genUrls.json').then((data) => {

        //             cy.visit(data[0].LeaseUrl, { force: true })
        //         })
        //     }
        // })





        // cy.get('.FormSaveButton').click({ force: true }).then(()=>{
        //     cy.intercept('POST', 'https://qa.testamt.com/PortfolioInsight/Lease/GetSpaceCount', (req) => {
        //         req.reply((res) => {
        //           if (res.statusCode === 200) {
        //                cy.readFile('cypress/fixtures/genUrls.json').then((data) => {

        //                 cy.visit(data[0].LeaseUrl, { force: true })

        //             })
        //           }
        //         })
        //       })
        // })




        //       cy.get('.FormSaveButton').click({ force: true })
        //
        //   cy.intercept('/PortfolioInsight/Portfolio/PostCustomizedForm').as('apiRequest');
        // cy.get('.FormSaveButton').click({ force: true })
        // cy.request({
        //     method: 'POST',
        //     url: 'https://qa.testamt.com/PortfolioInsight/Lease/GetSpaceCount',
        //     // body: {
        //     //   username: 'testuser',
        //     //   password: 'testpass'
        //     // },
        //     failOnStatusCode: false // Pass the option here
        // }).then((response) => {
        //   // expect(response.status).to.equal(200)
        // //    cy.wait(2000).then(()=>{
        //         cy.readFile('cypress/fixtures/genUrls.json').then((data) => {

        //             cy.visit(data[0].LeaseUrl, { force: true })

        //         })
        //     })

        // })
        //
        //  cy.visit('https://qa.testamt.com/PortfolioInsight/Lease/GetSpaceCount')
        // cy.wait('@apiRequest').then((interception) => {
        //   const response = interception.response;
        //   // Do something with the response, such as assert on its properties
        //   expect(response.status).to.equal(200).then(()=>{
        //     cy.readFile('cypress/fixtures/genUrls.json').then((data) => {

        //         cy.visit(data[0].LeaseUrl, { force: true })

        //     })
        //   })
        //   // Perform an action based on the response, such as navigating to a new page

        // });
        // cy.get('.FormSaveButton').click({force:true})
        //     cy.intercept('POST',  '/PortfolioInsight/Portfolio/PostCustomizedForm').then((response)=>{
        //         cy.wait('@response',{force:true}).should('have.property', 'response.Status Code: ', 200).then(() => {
        //             cy.intercept('POST',  '/PortfolioInsight/Lease/GetSpaceCount').as('response1').then(()=>{
        //                 cy.wait('@response1',{force:true}).should('have.property', 'response.statusCode', 200).then(()=>{
        //                     cy.readFile('cypress/fixtures/genUrls.json').then((data) => {

        //                         cy.visit(data[0].LeaseUrl, { force: true })

        //                     })
        //                 })
        //             })




        //         })


        // })





    }
    clickUpdate() {
        cy.get('.SEFormSaveButton').click({ force: true }).then(() => {
            cy.url().then(url => {
                const currentUrl = url.toString();
                console.log(currentUrl)
            });
        })

        //cy.wait(30000)
        // cy.readFile('cypress/fixtures/genUrls.json').then((data) => {

        //         cy.visit(data[0].LeaseUrl, { force: true })


        // })


        // cy.window().then((win) => {
        //     win.close({fore:true})
        //   })


        // .then(() => {
        //     cy.readFile('cypress/fixtures/genUrls.json').then((data) => {
        //         // cy.wait(300)
        //         cy.visit(data[0].LeaseUrl, { force: true })
        //     })
        // })




        //   .then(() => {
        //     try {
        //       cy.waitUntil(() => cy.location('/PortfolioInsight/Lease/GetSpaceCount').should('include', '/success'))
        //       cy.readFile('cypress/fixtures/genUrls.json').then((data)=>{
        //         //cy.wait(2000)
        //            cy.visit(data[0].LeaseUrl, {force: true})
        //         })
        //     } catch (error) {
        //         cy.readFile('cypress/fixtures/genUrls.json').then((data)=>{
        //          //cy.wait(2000)
        //             cy.visit(data[0].LeaseUrl, {force: true})
        //          })
        //      // cy.reload() 
        //     }
        //   })
        //         // cy.wait(6000)

    }

    clickClose(url) {

        cy.visit(url)

    }

}