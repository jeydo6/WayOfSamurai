import Dialogs from './Dialogs';

import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState();

          let addMessage = (text) => {
            store.dispatch(addMessageActionCreator(text));
          };
        
          let updateNewMessageText = (newMessageText) => {
            store.dispatch(updateNewMessageTextActionCreator(newMessageText))
          }

          return <Dialogs
            dialogs={state.dialogs.dialogs}
            messages={state.dialogs.messages}
            newMessageText={state.dialogs.newMessageText}
            addMessage={addMessage}
            updateNewMessageText={updateNewMessageText}
          />
        }
      }
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;