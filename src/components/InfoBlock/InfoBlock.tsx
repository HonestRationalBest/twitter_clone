//@ts-nocheck
import { makeStyles, Theme } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { User } from '../../store/ducks/popularChannels/contracts/state'
import { Trend } from '../../store/ducks/trends/contracts/state'
import { ColorsMap, FontWeightMap, BorderRadiusMap, FontSizeMap } from '../../utils/Theme'
import { InfoBlockChanel } from '../InfoBlockChanel/InfoBlockChanel'
import { InfoBlockTheme } from '../InfoBlockTheme/InfoBlockTheme'

export interface InfoBlockProps {
  blockName: string
  items: Array<Trend | User>
  type: 'theme' | 'chanel'
}

export const useInfoBlockStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    background: ColorsMap.infoblock,
    borderRadius: BorderRadiusMap.default,
    marginTop: '1rem',
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
    },
  },
  header: {
    '& h3': {
      fontWeight: FontWeightMap.black,
      fontSize: FontSizeMap.m,
      padding: '0.5rem 0 0 0.8rem',
    },
  },
  footer: {
    borderTop: `1px solid ${ColorsMap.borders}`,
    borderRadius: `0 0 ${BorderRadiusMap.default} ${BorderRadiusMap.default}`,
    '&:hover': {
      background: ColorsMap.infoblockHover,
    },
    ' & p': {
      color: ColorsMap.primary,
      padding: '0.7rem 0 0.7rem 0.8rem',
      fontSize: FontSizeMap.s,
    },
  },
}))

export const InfoBlock: React.FC<InfoBlockProps> = ({
  blockName,
  items,
  type,
}: InfoBlockProps): React.ReactElement => {
  const classes = useInfoBlockStyles()
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <h3 as="h3">{blockName}</h3>
      </div>
      {type === 'theme'
        ? items.map((el) => {
            return (
              <Link to={`/home/search?q=${el._id}`}>
                <InfoBlockTheme theme={el.theme} tweetsCount={el.tweetsCount} />
              </Link>
            )
          })
        : items.map((el) => {
            return (
              <InfoBlockChanel name={el.name} username={el.username} avatarUrl={el.avatarUrl} />
            )
          })}
      <div className={classes.footer}>
        <p>Показать ещё</p>
      </div>
    </div>
  )
}
