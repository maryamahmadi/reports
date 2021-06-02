import React from 'react'
import { Link } from 'react-router-dom'
import SteveMorse from '../../../assets/SteveMorse.jpeg'
import employees from '../../../assets/employees.jpeg'

function Home() {
  return (
    <div className="Home">
      <Link className="Link" to="/create-report">
        <figure className="PhotoContainer">
          <img alt="lazy employee" src={employees} className="Photo" />
          <figcaption className="PhotoLabel">Employee</figcaption>
        </figure>
      </Link>
      <Link className="Link" to="/boss">
        <figure className="PhotoContainer">
          <img alt="boss" src={SteveMorse} className="Photo" />
          <figcaption className="PhotoLabel">Boss</figcaption>
        </figure>
      </Link>
    </div>
  )
}

export default Home
