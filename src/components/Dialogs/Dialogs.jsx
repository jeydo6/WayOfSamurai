import styles from './Dialogs.module.css'

import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dialogs}>
        <Dialog id='1' name='Ivan' />
        <Dialog id='2' name='Andrew' />
        <Dialog id='3' name='Michael' />
        <Dialog id='4' name='Alex' />
        <Dialog id='5' name='Chris' />
      </div>
      <div className={styles.messages}>
        <Message text='Hi!' />
        <Message text='How is your day?' />
        <Message text='It&apos;s amazing!' />
      </div>
    </div>
  );
}

export default Dialogs;