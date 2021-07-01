import { combineReducers } from 'redux'
import { tweetsReducer } from './ducks/tweets/reducer'
import { usersReducer } from './ducks/popularChannels/reducer'
import { trendsReducer } from './ducks/trends/reducer'
import { tweetReducer } from './ducks/tweet/reducer'

export const rootReduceer = combineReducers({
  tweets: tweetsReducer,
  tweet: tweetReducer,
  popularChannels: usersReducer,
  trends: trendsReducer,
})
