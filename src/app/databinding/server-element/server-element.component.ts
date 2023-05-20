import { 
  Component, 
  Input, 
  ViewEncapsulation, 
  OnInit, 
  OnChanges, 
  SimpleChanges, 
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ContentChild,
  ElementRef} from '@angular/core';

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
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input('srvElement') element: {name: string, type: string, content: string}
  @ContentChild('contentParagraph') paragraph: ElementRef;

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
    console.log('Text contenet of Paragraph' + this.paragraph.nativeElement.textContent); 
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called !');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called !');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called !');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called !');
  }
}
