const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let message = {
        id: 4,
        text: state.newMessageText
      };
    
      state.messages.push(message);
      state.newMessageText = '';
      break;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessageText;
      break;
    default:
      break;
  }

  return state;
}

export const addMessageActionCreator = (text) => ({
  type: ADD_MESSAGE,
  text: text
});

export const updateNewMessageTextActionCreator = (newMessageText) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessageText: newMessageText
});

export default dialogsReducer;