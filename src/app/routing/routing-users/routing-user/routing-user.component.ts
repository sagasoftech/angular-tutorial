import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-routing-user',
  templateUrl: './routing-user.component.html',
  styleUrls: ['./routing-user.component.css']
})
export class RoutingUserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }

    this.paramSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.user.id = params['id'],
          this.user.name = params['name']
        }
      );
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }

}
