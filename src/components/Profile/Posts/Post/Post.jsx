import styles from './Post.module.css';

import userPhoto from '../../../../assets/images/user.png';

const Post = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.photoWrapper}>
        <div className={styles.userPhoto}>
          {
            props.photos && props.photos.small
              ? <img src={props.photos.small} alt='' />
              : <img src={userPhoto} alt='' />
          }
        </div>
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.userName}>
          {props.userName}
        </div>
        <div className={styles.text}>
          {props.text}
        </div>
        <div className={styles.likes}>
          {
            props.likes === 1
              ? props.likes + ' like'
              : props.likes + ' likes'
          }
        </div>
      </div>
    </div>
  );
  // return (
    
  //   <div className={styles.item}>
  //     <img src='https://i.pinimg.com/736x/fe/fe/70/fefe704e3129e8d42ae6e889e3615436--funny-animals-funny-cats.jpg' alt='' />
  //     {props.text}
  //     <div>{props.likes} like</div>
  //   </div>
  // );
}

export default Post;