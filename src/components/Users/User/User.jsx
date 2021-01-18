import styles from './User.module.css';

import userPhoto from '../../../assets/images/user.png';

const User = (props) => {
  let onFollow = () => {
    props.follow(props.id);
  }

  let onUnfollow = () => {
    props.unfollow(props.id);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.photoWrapper}>
        <div className={styles.photo}>
          {
            props.photos && props.photos.small
              ? <img src={props.photos.small} alt='' />
              : <img src={userPhoto} alt='' />
          }
        </div>
        <div className={styles.action}>
          {
            props.followed
              ? <button onClick={onUnfollow}>Unfollow</button>
              : <button onClick={onFollow}>Follow</button>
          }
        </div>
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.name}>
          {props.name}
        </div>
        <div className={styles.status}>
          {props.status}
        </div>
        {
          props.location
          ? (
            <div className={styles.location}>
              <div>
                {props.location.country},
              </div>
              <div>
                {props.location.city}
              </div>
            </div>
          )
          : (
            null
          )
        }
      </div>
    </div>
  );
};

export default User;