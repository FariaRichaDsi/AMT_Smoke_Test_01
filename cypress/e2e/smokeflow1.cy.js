import { LoginTestRunner } from "./TestRunners/loginTestRunner.cy"
import { DashboardRunner } from "./TestRunners/dashboardTestRunner.cy";
import { PropertyInfoRunner } from "./TestRunners/propertyInfoRunner.cy";
import { CreateLeaseRunner } from "./TestRunners/createLeaseRunner.cy";
import { LeaseInfoRunner } from "./TestRunners/leaseInfoRunner.cy";
import { SpaceEntryRunner } from "./TestRunners/spaceEntryRunner.cy";
import { spaceWidgetRunner } from "./TestRunners/spaceWidgetRunner.cy";
import { chargeRunner } from "./TestRunners/addChargeRunner.cy";
import { revisionRunner } from "./TestRunners/revisionRunner.cy";
const loginRunner = new LoginTestRunner();
const dashboardRunner = new DashboardRunner();
const propInfoRunner = new PropertyInfoRunner();
const leaseRunner = new CreateLeaseRunner();
const leaseInfoRunner = new LeaseInfoRunner();
const spaceRunner = new SpaceEntryRunner();
const spaceWidRunner = new spaceWidgetRunner();
const charRunner=new chargeRunner();
const revRunner=new revisionRunner();
describe('SmokeTest1', () => {
  it('Flow1', () => {
    loginRunner.doLoginCorrect()
    cy.wait(1000);
    //dashboardRunner.assertDashboard();
    dashboardRunner.clickAddLocationPI();
   // cy.wait(10000)
    //  propInfoRunner.assertPropertyInfoPage();
   // propInfoRunner.clickAddSpace()
   // spaceWidRunner.enterInfo()
   propInfoRunner.getPropId()
   propInfoRunner.clickAddLease()
   cy.wait(4000)
   leaseRunner.selectLeaseType()
   cy.wait(6000)
    // cy.wait(10000)
    //   propInfoRunner.closePropertyInfo();
    //   dashboardRunner.visit()
    //   dashboardRunner.clickAddLeasePI()
    leaseRunner.createLease()
    cy.wait(10000)
    leaseInfoRunner.leaseIdStore()
    leaseInfoRunner.openSpaceEntryPage()
    spaceRunner.enterInfoSpace()
    cy.wait(10000)
    leaseInfoRunner.openChargePage()
    charRunner.enterInfo()
    cy.wait(6000)
    charRunner.addRental()
    charRunner.expandLinkedForms()
    revRunner.clickRefresh()
    
    
   // leaseInfoRunner.showSpace()
  //  leaseInfoRunner.linkSpace()
  //  spaceRunner.checkLink()
    //spaceRunner.clickUpdate()
  //   cy.reload()
  //  // cy.wait(12000)
  //   cy.request({
  //     method: 'POST',
  //     url:cy.url().toString(),
  //     timeout: 150000
     
  //   }).then((response) => {
  //     expect(response.status).to.eq(200).then(spaceRunner.closeWin())// assert that the response status is 200
     
  //   });
    
   
   // cy.response({
    //   method: 'POST',  
    //   url: '/PortfolioInsight/Lease/GetSpaceCount',
    //   response: { message: 'success' },
    //   status: 200,
    //   timeout: 50000
    // }).
    
   
    
    // cy.get('#my-element').click()
    
    // cy.request('POST', '/PortfolioInsight/Lease/GetSpaceCount',{timeout:12000})
    //   .should((response) => {
    //     expect(response.status).to.eq(200)
          
    //   })
      //cy.wait(12000)
   




    //   cy.wait(4000)
    //  // leaseInfoRunner.assertLeaseInfoPage()
    //   leaseInfoRunner.addNewSpace()
    //   //spaceRunner.enterInfo()



  })
})