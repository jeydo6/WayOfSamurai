import axios from 'axios';
import React from 'react';

import styles from './Users.module.css'

import User from './User/User';

class Users extends React.Component {
  getUsers = (pageNumber, pageSize) => {
    let path = `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`;
    axios
      .get(path)
      .then(response => {
        let users = response.data.items.map(i => ({
            id: i.id,
            name: i.name,
            status: i.status,
            photos: i.photos,
            followed: i.followed
          })
        );

        this.props.setUsers(users);
        this.props.setTotalCount(response.data.totalCount);
      });
  }

  getPages(pageNumber, totalCount) {
    let left = [];
    if (pageNumber > 0) {
      if (pageNumber === 3) {
        left = [1, pageNumber - 1];
      }
      else if (pageNumber === 2) {
        left = [1];
      }
      else if (pageNumber === 1) {
        left = [];
      }
      else {
        left = [1, null, pageNumber - 1];
      }
    }

    let right = [];
    if (pageNumber < totalCount) {
      if (pageNumber === totalCount - 3) {
        right = [pageNumber + 1, totalCount - 1];
      }
      else if (pageNumber === totalCount - 2) {
        right = [totalCount - 1];
      }
      else if (pageNumber === totalCount - 1) {
        right = [];
      }
      else {
        right = [pageNumber + 1, null, totalCount - 1];
      }
    }

    return [...left, pageNumber, ...right];
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.getUsers(pageNumber, this.props.pageSize);
  };

  componentDidMount() {
    this.getUsers(this.props.currentPage, this.props.pageSize);
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);

    let pages = this.getPages(this.props.currentPage, pagesCount);

    return (
      <div className={styles.wrapper}>
        <div>
          {
            this.props.users.map((u, i) => <User
              id={u.id}
              name={u.name}
              status={u.status}
              photos={u.photos}
              followed={u.followed}
              location={u.location}
              key={i}

              follow={this.props.follow}
              unfollow={this.props.unfollow}
            />)
          }
        </div>
        <div>
          {
            pages.map((p, i) => (
                p
                  ? <span
                      className={this.props.currentPage === p ? styles.selectedPage : ''}
                      onClick={() => this.onPageChanged(p)}
                      key={i}
                    > {p} </span>
                  : <span key={i}> ... </span>
              )
            )
          }
        </div>
      </div>
    );
  }
}

export default Users;