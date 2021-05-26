import { makeStyles, Theme } from '@material-ui/core'
import React from 'react'
import { FontSizeMap, ColorsMap } from '../../utils/Theme'

export interface InfoBlockThemeProps {
  theme: string
  tweetsCount: string
}

export const useInfoBlockThemeStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    padding: '0.7rem 0',
    borderTop: `1px solid ${ColorsMap.borders}`,
    fontSize: FontSizeMap.s,
    paddingLeft: '0.8rem',
    '&:hover ': {
      background: ColorsMap.infoblockHover,
    },
    '& p': {
      color: ColorsMap.secondary,
    },
  },
}))

export const InfoBlockTheme: React.FC<InfoBlockThemeProps> = ({
  theme,
  tweetsCount,
}: InfoBlockThemeProps): React.ReactElement => {
  const classes = useInfoBlockThemeStyles()

  return (
    <div className={classes.wrapper}>
      <h4>{theme}</h4>
      <p>{`Твитов: ${tweetsCount}`}</p>
    </div>
  )
}
