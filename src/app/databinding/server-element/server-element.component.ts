import { 
  Component, 
  Input, 
  ViewEncapsulation, 
  OnInit, 
  OnChanges, 
  SimpleChanges, 
  DoCheck,
  AfterContentInit,
  AfterContentChecked} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck,
  AfterContentInit,
  AfterContentChecked {

  @Input('srvElement') element: {name: string, type: string, content: string}

  constructor(){
    console.log('Contructor called !');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called !');
    console.log(changes);
  }

  ngOnInit(){
    console.log('ngOnInit called !');
  }

  ngDoCheck(){
    console.log('ngDoCheck called !');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called !');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called !');
  }
}
