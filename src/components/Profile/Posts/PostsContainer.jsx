import Posts from "./Posts";

import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import StoreContext from "../../../StoreContext";

const PostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
            let state = store.getState();

            let addPost = (text) => {
              store.dispatch(addPostActionCreator(text));
            };
          
            let updateNewPostText = (newPostText) => {
              store.dispatch(updateNewPostTextActionCreator(newPostText))
            }

            return <Posts
            posts={state.profile.posts}
            newPostText={state.profile.newPostText}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
          />
        }
      }
    </StoreContext.Consumer>
  );
};

export default PostsContainer;