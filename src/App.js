import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './routes/home/components/index'
import CreateReport from './routes/createreport/components/index'
import BossView from './routes/boss/components/index'
import ReportByName from './routes/boss/components/ReportByName.js'
import ReportByWeek from './routes/boss/components/ReportByWeek'


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/create-report' exact component={CreateReport}></Route>
        <Route path='/boss' exact component={BossView}></Route>
        <Route path='/boss/report-by-name' exact component={ReportByName}></Route>
        <Route path='/boss/report-by-week' exact component={ReportByWeek}></Route>

      </Switch>
  </Router>
  );
}

export default App;
