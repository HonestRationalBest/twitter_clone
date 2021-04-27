import React from 'react'
import { Route, Switch } from 'react-router'
import SignIn from './pages/SignIn/SingIn'

function App() {
  return (
    <Switch>
      <Route path="/" render={() => SignIn()} />
      <Route />
      <Route />
    </Switch>
  )
}

export default App
