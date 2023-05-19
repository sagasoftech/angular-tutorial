import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  serverElements = [{name: 'TestServer', type: 'server', content: 'This is a Test Server'}];

}
