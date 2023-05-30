import { Utils } from "../Utils/utils.cy";
import { addcharge } from "../Pages/chargePage.cy";



const util= new Utils()
const chargePage=new addcharge()
export class chargeRunner{
    enterInfo(){

        var chargeFile='cypress/fixtures/chargeInfo.json'
//         var chargeInfo = new Array();
//         chargeInfo={
//             "ChargeType":"BRN - Base Rent",
//             "Frequency":"Monthly",
//             "EscType":"Fixed Increase",
//             "LeaseTerm":"1st of Month After",
//             "LeaseTermDefined":"Calendar Year"

//         }
// util.writeJson(chargeInfo,chargeFile)
cy.readFile(chargeFile).then((data)=>{
    chargePage.chargeType(data[0].ChargeType)
    chargePage.Frequency(data[0].Frequency)
    chargePage.Escalation(data[0].EscType)
    chargePage.LeaseType(data[0].LeaseTerm)
    chargePage.LeaseDefined(data[0].LeaseTermDefined)
    chargePage.clickSave()
})
    
    }
    addRental(){
        chargePage.clickRentalAct()
        chargePage.enterEffDate()
        chargePage.enterEndDate()
        chargePage.enterAmount()
        chargePage.clickUpdate()
    //    chargePage.clickSave()
    }
    expandLinkedForms(){
        chargePage.clickLinkedForms()
    }
}