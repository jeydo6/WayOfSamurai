import axios from 'axios';

import styles from './Users.module.css'

import User from './User/User';

const Users = (props) => {
  let getUsers = () => {
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

        props.setUsers(users);
      });
  }

  return (
    <div className={styles.wrapper}>
      {
        props.users.map((u, i) => <User
          id={u.id}
          name={u.name}
          status={u.status}
          location={u.location}
          followed={u.followed}
          key={i}

          follow={props.follow}
          unfollow={props.unfollow}
        />)
      }
      <button onClick={getUsers}>Get Users</button>
    </div>
  );
};

export default Users;