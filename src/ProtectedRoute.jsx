import React from 'react'
import auth from './auth'
import { Route, Redirect } from 'react-router-dom'

function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route {...rest} render={(props) => {
      if (auth.authenticated === true) return <Component {...props} />

      return <Redirect to="/" />
    }}
    />
  )
}

export default ProtectedRoute