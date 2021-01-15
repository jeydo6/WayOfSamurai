import styles from './Dialogs.module.css'

import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dialogs}>
        {
          props.state.dialogs.map((d, i) => <Dialog id={d.id} name={d.name} key={i} />)
        }
      </div>
      <div className={styles.messages}>
        {
          props.state.messages.map((m, i) => <Message text={m.text} key={i} />)
        }
      </div>
    </div>
  );
}

export default Dialogs;