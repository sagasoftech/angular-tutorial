import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CockpitComponent } from './databinding/cockpit/cockpit.component';
import { ServerElementComponent } from './databinding/server-element/server-element.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { GameControlComponent } from './assignment4/game-control/game-control.component';
import { OddComponent } from './assignment4/odd/odd.component';
import { EvenComponent } from './assignment4/even/even.component';
import { DirectivesComponent } from './directives/directives.component';
import { BasicHighlightDirective } from './directives/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight/better-highlight.directive';
import { UnlessDirective } from './directives/better-highlight/unless.directive';
import { ServicesComponent } from './services/services.component';
import { AccountComponent } from './services/account/account.component';
import { NewAccountComponent } from './services/new-account/new-account.component';
import { Assignment5Component } from './assignment5/assignment5.component';
import { InactiveUsersComponent } from './assignment5/inactive-users/inactive-users.component';
import { ActiveUsersComponent } from './assignment5/active-users/active-users.component';
import { RoutingComponent } from './routing/routing.component';
import { RoutingHomeComponent } from './routing/routing-home/routing-home.component';
import { RoutingUsersComponent } from './routing/routing-users/routing-users.component';
import { RoutingServersComponent } from './routing/routing-servers/routing-servers.component';
import { RoutingUserComponent } from './routing/routing-users/routing-user/routing-user.component';
import { RoutingEditServerComponent } from './routing/routing-servers/routing-edit-server/routing-edit-server.component';
import { RoutingServerComponent } from './routing/routing-servers/routing-server/routing-server.component';
import { RoutingServersService } from './routing/routing-servers/routing-servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth-service';
import { AuthGuard } from './auth-guard';
import { CanDeactivateGuard } from './routing/routing-servers/routing-edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './routing/error-page/error-page.component';
import { ServerResolver } from './routing/routing-servers/routing-server/server-resolver.service';

//import { LoggingService } from './logging.service';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    Assignment1Component,
    Assignment3Component,
    DatabindingComponent,
    CockpitComponent,
    ServerElementComponent,
    Assignment4Component,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    DirectivesComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    ServicesComponent,
    AccountComponent,
    NewAccountComponent,
    Assignment5Component,
    InactiveUsersComponent,
    ActiveUsersComponent,
    RoutingComponent,
    RoutingHomeComponent,
    RoutingUsersComponent,
    RoutingServersComponent,
    RoutingUserComponent,
    RoutingEditServerComponent,
    RoutingServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [RoutingServersService, AuthService, AuthGuard, CanDeactivateGuard, ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
