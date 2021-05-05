import React from 'react'
import styled from 'styled-components'
import { Box } from '../Box'
import { useHomeStyles } from '../../pages/Home/Home'
import { BorderRadiusMap, ColorsMap, FontSizeMap } from '../../utils/Theme'
import { SearchOutline } from '@styled-icons/evaicons-outline/SearchOutline'
export interface SearchInputProps {
  classes: ReturnType<typeof useHomeStyles>
}

const SearchOutlineIcon = styled(SearchOutline)`
  fill: ${ColorsMap.secondary};
  position: absolute;
  left: 1rem;
  width: 1.2rem;
  height: 1.2rem;
`

const Input = styled.input`
  background: ${ColorsMap.borders};
  color: ${ColorsMap.secondary};
  border: 0;
  border-radius: ${BorderRadiusMap.buttons};
  font-size: ${FontSizeMap.s};
  padding: 0.625rem 0 0.625rem 3rem;
  width: 100%;
  &:focus {
    background: ${ColorsMap.white};
    border: 1px solid ${ColorsMap.primary};
  }
  &:focus ${SearchOutlineIcon} {
    fill: ${ColorsMap.primary};
  }
`

export const SearchInput: React.FC<SearchInputProps> = ({
  classes,
}: SearchInputProps): React.ReactElement => {
  return (
    <Box display="flex" alignItems="center" position="relative">
      <SearchOutlineIcon />
      <Input placeholder="Поиск в Твиттере" />
    </Box>
  )
}
