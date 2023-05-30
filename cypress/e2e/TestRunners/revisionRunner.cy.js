import { revisionPage } from "../Pages/revisionPage.cy";
const revPage=new revisionPage()
export class revisionRunner{
    revisionRunner(){

    }
    clickRefresh(){
        revPage.clickIcon()
    }

}