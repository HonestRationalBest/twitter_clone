import React, { useEffect } from 'react'
import { ColorsMap, FontSizeMap, FontFamilyMap } from '../../utils/Theme'
import { AccountToggle } from '../../components/AccountToggle/AccountToggle'
import { SideMenu } from '../../components/SideMenu/SideMenu'
import { makeStyles, Theme } from '@material-ui/core'
import grey from '@material-ui/core/colors/grey'
import { Tweet } from '../../components/Tweet'
import { NewTweetSection } from '../../components/NewTweetSection'
import { SearchInput } from '../../components/SearchInput'
import { InfoBlock } from '../../components/InfoBlock'
import { useDispatch, useSelector } from 'react-redux'
import { selectTweetsItems } from '../../store/ducks/tweets/selectors'
import { fetchTweets } from '../../store/ducks/tweets/actionCreaters'

interface HomeProps {}

export const useHomeStyles = makeStyles((theme: Theme) => ({
  mainWrapper: {
    display: 'grid',
    gridTemplateColumns: '4.4fr 1.6fr 6fr',
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
  infoBlockWrapper: {
    marginTop: '0.5rem',
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
  newTweetSection: {
    paddingBottom: '0.5rem',
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
  textarea: {
    width: '100%',
    resize: 'none',
    fontFamily: `${FontFamilyMap.default}`,
    marginTop: '0.5rem',
    marginLeft: '0.5rem',
    border: 0,
  },
  textareaIcons: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: 230,
    display: 'flex',
  },
  textareaIconsItem: {
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
      borderRadius: 30,
      height: 50,
      transition: 'background-color 0.1s ease-in-out',
    },
    '& button': {
      margin: 0,
    },
  },
}))

const Home: React.FC<HomeProps> = (): React.ReactElement => {
  const classes = useHomeStyles()

  const testArrayTheme = [
    { theme: 'Понимаю', tweetsCount: '2131' },
    { theme: 'Понимаю', tweetsCount: '2131' },
  ]

  const testArrayChanel = [
    {
      name: 'Alexey Navalny',
      chanelId: '@navalny',
      avaSrc:
        'https://i.picsum.photos/id/413/536/354.jpg?hmac=gWzeJ37G-MqxxyO9UpTc_dK2Bu77KvFEugYCzbdHXOA',
      avaAlt: 'avaAlt',
    },
  ]

  const tweets = useSelector(selectTweetsItems)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTweets())
  }, [dispatch])

  return (
    <div className={classes.mainWrapper}>
      <div>
        <div className={classes.fixed}>
          <SideMenu classes={classes} />
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
          <div className={classes.tweetsHeader}>
            <h6>Главная</h6>
          </div>
          <div className={classes.newTweetSection}>
            <NewTweetSection classes={classes} />
          </div>
          {tweets.map((el) => {
            return <Tweet key={el._id} text={el.text} user={el.user} classes={classes} />
          })}
        </div>
      </div>
      <div className={classes.infoBlockWrapper}>
        <div className={classes.fixed}>
          <SearchInput classes={classes} />
          <InfoBlock blockName="Актуальные темы для вас" items={testArrayTheme} type="theme" />
          <InfoBlock blockName="Кого читать" items={testArrayChanel} type="chanel" />
        </div>
      </div>
    </div>
  )
}
export default Home
