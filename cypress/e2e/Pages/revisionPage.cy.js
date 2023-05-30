export class revisionPage {
    revisionPage() {
        // cy.get('#riq')
    }


    checkVisibilityUpcoming(attempts = 0) {
       

        if (attempts > 10) {
            throw 'Too many attempts'
        }

        
    
            cy.wait(2000).then(()=>{
                cy.get('#riq').invoke('text').then((qNum) => {
                    if(qNum=='0'){
                        cy.get('.k-pager-refresh > .k-icon').click({force:true}).then(()=>{
                            cy.wait(3000).then(()=>{
                                const text =cy.get(':nth-child(4) > .ellipsisCell')
                                const rowExists = text.length === 1;
                                if (rowExists) {
                                   Cypress.runner.stop()
                                   cy.readFile('cypress/fixtures/space.json').then((data)=>{
                                   cy.get(':nth-child(4) > .ellipsisCell').contains(data.spaceName).should('be.true')
                                   
                                   })
                                  
                                }
                                else{
                                    cy.get('.k-pager-refresh > .k-icon').click({force:true})
                                    cy.wait(3000)
                                }
                            })
                        })
                        
                        
                  
                    }
                      
                else{
                    cy.get('#revisionInQueueRefresh > .glyphicon').click({ force: true }).then(()=>{
                        cy.wait(20000)
                               // for processing after the api completes
                            .then(() => this.checkVisibilityUpcoming(++attempts))
                    })
                 
                }
    
                  })
            
      
              
                
          
            // const rowExists = $body.find(text).length === 1;
            // if (!buttonExists) {
            //     cy.get('#revisionInQueueRefresh > .glyphicon').click({ force: true }).then(())
            //     cy.wait('@upcoming')
            //     cy.wait(100)          // for processing after the api completes
            //         .then(() => this.checkVisibilityUpcoming(++attempts))
            // }
        })
    }
    clickIcon() {
        cy.get('#revisionInQueueRefresh > .glyphicon').click({ force: true }).then(() => {
            this.checkVisibilityUpcoming(0)
        })
    }
}