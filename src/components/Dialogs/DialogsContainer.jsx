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
      <Dialogs
        dialogs={this.props.dialogs}
        newMessageText={this.props.newMessageText}
        messages={this.props.messages}

        addMessage={this.props.addMessage}
        updateNewMessageText={this.props.updateNewMessageText}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs.dialogs,
    newMessageText: state.dialogs.newMessageText,
    messages: state.dialogs.messages
  };
};

let mapDispatchToProps = {
  addMessage,
  updateNewMessageText
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer);