import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { User } from '../../../models/user.model';
import { AppState } from '../../../root-store/app.reducer';
import * as UserStore from '../../../root-store/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: []
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  user: User = null;
  loading: boolean;
  loaded: boolean;
  error: any;

  subscription: Subscription;

  constructor(private store: Store<AppState>, private router: ActivatedRoute) { }

  ngOnInit() {
    this.subscription =
    this.store.select('User').subscribe(
      state => {
        this.user = state.user;
        this.loading = state.loading;
        this.loaded = state.loaded;
        this.error = state.error;
      }
    );

    this.router.params.subscribe(
      params => {
        const id = params['id'];
        this.store.dispatch(new UserStore.GetUserAction(id));
      }
    );
  }

  ngOnDestroy() {
    if (!isNullOrUndefined(this.subscription)) {
      this.subscription.unsubscribe();
    }
  }
}
