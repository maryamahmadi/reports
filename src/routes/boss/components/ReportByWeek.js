import React, { useState, useEffect } from 'react'
import ReportAccordion from '../../../components/ReportAccordion'

function ReportByWeek() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const resp = await fetch(`/api/users`)
        const result = await resp.json()
        let userMap = []
        result.data.forEach((user) => userMap.push({ userId: user.id, name: user.name }))
        setUsers(userMap)
      } catch (e) {
        console.error(e)
      }
    }
    fetchUsers()
  }, [])

  const [reports, setReports] = useState([])

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const resp = await fetch(`/api/reports`)
        const result = await resp.json()
        setReports(result.data)
      } catch (e) {
        console.error(e)
      }
    }
    fetchReports()
  }, [])
  return (
    <div style={{ padding: '30px 30px' }}>
      {reports.length > 0 &&
        reports.map((report) => {
          const details = {
            thisWeek: report.thisWeek,
            nextWeek: report.nextWeek,
            comments: report.comments,
          }
          return (
            <ReportAccordion
              key={report.id}
              summary={users.find((user) => user.userId === report.userId)?.name}
              details={details}
            />
          )
        })}
      {(!reports || reports.length === 0) && (
        <div style={{ margin: '0 auto', textAlign: 'center' }}>No reports found.</div>
      )}
    </div>
  )
}

export default ReportByWeek
