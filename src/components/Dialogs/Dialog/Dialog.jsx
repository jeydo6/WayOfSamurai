import { NavLink } from 'react-router-dom'

import styles from './Dialog.module.css'

const Dialog = (props) => {
  let path = '/dialogs/' + props.id;
  
  return (
    <div className={styles.item}>
      <NavLink to={path} activeClassName={styles.active}>{props.name}</NavLink>
    </div>
  );
}

export default Dialog;