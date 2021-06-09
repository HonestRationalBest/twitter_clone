import { combineReducers } from 'redux'
import { tweetsReducer } from './ducks/tweets/reducer'
import { usersReducer } from './ducks/popularChannels/reducer'
import { trendsReducer } from './ducks/trends/reducer'

export const rootReduceer = combineReducers({
  tweets: tweetsReducer,
  popularChannels: usersReducer,
  trends: trendsReducer,
})
