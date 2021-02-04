import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Timeline from './pages/Timeline'
import NotFound from './pages/NotFound'




function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/timeline" component={Timeline} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App
