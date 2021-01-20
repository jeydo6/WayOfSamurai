import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';

import Profile from './Profile';
import Loader from '../Loaders/EllipsisLoader/EllipsisLoader';

import {
  addPostActionCreator as addPost,
  updateNewPostTextActionCreator as updateNewPostText,
  setProfileActionCreator as setProfile,
  setIsFetchingActionCreator as setIsFetching
} from '../../redux/profileReducer';

class ProfileContainer extends React.Component {

  getProfile = (userId) => {
    let infoPath = `https://social-network.samuraijs.com/api/1.0/profile/${userId}`;
    let statusPath = `https://social-network.samuraijs.com/api/1.0/profile/status/${userId}`;

    this.props.setIsFetching(true);
    axios
      .all([axios.get(infoPath), axios.get(statusPath)])
      .then(
        axios.spread((infoResponse, statusResponse) => {
          let info = {
            id: infoResponse.data.userId,
            name: infoResponse.data.fullName,
            photos: infoResponse.data.photos,
            status: statusResponse.data,
            posts: []
          };

          this.props.setProfile(info);
          this.props.setIsFetching(false);
        })
      )
      .catch(_ => {
        this.props.setProfile(null);
        this.props.setIsFetching(false);
      });
  }

  componentDidMount() {
    this.getProfile(2);
  }

  render() {
    return (
      this.props.isFetching
        ? <Loader />
        : this.props.profile
          ? <Profile {...this.props} />
          : null
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profile.profile ? {
      id: state.profile.profile.id,
      name: state.profile.profile.name,
      status: state.profile.profile.status,
      photo: state.profile.profile.photos.large,
      posts: state.profile.profile.posts
    } : null,
    newPostText: state.profile.newPostText
  };
};

let mapDispatchToProps = {
  addPost,
  updateNewPostText,
  setProfile,
  setIsFetching
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);