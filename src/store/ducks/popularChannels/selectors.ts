import { createSelector } from 'reselect'
import { RootState } from '../../store'
import { LoadingState, UsersState } from './contracts/state'

export const selectUsers = (state: RootState): UsersState => state.popularChannels

export const selectUsersItems = createSelector(
  selectUsers,
  (popularChannels) => popularChannels.items
)

export const selectIsUsersLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING

export const selectIsUsersLoaded = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADED

export const selectLoadingState = (state: RootState): LoadingState =>
  selectUsers(state).loadingState
