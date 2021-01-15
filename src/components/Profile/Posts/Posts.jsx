import Post from './Post/Post'
import styles from './Posts.module.css'

const Posts = (props) => {
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
      {
        props.posts.map((p, i) => <Post text={p.text} likes={p.likes} key={i} />)
      }
    </div>
  );
}

export default Posts;