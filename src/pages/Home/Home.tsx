import React from 'react'
import styled from 'styled-components'
import { Box } from '../../components/Box'
import { pxToRem } from '../../utils/Theme'
import twitterIconBlue from '../../static/twitterBlue.svg'
import { NavMenu } from '../../components/NavMenu/NavMenu'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="2fr 4.3fr 2.7fr"
      maxWidth={pxToRem(1070)}
      margin="0 auto"
    >
      <Box backgroundColor="#c4c4c4">
        <NavMenu />
      </Box>
      <Box backgroundColor="#c4c">Главная</Box>
      <Box backgroundColor="#4c4">Поиск</Box>
    </Box>
  )
}
export default Home
