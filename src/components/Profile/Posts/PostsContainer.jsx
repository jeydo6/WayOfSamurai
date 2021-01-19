import React from 'react';
import { connect } from 'react-redux';

import Posts from "./Posts";

import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';

class PostsContainer extends React.Component {
  render() {
    return <Posts
      newPostText={this.props.newPostText}
      posts={this.props.posts}

      addPost={this.props.addPost}
      updateNewPostText={this.props.updateNewPostText}
    />;
  }
}

let mapStateToProps = (state) => {
  return {
    newPostText: state.profile.newPostText,
    posts: state.profile.posts
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (text) => {
      dispatch(addPostActionCreator(text));
    },
    updateNewPostText: (newPostText) => {
      dispatch(updateNewPostTextActionCreator(newPostText));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);