import React from 'react'

import Sidebar from '../components/Sidebar'

export default function About() {
  return (
    <div className="container">
      <div className="layout">
        <div className="about">
          <h3>About</h3>
          <p>Developed for academic purpose, for the fulfilment of the Master’s program in Cybersecurity.</p>

          <p>A beginner friendly insight on the Pretexting attack flow, highlighting its behaviours exploited by a social engineer.
          </p>
        </div>
        <Sidebar />
      </div>
    </div>
  )
}
