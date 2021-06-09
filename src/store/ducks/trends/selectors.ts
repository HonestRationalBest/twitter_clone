import { createSelector } from 'reselect'
import { RootState } from '../../store'
import { LoadingState, TrendsState } from './contracts/state'

export const selectTrends = (state: RootState): TrendsState => state.trends

export const selectTrendsItems = createSelector(selectTrends, (trends) => trends.items)

export const selectIsTrendsLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING

export const selectIsTrendsLoaded = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADED

export const selectLoadingState = (state: RootState): LoadingState =>
  selectTrends(state).loadingState
