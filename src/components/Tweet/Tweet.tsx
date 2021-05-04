import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined'
import RepostIcon from '@material-ui/icons/RepeatOutlined'
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined'
import ShareIcon from '@material-ui/icons/ReplyOutlined'

import { useHomeStyles } from '../../pages/Home/Home'
import { Avatar, Grid, IconButton, Paper, Typography } from '@material-ui/core'
import { Box } from '../Box'

export interface TweetProps {
  text: string
  classes: ReturnType<typeof useHomeStyles>
  user: {
    fullname: string
    username: string
    avatarUrl: string
  }
}

export const Tweet: React.FC<TweetProps> = ({
  text,
  user,
  classes,
}: TweetProps): React.ReactElement => {
  return (
    <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant="outlined">
      <Box display="grid" gridTemplateColumns="1fr 11fr 1fr" gridGap="0rem 0.5rem">
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
      </Box>
    </Paper>
  )
}
