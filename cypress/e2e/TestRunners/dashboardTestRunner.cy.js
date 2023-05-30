import { DashboardPage } from "../Pages/dashboardPage.cy";
const dashboardPage= new DashboardPage()
export class DashboardRunner{
    DashboardRunner(){

    }
    assertDashboard(){
        dashboardPage.assertDashboardText('Dashboard')
        dashboardPage.assertSearchButton();
    }
    clickAddLocationPI(){
        dashboardPage.clickPortfolioInsight()
        dashboardPage.clickPortfolioAdd()
        dashboardPage.clickAddLocation()
    }
    visit(){
        dashboardPage.visitDashboard()
    }
    clickAddLeasePI(){
        dashboardPage.clickPortfolioInsight()
        dashboardPage.clickAddLease()
    }

}