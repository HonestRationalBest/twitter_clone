import produce, { Draft } from 'immer'
import { TweetActions, TweetActionsType } from './actionCreaters'
import { TweetState, LoadingState } from './contracts/state'

const initialTweetState: TweetState = {
  data: undefined,
  loadingState: LoadingState.NEVER,
}

export const tweetReducer = produce((draft: Draft<TweetState>, action: TweetActions) => {
  switch (action.type) {
    case TweetActionsType.SET_DATA:
      draft.data = action.payload
      draft.loadingState = LoadingState.LOADED
      break
    case TweetActionsType.FETCH_DATA:
      draft.data = undefined
      draft.loadingState = LoadingState.LOADING
      break
    case TweetActionsType.SET_LOADING_STATE:
      draft.loadingState = action.payload
      break
  }
}, initialTweetState)
