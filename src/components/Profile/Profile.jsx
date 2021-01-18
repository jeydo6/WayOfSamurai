import React from 'react';

import styles from './Profile.module.css';

import Info from './Info/Info';
import PostsContainer from './Posts/PostsContainer';

class Profile extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Info />
        <PostsContainer />
      </div>
    );
  }
}

export default Profile;