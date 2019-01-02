import { User } from '../../models/user.model';
import * as UserActions from './user.actions';


export interface UserState {
  user: User;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initialState: UserState = {
  user: null,
  loaded: false,
  loading: false,
  error: null
};

export function UserReducer(state = initialState, action: UserActions.Actions): UserState {
  switch (action.type) {
    case UserActions.Type.GET_USER:          return _getUser(state);
    case UserActions.Type.GET_USER_SUCCESS : return _getUserSuccess(state, action);
    case UserActions.Type.GET_USER_FAIL:     return _getUserFail(state, action);
    default:  return state;
  }
}

function _getUser(state: UserState) {
  return {
    ...state,
    loading: true,
    error: null
  };
}

function _getUserSuccess(state: UserState, action: UserActions.GetUserSuccessAction) {
  return {
    ...state,
    loading: false,
    loaded: true,
    user: action.user
  };
}

function _getUserFail(state: UserState, action: UserActions.GetUserFailAction) {
  return {
    ...state,
    user: null,
    loading: false,
    loaded: false,
    error: {
      status: action.payload.status,
      message: action.payload.message,
      url: action.payload.url
    }
  };
}
