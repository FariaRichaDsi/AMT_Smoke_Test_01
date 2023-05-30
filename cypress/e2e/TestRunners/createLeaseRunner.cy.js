
import { CreateLeasePage } from "../Pages/createLeasePage.cy";
import { Utils } from "../Utils/utils.cy";
const createLeasePage= new CreateLeasePage;
const util= new Utils()
export class CreateLeaseRunner{
    CreateLeaseRunner(){

    }
    selectLeaseType(){
        createLeasePage.selectType()
    }
  
    createLease(){
      
        var propFileName='cypress/fixtures/property.json'
        var leaseFileName='cypress/fixtures/lease.json'
        var x= util.generateLeaseName()

        // cy.readFile(propFileName).then((data)=>{
        //     createLeasePage.enterLocationName(data[0].PropertyName)
        // })
        var leaseInfo= new Array()
        leaseInfo={
            "DBAName":x,
            "LeaseCode":x,
            "LeaseStatus":"Active",
            "LeaseType":"Base Year",
            "BillingType":"Expense",
            "TermBegin":"01012020",
            "TermEnd":"12312022"
        }
        util.writeJson(leaseFileName,leaseInfo)

        cy.readFile(leaseFileName).then((data)=>{
            createLeasePage.setDBAName(data[0].DBAName)
            createLeasePage.setLeaseCode(data[0].LeaseCode)
            createLeasePage.selectLeaseStatus(data[0].LeaseStatus)
            createLeasePage.selectLeaseType(data[0].LeaseType)
            createLeasePage.selectBillingType(data[0].BillingType)
            createLeasePage.setOrigTermBegin(data[0].TermBegin)
            createLeasePage.setExpDate(data[0].TermEnd)
            createLeasePage.clickSave()
            cy.wait(6000)
        })
       
    }
}