import Dialogs from './Dialogs';

import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let addMessage = (text) => {
    props.store.dispatch(addMessageActionCreator(text));
  };

  let updateNewMessageText = (newMessageText) => {
    props.store.dispatch(updateNewMessageTextActionCreator(newMessageText))
  }

  return(
    <Dialogs
      dialogs={state.dialogs.dialogs}
      messages={state.dialogs.messages}
      newMessageText={state.dialogs.newMessageText}
      addMessage={addMessage}
      updateNewMessageText={updateNewMessageText}
    />
  );
};

export default DialogsContainer;