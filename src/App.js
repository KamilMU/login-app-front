import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute'
import './App.css';

function App() {
  const [posts, setPosts] = useState([])
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  function deletePost(postId) {
    setPosts(posts.filter(post => post.id !== postId))
  }

  function createPost(inputValue) {
    if (inputValue === '') return

    const newPost = {
      text: text,
      id: count,
      imgSrc: null
    }
    if (posts === []) setCount(0)

    setPosts([...posts, newPost])
    setCount(count + 1)
    setText('')
  }

  function handleChange(event, id) {
    const copy = [...posts]

    posts.map(post => {
      if (post.id === id) {
        setPosts(copy.map(post => {
          return {
            ...post,
            imgSrc: URL.createObjectURL(event.target.files[0])
          }
        }))
      }
    })
  }

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <LoginForm />
        </Route>
        <ProtectedRoute exact path="/home">
          <Home
            text={text}
            posts={posts}
            createPost={createPost}
            deletePost={deletePost}
            handleChange={handleChange}
            setText={setText}
          />
        </ProtectedRoute>
        <Route path="*" component={() => <div>404 Not Found</div>} />
      </Switch>
    </div>
  );
}

export default App;
