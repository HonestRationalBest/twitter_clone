import { Action } from 'redux'
import { Tweet } from '../tweets/contracts/state'
import { LoadingState, TweetState } from './contracts/state'

export enum TweetActionsType {
  SET_DATA = 'tweet/SET_DATA',
  FETCH_DATA = 'tweet/FETCH_DATA',
  SET_LOADING_STATE = 'tweet/LOADING_STATE',
}

export interface FetchTweetActionInterface extends Action<TweetActionsType> {
  type: TweetActionsType.FETCH_DATA
  payload: string
}

export interface SetTweetActionInterface extends Action<TweetActionsType> {
  type: TweetActionsType.SET_DATA
  payload: TweetState['data']
}

export interface SetTweetLoadingStateActionInterface extends Action<TweetActionsType> {
  type: TweetActionsType.SET_LOADING_STATE
  payload: LoadingState
}

export const fetchTweetData = (payload: string): FetchTweetActionInterface => ({
  type: TweetActionsType.FETCH_DATA,
  payload,
})

export const setTweet = (payload: TweetState['data']): SetTweetActionInterface => ({
  type: TweetActionsType.SET_DATA,
  payload,
})

export const setLoadingStateTweet = (
  payload: LoadingState
): SetTweetLoadingStateActionInterface => ({
  type: TweetActionsType.SET_LOADING_STATE,
  payload,
})

export type TweetActions =
  | SetTweetActionInterface
  | SetTweetLoadingStateActionInterface
  | FetchTweetActionInterface
