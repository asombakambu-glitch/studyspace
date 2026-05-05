import React from 'react'

const Dashboard = () => {
  return (
    <div className='row mt-2 justify-content-center'>
      <div className='col-md-8 card shadow'>

        <h1>Dashboard</h1>
        <h2>Welcome back</h2>

        <p>Study Time: 2h 30m</p>
        <p>Sessions: 3</p>
        <p>Streak: 5 days</p>
        <p>Best Subject: Biology</p>

        <button className='btn btn-outline-primary w-100'>
          Start Session
        </button>

      </div>
    </div>
  )
}

export default Dashboard