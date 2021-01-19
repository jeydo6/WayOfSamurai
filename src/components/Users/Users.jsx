import React from 'react';

import styles from './Users.module.css'

import User from './User/User';

class Users extends React.Component {
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
              isFollowed={u.isFollowed}
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
                      onClick={() => this.props.onPageChanged(p)}
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