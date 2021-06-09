//@ts-nocheck
import { call, put, takeLatest } from 'redux-saga/effects'
import { TrendsApi } from '../../../services/api/trendsApi'
import { setLoadingStateTrends, setTrends, TrendsActionsType } from './actionCreaters'
import { LoadingState } from './contracts/state'

export function* fetchTweetsRequest() {
  try {
    const items = yield call(TrendsApi.fetchTrends)
    yield put(setTrends(items))
  } catch (e) {
    yield put(setLoadingStateTrends(LoadingState.ERROR))
  }
}

export function* trendsSaga() {
  yield takeLatest(TrendsActionsType.FETCH_TRENDS, fetchTweetsRequest)
}
