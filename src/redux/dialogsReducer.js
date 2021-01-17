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

const dialogsReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let message = {
        id: 4,
        text: action.text
      };

      let newState = {...oldState};
      newState.messages = [...oldState.messages, message];
      newState.newMessageText = '';

      return newState;
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      let newState = {...oldState};
      newState.newMessageText = action.newMessageText;

      return newState;
    }
    default:
      return oldState;
  }
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