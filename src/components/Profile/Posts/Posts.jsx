import React from 'react';

import styles from './Posts.module.css';

import Post from './Post/Post';

const Posts = (props) => {

  let newPostRef = React.createRef();

  let addPost = () => {
    alert(newPostRef.current.value);
  };

  return (
    <div>
      Posts
      <div className={styles.newPost}>
        <div>
          <textarea ref={newPostRef} />
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      {
        props.posts.map((p, i) => <Post text={p.text} likes={p.likes} key={i} />)
      }
    </div>
  );
}

export default Posts;