import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';

export const store = {
  _state: {
    profile: {
      newPostText: '',
      posts: [
        {
          id: 1,
          text: 'Hi, how are you?',
          likes: 1
        },
        {
          id: 2,
          text: 'It\'s my first post!',
          likes: 23
        }
      ]
    },
    dialogs: {
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
    },
    sidebar: {
      
    }
  },
  _subscriber() {
    console.log('There are no subscribers');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._subscriber = observer;
  },

  dispatch(action) {

    this._state.profile = profileReducer(this._state.profile, action);
    this._state.dialogs = dialogsReducer(this._state.dialogs, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._subscriber();
  }
};

export default store;