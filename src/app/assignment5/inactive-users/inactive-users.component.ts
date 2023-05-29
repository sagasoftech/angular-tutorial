import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users: string[];
  userChanges: number = 0;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.users = this.usersService.inactiveUsers;
  }

  onSetToActive(id: number){
    this.usersService.setToActive(id);
    this.userChanges = this.usersService.getInactiveToActiveCount();
  }
}
