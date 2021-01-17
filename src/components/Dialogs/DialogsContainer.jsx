import { connect } from 'react-redux'

import Dialogs from './Dialogs';

import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs.dialogs,
    newMessageText: state.dialogs.newMessageText,
    messages: state.dialogs.messages
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (text) => {
      dispatch(addMessageActionCreator(text));
    },
    updateNewMessageText: (newMessageText) => {
      dispatch(updateNewMessageTextActionCreator(newMessageText))
    }
  }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;