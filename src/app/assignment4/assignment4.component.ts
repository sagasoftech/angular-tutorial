import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.css']
})
export class Assignment4Component {

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(num: number){
    if(num % 2 === 0){
      this.evenNumbers.push(num);
    }else{
      this.oddNumbers.push(num);
    }
  }
}
