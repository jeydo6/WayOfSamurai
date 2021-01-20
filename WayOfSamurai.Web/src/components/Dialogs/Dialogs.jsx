import React from 'react';

import styles from './Dialogs.module.css';

import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

class Dialogs extends React.Component {
  
  newMessageElement = React.createRef();

  onAddMessage = () => {
    let text = this.newMessageElement.current.value;

    this.props.addMessage(text);
  };

  onNewMessageTextChange = (e) => {
    let newPostText = e.target.value;

    this.props.updateNewMessageText(newPostText);
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.dialogs}>
          {
            this.props.dialogs.map((d, i) => <Dialog id={d.id} name={d.name} key={i} />)
          }
        </div>
        <div className={styles.messages}>
          {
            this.props.messages.map((m, i) => <Message text={m.text} key={i} />)
          }
          <div className={styles.newMessage}>
            <div>
              <textarea
                value={this.props.newMessageText}
                ref={this.newMessageElement}
                onChange={this.onNewMessageTextChange}
                placeholder='Enter your text'
              />
            </div>
            <div>
              <button onClick={this.onAddMessage}>Add Message</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dialogs;