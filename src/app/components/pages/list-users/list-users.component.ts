import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../root-store/app.reducer';
import { User } from '../../../models/user.model';
import * as UserActions from '../../../root-store/users';
import { Subscription } from 'rxjs';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styles: []
})
export class ListUsersComponent implements OnInit, OnDestroy {

  userList: User[] = [];
  loading: boolean;
  loaded: boolean;
  error: any;

  subscription: Subscription;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.subscription =
    this.store.select('List').subscribe(
      state => {
        this.userList = state.users;
        this.loading = state.loading;
        this.loaded = state.loaded;
        this.error = state.error;
      }
    );

    this.store.dispatch(new UserActions.GetUsersAction());
  }

  ngOnDestroy() {
    if (!isNullOrUndefined(this.subscription)) {
      this.subscription.unsubscribe();
    }
  }
}
