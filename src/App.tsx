import React from 'react'
import { Route, Switch } from 'react-router'
import SignIn from './pages/SignIn/SingIn'
import Home from './pages/Home/Home'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/home" component={Home} />
      <Route />
      <Route />
    </Switch>
  )
}

export default App
