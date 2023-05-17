import { Component } from '@angular/core';

@Component({
  //selector: 'app-servers',
  selector: '.app-servers',
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  allowNewServer = false;
  serverCreateStatus = 'Server does not exist, click Add Server';
  serverName = 'Init Server';
  serverCreated = false;
  servers = [];

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onServerCreation(){
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreateStatus = "Server created ! New name is - " + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
