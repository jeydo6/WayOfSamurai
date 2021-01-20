import React from 'react';
import { connect } from 'react-redux';

import Dialogs from './Dialogs';

import {
  addMessageActionCreator as addMessage,
  updateNewMessageTextActionCreator as updateNewMessageText
} from '../../redux/dialogsReducer';

class DialogsContainer extends React.Component {
  
  render() {
    return (
      <Dialogs {...this.props} />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs.dialogs,
    messages: state.dialogs.messages,
    newMessageText: state.dialogs.newMessageText
  };
};

let mapDispatchToProps = {
  addMessage,
  updateNewMessageText
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer);