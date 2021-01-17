import { connect } from 'react-redux';

import Users from './Users';

import { followActionCreator, unfollowActionCreator, addUsersActionCreator } from '../../redux/usersReducer';

let mapStateToProps = (state) => {
  return {
    users: state.users.users
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (id) => {
      dispatch(followActionCreator(id));
    },
    unfollow: (id) => {
      dispatch(unfollowActionCreator(id));
    },
    addUsers: (users) => {
      dispatch(addUsersActionCreator(users));
    }
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;