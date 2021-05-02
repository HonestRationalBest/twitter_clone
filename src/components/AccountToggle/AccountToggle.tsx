import React, { useState } from 'react'
import styled from 'styled-components'
import { useHomeStyles } from '../../pages/Home/Home'
import { BorderRadiusMap, ColorsMap, FontSizeMap, FontWeightMap, pxToRem } from '../../utils/Theme'
import { Box } from '../Box'
import { Text } from '../Text'

export interface AccountToggleProps {
  name: string
  userId: string
  avaSrc?: string
}

const MainWrapper = styled.div`
  position: relative;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: ${pxToRem(240)};
  width: 100%;
  height: ${pxToRem(80)};
  cursor: pointer;
  height: ${pxToRem(60)};
  border-radius: ${BorderRadiusMap.buttons};
  &:hover {
    background-color: ${ColorsMap.hover};
  }
`

const UserIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-left: 0.5rem;
  border-radius: ${BorderRadiusMap.buttons};
  margin-right: 0.5rem;
`

const HiddenAccount = styled.div`
  box-shadow: 0px 1px 10px rgb(196, 207, 214);
  max-width: ${pxToRem(300)};
  width: 100%;
  background-color: ${ColorsMap.white};
  border-radius: ${BorderRadiusMap.default};
  position: absolute;
  bottom: 100%;
`

const HiddenAccountListWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: ${pxToRem(240)};
  width: 100%;
  height: ${pxToRem(60)};
`

const HiddenAccountList = styled.ul`
  margin: 0.5rem;
  padding: 0;
  list-style: none;
`

const HiddenAccountListItem = styled.li`
  border-bottom: 1px solid ${ColorsMap.borders};
  cursor: pointer;
  $:hover {
    background-color: ${ColorsMap.hover};
  }
`

export const AccountToggle: React.FC<AccountToggleProps> = ({
  name,
  userId,
  avaSrc,
}): React.ReactElement => {
  const [menuToggle, setMenuToggle] = useState<boolean>(false)
  return (
    <MainWrapper>
      {menuToggle && (
        <HiddenAccount>
          <HiddenAccountList>
            <HiddenAccountListItem>
              {' '}
              <HiddenAccountListWrapper>
                <UserIcon
                  src={
                    avaSrc ||
                    'https://i.picsum.photos/id/413/536/354.jpg?hmac=gWzeJ37G-MqxxyO9UpTc_dK2Bu77KvFEugYCzbdHXOA'
                  }
                  alt="userIcon"
                />
                <Box>
                  <Text m="0" fontWeight={FontWeightMap.bold} fontSize={FontSizeMap.s}>
                    {name}
                  </Text>
                  <Text my="0.3rem" textColor={ColorsMap.secondary} fontSize={FontSizeMap.s}>
                    {userId}
                  </Text>
                </Box>
              </HiddenAccountListWrapper>
            </HiddenAccountListItem>
            <HiddenAccountListItem>
              <Box py="0.3rem">
                <Text ml="0.5rem" mb="0.1rem" fontSize={FontSizeMap.s}>
                  Выйти из учётной записи
                </Text>
                <Text ml="0.5rem" mt="0" fontSize={FontSizeMap.s}>
                  {userId}
                </Text>
              </Box>
            </HiddenAccountListItem>
          </HiddenAccountList>
        </HiddenAccount>
      )}
      <Wrapper onClick={() => setMenuToggle(!menuToggle)}>
        <UserIcon
          src={
            avaSrc ||
            'https://i.picsum.photos/id/413/536/354.jpg?hmac=gWzeJ37G-MqxxyO9UpTc_dK2Bu77KvFEugYCzbdHXOA'
          }
          alt="userIcon"
        />
        <Box>
          <Text m="0" fontWeight={FontWeightMap.bold} fontSize={FontSizeMap.s}>
            {name}
          </Text>
          <Text my="0.3rem" textColor={ColorsMap.secondary} fontSize={FontSizeMap.s}>
            {userId}
          </Text>
        </Box>
      </Wrapper>
    </MainWrapper>
  )
}
