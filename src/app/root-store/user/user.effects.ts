import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { switchMap, map, catchError, delay } from 'rxjs/operators';
import { of } from 'rxjs';
import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private userService: UsersService) {}

  @Effect()
  getUser$ = this.actions$.pipe(
    ofType(UserActions.Type.GET_USER),
    switchMap(
      (action) => {

        return this.userService.getUser(action['id'])
              .pipe(
                // delay(1000),
                map(user => new UserActions.GetUserSuccessAction(user)),
                catchError(error => of(new UserActions.GetUserFailAction(error)) )
              );
      }
    )
  );

}
