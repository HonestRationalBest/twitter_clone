import axios from 'axios'
import { Tweet, TweetsState } from '../../store/ducks/tweets/contracts/state'

export const TweetsApi = {
  fetchTweets(): Promise<TweetsState['items']> {
    return axios
      .get('http://localhost:3000/tweets')
      .then(({ data }) => data)
      .catch((e) => console.log(e))
  },
  fetchTweet(id: string): Promise<Tweet[]> {
    return axios
      .get(`http://localhost:3000/tweets?_id=${id}`)
      .then(({ data }) => data)
      .catch((e) => console.log(e))
  },
}
