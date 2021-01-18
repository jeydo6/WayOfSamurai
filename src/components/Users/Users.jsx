import axios from 'axios';
import React from 'react';

import styles from './Users.module.css'

import User from './User/User';

class Users extends React.Component {
  getUsers = () => {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        let users = response.data.items.map(i => ({
            id: i.id,
            name: i.name,
            status: i.status,
            followed: i.followed
          })
        );

        this.props.setUsers(users);
      });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        {
          this.props.users.map((u, i) => <User
            id={u.id}
            name={u.name}
            status={u.status}
            location={u.location}
            followed={u.followed}
            key={i}
  
            follow={this.props.follow}
            unfollow={this.props.unfollow}
          />)
        }
        <button onClick={this.getUsers}>Get Users</button>
      </div>
    );
  }
}

export default Users;