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

const profileReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let post = {
        id: 3,
        text: action.text,
        likes: 0
      };
      
      let newState = {...oldState};
      newState.posts = [...oldState.posts, post];
      newState.newPostText = '';

      return newState;
    }
    case UPDATE_NEW_POST_TEXT: {
      let newState = {...oldState};
      newState.newPostText = action.newPostText;

      return newState;
    }
    default:
      return oldState;
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