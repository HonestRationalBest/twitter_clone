import { axios } from '../../core/axios'
import { Tweet } from '../../store/ducks/tweets/contracts/state'

interface Responce<T> {
  status: string
  data: T
}

export const TweetsApi = {
  fetchTweets(): Promise<Responce<Tweet[]>> {
    return axios
      .get('/tweets')
      .then(({ data }) => data.data)
      .catch((e) => console.log(e))
  },
  fetchTweet(id: string): Promise<Responce<Tweet>> {
    return axios
      .get(`/tweets/${id}`)
      .then(({ data }) => data.data)
      .catch((e) => console.log(e))
  },
  fetchAddTweet(payload: Tweet): Promise<Responce<Tweet>> {
    return axios
      .post(`/tweets`, payload)
      .then(({ data }) => data.data)
      .catch((e) => console.log(e))
  },
}
