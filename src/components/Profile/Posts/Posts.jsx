import Post from './Post/Post'
import styles from './Posts.module.css'

const Posts = () => {
  return (
    <div>
      Posts
      <div className={styles.newPost}>
        <div>
          <textarea />
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </div>
      <Post message='Hi, how are you?' />
      <Post message='It&apos;s my first post!' />
    </div>
  );
}

export default Posts;