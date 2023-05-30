
import { LeaseInfoPage } from "../Pages/leaseInfoPage.cy";
const leaseInfoPage= new LeaseInfoPage()
export class LeaseInfoRunner{
    LeaseInfoRunner(){

    }
    assertLeaseInfoPage(){
        var propName,leaseName;
        cy.readFile('cypress/fixtures/property.json').then((data)=>{
            propName=data[0].PropertyName;
            leaseInfoPage.assertPropName(propName)
        })
        cy.readFile('cypress/fixtures/lease.json').then((data)=>{
            leaseName=data[0].DBAName;
            leaseInfoPage.assertLeaseName(leaseName)
        })
    }
    addNewSpace(){
        leaseInfoPage.addNewSpace()
    }
    showSpace(){
        leaseInfoPage.showAllSpace()
    }
    linkSpace(){
        leaseInfoPage.linkSpaceOpen()
    }
    leaseIdStore(){
        leaseInfoPage.leaseIDStore()
    }
    openSpaceEntryPage(){
        leaseInfoPage.openSpacePage()
    }
    openChargePage(){
        leaseInfoPage.addCharge()
    }
}