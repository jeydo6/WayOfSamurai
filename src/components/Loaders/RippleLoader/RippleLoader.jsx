import React from 'react'

import styles from './RippleLoader.module.css'

class RippleLoader extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.ldsRipple}><div></div><div></div></div>
      </div>
    );
  }
}

export default RippleLoader;