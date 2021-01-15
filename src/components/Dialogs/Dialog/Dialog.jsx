import { NavLink } from 'react-router-dom'

import styles from './Dialog.module.css'

const Dialog = (props) => {
  return (
    <div className={styles.item}>
      <NavLink to={`/dialogs/${props.id}`} activeClassName={styles.active}>{props.name}</NavLink>
    </div>
  );
}

export default Dialog;