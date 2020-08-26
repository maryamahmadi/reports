// add empty messages for fetch reports.

import React, { useState, useEffect } from 'react'
import SelectUsernameField from './SelectUsernameField'
import ReportAccordion from '../../../components/ReportAccordion'

function ReportByName() {
  const [username, setUsername] = useState('randomEmployee*****')
  const [reports, setReports] = useState([])
  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const resp = await fetch(`/api/reports/${username}`)
        const result = await resp.json()
        setReports(result.data)
      } catch (e) {
        console.error(e)
      }
    }
    fetchReports()
  }, [username])
  return (
    <div style={{ padding: '30px 30px' }}>
      <SelectUsernameField username="" handleUsernameChange={handleUsernameChange} hint="Select an Employee" />
      {reports.map((report) => {
        const details = {
          thisWeek: report.thisWeek,
          nextWeek: report.nextWeek,
          comments: report.comments,
        }
        return <ReportAccordion key={report.id} summary={report.createdAt} details={details} />
      })}
    </div>
  )
}

export default ReportByName
