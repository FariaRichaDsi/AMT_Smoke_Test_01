import { LoginPage } from "../Pages/loginpage.cy";
const loginPage= new LoginPage();
export class LoginTestRunner{
    LoginTestRunner(){

    }
    doLoginCorrect(){
        var urlFileName='cypress/fixtures/urls.json'
        var loginCredFileName='cypress/fixtures/loginCredentialsQA.json'
        cy.readFile(urlFileName).then((url)=>{
            loginPage.visitPageQA(url.QA);
        })
        cy.readFile(loginCredFileName).then((loginCred)=>{
            loginPage.setUserName(loginCred[0].userName);
            loginPage.setPassword(loginCred[0].password);
            loginPage.setClientNumber(loginCred[0].clientNum);
            loginPage.clickSubmit();
        })
      
      

    }
}