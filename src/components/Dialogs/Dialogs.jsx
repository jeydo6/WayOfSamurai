import styles from './Dialogs.module.css'

import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs = () => {

  let dialogs = [
    {
      id: 1,
      name: 'Ivan'
    },
    {
      id: 2,
      name: 'Andrew'
    },
    {
      id: 3,
      name: 'Michael'
    },
    {
      id: 4,
      name: 'Alex'
    },
    {
      id: 5,
      name: 'Chris'
    },
  ];

  let messages = [
    {
      id: 1,
      text: 'Hi!'
    },
    {
      id: 2,
      text: 'How is your day?'
    },
    {
      id: 3,
      text: 'It\'s amazing!'
    }
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.dialogs}>
        {
          dialogs.map(d => <Dialog id={d.id} name={d.name} />)
        }
      </div>
      <div className={styles.messages}>
        {
          messages.map(m => <Message text={m.text} />)
        }
      </div>
    </div>
  );
}

export default Dialogs;