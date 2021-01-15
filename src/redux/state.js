let state = {
  profile: {
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
  }
}

export default state;