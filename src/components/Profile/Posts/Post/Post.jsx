import React from 'react';

import styles from './Post.module.css';

import userPhoto from '../../../../assets/images/user.png';

class Post extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.photoWrapper}>
          <div className={styles.userPhoto}>
            {
              this.props.photos && this.props.photos.small
                ? <img src={this.props.photos.small} alt='' />
                : <img src={userPhoto} alt='' />
            }
          </div>
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.userName}>
            {this.props.userName}
          </div>
          <div className={styles.text}>
            {this.props.text}
          </div>
          <div className={styles.likes}>
            {
              this.props.likes === 1
                ? this.props.likes + ' like'
                : this.props.likes + ' likes'
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Post;