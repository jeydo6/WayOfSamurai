import Post from './Post/Post'
import styles from './Posts.module.css'

const Posts = () => {

  let posts = [
    {
      id: 1,
      text: 'Hi, how are you?',
      likes: 1
    },
    {
      id: 2,
      text: 'It\'s my first post!',
      likes: 23
    }
  ];
  
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
        posts.map(p => <Post text={p.text} likes={p.likes} />)
      }
    </div>
  );
}

export default Posts;