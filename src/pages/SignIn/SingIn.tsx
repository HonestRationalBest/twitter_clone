import React from 'react'
import { BorderRadiusMap, ColorsMap, FontSizeMap } from '../../utils/Theme'
import { ModalBlock } from '../../components/ModalBlock'
import { makeStyles } from '@material-ui/core'
import FormGroup from '@material-ui/core/FormGroup'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import TwitterIcon from '@material-ui/icons/Twitter'

interface SingInProps {}

export const useStylesSignIn = makeStyles((theme) => ({
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '6.7fr 5.3fr',
    gridGap: '2rem',
  },
  twitterIconBlue: {
    display: 'inline',
    width: '2.625rem',
    height: '2.25rem',
    fill: ColorsMap.primary,
  },
  blueSide: {
    backgroundImage: 'url(https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png)',
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
  },
  blueSideTwitterIcon: {
    margin: 'auto',
    display: 'block',
    width: '20.625rem',
    height: '17.375rem',
    fill: '#fff',
  },
  regSide: {
    marginLeft: '1rem',
    marginTop: '7rem',
  },
  offer: {
    maxWidth: '23.5rem',
    '& h1': {
      fontSize: `${FontSizeMap.xxl}`,
    },
    '& h3': {
      fontSize: `${FontSizeMap.l}`,
    },
    '& button': {
      borderRadius: `${BorderRadiusMap.buttons}`,
      padding: '0.7rem 0',
    },
  },
  signUpButton: {
    backgroundColor: `${ColorsMap.primary}`,
    border: '0',
    width: '100%',
    margin: '0.7rem 0',
    color: `${ColorsMap.white}`,
  },
  signInButton: {
    backgroundColor: `${ColorsMap.white}`,
    border: `1px solid ${ColorsMap.primary}`,
    width: '100%',
    margin: '0.5rem 0 0 0',
    color: `${ColorsMap.primary}`,
  },
  loginSideField: {
    marginBottom: 18,
    '& :focus': {
      textColor: ColorsMap.primary,
    },
  },
  registerField: {
    marginBottom: theme.spacing(5),
  },
  loginFormControl: {
    marginBottom: theme.spacing(2),
  },
  formButton: {
    background: ColorsMap.primary,
    border: 0,
    color: '#fff',
    width: '150px',
    padding: '0.6rem 0',
    borderRadius: BorderRadiusMap.buttons,
  },
}))

const SingIn: React.FC<SingInProps> = (): React.ReactElement => {
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
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <TwitterIcon className={classes.blueSideTwitterIcon} />
      </section>
      <section className={classes.regSide}>
        <TwitterIcon className={classes.twitterIconBlue} />
        <div className={classes.offer}>
          <h1>В курсе происходящего</h1>
          <h3>Присоединяйтесь к Твиттеру прямо сейчас!</h3>
          <button onClick={handleClickOpenSignUp} className={classes.signUpButton}>
            Зарегестрироваться
          </button>
          <button onClick={handleClickOpenSignIn} className={classes.signInButton}>
            Войти
          </button>
        </div>
        <ModalBlock
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
              <button onClick={handleCloseModal} className={classes.formButton}>
                Войти
              </button>
            </FormGroup>
          </FormControl>
        </ModalBlock>
        <ModalBlock
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
              <button onClick={handleCloseModal} className={classes.formButton}>
                Далее
              </button>
            </FormGroup>
          </FormControl>
        </ModalBlock>
      </section>
    </div>
  )
}

export default SingIn
