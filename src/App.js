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
      posts: [],
      file: null,
      count: 0,
      text: '',
      login: '',
      password: ''
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleChange = (event, id) => {
    const copy = [...this.state.posts]

    console.log(copy[id], 'copy')
    this.state.posts.map(post => {
      if (post.id === id) {
        this.setState({
          posts: copy.map(post => {
            return {
              ...post,
              imgSrc: URL.createObjectURL(event.target.files[0])
            }
          })
        })
      }
    })
  }

  deletePost = (postId) => {
    this.setState({
      posts: this.state.posts.filter(post => post.id !== postId)
    })
  }

  createPost = text => {
    if (text === '') return

    const newPost = {
      text: this.state.text,
      id: this.state.count,
      imgSrc: null
    }
    if (this.state.posts === []) this.setState({ count: 0 })
    this.setState({
      posts: [...this.state.posts, newPost],
      count: this.state.count + 1,
      text: ''
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
            />
          </Route>
          <ProtectedRoute exact path="/home">
            <Home
              text={this.state.text}
              posts={this.state.posts}
              createPost={this.createPost}
              changeInputFile={this.changeInputFile}
              submitImage={this.submitImage}
              deletePost={this.deletePost}
              onChange={this.onChange}
              onDrop={this.onDrop}
              handleChange={this.handleChange}
              file={this.state.file}
            />
          </ProtectedRoute>
          <Route path="*" component={() => <div>404 Not Found</div>} />
        </Switch>
      </div>
    );
  }
}

export default App;
