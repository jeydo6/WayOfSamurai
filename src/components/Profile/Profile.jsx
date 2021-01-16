import styles from './Profile.module.css';

import Info from './Info/Info';
import Posts from './Posts/Posts';

const Profile = (props) => {
  return (
    <div className={styles.wrapper}>
      <Info />
      <Posts store={props.store} />
    </div>
  );
}

export default Profile;