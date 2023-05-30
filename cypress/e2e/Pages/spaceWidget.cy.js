
export class SpaceWidget{
    SpaceWidget(){

    }
    enterSpaceName(spaceName){
        cy.get('.rgEditRow').find('td').eq(1).type(spaceName)
    }
    enterFloorNum(floorNum){
        cy.get('.rgEditRow').find('td').eq(2).type(floorNum)
    }
    enterRentableLease(rentableLease){
        cy.get('.rgEditRow').find('td').eq(3).type(rentableLease)
    }
    enterStatus(status){
        cy.get('.rgEditRow').find('td').eq(4).type(status).type('{enter}')
    }
    clickSave(){
        cy.get('input[title="Insert"]').click({force:true})
        cy.wait(2000)
    }


}