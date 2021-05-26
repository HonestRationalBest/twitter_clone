import React from 'react'
import classNames from 'classnames'
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined'
import RepostIcon from '@material-ui/icons/RepeatOutlined'
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined'
import ShareIcon from '@material-ui/icons/ReplyOutlined'

import { Avatar, Grid, IconButton, makeStyles, Paper, Theme, Typography } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import { ColorsMap } from '../../utils/Theme'

export interface TweetProps {
  text: string
  user: {
    fullname: string
    username: string
    avatarUrl: string
  }
}

export const useTweetStyles = makeStyles((theme: Theme) => ({
  tweet: {
    cursor: 'pointer',
    paddingTop: 15,
    paddingLeft: 20,
    '&:hover': {
      backgroundColor: `${ColorsMap.hover}`,
    },
  },
  tweetAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  tweetFooter: {
    display: 'flex',
    position: 'relative',
    left: -13,
    justifyContent: 'space-between',
    width: 450,
  },
  tweetUserName: {
    color: grey[500],
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
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 11fr 1fr',
    gridGap: '0rem 0.5rem',
  },
}))

export const Tweet: React.FC<TweetProps> = ({ text, user }: TweetProps): React.ReactElement => {
  const classes = useTweetStyles()

  return (
    <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant="outlined">
      <div className={classes.grid}>
        <Grid item xs={1}>
          <Avatar
            className={classes.tweetAvatar}
            alt={`Аватарка пользователя ${user.fullname}`}
            src={user.avatarUrl}
          />
        </Grid>
        <Grid item xs={11}>
          <Typography>
            <b>{user.fullname}</b>&nbsp;
            <span className={classes.tweetUserName}>@{user.username}</span>&nbsp;
            <span className={classes.tweetUserName}>·</span>&nbsp;
            <span className={classes.tweetUserName}>1 ч</span>
          </Typography>
          <Typography variant="body1" gutterBottom>
            {text}
          </Typography>
          <div className={classes.tweetFooter}>
            <div>
              <IconButton>
                <CommentIcon style={{ fontSize: 20 }} />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton>
                <RepostIcon style={{ fontSize: 20 }} />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton>
                <LikeIcon style={{ fontSize: 20 }} />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton>
                <ShareIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
          </div>
        </Grid>
      </div>
    </Paper>
  )
}
