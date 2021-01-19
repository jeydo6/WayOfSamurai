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
        {
          this.props.posts.map((p, i) => <Post {...p} key={i} />)
        }
        <div className={styles.newPost}>
          <div>
            <textarea
              value={this.props.newPostText}
              ref={this.newPostElement}
              onChange={this.onNewPostTextChange}
              placeholder='What&apos;s new?'
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