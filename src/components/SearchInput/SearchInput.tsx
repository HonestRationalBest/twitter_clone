import React from 'react'
import { Box } from '../Box'
import SearchIcon from '@material-ui/icons/Search'
import { useHomeStyles } from '../../pages/Home/Home'
import styled from 'styled-components'
import { BorderRadiusMap } from '../../utils/Theme'

export interface SearchInputProps {
  classes: ReturnType<typeof useHomeStyles>
}

const Input = styled.input`
  background: #ebeef0;
  border: 0;
  border-radius: ${BorderRadiusMap.buttons};
`

export const SearchInput: React.FC<SearchInputProps> = ({
  classes,
}: SearchInputProps): React.ReactElement => {
  return (
    <Box display="flex" alignItems="center">
      <SearchIcon className={classes.searchIcon} />
      <Input placeholder="Поиск в Твиттере" />
    </Box>
  )
}
