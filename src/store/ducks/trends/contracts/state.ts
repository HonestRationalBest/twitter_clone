export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface Trend {
  _id: string
  theme: string
  tweetsCount: number
  avatarUrl: string
}

export interface TrendsState {
  items: Trend[]
  loadingState: LoadingState
}
