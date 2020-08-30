import React from 'react'
import { withRouter } from 'react-router-dom'
import auth from './auth'

function Home(props) {
  return (
    <div className="home-container">
      <span>Welcome <b>{props.login}</b>! Its a home page</span>
      <button onClick={() => {
        auth.logout(() =>
          props.history.push('/'))
      }}>
        Log Out
      </button>
    </div>
  )
}

export default withRouter(Home)