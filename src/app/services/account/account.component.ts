import { Component, EventEmitter, Input, Output, inject  } from '@angular/core';
//import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  //private loggingService?: LoggingService; // <- must be added

  constructor(private accountService: AccountService){
    //this.loggingService = inject(LoggingService);
  }

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    //this.loggingService.logStatusChange(status);
  }
}
