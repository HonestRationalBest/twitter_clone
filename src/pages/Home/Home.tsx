import React from 'react'
import styled from 'styled-components'
import { Box } from '../../components/Box'
import { ColorsMap, pxToRem } from '../../utils/Theme'
import twitterIconBlue from '../../static/twitterBlue.svg'
import { SideMenu } from '../../components/SideMenu/SideMenu'
import {
  Container,
  createStyles,
  Grid,
  InputBase,
  makeStyles,
  Paper,
  Theme,
  Typography,
  withStyles,
} from '@material-ui/core'
import grey from '@material-ui/core/colors/grey'
import { AccountToggle } from '../../components/AccountToggle/AccountToggle'

interface HomeProps {}

export const useHomeStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    height: '100vh',
  },
  logo: {
    margin: '10px 0',
    color: ColorsMap.primary,
  },
  logoIcon: {
    fontSize: 36,
  },
  sideMenuList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: 230,
  },
  sideMenuListItem: {
    cursor: 'pointer',
    '&:hover': {
      '& div': {
        backgroundColor: ColorsMap.hover,
        '& h6': {
          color: ColorsMap.primary,
        },
        '& svg path': {
          fill: ColorsMap.primary,
        },
      },
    },

    '& div': {
      display: 'inline-flex',
      alignItems: 'center',
      position: 'relative',
      padding: '0 25px 0 20px',
      borderRadius: 30,
      height: 50,
      marginBottom: 15,
      transition: 'background-color 0.1s ease-in-out',
    },
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 15,
  },
  sideMenuListItemIcon: {
    fontSize: 32,
    marginLeft: -5,
  },
  sideMenuTweetButton: {
    padding: theme.spacing(3.2),
    marginTop: theme.spacing(2),
  },
  tweetsWrapper: {
    borderRadius: 0,
    height: '100%',
    borderTop: '0',
    borderBottom: '0',
  },
  tweetsHeader: {
    borderTop: '0',
    borderLeft: '0',
    borderRight: '0',
    borderRadius: 0,
    padding: '10px 15px',
    '& h6': {
      fontWeight: 800,
    },
  },
  tweet: {
    cursor: 'pointer',
    paddingTop: 15,
    paddingLeft: 20,
    '&:hover': {
      backgroundColor: 'rgb(245, 248, 250)',
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
}))

const Home: React.FC<HomeProps> = () => {
  const classes = useHomeStyles()

  return (
    <Box
      display="grid"
      gridTemplateColumns="2fr 4.3fr 2.7fr"
      gridGap="0rem 2rem"
      maxWidth={pxToRem(1070)}
      margin="0 auto"
    >
      <Box>
        <SideMenu classes={classes} />
        <AccountToggle
          name="Pavel"
          userId="@Pavel28665992"
          avaSrc="https://i.picsum.photos/id/413/536/354.jpg?hmac=gWzeJ37G-MqxxyO9UpTc_dK2Bu77KvFEugYCzbdHXOA"
        />
      </Box>
      <Box backgroundColor="#c4c">Главная</Box>
      <Box backgroundColor="#4c4">Поиск</Box>
    </Box>
  )
}
export default Home
