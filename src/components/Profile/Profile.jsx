import Posts from './Posts/Posts'
import styles from './Profile.module.css'

const Profile = () => {
  return (
    <div>
      <div className={styles.header}>
        <img src='https://domfotooboev.com.ua/home/products_images/0381.jpg' alt='' />
      </div>
      <Posts />
    </div>
  );
}

export default Profile;