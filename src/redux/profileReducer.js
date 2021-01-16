const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let post = {
        id: 3,
        text: state.newPostText,
        likes: 0
      };
      
      state.posts.push(post);
      state.newPostText = '';
      break;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newPostText;
      break;
    default:
      break;
  }

  return state;
};

export const addPostActionCreator = (text) => ({
  type: ADD_POST,
  text: text
});

export const updateNewPostTextActionCreator = (newPostText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newPostText: newPostText
});

export default profileReducer;