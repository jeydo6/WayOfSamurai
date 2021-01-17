import Posts from "./Posts";

import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';

const PostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = (text) => {
    props.store.dispatch(addPostActionCreator(text));
  };

  let updateNewPostText = (newPostText) => {
    props.store.dispatch(updateNewPostTextActionCreator(newPostText))
  }

  return (
    <Posts
      posts={state.profile.posts}
      newPostText={state.profile.newPostText}
      addPost={addPost}
      updateNewPostText={updateNewPostText}
    />
  );
};

export default PostsContainer;