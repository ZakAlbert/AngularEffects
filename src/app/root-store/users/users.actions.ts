import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export enum Type {
  GET_USERS = '[Users] Get Users',
  GET_USERS_SUCCESS = '[Users] Get Users Success',
  GET_USERS_FAIL = '[Users] Get Users Fail'
}

export class GetUsersAction implements Action {
  readonly type = Type.GET_USERS;
}

export class GetUsersSuccessAction implements Action {
  readonly type = Type.GET_USERS_SUCCESS;
  constructor(public users: User[]) {}
}

export class GetUsersFailAction implements Action {
  readonly type = Type.GET_USERS_FAIL;
  constructor(public payload: any) {}
}

export type Actions = GetUsersAction | GetUsersSuccessAction | GetUsersFailAction;
