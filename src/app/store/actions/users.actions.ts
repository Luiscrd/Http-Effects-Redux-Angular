import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.interface';

export const loadUsers = createAction('[Users] LoadUsers');

export const loadUsersSuccess = createAction('[Users] LoadUsersSuccess', props<{users: User[]}>());

export const loadUsersError = createAction('[Users] LoadUsersError', props<{payload: any}>());
