import { User } from '../../models/user.model';
import * as UsersActions from './users.actions';


export interface UsersState {
  users: User[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initialState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
};

export function UsersReducer(state = initialState, action: UsersActions.Actions): UsersState {
  switch (action.type) {
    case UsersActions.Type.GET_USERS:         return _getUsers(state);
    case UsersActions.Type.GET_USERS_SUCCESS : return _getUsersSuccess(state, action);
    case UsersActions.Type.GET_USERS_FAIL:     return _getUsersFail(state, action);
    default:  return state;
  }
}

function _getUsers(state: UsersState) {
  return {
    ...state,
    loading: true,
    error: null
  };
}

function _getUsersSuccess(state: UsersState, action: UsersActions.GetUsersSuccessAction) {
  return {
    ...state,
    loading: false,
    loaded: true,
    users: [...action.users]
  };
}

function _getUsersFail(state: UsersState, action: UsersActions.GetUsersFailAction) {
  return {
    ...state,
    loading: false,
    loaded: false,
    error: {
      status: action.payload.status,
      message: action.payload.message,
      url: action.payload.url
    }
  };
}
