import React from 'react';
import { connect } from 'react-redux';

import Profile from './Profile';
import Loader from '../Loaders/EllipsisLoader/EllipsisLoader';

class ProfileContainer extends React.Component {
  
  render() {
    return (
      this.props.isFetching
        ? <Loader />
        : <Profile {...this.props} />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    //
  };
};

let mapDispatchToProps = {
  //
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);