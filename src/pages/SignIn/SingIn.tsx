import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core'
import FormGroup from '@material-ui/core/FormGroup'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import { BorderRadiusMap, ColorsMap, FontSizeMap, FontWeightMap } from '../../utils/Theme'
import { Box } from '../../components/Box'
import { Button } from '../../components/Button'
import { Text } from '../../components/Text'
import { ModalBlock } from '../../components/ModalBlock'
import twitterIcon from '../../static/twitter.svg'
import twitterIconBlue from '../../static/twitterBlue.svg'

interface SingInProps {}

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
export const useStylesSignIn = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100vh',
  },
  blueSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#71C9F8',
    flex: '0 0 50%',
    overflow: 'hidden',
    position: 'relative',
  },
  blueSideBigIcon: {
    position: 'absolute',
    left: '50%',
    top: '53%',
    transform: 'translate(-50%, -50%)',
    width: '350%',
    height: '350%',
  },
  blueSideListInfo: {
    position: 'relative',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: 380,
    '& h6': {
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      fontWeight: 700,
      fontSize: 20,
    },
  },
  blueSideListInfoItem: {
    marginBottom: 40,
  },
  blueSideListInfoIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  loginSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 50%',
  },
  loginSideTwitterIcon: {
    fontSize: 45,
  },
  loginSideWrapper: {
    width: 380,
  },
  loginSideTitle: {
    fontWeight: 700,
    fontSize: 32,
    marginBottom: 60,
    marginTop: 20,
  },
  loginSideField: {
    marginBottom: 18,
  },
  registerField: {
    marginBottom: theme.spacing(5),
  },
  loginFormControl: {
    marginBottom: theme.spacing(2),
  },
}))

const SingIn: React.FC<SingInProps> = () => {
  const classes = useStylesSignIn()
  const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>()

  const handleClickOpenSignIn = (): void => {
    setVisibleModal('signIn')
  }

  const handleClickOpenSignUp = (): void => {
    setVisibleModal('signUp')
  }

  const handleCloseModal = (): void => {
    setVisibleModal(undefined)
  }

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
            onClick={handleClickOpenSignUp}
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
            onClick={handleClickOpenSignIn}
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
          <ModalBlock
            classes={classes}
            visible={visibleModal === 'signIn'}
            onClose={handleCloseModal}
            title="Войти в аккаунт"
          >
            <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="email"
                  fullWidth
                />
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  id="password"
                  label="Пароль"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="password"
                  fullWidth
                />
                <Button onClick={handleCloseModal} color="primary">
                  Войти
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>
          <ModalBlock
            classes={classes}
            visible={visibleModal === 'signUp'}
            onClose={handleCloseModal}
            title="Создайте учетную запись"
          >
            <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="name"
                  label="Имя"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="name"
                  fullWidth
                />
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="email"
                  fullWidth
                />
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="password"
                  label="Пароль"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="password"
                  fullWidth
                />
                <Button color="primary">Далее</Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>
        </Box>
      </Box>
    </Box>
  )
}

export default SingIn
