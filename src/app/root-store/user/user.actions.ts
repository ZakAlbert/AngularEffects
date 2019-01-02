import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export enum Type {
  GET_USER = '[User] Get User',
  GET_USER_SUCCESS = '[User] Get User Success',
  GET_USER_FAIL = '[User] Get User Fail'
}

export class GetUserAction implements Action {
  readonly type = Type.GET_USER;
  constructor(public id: string) {}
}

export class GetUserSuccessAction implements Action {
  readonly type = Type.GET_USER_SUCCESS;
  constructor(public user: User) {}
}

export class GetUserFailAction implements Action {
  readonly type = Type.GET_USER_FAIL;
  constructor(public payload: any) {}
}

export type Actions = GetUserAction | GetUserSuccessAction | GetUserFailAction;
