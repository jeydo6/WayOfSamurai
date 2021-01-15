import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img src='https://i.pinimg.com/736x/fe/fe/70/fefe704e3129e8d42ae6e889e3615436--funny-animals-funny-cats.jpg' alt='' />
      {props.text}
      <div>{props.likes} like</div>
    </div>
  );
}

export default Post;