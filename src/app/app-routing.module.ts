import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";


const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/task-board",
    pathMatch: "full",
  },
  {
    path: "ftp",
    loadChildren: () =>
        import("./pages/ftp/ftp.module").then(
            (m) => m.FtpModule
        ),
  },
  {
    path: "task-board",
    loadChildren: () =>
        import("./pages/task-board/task-board.module")
            .then((m) => m.TaskBoardModule),
  },
];


export const routes: Routes = [
  {
    path: "",
    redirectTo: "/ftp",
    pathMatch: "full",
  },
  {
    path: "",
    children: appRoutes,
  },
  {
    path: "**",
    redirectTo: "/ftp",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
