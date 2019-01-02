import { ActionReducerMap } from '@ngrx/store';
import * as UsersStore from './users';
import * as UserStore from './user';

export interface AppState {
  List: UsersStore.UsersState;
  User: UserStore.UserState;
}

export const AppReducer: ActionReducerMap<AppState> = {
  List: UsersStore.UsersReducer,
  User: UserStore.UserReducer
};

