import React, { Component } from 'react';
import LoginForm from './LoginForm';
import Home from './Home';
import { Redirect, Route, Switch } from 'react-router-dom';
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

  findUser = login => {
    fetch(`https://api.github.com/users/${login}`)
      .then(successResponse => {
        if (successResponse.status !== 200) {
          return null;
        } else {
          return successResponse.json();
        }
      }
      )
      .then(data => { if (data) return this.setState({ loginExist: true }) })
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
            <LoginForm onChange={this.onChange} login={this.state.login} password={this.state.password} findUser={this.findUser} />
          </Route>
          {this.state.loginExist === true ? <Route exact path="/home"><Home /></Route> : <Redirect to="/" />}
        </Switch>
      </div>
    );
  }
}

export default App;
