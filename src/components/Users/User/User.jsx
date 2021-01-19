import React from 'react';

import styles from './User.module.css';

import userPhoto from '../../../assets/images/user.png';

class User extends React.Component {
  onFollow = () => {
    this.props.follow(this.props.id);
  }

  onUnfollow = () => {
    this.props.unfollow(this.props.id);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.photoWrapper}>
          <div className={styles.photo}>
            {
              this.props.photos && this.props.photos.small
                ? <img src={this.props.photos.small} alt='' />
                : <img src={userPhoto} alt='' />
            }
          </div>
          <div className={styles.action}>
            {
              this.props.isFollowed
                ? <button onClick={this.onUnfollow}>Unfollow</button>
                : <button onClick={this.onFollow}>Follow</button>
            }
          </div>
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.name}>
            {this.props.name}
          </div>
          <div className={styles.status}>
            {this.props.status}
          </div>
          {
            this.props.location
            ? (
              <div className={styles.location}>
                <div>
                  {this.props.location.country},
                </div>
                <div>
                  {this.props.location.city}
                </div>
              </div>
            )
            : (
              null
            )
          }
        </div>
      </div>
    );  
  }
}

export default User;