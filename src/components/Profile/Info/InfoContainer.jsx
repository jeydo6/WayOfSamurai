import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';

import Info from './Info';

import {
  setInfoActionCreator as setInfo,
  setIsFetchingActionCreator as setIsFetching
} from '../../../redux/profileReducer';

class InfoContainer extends React.Component {

  getInfo = (userId) => {
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
            status: statusResponse.data
          };
  
          this.props.setInfo(info);
          this.props.setIsFetching(false);
        })
      )
      .catch(_ => {
        this.props.setInfo(null);
        this.props.setIsFetching(false);
      });
  }

  componentDidMount() {
    this.getInfo(2);
  }

  render() {
    return (
      <Info {...this.props} getInfo={this.getInfo} />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    id: state.profile.info.id,
    name: state.profile.info.name,
    status: state.profile.info.status,
    photos: state.profile.info.photos
  };
};

let mapDispatchToProps = {
  setInfo,
  setIsFetching
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoContainer);