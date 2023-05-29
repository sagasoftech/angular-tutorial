import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  users: string[];
  userChanges: number = 0;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.users = this.usersService.activeUsers;
  }

  onSetToInactive(id: number){
    this.usersService.setToInactive(id);
    this.userChanges = this.usersService.getActiveToInactiveCount();
  }
}
