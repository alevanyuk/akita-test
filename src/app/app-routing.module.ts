import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";


const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/task-board",
    pathMatch: "full",
  },
  // {
  //   path: "home",
  //   loadChildren: () =>
  //       import("./components/dashboard/dashboard.module").then(
  //           (m) => m.AppDashboardPageModule
  //       ),
  // },
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
    redirectTo: "/task-board",
    pathMatch: "full",
  },
  {
    path: "",
    children: appRoutes,
  },
  {
    path: "**",
    redirectTo: "/task-board",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
