const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
  dialogs: [
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
  ],
  newMessageText: '',
  messages: [
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
  ]
};

const dialogsReducer = (state = initialState, action) => {
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