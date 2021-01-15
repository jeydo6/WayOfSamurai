import styles from './Profile.module.css'

import Info from './Info/Info'
import Posts from './Posts/Posts'

const Profile = () => {
  return (
    <div className={styles.wrapper}>
      <Info />
      <Posts />
    </div>
  );
}

export default Profile;