import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { IconButton, Typography } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import SearchIcon from '@material-ui/icons/Search'
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined'
import MessageIcon from '@material-ui/icons/EmailOutlined'
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined'
import ListIcon from '@material-ui/icons/ListAltOutlined'
import UserIcon from '@material-ui/icons/PermIdentityOutlined'
import { Text } from '../Text'
import { ColorsMap, FontSizeMap, FontWeightMap } from '../../utils/Theme'

const MenuItem = styled.li`
  cursor: pointer;
  '&:hover' {
    '& div' {
      background-color: ${ColorsMap.secondary}, '& h6' {
        color: ${ColorsMap.primary};
      }

      '& svg path' {
        fill: ${ColorsMap.primary};
      }
    }
  }
  '& div' {
    display: inline-flex;
    alignitems: center;
    position: relative;
    padding: 0 25px 0 20px;
    borderradius: 30;
    height: 50;
    margin-bottom: 15;
    transition: background-color 0.1s ease-in-out;
  }
`

export const NavMenu = () => {
  return (
    <div>
      <ul>
        <MenuItem>
          <IconButton color="primary">
            <TwitterIcon />
          </IconButton>
        </MenuItem>
        <MenuItem>
          <IconButton color="primary">
            <SearchIcon />
            <Text as="h6" fontWeight={FontWeightMap.bold} fontSize={FontSizeMap.m} ml="1rem">
              Поиск
            </Text>
          </IconButton>
        </MenuItem>
        <li>
          <IconButton color="primary">
            <NotificationIcon />
          </IconButton>
        </li>
        <li>
          <IconButton color="primary">
            <MessageIcon />
          </IconButton>
        </li>
        <li>
          <IconButton color="primary">
            <BookmarkIcon />
          </IconButton>
        </li>
        <li>
          <IconButton color="primary">
            <ListIcon />
          </IconButton>
        </li>
        <li>
          <IconButton color="primary">
            <UserIcon />
          </IconButton>
        </li>
      </ul>
    </div>
  )
}
