import styles from './Posts.module.css';

import Post from './Post/Post';

import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';

const Posts = (props) => {
  let state = props.store.getState();
  let dispatch = props.store.dispatch.bind(props.store);

  let addPostClick = () => {
    
    dispatch(addPostActionCreator());
  };

  let newPostUpdate = (e) => {
    let newPostText = e.target.value;

    dispatch(updateNewPostTextActionCreator(newPostText))
  }

  return (
    <div>
      Posts
      <div className={styles.newPost}>
        <div>
          <textarea value={state.profile.newPostText} onChange={newPostUpdate} placeholder='Enter your text' />
        </div>
        <div>
          <button onClick={addPostClick}>Add Post</button>
        </div>
      </div>
      {
        state.profile.posts.map((p, i) => <Post text={p.text} likes={p.likes} key={i} />)
      }
    </div>
  );
}

export default Posts;