import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './routes/home/components/index'
import CreateReport from './routes/createreport/components/index'
import BossView from './routes/boss/components/index'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/create-report' exact component={CreateReport}></Route>
        <Route path='/boss' exact component={BossView}></Route>
      </Switch>
  </Router>
  );
}

export default App;
