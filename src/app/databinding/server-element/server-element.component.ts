import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements OnInit {

  @Input('srvElement') element: {name: string, type: string, content: string}

  constructor(){
    console.log('Contructor called !')
  }

  ngOnInit(){
    console.log('ngOnInit called !')
  }
}
