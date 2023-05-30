import { CreatePropertyPage } from "../Pages/createPropertyPage.cy";
import { Utils } from "../Utils/utils.cy";
const util= new Utils();
const createPropPage= new CreatePropertyPage();
export class CreatePropertyRunner{
    
    CreatePropertyRunner(){

    }
    enterInformation(){
        const propFileName='cypress/fixtures/property.json'
        var x=util.generatePropertyName()
        var propInfo= new Array()
        propInfo={
            "PropertyName":x,
            "PropertyCode":x,
            "PropAddress1":"123,LA,California",
            "Country":"United States",
            "State":"California",
            "Postal":"90000",
            "City":"Los Angles",
            "CodeType":"DEFAULT",
            "Status":"Active",
            "Currency":"USD",
            "ChartType":"QA Testing",
            "SQFTRentable":"250000000",
            "BuildingList":"Building List",
            "Region":"Central",
            "AssetType":"Leased"

        
        }
        util.writeJson(propFileName,propInfo);
        cy.readFile(propFileName).then((data)=>{
            createPropPage.setLocationName(data[0].PropertyName)
            createPropPage.setLocationCode(data[0].PropertyCode)
            createPropPage.setPropertyAddress1(data[0].PropAddress1)
            createPropPage.selectCountry(data[0].Country)
            createPropPage.selectState(data[0].State)
            createPropPage.setPostal(data[0].Postal)
            createPropPage.setCity(data[0].City)
            createPropPage.selectCodeType(data[0].CodeType)
            createPropPage.selectStatus(data[0].Status)
            createPropPage.selectCurrecy(data[0].Currency)
            createPropPage.selectChartType(data[0].ChartType)
            createPropPage.setSqFtRentable(data[0].SQFTRentable)
            createPropPage.selectBuildingList(data[0].BuildingList)
            createPropPage.selectRegion(data[0].Region)
            createPropPage.selectAssetType(data[0].AssetType)
            createPropPage.checkManageSpace()
            createPropPage.clickSave()
            
        })
    }
}