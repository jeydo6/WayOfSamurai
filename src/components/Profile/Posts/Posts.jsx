import React from 'react'

import styles from './Posts.module.css';

import Post from './Post/Post';

const Posts = (props) => {
  let newPostElement = React.createRef();

  let onAddPost = () => {
    let text = newPostElement.current.value;

    props.addPost(text);
  };

  let onNewPostTextChange = (e) => {
    let newPostText = e.target.value;

    props.updateNewPostText(newPostText);
  };

  return (
    <div>
      Posts
      {
        props.posts.map((p, i) => <Post userName={p.userName} text={p.text} likes={p.likes} key={i} />)
      }
      <div className={styles.newPost}>
        <div>
          <textarea value={props.newPostText} onChange={onNewPostTextChange} ref={newPostElement} placeholder='Enter your text' />
        </div>
        <div>
          <button onClick={onAddPost}>Add Post</button>
        </div>
      </div>
    </div>
  );
}

export default Posts;