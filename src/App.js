import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { AuthProvider } from "./contexts/AuthContext"

import Chats from "./components/Chats/Chats.component"
import Login from "./components/Login/Login.component"

const App = () => {
    console.log("welcome to cheshire chat")
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/chats" component={Chats} />
            <Route exact path="/" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App