import React from 'react';
import { connect } from 'react-redux';

import Posts from "./Posts";

import {
  addPostActionCreator as addPost,
  updateNewPostTextActionCreator as updateNewPostText
} from '../../../redux/profileReducer';

class PostsContainer extends React.Component {
  
  render() {
    return (
      <Posts {...this.props} />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    posts: state.profile.posts,
    newPostText: state.profile.newPostText
  };
};

let mapDispatchToProps = {
  addPost,
  updateNewPostText
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);