import React from 'react';

import styles from './Info.module.css';

import userPhoto from '../../../assets/images/user.png';

class Info extends React.Component {

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.photoWrapper}>
          <div className={styles.photo}>
            {
              this.props.photo
                ? <img src={this.props.photo} alt='' />
                : <img src={userPhoto} alt='' />
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
          <hr />
        </div>
      </div>
    );
  }
}

export default Info;