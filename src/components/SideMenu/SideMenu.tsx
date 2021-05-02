import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter'
import SearchIcon from '@material-ui/icons/Search'
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined'
import MessageIcon from '@material-ui/icons/EmailOutlined'
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined'
import ListIcon from '@material-ui/icons/ListAltOutlined'
import UserIcon from '@material-ui/icons/PermIdentityOutlined'
import { IconButton, Typography } from '@material-ui/core'
import { Button } from '../Button'

import { useHomeStyles } from '../../pages/Home/Home'
import { BorderRadiusMap, ColorsMap, FontSizeMap, pxToRem } from '../../utils/Theme'

interface SideMenuProps {
  classes: ReturnType<typeof useHomeStyles>
}

export const SideMenu: React.FC<SideMenuProps> = ({
  classes,
}: SideMenuProps): React.ReactElement => {
  return (
    <ul className={classes.sideMenuList}>
      <li className={classes.sideMenuListItem}>
        <IconButton className={classes.logo} aria-label="">
          <TwitterIcon className={classes.logoIcon} />
        </IconButton>
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
        <Button
          maxWidth={pxToRem(220)}
          width="100%"
          backgroundColor={ColorsMap.primary}
          fontSize={FontSizeMap.m}
          border="0"
          borderRadius={BorderRadiusMap.buttons}
          textColor={ColorsMap.white}
          paddingY="0.7rem"
        >
          Твитнуть
        </Button>
      </li>
    </ul>
  )
}
