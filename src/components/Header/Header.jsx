import React from 'react';

import styles from './Header.module.css';

class Header extends React.Component {
  
  render() {
    return (
      <header className={styles.header}>
        <img src='https://www.vippng.com/png/full/37-371100_canon-usa-global-methodology-logo-design-hd-png.png' alt='' />
      </header>
    );
  }
}

export default Header;