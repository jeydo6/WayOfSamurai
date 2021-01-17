import styles from './Users.module.css'

import User from './User/User';

const Users = (props) => {
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
    </div>
  );
};

export default Users;