import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      loginExist: false
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            <LoginForm
              onChange={this.onChange}
              login={this.state.login}
              password={this.state.password}
              findUser={this.findUser}
            />
          </Route>
          <ProtectedRoute exact path="/home">
            <Home login={this.state.login} />
          </ProtectedRoute>
          <Route path="*" component={() => <div>404 Not Found</div>} />
        </Switch>
      </div>
    );
  }
}

export default App;
