

export class Utils {


    Utils() {

    }
    generateRandomNum() {

        var randomInt = Math.floor(Math.random() * 100);
        return randomInt;
    }
    generatePropertyName() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var min = String(today.getMinutes()).padStart(2, '0');
        today = mm + '/' + dd + ':' + min;
        var randomNum = this.generateRandomNum();
        var Prop_Test = 'Prop_Test_' + today + '_' + randomNum;
        return Prop_Test;
    }
    generateLeaseName() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yy = String(today.getFullYear() + 1).padStart(4, '0');
        today = mm + dd + yy;
        var leaseName = 'Expense Lease FH ' + today+ '.'+ this.generateRandomNum()
        return leaseName
    }
    generateSpaceName() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yy = String(today.getFullYear() + 1).padStart(4, '0');
        today = mm + dd + yy;
        var spaceName = 'FH  '  + this.generateRandomNum()
        return spaceName
    }


    writeJson(fileName, valArray) {
        var obj = new Array()
        obj.push(valArray)
        cy.writeFile(fileName, JSON.stringify(obj))

    }
    appendJson(fileName, val) {
        cy.readFile(fileName).then((data) => {

          
            data.push(val)
            cy.writeFile(fileName, JSON.stringify(data))
        })
    }
    readJson(fileName) {
        var table = new Array();
        table = fetch(fileName)
        return table;


    }


}