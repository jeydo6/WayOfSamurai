const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const ADD_USERS = 'ADD_USERS';

let initialState = {
  users: [
    {
      id: 1,
      name: 'Ivan',
      status: 'Hello! I\'m here now!',
      location: {
        country: 'Russia',
        city: 'Moscow'
      },
      followed: true
    },
    {
      id: 2,
      name: 'Andrew',
      status: 'Hello!',
      location: {
        country: 'Belarus',
        city: 'Minsk'
      },
      followed: false
    },
    {
      id: 3,
      name: 'Michael',
      status: 'Hey!',
      location: {
        country: 'Germany',
        city: 'Berlin'
      },
      followed: false
    },
    {
      id: 4,
      name: 'Alex',
      status: 'Hey, what\'s up?',
      location: {
        country: 'United States',
        city: 'San Francisco'
      },
      followed: false
    },
    {
      id: 5,
      name: 'Chris',
      status: 'London - is the capital of Great Britain!',
      location: {
        country: 'Great Britain',
        city: 'London'
      },
      followed: false
    }
  ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(f => {
          if (f.id === action.id) {
            return {
              ...f,
              followed: true
            };
          }
          return f;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(f => {
          if (f.id === action.id) {
            return {
              ...f,
              followed: false
            };
          }
          return f;
        })
      };
    case ADD_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      };
    default:
      return state;
  }
}

export const followActionCreator = (id) => ({
  type: FOLLOW,
  id: id
});

export const unfollowActionCreator = (id) => ({
  type: UNFOLLOW,
  id: id
});

export const addUsersActionCreator = (users) => ({
  type: ADD_USERS,
  users: users
});

export default usersReducer;