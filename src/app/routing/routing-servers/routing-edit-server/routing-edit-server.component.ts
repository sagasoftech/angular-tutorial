import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { RoutingServersService } from '../routing-servers.service';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-routing-edit-server',
  templateUrl: './routing-edit-server.component.html',
  styleUrls: ['./routing-edit-server.component.css']
})
export class RoutingEditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;
  serverId: number;

  constructor(private serversService: RoutingServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    this.route.queryParams  
      .subscribe(
        (queryParams: Params) => {
          this.allowEdit = queryParams['allowEdit'] === '1'? true : false;
        }
      );
    this.route.fragment.subscribe();
    this.serverId = this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(+this.serverId);

    this.route.params  
    .subscribe(
      (params: Params) => {
        this.serverId = +params['id'];
      }
    );

    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.allowEdit){
      return true;
    }
    if ((this.serverName != this.server.name || this.serverStatus != this.server.status) && !this.changesSaved) {
      return confirm('Do you want to discard the changes?');
    }else{
      return true;
    }
  }

}
