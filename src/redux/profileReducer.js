const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_INFO = 'SET_INFO';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

let initialState = {
  info: {
  },
  posts: [],
  newPostText: '',
  isFetching: false
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      console.log(state);
      let post = {
        id: 0,
        userName: 'Me',
        userPhoto: state.info.photos ? state.info.photos.small : null,
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
    case SET_INFO:
      return {
        ...state,
        info: {
          ...action.info
        }
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
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

export const setInfoActionCreator = (info) => ({
  type: SET_INFO,
  info: info
});

export const setIsFetchingActionCreator = (isFetching) => ({
  type: SET_IS_FETCHING,
  isFetching: isFetching
});

export default profileReducer;