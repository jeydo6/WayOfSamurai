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
  ],
  newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let message = {
        id: 0,
        text: action.text
      };

      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, message]
      };
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newMessageText
      };
    default:
      return state;
  }
};

export const addMessageActionCreator = (text) => ({
  type: ADD_MESSAGE,
  text: text
});

export const updateNewMessageTextActionCreator = (newMessageText) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessageText: newMessageText
});

export default dialogsReducer;