import { makeStyles, Theme } from '@material-ui/core'
import React from 'react'
import { FontSizeMap, FontWeightMap, ColorsMap, BorderRadiusMap } from '../../utils/Theme'

export interface InfoBlockChanelProps {
  name: string
  username: string
  avatarUrl: string
}

export const useInfoBlockChanelStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    padding: '0.7rem 0',
    borderTop: `1px solid ${ColorsMap.borders}`,
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      background: ColorsMap.infoblockHover,
    },
    '& button': {
      marginLeft: '0.8rem',
      border: `1px solid ${ColorsMap.primary}`,
      borderRadius: BorderRadiusMap.buttons,
      color: ColorsMap.primary,
      fontSize: FontSizeMap.s,
      fontWeight: FontWeightMap.bold,
      height: '2rem',
      paddingBottom: '0.1rem',
      '&:hover': {
        background: ColorsMap.hover,
      },
    },
  },
  avatar: {
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: BorderRadiusMap.buttons,
    marginLeft: '0.8rem',
  },
  textWrapper: {
    marginLeft: '0.8rem',
    fontWeight: 'bold',
    '& p': {
      fontSize: FontSizeMap.s,
      maxWidth: '91px',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  },
  chanelId: {
    color: ColorsMap.secondary,
    fontWeight: 'normal',
  },
}))

export const InfoBlockChanel: React.FC<InfoBlockChanelProps> = ({
  name,
  username,
  avatarUrl,
}: InfoBlockChanelProps): React.ReactElement => {
  const classes = useInfoBlockChanelStyles()

  return (
    <div className={classes.wrapper}>
      <img src={avatarUrl} alt="avaAlt" className={classes.avatar} />
      <div className={classes.textWrapper}>
        <p>{name}</p>
        <p className={classes.chanelId}>@{username}</p>
      </div>
      <button>Читать</button>
    </div>
  )
}
