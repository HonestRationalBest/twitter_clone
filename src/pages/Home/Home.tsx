import React from 'react'
import { ColorsMap, FontSizeMap, pxToRem } from '../../utils/Theme'
import { AccountToggle } from '../../components/AccountToggle/AccountToggle'
import { Box } from '../../components/Box'
import { SideMenu } from '../../components/SideMenu/SideMenu'
import { makeStyles, Theme } from '@material-ui/core'
import grey from '@material-ui/core/colors/grey'

interface HomeProps {}

export const useHomeStyles = makeStyles((theme: Theme) => ({
  logo: {
    margin: '10px 0',
    color: ColorsMap.primary,
  },
  logoIcon: {
    fontSize: `${FontSizeMap.l}`,
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
      transition: 'background-color 0.1s ease-in-out',
    },
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: `${FontSizeMap.m}`,
    marginLeft: 15,
  },
  sideMenuListItemIcon: {
    fontSize: `${FontSizeMap.l}`,
    marginLeft: -5,
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
        <Box mt="10rem">
          <AccountToggle
            name="Pavel"
            userId="@Pavel28665992"
            avaSrc="https://i.picsum.photos/id/413/536/354.jpg?hmac=gWzeJ37G-MqxxyO9UpTc_dK2Bu77KvFEugYCzbdHXOA"
          />
        </Box>
      </Box>
      <Box backgroundColor="#c4c">Главная</Box>
      <Box backgroundColor="#4c4">Поиск</Box>
    </Box>
  )
}
export default Home
