import React from 'react'
import { withRouter } from 'react-router-dom'
import auth from './auth';

function LoginForm({ findUser, login, password, onChange, history }) {
  // const history = useHistory();
  // const goLogin = () => history.push('home');
  return (
    <div className="form-container">
      <div className="form-container__tittle">Login Form</div>
      <form onSubmit={e => { e.preventDefault() }}>
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