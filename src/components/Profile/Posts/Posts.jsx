import React from 'react';

import styles from './Posts.module.css';

import Post from './Post/Post';

class Posts extends React.Component {
  newPostElement = React.createRef();

  onAddPost = () => {
    let text = this.newPostElement.current.value;

    this.props.addPost(text);
  }

  onNewPostTextChange = (e) => {
    let newPostText = e.target.value;

    this.props.updateNewPostText(newPostText);
  }

  render() {
    return (
      <div>
        Posts
        {
          this.props.posts.map((p, i) => <Post userName={p.userName} text={p.text} likes={p.likes} key={i} />)
        }
        <div className={styles.newPost}>
          <div>
            <textarea
              value={this.props.newPostText}
              ref={this.newPostElement}
              onChange={this.onNewPostTextChange}
              placeholder='Enter your text'
            />
          </div>
          <div>
            <button onClick={this.onAddPost}>Add Post</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;