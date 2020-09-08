import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import auth from './auth'

function Home({ createPost, text, deletePost, handleChange, posts, setText, history }) {
  return (
    <div className="home-container">
      {/* header */}
      <header>
        <button onClick={() => {
          auth.logout(() =>
            history.push('/'))
        }}>
          Log Out
      </button>
      </header>
      {/* main */}
      <main>
        <form action="" onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            name="text"
            className="input-text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="text..."
          />
          <button onClick={() => createPost(text)}>Add post</button>
        </form>
        <ul className="post-list">
          {posts.map(post =>
            <li className="post-list__post" key={post.id}>{post.text}
              <input
                type="file"
                className="input-file"
                onChange={(event) => handleChange(event, post.id)}
              />
              <img
                alt=""
                src={post.imgSrc}
              />
              <div
                className="delete" onClick={() => deletePost(post.id)}>x</div>
            </li>
          )}
        </ul>
      </main>
    </div>
  )
}

export default withRouter(Home)