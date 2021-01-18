import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Dialog.module.css';

class Dialog extends React.Component {
  render() {
    let path = '/dialogs/' + this.props.id;

    return (
      <div className={styles.item}>
        <NavLink to={path} activeClassName={styles.active}>{this.props.name}</NavLink>
      </div>
    );
  }

}

export default Dialog;