import style from './User.module.css';
import userPhoto from '../../../assets/images/user.png';

const User = (props) => {
  let onFollow = () => {
    props.follow(props.id);
  }

  let onUnfollow = () => {
    props.unfollow(props.id);
  }

  return (
    <div className={style.wrapper}>
      <div className={style.photoWrapper}>
        <div className={style.photo}>
          {
            props.photos && props.photos.small
              ? <img src={props.photos.small} alt='' />
              : <img src={userPhoto} alt='' />
          }
        </div>
        <div className={style.action}>
          {
            props.followed
              ? <button onClick={onUnfollow}>Unfollow</button>
              : <button onClick={onFollow}>Follow</button>
          }
        </div>
      </div>
      <div className={style.infoWrapper}>
        <div className={style.name}>
          {props.name}
        </div>
        <div className={style.status}>
          {props.status}
        </div>
        {
          props.location
          ? (
            <div className={style.location}>
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