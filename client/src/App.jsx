import React from "react"
import { BrowserRouter, Switch } from "react-router-dom"

import ProtectedRoute from "./utils/ProtectedRoute"
import { Header, Auth, Home, Timeline, NotFound } from "./app-imports"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <ProtectedRoute path="/auth" component={Auth} authForm />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute path="/timeline" component={Timeline} timeline />
          <ProtectedRoute component={NotFound} />
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App
