export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface User {
  _id: string
  fullname: string
  username: string
  avatarUrl: string
}

export interface UsersState {
  items: User[]
  loadingState: LoadingState
}
