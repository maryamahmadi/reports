import React, { useState } from 'react'
import Header from '../../../components/Header'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import ReportByName from './ReportByName'
import ReportByWeek from './ReportByWeek'

function BossView () {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        console.log('value', value)
        setValue(newValue);
    }

  return (
  <React.Fragment> 
    <Header />
    <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered>
        <Tab label="Reports By Week" />
        <Tab label="Reports By Name" />
  </Tabs>
  {value === 0 && <ReportByWeek />}
  {value === 1 && <ReportByName />}

  </React.Fragment>)
}
export default BossView