const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
  newPostText: '',
  posts: [
    {
      id: 1,
      text: 'Hi, how are you?',
      likes: 1
    },
    {
      id: 2,
      text: 'It\'s my first post!',
      likes: 23
    }
  ]
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let post = {
        id: 0,
        text: action.text,
        likes: 0
      };
      
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, post]
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newPostText
      };
    default:
      return state;
  }
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