import { PropertyInfoPage } from "../Pages/PropertyInfoPage.cy";
const propInfoPage= new PropertyInfoPage();
export class PropertyInfoRunner{
    PropertyInfoRunner(){

    }
    assertPropertyInfoPage(){
        cy.readFile('cypress/fixtures/property.json').then((data)=>{
            propInfoPage.assertPropertyName(data[0].PropertyName)
            propInfoPage.assertPropAdrres(data[0].PropAddress1)
        })
    }
    closePropertyInfo(){
        // var url=propInfoPage.getURL()
        // var propId=url.substring(url.indexOf('?')+1)
        // console.log(propId)
        propInfoPage.clickCloseButton()
    }
    clickAddSpace(){
        propInfoPage.clickAddSpace()
        propInfoPage.clickAdd()
    }
    clickAddLease(){
        propInfoPage.clickAddLease()
    }
    getPropId(){
        propInfoPage.getpropId()
    }
}