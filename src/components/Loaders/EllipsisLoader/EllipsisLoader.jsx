import React from 'react'

import styles from './EllipsisLoader.module.css'

class EllipsisLoader extends React.Component {
  
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.ldsEllipsis}><div></div><div></div><div></div><div></div></div>
      </div>
    );
  }
}

export default EllipsisLoader;