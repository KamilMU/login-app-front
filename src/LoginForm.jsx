import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import auth from './auth';

function LoginForm({ history }) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="form-container">
      <div className="form-container__tittle">Login Form</div>
      <form action="" onSubmit={e => e.preventDefault()}>
        <div>
          <input
            name="login"
            value={login}
            className="input-text"
            onChange={e => setLogin(e.target.value)}
            type="login"
            autoComplete="on"
          />
        </div>
        <div>
          <input
            name="password"
            value={password}
            className="input-text"
            onChange={e => setPassword(e.target.value)}
            type="password"
            autoComplete="on"
          />
        </div>
        <div>
          <button type="button" onClick={() => {
            auth.login(() => {
              if (history !== 'undefined' && auth.isAuthenticated(login) && login.length > 0 && password) {
                history.push('/home')
              }
            })
          }}>Login</button>
        </div>
      </form>
    </div>
  )
}

export default withRouter(LoginForm)