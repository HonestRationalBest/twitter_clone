import produce, { Draft } from 'immer'
import { UsersActions, UsersActionsType } from './actionCreaters'
import { UsersState, LoadingState } from './contracts/state'

const initialUsersState: UsersState = {
  items: [],
  loadingState: LoadingState.NEVER,
}

export const usersReducer = produce((draft: Draft<UsersState>, action: UsersActions) => {
  switch (action.type) {
    case UsersActionsType.SET_USERS:
      draft.items = action.payload
      draft.loadingState = LoadingState.LOADED
      break
    case UsersActionsType.FETCH_USERS:
      draft.items = []
      draft.loadingState = LoadingState.LOADING
      break
    case UsersActionsType.SET_LOADING_STATE:
      draft.loadingState = action.payload
      break
  }
}, initialUsersState)
