import React from 'react'
import { withRouter } from 'react-router-dom'
import auth from './auth'

function Home(props) {
  console.log(props.posts, 'posts')
  return (
    <div className="home-container">
      {/* header */}
      <header>
        <button onClick={() => {
          auth.logout(() =>
            props.history.push('/'))
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
            value={props.text}
            onChange={props.onChange}
            placeholder="text..."
          />
          <button onClick={() => props.createPost(props.text)}>Add post</button>
        </form>
        <ul className="post-list">
          {props.posts.map(post =>
            <li className="post-list__post" key={post.id}>{post.text}
              <input type="file" className="input-file" onChange={(event) => props.handleChange(event, post.id)} />
              <img alt="" src={post.imgSrc} />
              <div className="delete" onClick={() => props.deletePost(post.id)}>x</div>
            </li>
          )}
        </ul>
      </main>
    </div>
  )
}

export default withRouter(Home)