//@ts-nocheck
import { call, put, takeLatest } from 'redux-saga/effects'
import { TweetsApi } from '../../../services/api/tweetsApi'
import { setLoadingStateTweets, setTweets, TweetsActionsType } from './actionCreaters'
import { LoadingState } from './contracts/state'

export function* fetchTweetsRequest() {
  try {
    const items = yield call(TweetsApi.fetchTweets)
    yield put(setTweets(items))
  } catch (e) {
    yield put(setLoadingStateTweets(LoadingState.ERROR))
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
}
