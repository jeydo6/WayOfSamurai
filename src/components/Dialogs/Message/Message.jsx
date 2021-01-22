import React from 'react';

import styles from './Message.module.css';

class Message extends React.Component {
  
  render() {
    return (
      <div className={styles.item}>
        {this.props.text}
      </div>
    );
  }
}

export default Message;