import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component {

  showSecret = false;
  arrClicks = [];
  
  toggleDisplay(){
    this.showSecret = !this.showSecret;
    this.arrClicks.push(this.arrClicks.length + 1);
  }

}
