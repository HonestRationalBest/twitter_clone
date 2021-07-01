import React from 'react'
import { BorderRadiusMap, ColorsMap, FontSizeMap, FontWeightMap, pxToRem } from '../../utils/Theme'
import TwitterIcon from '@material-ui/icons/Twitter'
import SearchIcon from '@material-ui/icons/Search'
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined'
import MessageIcon from '@material-ui/icons/EmailOutlined'
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined'
import ListIcon from '@material-ui/icons/ListAltOutlined'
import UserIcon from '@material-ui/icons/PermIdentityOutlined'
import { IconButton, makeStyles, Theme, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

interface SideMenuProps {}

export const useSideMenuStyles = makeStyles((theme: Theme) => ({
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
  sideMenuListItemButton: {
    maxWidth: pxToRem(200),
    width: '100%',
    backgroundColor: ColorsMap.primary,
    fontSize: FontSizeMap.s,
    fontWeight: FontWeightMap.bold,
    border: 0,
    borderRadius: BorderRadiusMap.buttons,
    textColor: ColorsMap.white,
    padding: '0.7rem 0',
    marginTop: '1rem',
    color: ColorsMap.white,
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
}))

export const SideMenu: React.FC<SideMenuProps> = (): React.ReactElement => {
  const classes = useSideMenuStyles()

  return (
    <ul className={classes.sideMenuList}>
      <li className={classes.sideMenuListItem}>
        <Link to="/home">
          <IconButton className={classes.logo} aria-label="">
            <TwitterIcon className={classes.logoIcon} />
          </IconButton>
        </Link>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <SearchIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Поиск
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <NotificationIcon className={classes.sideMenuListItemIcon} />

          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Уведомления
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <MessageIcon className={classes.sideMenuListItemIcon} />

          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Сообщения
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <BookmarkIcon className={classes.sideMenuListItemIcon} />

          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Закладки
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <ListIcon className={classes.sideMenuListItemIcon} />

          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Список
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <UserIcon className={classes.sideMenuListItemIcon} />

          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Профиль
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <button className={classes.sideMenuListItemButton}>Твитнуть</button>
      </li>
    </ul>
  )
}
