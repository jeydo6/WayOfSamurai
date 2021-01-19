import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';

import Users from './Users';
import Loader from '../Loaders/EllipsisLoader/EllipsisLoader';

import {
  followActionCreator as follow,
  unfollowActionCreator as unfollow,
  setUsersActionCreator as setUsers,
  setTotalCountActionCreator as setTotalCount,
  setCurrentPageActionCreator as setCurrentPage,
  setIsFetchingActionCreator as setIsFetching
} from '../../redux/usersReducer';

class UsersContainer extends React.Component {
  getUsers = (pageNumber, pageSize) => {
    let path = `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`;

    this.props.setIsFetching(true);
    axios
      .get(path)
      .then(response => {
        let users = response.data.items.map(i => ({
          id: i.id,
          name: i.name,
          status: i.status,
          photos: i.photos,
          isFollowed: i.followed
        })
        );

        this.props.setUsers(users);
        this.props.setIsFetching(false);
        this.props.setTotalCount(response.data.totalCount);
      })
      .catch(_ => {
        this.props.setUsers([]);
        this.props.setIsFetching(false);
        this.props.setTotalCount(0);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.getUsers(pageNumber, this.props.pageSize);
  };

  componentDidMount() {
    this.getUsers(this.props.currentPage, this.props.pageSize);
  }

  render() {
    return (
      this.props.isFetching
        ? <Loader />
        : <Users
          users={this.props.users}
          pageSize={this.props.pageSize}
          totalCount={this.props.totalCount}
          currentPage={this.props.currentPage}

          follow={this.props.follow}
          unfollow={this.props.unfollow}
          setUsers={this.props.setUsers}
          setTotalCount={this.props.setTotalCount}
          setCurrentPage={this.props.setCurrentPage}

          onPageChanged={this.onPageChanged}
        />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalCount: state.users.totalCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching
  };
};

let mapDispatchToProps = {
  follow,
  unfollow,
  setUsers,
  setTotalCount,
  setCurrentPage,
  setIsFetching
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);;