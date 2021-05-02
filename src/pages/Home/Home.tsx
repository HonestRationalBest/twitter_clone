import React from 'react'
import styled from 'styled-components'
import { ColorsMap, FontSizeMap, FontWeightMap, pxToRem } from '../../utils/Theme'
import { AccountToggle } from '../../components/AccountToggle/AccountToggle'
import { Box } from '../../components/Box'
import { SideMenu } from '../../components/SideMenu/SideMenu'
import { makeStyles, Paper, Theme } from '@material-ui/core'
import grey from '@material-ui/core/colors/grey'
import { Text } from '../../components/Text'
import { Tweet } from '../../components/Tweet'

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
}))

const TweetHeader = styled.div`
  border-bottom: 1px solid ${ColorsMap.borders};
`

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
        <Box position="fixed">
          <SideMenu classes={classes} />
          <Box mt="15rem">
            <AccountToggle
              name="Pavel"
              userId="@Pavel28665992"
              avaSrc="https://i.picsum.photos/id/413/536/354.jpg?hmac=gWzeJ37G-MqxxyO9UpTc_dK2Bu77KvFEugYCzbdHXOA"
            />
          </Box>
        </Box>
      </Box>
      <Box>
        {' '}
        <Box
          height="100%"
          borderLeft="1px solid #000"
          borderLeftColor={ColorsMap.borders}
          borderRight="1px solid #000"
          borderRightColor={ColorsMap.borders}
        >
          <TweetHeader>
            <Text as="h6" fontWeight={FontWeightMap.bold} py="0.7rem" m="0 0 0 1rem">
              Главная
            </Text>
          </TweetHeader>
          {[
            ...new Array(20).fill(
              <Tweet
                text="Петиция чтобы в каждой пачке сухариков всегда лежал один большой в три слоя обсыпанный химическими специями царь-сухарик."
                user={{
                  fullname: 'Glafira Zhur',
                  username: 'GlafiraZhur',
                  avatarUrl:
                    'https://images.unsplash.com/photo-1528914457842-1af67b57139d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                }}
                classes={classes}
              />
            ),
          ]}
        </Box>
      </Box>
      <Box backgroundColor="#4c4">Поиск</Box>
    </Box>
  )
}
export default Home
