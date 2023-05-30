
import { SpaceEntryPage } from "../Pages/spaceEntryPage.cy";
import { Utils } from "../Utils/utils.cy";
const spacePage = new SpaceEntryPage()
const util = new Utils();
export class SpaceEntryRunner {
    SpaceEntryRunner() {

    }
    checkLink(){
        spacePage.checkLinked()
    }
    clickUpdate(){
        spacePage.clickUpdate()
    }
    closeWin(){
        cy.readFile('cypress/fixtures/genUrls.json').then((data)=>{
           // var url=data[0].LeaseUrl
           cy.visit(data[0].LeaseUrl)
        })
    }
    enterInfoSpace() {
        var x = util.generateSpaceName()
        var arr = new Array()
        var spaceFile = 'cypress/fixtures/space.json'
        arr={
            "SpaceName":x,
            "Floor":"1",
            "RentableLease":"1"

        }
        util.writeJson(spaceFile,arr)
        // cy.readFile('cypress/fixtures/property.json').then((data)=>{
        //     spacePage.enterLocation(data[0].PropertyName)
        // })
        cy.readFile(spaceFile).then((data)=>{
           spacePage.enterSpaceName(data[0].SpaceName)
           spacePage.enterNoFloor(data[0].Floor)
           spacePage.checkLinked()
           spacePage.enterRentableLease(data[0].RentableLease)
           spacePage.clickSave()
        })
    }
}