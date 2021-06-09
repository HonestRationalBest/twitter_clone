import { Action } from 'redux'
import { LoadingState, UsersState } from './contracts/state'

export enum UsersActionsType {
  SET_USERS = 'popularChannels/SET_USERS',
  FETCH_USERS = 'popularChannels/FETCH_USERS',
  SET_LOADING_STATE = 'popularChannels/LOADING_STATE',
}

export interface FetchUsersActionInterface extends Action<UsersActionsType> {
  type: UsersActionsType.FETCH_USERS
}

export interface SetUsersActionInterface extends Action<UsersActionsType> {
  type: UsersActionsType.SET_USERS
  payload: UsersState['items']
}

export interface SetUsersLoadingStateActionInterface extends Action<UsersActionsType> {
  type: UsersActionsType.SET_LOADING_STATE
  payload: LoadingState
}

export const fetchUsers = (): FetchUsersActionInterface => ({
  type: UsersActionsType.FETCH_USERS,
})

export const setUsers = (payload: UsersState['items']): SetUsersActionInterface => ({
  type: UsersActionsType.SET_USERS,
  payload,
})

export const setLoadingStateUsers = (
  payload: LoadingState
): SetUsersLoadingStateActionInterface => ({
  type: UsersActionsType.SET_LOADING_STATE,
  payload,
})

export type UsersActions =
  | SetUsersLoadingStateActionInterface
  | SetUsersActionInterface
  | FetchUsersActionInterface
