import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { RoutingServersService } from '../routing-servers.service';

@Component({
  selector: 'app-routing-server',
  templateUrl: './routing-server.component.html',
  styleUrls: ['./routing-server.component.css']
})
export class RoutingServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: RoutingServersService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.params['id'];
    this.server = this.serversService.getServer(id);

    this.route.params
      .subscribe(
        (params: Params) => {
          this.server = this.serversService.getServer(+params['id']);
        }
      );
  }

}
