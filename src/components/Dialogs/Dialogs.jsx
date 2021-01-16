import React from 'react';

import styles from './Dialogs.module.css';

import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';

const Dialogs = (props) => {
  let state = props.store.getState();
  let dispatch = props.store.dispatch.bind(props.store);

  let addMessageClick = () => {

    dispatch(addMessageActionCreator());
  };

  let newMessageUpdate = (e) => {
    let newPostText = e.target.value;

    dispatch(updateNewMessageTextActionCreator(newPostText))
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.dialogs}>
        {
          state.dialogs.dialogs.map((d, i) => <Dialog id={d.id} name={d.name} key={i} />)
        }
      </div>
      <div className={styles.messages}>
        {
          state.dialogs.messages.map((m, i) => <Message text={m.text} key={i} />)
        }
        <div className={styles.newMessage}>
          <div>
          <textarea value={state.dialogs.newMessageText} onChange={newMessageUpdate} placeholder='Enter your text' />
          </div>
          <div>
            <button onClick={addMessageClick}>Add Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;