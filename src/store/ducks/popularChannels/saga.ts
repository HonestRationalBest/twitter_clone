//@ts-nocheck
import { call, put, takeLatest } from 'redux-saga/effects'
import { UsersApi } from '../../../services/api/usersApi'
import { setLoadingStateUsers, setUsers, UsersActionsType } from './actionCreaters'
import { LoadingState } from './contracts/state'

export function* fetchUsersRequest() {
  try {
    const items = yield call(UsersApi.fetchUsers)
    yield put(setUsers(items))
  } catch (e) {
    yield put(setLoadingStateUsers(LoadingState.ERROR))
  }
}

export function* usersSaga() {
  yield takeLatest(UsersActionsType.FETCH_USERS, fetchUsersRequest)
}
