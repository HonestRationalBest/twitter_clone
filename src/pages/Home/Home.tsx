import React, { useEffect } from 'react'
import { ColorsMap } from '../../utils/Theme'
import { AccountToggle } from '../../components/AccountToggle/AccountToggle'
import { SideMenu } from '../../components/SideMenu/SideMenu'
import { makeStyles, Theme } from '@material-ui/core'
import { Tweet } from '../../components/Tweet'
import { NewTweetSection } from '../../components/NewTweetSection'
import { SearchInput } from '../../components/SearchInput'
import { InfoBlock } from '../../components/InfoBlock'
import { useDispatch, useSelector } from 'react-redux'
import { selectTweetsItems } from '../../store/ducks/tweets/selectors'
import { fetchTweets } from '../../store/ducks/tweets/actionCreaters'
import { fetchUsers } from '../../store/ducks/popularChannels/actionCreaters'
import { selectUsersItems } from '../../store/ducks/popularChannels/selectors'
import { fetchTrends } from '../../store/ducks/trends/actionCreaters'
import { selectTrendsItems } from '../../store/ducks/trends/selectors'
import { Route } from 'react-router-dom'
import { FullTweet } from './components/FullTweet'
interface HomeProps {}

export const useHomeStyles = makeStyles((theme: Theme) => ({
  mainWrapper: {
    display: 'grid',
    gridTemplateColumns: '2.5fr 6.5fr 3fr',
    gridGap: '0rem 2rem',
    maxWidth: 1070,
    margin: '0 auto',
  },
  fixed: {
    position: 'fixed',
  },
  accountToggleWrapper: {
    marginTop: '15rem',
  },
  tweetsWrapper: {
    height: '100%',
    borderLeft: `1px solid rgb(235, 238, 240)`,
    borderRight: `1px solid rgb(235, 238, 240)`,
  },
  infoBlockWrapper: {
    marginTop: '0.5rem',
  },
  newTweetSectionWrapper: {
    paddingBottom: '0.5rem',
  },
  tweetsHeader: {
    borderTop: '0',
    borderLeft: '0',
    borderRight: '0',
    borderRadius: '0',
    padding: '0.625rem 1rem',
    borderBottom: `1px solid ${ColorsMap.borders}`,
    '& h6': {
      fontSize: '1rem',
      fontWeight: 800,
      padding: '0.4rem 0',
      margin: '0 0 0 0.5rem',
    },
  },
  tweetHeader: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '& p': {
      marginRight: '10px',
    },
  },
}))

const Home: React.FC<HomeProps> = (): React.ReactElement => {
  const classes = useHomeStyles()

  const tweets = useSelector(selectTweetsItems)
  const users = useSelector(selectUsersItems)
  const trends = useSelector(selectTrendsItems)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTweets())
    dispatch(fetchUsers())
    dispatch(fetchTrends())
  }, [dispatch])
  console.log(tweets)

  return (
    <div className={classes.mainWrapper}>
      <div>
        <div className={classes.fixed}>
          <SideMenu />
          <div className={classes.accountToggleWrapper}>
            <AccountToggle
              name="Pavel"
              userId="@Pavel28665992"
              avaSrc="https://i.picsum.photos/id/413/536/354.jpg?hmac=gWzeJ37G-MqxxyO9UpTc_dK2Bu77KvFEugYCzbdHXOA"
            />
          </div>
        </div>
      </div>
      <div>
        {' '}
        <div className={classes.tweetsWrapper}>
          <Route path="/home" exact>
            <div className={classes.tweetsHeader}>
              <h6>??????????????</h6>
            </div>
          </Route>
          <Route path="/home/tweet">
            <FullTweet classes={classes} />
          </Route>
          <Route path="/home" exact>
            <div className={classes.newTweetSectionWrapper}>
              <NewTweetSection />
            </div>
          </Route>
          <Route path="/home" exact>
            {tweets &&
              tweets.map((tweet) => {
                return <Tweet key={tweet._id} {...tweet} />
              })}
          </Route>
        </div>
      </div>
      <div className={classes.infoBlockWrapper}>
        <div className={classes.fixed}>
          <SearchInput />
          <InfoBlock blockName="???????????????????? ???????? ?????? ??????" items={trends} type="theme" />
          <InfoBlock blockName="???????? ????????????" items={users} type="chanel" />
        </div>
      </div>
    </div>
  )
}
export default Home
