import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .online{
        color: white;
    }
`]
})
export class ServerComponent{

    serverId = 10;
    serverStatus = 'Offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5? 'Online':'Offline'
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'Offline'? 'red':'green';
    }
}