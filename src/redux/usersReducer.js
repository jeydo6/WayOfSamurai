const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

let initialState = {
  users: [],
  pageSize: 5,
  totalCount: 0,
  currentPage: 1,
  isFetching: false
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
              isFollowed: true
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
              isFollowed: false
            };
          }
          return f;
        })
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.pageNumber
      }
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    default:
      return state;
  }
};

export const followActionCreator = (id) => ({
  type: FOLLOW,
  id: id
});

export const unfollowActionCreator = (id) => ({
  type: UNFOLLOW,
  id: id
});

export const setUsersActionCreator = (users) => ({
  type: SET_USERS,
  users: users
});

export const setTotalCountActionCreator = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount: totalCount
});

export const setCurrentPageActionCreator = (pageNumber) => ({
  type: SET_CURRENT_PAGE,
  pageNumber: pageNumber
});

export const setIsFetchingActionCreator = (isFetching) => ({
  type: SET_IS_FETCHING,
  isFetching: isFetching
});

export default usersReducer;