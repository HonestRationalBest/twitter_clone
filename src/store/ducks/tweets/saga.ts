// @ts-nocheck
import { call, put, takeLatest } from 'redux-saga/effects'
import { TweetsApi } from '../../../services/api/tweetsApi'
import {
  addTweet,
  FetchAddTweetActionInterface,
  setAddFormState,
  setLoadingStateTweets,
  setTweets,
  TweetsActionsType,
} from './actionCreaters'
import { AddFormState, LoadingState } from './contracts/state'

export function* fetchTweetsRequest() {
  try {
    const items = yield call(TweetsApi.fetchTweets)
    yield put(setTweets(items))
  } catch (e) {
    yield put(setLoadingStateTweets(LoadingState.ERROR))
  }
}

export function* fetchAddTweetsRequest({ payload }: FetchAddTweetActionInterface) {
  try {
    const data = {
      _id: Math.random().toString(36).substr(2),
      text: payload,
      user: {
        fullname: 'Test user',
        username: 'test',
        avatarUrl: 'https://source.unsplash.com/random/100X100?6',
      },
    }
    const item = yield call(TweetsApi.fetchAddTweet, data)
    yield put(addTweet(item))
  } catch (e) {
    yield put(setAddFormState(AddFormState.ERROR))
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
  yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetsRequest)
}
