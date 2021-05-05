//@ts-nocheck
import React from 'react'
import styled from 'styled-components'
import { ColorsMap, FontWeightMap, BorderRadiusMap, FontSizeMap } from '../../utils/Theme'
import { Box } from '../Box'
import { InfoBlockChanel, InfoBlockChanelProps } from '../InfoBlockChanel/InfoBlockChanel'
import { InfoBlockTheme, InfoBlockThemeProps } from '../InfoBlockTheme/InfoBlockTheme'
import { Text } from '../Text'

export interface InfoBlockProps {
  blockName: string
  items: Array<InfoBlockThemeProps | InfoBlockChanelProps>
  type: 'theme' | 'chanel'
}

const Wrapper = styled.div`
  background: ${ColorsMap.infoblock};
  border-radius: ${BorderRadiusMap.default};
  margin-top: 1rem;
`

const Footer = styled.section`
  border-top: 1px solid ${ColorsMap.borders};
  border-radius: 0 0 ${BorderRadiusMap.default} ${BorderRadiusMap.default};
  &:hover {
    background: ${ColorsMap.infoblockHover};
  }
`

export const InfoBlock: React.FC<InfoBlockProps> = ({
  blockName,
  items,
  type,
}: InfoBlockProps): React.ReactElement => {
  return (
    <Wrapper>
      <Box>
        <Text as="h3" fontWeight={FontWeightMap.black} pt="0.5rem" pl="0.8rem">
          {blockName}
        </Text>
      </Box>
      {type === 'theme'
        ? items.map((el) => {
            return <InfoBlockTheme theme={el.theme} tweetsCount={el.tweetsCount} />
          })
        : items.map((el) => {
            return (
              <InfoBlockChanel
                name={el.name}
                chanelId={el.chanelId}
                avaSrc={el.avaSrc}
                avaAlt={el.avaAlt}
              />
            )
          })}
      <Footer>
        <Text as="p" textColor={ColorsMap.primary} py="0.7rem" pl="0.8rem" fontSize={FontSizeMap.s}>
          Показать ещё
        </Text>
      </Footer>
    </Wrapper>
  )
}
