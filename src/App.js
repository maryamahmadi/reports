import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './routes/home/components/index'
import BossView from './routes/boss/components/BossView'

function App() {
  return (
    <Router>
    <Switch>
      <Route path='/' exact component={Home}></Route>
      <Route path='/boss' exact component={BossView}></Route>
    </Switch>
  </Router>
  );
}

export default App;
