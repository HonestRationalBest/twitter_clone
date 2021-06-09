import axios from 'axios'
import { TrendsState } from '../../store/ducks/trends/contracts/state'

export const TrendsApi = {
  fetchTrends(): Promise<TrendsState['items']> {
    return axios
      .get('http://localhost:3000/trends')
      .then(({ data }) => data)
      .catch((e) => console.log(e))
  },
}
