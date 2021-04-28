import React from 'react'
import styled from 'styled-components'
import { BorderRadiusMap, ColorsMap, FontSizeMap, FontWeightMap } from '../../utils/Theme'
import { Box } from '../../components/Box'
import { Button } from '../../components/Button'
import { Text } from '../../components/Text'
import twitterIcon from '../../static/twitter.svg'
import twitterIconBlue from '../../static/twitterBlue.svg'

const SingInBackground = styled.section`
  background-image: url(https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png);
  background-size: cover;
  height: 100vh;
  display: flex;
`

const TwitterIcon = styled.img`
  margin: auto;
  display: block;
  width: 17.625rem;
  height: 14.375rem;
`

const TwitterIconBlue = styled.img`
  fill: ${ColorsMap.primary};
  display: inline;
  width: 2.625rem;
  height: 2.25rem;
`

const SingIn = () => {
  return (
    <Box display="grid" gridTemplateColumns="6.7fr 5.3fr" gridGap="2rem">
      <SingInBackground>
        <TwitterIcon src={twitterIcon} alt="twitterIcon" />
      </SingInBackground>
      <Box mt="6rem">
        <TwitterIconBlue src={twitterIconBlue} alt="twitterIconBlue" />
        <Text as="h1" fontWeight={FontWeightMap.bold} fontSize={FontSizeMap.xxl}>
          В курсе происходящего
        </Text>
        <Text as="h3" fontWeight={FontWeightMap.bold} fontSize={FontSizeMap.l}>
          Присоединяйтесь к Твиттеру прямо сейчас!
        </Text>
        <Box maxWidth="23.5rem">
          <Button
            backgroundColor={ColorsMap.primary}
            borderRadius={BorderRadiusMap.buttons}
            border="0"
            py="0.7rem"
            width="100%"
            my="0.7rem"
            textColor={ColorsMap.white}
          >
            Зарегестрироваться
          </Button>
          <Button
            backgroundColor={ColorsMap.white}
            borderRadius={BorderRadiusMap.buttons}
            borderColor={ColorsMap.primary}
            borderStyle="solid"
            borderWidth="1px"
            py="0.7rem"
            width="100%"
            mt="0.5rem"
            textColor={ColorsMap.primary}
          >
            Войти
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default SingIn
