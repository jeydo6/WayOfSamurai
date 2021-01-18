import React from 'react';

import styles from './Info.module.css';

class Info extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.header}>
          <img src='https://domfotooboev.com.ua/home/products_images/0381.jpg' alt='' />
        </div>
        <div>
          Description
        </div>
      </div>
    );
  }
}

export default Info;