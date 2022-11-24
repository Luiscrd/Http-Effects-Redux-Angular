import { createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersSuccess, loadUsersError } from '../actions/users.actions';
import { User } from '../../models/user.interface';

export interface UserState {

  users: User[],

  loaded: boolean,

  loading: boolean,

  error: any,

}

export const usersInitialState: UserState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
}

export const counterReducer = createReducer(
  usersInitialState,

  on(loadUsers, (state) => ({...state, loading: true})),

  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [...users]
  })),

  on(loadUsersError, (state, {payload}) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload
  })),

);
