import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FtpComponent} from "./ftp.component";

const routes: Routes = [
    {
        path: "",
        component: FtpComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FtpRoutingModule {}


