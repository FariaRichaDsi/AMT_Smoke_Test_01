
import { SpaceWidget } from "../Pages/spaceWidget.cy";
import { Utils } from "../Utils/utils.cy";
const spaceWidget = new SpaceWidget
const util = new Utils

export class spaceWidgetRunner {
    spaceWidgetRunner() {

    }
    enterInfo() {
        const spaceFileName = 'cypress/fixtures/space.json'
        var x = util.generateSpaceName()
        var spaceInfo = new Array()
        spaceInfo = {
            "SpaceName": x,
            "Floor": "1",
            "RentableLease": "1",
            "Status": "Leasable"
        }
        util.writeJson(spaceFileName,spaceInfo)
        cy.readFile(spaceFileName).then((data) => {
            spaceWidget.enterSpaceName(data[0].SpaceName)
            spaceWidget.enterFloorNum(data[0].Floor)
            spaceWidget.enterRentableLease(data[0].RentableLease)
            spaceWidget.enterStatus(data[0].Status)
            spaceWidget.clickSave()
        })
    }
}