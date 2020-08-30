import React from 'react'
import { useHistory } from "react-router-dom";

function LoginForm({ findUser, login, password, onChange }) {
  const history = useHistory();
  const goLogin = () => history.push('home');

  return (
    <div className="form-container">
      <div className="form-container__tittle">Login</div>
      <form onSubmit={e => { e.preventDefault(); findUser(login); goLogin() }}>
        <div>
          <input
            name="login"
            value={login}
            onChange={onChange}
            type="login"
            autoComplete="on"
          />
        </div>
        <div>
          <input
            name="password"
            value={password}
            onChange={onChange}
            type="password"
            autoComplete="on"
          />
        </div>
        <div>
          <button type="button" onClick={() => { findUser(login); goLogin() }}>Login</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm