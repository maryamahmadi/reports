import React, { useEffect } from 'react'
import emailjs from 'emailjs-com'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './routes/home/components/index'
import CreateReport from './routes/createreport/components/index'
import BossView from './routes/boss/components/index'
import Login from './routes/boss/components/Login'
import ReportByName from './routes/boss/components/ReportByName.js'
import ReportByWeek from './routes/boss/components/ReportByWeek'
import Header from './components/Header'

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        window.sessionStorage.getItem('authenticated') === 'true' ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

function App() {
  useEffect(() => {
    // initialize email service
    emailjs.init('user_5cWoRRlQIKyet3BlqOik7')
  })
  return (
    <Router>
      <Header />
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/create-report" exact component={CreateReport}></Route>
          <PrivateRoute path="/boss">
            <BossView />
          </PrivateRoute>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/boss/report-by-name" exact component={ReportByName}></Route>
          <Route path="/boss/report-by-week" exact component={ReportByWeek}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
