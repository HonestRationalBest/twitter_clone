import React from 'react'
import styled from 'styled-components'
import { FontSizeMap, FontWeightMap, ColorsMap } from '../../utils/Theme'
import { Text } from '../Text'

export interface InfoBlockThemeProps {
  theme: string
  tweetsCount: string
}

const Wrapper = styled.div`
  padding: 0.7rem 0;
  border-top: 1px solid ${ColorsMap.borders};
  &:hover {
    background: ${ColorsMap.infoblockHover};
  }
`

export const InfoBlockTheme: React.FC<InfoBlockThemeProps> = ({
  theme,
  tweetsCount,
}: InfoBlockThemeProps): React.ReactElement => {
  return (
    <Wrapper>
      <Text as="h6" pl="0.8rem" fontSize={FontSizeMap.s} fontWeight={FontWeightMap.black}>
        {theme}
      </Text>
      <Text
        fontSize={FontSizeMap.s}
        pl="0.8rem"
        textColor={ColorsMap.secondary}
      >{`Твитов: ${tweetsCount}`}</Text>
    </Wrapper>
  )
}
