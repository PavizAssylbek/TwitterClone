import React from "react"
import { Route, Switch } from "react-router-dom"
import { SignIn, Home } from "./pages"

function App() {
  return (
    <Switch>
      <Route exact path="/signin">
        <SignIn />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  )
}

export default App
