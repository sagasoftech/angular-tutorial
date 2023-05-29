import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RoutingEditServerComponent } from "./routing/routing-servers/routing-edit-server/routing-edit-server.component";
import { RoutingServerComponent } from "./routing/routing-servers/routing-server/routing-server.component";
import { RoutingServersComponent } from "./routing/routing-servers/routing-servers.component";
import { RoutingUserComponent } from "./routing/routing-users/routing-user/routing-user.component";
import { RoutingUsersComponent } from "./routing/routing-users/routing-users.component";
import { RoutingHomeComponent } from "./routing/routing-home/routing-home.component";

const appRoutes: Routes = [
    {path: '', component: RoutingHomeComponent},
    {path: 'users', component: RoutingUsersComponent, children: [
      {path: ':id/:name', component: RoutingUserComponent}
    ]},
    {path: 'servers', component: RoutingServersComponent, children: [
      {path: ':id', component: RoutingServerComponent},
      {path: ':id/edit', component: RoutingEditServerComponent}
    ]},
    {path: 'not-found', component: PageNotFoundComponent},
    {path: '**', redirectTo: '/not-found'}
  ]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{

}