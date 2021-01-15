import styles from './Profile.module.css';

import Info from './Info/Info';
import Posts from './Posts/Posts';

const Profile = (props) => {
  return (
    <div className={styles.wrapper}>
      <Info />
      <Posts posts={props.state.posts} />
    </div>
  );
}

export default Profile;