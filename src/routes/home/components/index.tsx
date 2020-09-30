import React from 'react'
import { Link } from 'react-router-dom'
import SteveMorse from '../../../assets/SteveMorse.jpeg'
import employees from '../../../assets/employees.jpeg'

function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '150px 200px 0px 200px',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/create-report">
          <img alt="lazy employee" src={employees} style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
        </Link>
        <div style={{ color: '#124191', fontSize: '28px', fontWeight: 'bold' }}>Employee </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/boss">
          <img alt="boss" src={SteveMorse} style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
        </Link>
        <div style={{ color: '#124191', fontSize: '28px', fontWeight: 'bold' }}>Boss </div>
      </div>
    </div>
  )
}

export default Home
