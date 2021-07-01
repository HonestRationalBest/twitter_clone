import { all } from 'redux-saga/effects'
import { usersSaga } from './ducks/popularChannels/saga'
import { tweetsSaga } from './ducks/tweets/saga'
import { trendsSaga } from './ducks/trends/saga'
import { tweetSaga } from './ducks/tweet/saga'

export default function* rootSaga() {
  yield all([tweetsSaga(), usersSaga(), trendsSaga(), tweetSaga()])
}
