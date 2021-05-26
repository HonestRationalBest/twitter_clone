import React from 'react'
import { BorderRadiusMap, ColorsMap, FontSizeMap } from '../../utils/Theme'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles, Theme } from '@material-ui/core'

export interface SearchInputProps {}

export const useSearchInputStyles = makeStyles((theme: Theme) => ({
  mainSearchWrapper: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  searchIcon: {
    fill: ColorsMap.secondary,
    position: 'absolute',
    left: '1rem',
    width: '1.2rem',
    height: '1.2rem',
  },
  searchInput: {
    background: ColorsMap.borders,
    color: ColorsMap.secondary,
    border: 0,
    borderRadius: BorderRadiusMap.buttons,
    fontSize: FontSizeMap.s,
    padding: '0.625rem 0 0.625rem 3rem',
    width: '100%',
    '&:focus': {
      background: ColorsMap.white,
      border: `1px solid ${ColorsMap.primary}`,
    },
  },
}))

export const SearchInput: React.FC<SearchInputProps> = (): React.ReactElement => {
  const classes = useSearchInputStyles()

  return (
    <div className={classes.mainSearchWrapper}>
      <SearchIcon className={classes.searchIcon} />
      <input placeholder="Поиск в Твиттере" className={classes.searchInput} />
    </div>
  )
}
