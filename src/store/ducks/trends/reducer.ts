import produce, { Draft } from 'immer'
import { TrendsActions, TrendsActionsType } from './actionCreaters'
import { TrendsState, LoadingState } from './contracts/state'

const initialTrendsState: TrendsState = {
  items: [],
  loadingState: LoadingState.NEVER,
}

export const trendsReducer = produce((draft: Draft<TrendsState>, action: TrendsActions) => {
  switch (action.type) {
    case TrendsActionsType.SET_TRENDS:
      draft.items = action.payload
      draft.loadingState = LoadingState.LOADED
      break
    case TrendsActionsType.FETCH_TRENDS:
      draft.items = []
      draft.loadingState = LoadingState.LOADING
      break
    case TrendsActionsType.SET_LOADING_STATE:
      draft.loadingState = action.payload
      break
  }
}, initialTrendsState)
