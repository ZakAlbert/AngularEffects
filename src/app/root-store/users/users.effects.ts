import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { switchMap, map, catchError, delay } from 'rxjs/operators';
import { of } from 'rxjs';
import * as UserActions from './users.actions';

@Injectable()
export class UsersEffects {

  constructor(
    private actions$: Actions,
    private userService: UsersService) {}

  @Effect()
  getUsers$ = this.actions$.pipe(
    ofType(UserActions.Type.GET_USERS),
    switchMap(
      () => {
        return this.userService.getUserList()
              .pipe(
                // delay(1000),
                map(usersList => new UserActions.GetUsersSuccessAction(usersList)),
                catchError(error => of(new UserActions.GetUsersFailAction(error)) )
              );
      }
    )
  );

}
