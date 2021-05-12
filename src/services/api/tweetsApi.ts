import axios from 'axios'
import { TweetsState } from '../../store/ducks/tweets/contracts/state'

export const TweetsApi = {
  fetchTweets(): Promise<TweetsState['items']> {
    return axios
      .get('https://cors-anywhere.herokuapp.com/https://trycode.pw/c/7Y4ME.json')
      .then(({ data }) => data)
  },
}
