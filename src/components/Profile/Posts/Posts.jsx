import Post from './Post/Post'

const Posts = () => {
  return (
    <div>
      Posts
      <div>
        <textarea />
        <button>Add Post</button>
      </div>
      <Post message='Hi, how are you?' />
      <Post message='It&apos;s my first post!' />
    </div>
  );
}

export default Posts;