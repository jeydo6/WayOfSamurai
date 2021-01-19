import React from 'react';

import styles from './Profile.module.css';

import InfoContainer from './Info/InfoContainer';
import PostsContainer from './Posts/PostsContainer';

class Profile extends React.Component {
  
  render() {
    return (
      <div className={styles.wrapper}>
        <InfoContainer />
        <hr />
        <PostsContainer />
      </div>
    );
  }
}

export default Profile;