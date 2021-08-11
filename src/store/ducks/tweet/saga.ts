//@ts-nocheck
import { call, put, takeLatest } from 'redux-saga/effects'
import { TweetsApi } from '../../../services/api/tweetsApi'
import {
  FetchTweetActionInterface,
  setLoadingStateTweet,
  setTweet,
  TweetActionsType,
} from './actionCreaters'
import { LoadingState } from './contracts/state'

export function* fetchTweetRequest({ payload: tweetId }: FetchTweetActionInterface) {
  try {
    const data: Tweet = yield call(TweetsApi.fetchTweet, tweetId)
    yield put(setTweet(data))
  } catch (e) {
    yield put(setLoadingStateTweet(LoadingState.ERROR))
  }
}

export function* tweetSaga() {
  yield takeLatest(TweetActionsType.FETCH_DATA, fetchTweetRequest)
}
