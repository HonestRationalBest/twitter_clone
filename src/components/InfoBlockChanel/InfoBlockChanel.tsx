import React from 'react'
import styled from 'styled-components'
import { FontSizeMap, FontWeightMap, ColorsMap, BorderRadiusMap } from '../../utils/Theme'
import { Box } from '../Box'
import { Text } from '../Text'

export interface InfoBlockChanelProps {
  name: string
  chanelId: string
  avaSrc: string
  avaAlt: string
}

const Wrapper = styled.div`
  padding: 0.7rem 0;
  border-top: 1px solid ${ColorsMap.borders};
  display: flex;
  align-items: center;
  &:hover {
    background: ${ColorsMap.infoblockHover};
  }
`

const Button = styled.button`
  margin-left: 0.8rem;
  border: 1px solid ${ColorsMap.primary};
  border-radius: ${BorderRadiusMap.buttons};
  color: ${ColorsMap.primary};
  font-size: ${FontSizeMap.s};
  font-weight: ${FontWeightMap.bold};
  height: 2rem;
  padding-bottom: 0.1rem;
  &:hover {
    background: ${ColorsMap.hover};
  }
`

const AvaIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${BorderRadiusMap.buttons};
  margin-left: 0.8rem;
`

export const InfoBlockChanel: React.FC<InfoBlockChanelProps> = ({
  name,
  chanelId,
  avaSrc,
  avaAlt,
}: InfoBlockChanelProps): React.ReactElement => {
  return (
    <Wrapper>
      <AvaIcon src={avaSrc} alt={avaAlt} />
      <Box ml="0.8rem">
        <Text fontSize={FontSizeMap.s} fontWeight={FontWeightMap.bold}>
          {name}
        </Text>
        <Text fontSize={FontSizeMap.s} textColor={ColorsMap.secondary}>
          {chanelId}
        </Text>
      </Box>
      <Button>Читать</Button>
    </Wrapper>
  )
}
