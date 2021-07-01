import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { fetchTweetData, setTweet } from '../../../store/ducks/tweet/actionCreaters'
import { selectTweet } from '../../../store/ducks/tweet/selectors'
import { useHomeStyles } from '../Home'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { Tweet } from '../../../components/Tweet'

interface FullTweetProps {
  classes: ReturnType<typeof useHomeStyles>
}

export const FullTweet: React.FC<FullTweetProps> = ({ classes }): React.ReactElement | null => {
  const history = useHistory()
  const tweet = useSelector(selectTweet)
  const dispatch = useDispatch()
  const id = history.location.pathname.slice(-24)
  useEffect(() => {
    dispatch(fetchTweetData(id))

    return () => {
      dispatch(setTweet(undefined))
    }
  }, [dispatch, id])
  console.log(tweet.data)

  if (!tweet) {
    return null
  }
  return (
    <>
      <div className={classes.tweetsHeader}>
        <div className={classes.tweetHeader}>
          <Link to="/home">
            <ArrowBackIcon />
          </Link>
          <h6>Твит</h6>
        </div>
      </div>
      {tweet.data && <Tweet {...tweet.data} />}
    </>
  )
}
