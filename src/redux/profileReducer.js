const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_PROFILE = 'SET_PROFILE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

let initialState = {
  profile: null,
  newPostText: '',
  isFetching: false
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let post = {
        id: 0,
        userName: 'Me',
        userPhoto: state.profile.photos ? state.profile.photos.small : null,
        text: action.text,
        likes: 0
      };

      return {
        ...state,
        profile: {
          ...state.profile,
          posts: [...state.profile.posts, post]
        },
        newPostText: '',
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newPostText
      };
    case SET_PROFILE:
      if(action.profile) {
        return {
          ...state,
          profile: {
            ...action.profile
          }
        };
      }
      else {
        return {
          ...state,
          profile: null
        };
      }
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

export const setProfileActionCreator = (profile) => ({
  type: SET_PROFILE,
  profile: profile
});

export const setIsFetchingActionCreator = (isFetching) => ({
  type: SET_IS_FETCHING,
  isFetching: isFetching
});

export default profileReducer;