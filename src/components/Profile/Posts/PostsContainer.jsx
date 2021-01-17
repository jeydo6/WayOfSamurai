import { connect } from 'react-redux'

import Posts from "./Posts";

import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';

let mapStateToProps = (state) => {
  return {
    newPostText: state.profile.newPostText,
    posts: state.profile.posts
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (text) => {
      dispatch(addPostActionCreator(text))
    },
    updateNewPostText: (newPostText) => {
      dispatch(updateNewPostTextActionCreator(newPostText))
    }
  }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default DialogsContainer;