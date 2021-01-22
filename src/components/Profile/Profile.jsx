import React from 'react';

import styles from './Profile.module.css';

import Info from './Info/Info';
import Posts from './Posts/Posts';

class Profile extends React.Component {

  render() {
    return (
      <div className={styles.wrapper}>
        <Info
          {...this.props.profile}
        />
        <hr />
        <Posts
          posts={this.props.profile.posts}
          newPostText={this.props.newPostText}

          addPost={this.props.addPost}
          updateNewPostText={this.props.updateNewPostText}
        />
      </div>
    );
  }
}

export default Profile;