import React from 'react'
import styled from 'styled-components'
import { useHomeStyles } from '../../pages/Home/Home'
import { BorderRadiusMap, pxToRem } from '../../utils/Theme'
import { Text } from '../Text'

export interface AccountToggleProps {
  name: string
  userId: string
  avaSrc?: string
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: ${pxToRem(240)};
  width: 100%;
  height: ${pxToRem(80)};
`

const UserIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${BorderRadiusMap.buttons};
  margin-right: 0.5rem;
`

export const AccountToggle: React.FC<AccountToggleProps> = ({
  name,
  userId,
  avaSrc,
}): React.ReactElement => {
  return (
    <Wrapper>
      <UserIcon
        src={
          avaSrc ||
          'https://i.picsum.photos/id/413/536/354.jpg?hmac=gWzeJ37G-MqxxyO9UpTc_dK2Bu77KvFEugYCzbdHXOA'
        }
        alt="userIcon"
      />
      <div>
        <Text m="0">{name}</Text>
        <Text m="0">{userId}</Text>
      </div>
    </Wrapper>
  )
}
