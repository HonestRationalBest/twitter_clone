import axios from 'axios'
import { UsersState } from '../../store/ducks/popularChannels/contracts/state'

export const UsersApi = {
  fetchUsers(): Promise<UsersState['items']> {
    return axios
      .get('http://localhost:3000/popularChanels')
      .then(({ data }) => data)
      .catch((e) => console.log(e))
  },
}
