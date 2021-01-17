import React from 'react';

import styles from './Dialogs.module.css';

import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
  let newMessageElement = React.createRef();

  let onAddMessage = () => {
    let text = newMessageElement.current.value;

    props.addMessage(text);
  };

  let onNewMessageTextChange = (e) => {
    let newPostText = e.target.value;

    props.updateNewMessageText(newPostText);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.dialogs}>
        {
          props.dialogs.map((d, i) => <Dialog id={d.id} name={d.name} key={i} />)
        }
      </div>
      <div className={styles.messages}>
        {
          props.messages.map((m, i) => <Message text={m.text} key={i} />)
        }
        <div className={styles.newMessage}>
          <div>
          <textarea value={props.newMessageText} onChange={onNewMessageTextChange} ref={newMessageElement} placeholder='Enter your text' />
          </div>
          <div>
            <button onClick={onAddMessage}>Add Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;