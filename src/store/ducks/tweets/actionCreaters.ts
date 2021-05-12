import { Action } from 'redux'
import { LoadingState, TweetsState } from './contracts/state'

export enum TweetsActionsType {
  SET_TWEETS = 'tweets/SET_TWEETS',
  FETCH_TWEETS = 'tweets/FETCH_TWEETS',
  SET_LOADING_STATE = 'tweets/LOADING_STATE',
}

export interface FetchTweetsActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.FETCH_TWEETS
}

export interface SetTweetsActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_TWEETS
  payload: TweetsState['items']
}

export interface SetTweetsLoadingStateActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_LOADING_STATE
  payload: LoadingState
}

export const fetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetsActionsType.FETCH_TWEETS,
})

export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
})

export const setLoadingStateTweets = (
  payload: LoadingState
): SetTweetsLoadingStateActionInterface => ({
  type: TweetsActionsType.SET_LOADING_STATE,
  payload,
})

export type TweetsActions =
  | SetTweetsActionInterface
  | SetTweetsLoadingStateActionInterface
  | FetchTweetsActionInterface
