import { makeStyles, Theme } from '@material-ui/core'
import React, { useState } from 'react'
import { BorderRadiusMap, ColorsMap, FontSizeMap, FontWeightMap, pxToRem } from '../../utils/Theme'

export interface AccountToggleProps {
  name: string
  userId: string
  avaSrc?: string
}

export const useAccountToggleStyles = makeStyles((theme: Theme) => ({
  mainWrapper: {
    position: 'relative',
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: pxToRem(240),
    width: '100%',
    height: pxToRem(60),
    cursor: 'pointer',
    borderRadius: BorderRadiusMap.buttons,
    '&:hover': {
      backgroundColor: ColorsMap.hover,
    },
  },
  userIcon: {
    width: '2.5rem',
    height: '2.5rem',
    marginLeft: '0.5rem',
    borderRadius: BorderRadiusMap.buttons,
    marginRight: '0.5rem',
  },
  accData: {
    fontSize: FontSizeMap.s,
  },
  accDataName: {
    margin: '0',
    fontWeight: FontWeightMap.bold,
  },
  accDataId: {
    margin: '0.3rem 0 ',
    textColor: ColorsMap.secondary,
  },
  hiddenAccount: {
    boxShadow: '0px 1px 10px rgb(196, 207, 214)',
    maxWidth: pxToRem(300),
    width: '100%',
    backgroundColor: ColorsMap.white,
    borderRadius: BorderRadiusMap.default,
    position: 'absolute',
    bottom: '100%',
  },
  hiddenAccountListWrapper: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: pxToRem(240),
    width: '100%',
    height: pxToRem(60),
  },
  hiddenAccountList: {
    margin: '0.5rem',
    padding: 0,
    listStyle: 'none',
  },
  hiddenAccountListItem: {
    borderBottom: `1px solid ${ColorsMap.borders}`,
    cursor: 'pointer',
    '$:hover': {
      backgroundColor: ColorsMap.hover,
    },
  },
  exit: {
    padding: '0.3rem 0',
    margin: ' 0 0 0.1rem 0.5rem',
    fontSize: FontSizeMap.s,
  },
  exitUsedId: {
    marginTop: '0',
    marginBottom: '0',
  },
}))

export const AccountToggle: React.FC<AccountToggleProps> = ({
  name,
  userId,
  avaSrc,
}): React.ReactElement => {
  const [menuToggle, setMenuToggle] = useState<boolean>(false)
  const classes = useAccountToggleStyles()
  return (
    <div className={classes.mainWrapper}>
      {menuToggle && (
        <div className={classes.hiddenAccount}>
          <ul className={classes.hiddenAccountList}>
            <li className={classes.hiddenAccountListItem}>
              {' '}
              <div className={classes.hiddenAccountListWrapper}>
                <img
                  src={
                    avaSrc ||
                    'https://i.picsum.photos/id/413/536/354.jpg?hmac=gWzeJ37G-MqxxyO9UpTc_dK2Bu77KvFEugYCzbdHXOA'
                  }
                  alt="userIcon"
                  className={classes.userIcon}
                />
                <div className={classes.accData}>
                  <p className={classes.accDataName}>{name}</p>
                  <p className={classes.accDataId}>{userId}</p>
                </div>
              </div>
            </li>
            <li className={classes.hiddenAccountListItem}>
              <div className={classes.exit}>
                <p>Выйти из учётной записи</p>
                <p className={classes.exitUsedId}>{userId}</p>
              </div>
            </li>
          </ul>
        </div>
      )}
      <div className={classes.wrapper} onClick={() => setMenuToggle(!menuToggle)}>
        <img
          src={
            avaSrc ||
            'https://i.picsum.photos/id/413/536/354.jpg?hmac=gWzeJ37G-MqxxyO9UpTc_dK2Bu77KvFEugYCzbdHXOA'
          }
          alt="userIcon"
          className={classes.userIcon}
        />
        <div className={classes.accData}>
          <p className={classes.accDataName}>{name}</p>
          <p className={classes.accDataId}>{userId}</p>
        </div>
      </div>
    </div>
  )
}
