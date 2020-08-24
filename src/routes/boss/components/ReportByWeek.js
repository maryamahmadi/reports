import React, { useState, useEffect } from 'react'
import ReportAccordion from '../../../components/ReportAccordion'

function ReportByWeek() {
  const employees = {
    paul: 'Paul',
    maryam: 'Maryam',
    matt: 'Matt',
    mayuran: 'Mayuran',
    shahram: 'Shahram',
    gloria: 'Gloria',
    jaspreet: 'Jaspreet',
    tao: 'Tao',
    fan: 'Fan',
    saad: 'Saad',
    alanI: 'Alan I',
    allanC: 'Allan C',
    ukeme: 'Ukeme',
    chris: 'Chris',
    rohit: 'Rohit',
    ahmad: 'Ahmad',
    kevin: 'Kevin',
  }
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
      {reports.map((report) => {
        const details = {
          thisWeek: report.thisWeek,
          nextWeek: report.nextWeek,
          comments: report.comments,
        }
        return <ReportAccordion key={report.id} summary={employees[report.username]} details={details} />
      })}
    </div>
  )
}

export default ReportByWeek
