import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  @Output('intervalFired') intervalFired = new EventEmitter<number>();

  interval;
  currNumber = 0;

  onStartGame(){
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.currNumber + 1);
      this.currNumber++;
      //console.log(this.currNumber);
      }, 1000);
  }

  onPauseGame(){
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

}
