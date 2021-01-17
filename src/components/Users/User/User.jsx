import style from './User.module.css'

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
        <div className={style.avatar}>
          <img src='https://i.pinimg.com/736x/fe/fe/70/fefe704e3129e8d42ae6e889e3615436--funny-animals-funny-cats.jpg' alt='' />
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
        <div className={style.location}>
          <div>
            {props.location.country},
          </div>
          <div>
            {props.location.city}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;