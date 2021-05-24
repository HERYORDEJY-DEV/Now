import { LIGHT_THEME } from './constants';

export const initialState = {
  fullname: '',
  email: '',
  password: '',
  occupation: '',
  isSignedIn: false,
};
export const initialTask = [];

//User Authentication Reducer
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        ...action.user_data,
        avatar: require('../assets/images/avatar.jpg'),
      };

    case LOGIN:
      return { ...state, ...action.user_data };

    case SIGN_OUT:
      return { ...state, ...action.user_data };

    default:
      return state;
  }
};

//Add New Task/To Do Reducer
const TaskReducer = (state = initialTask, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...action.task];
    case EDIT_TASK:
      return [...action.task];
    case REMOVE_TASK:
      return [...action.task];
    case STARTED_TASK:
      return [...action.task];
    case COMPLETED_TASK:
      return [...action.task];
    default:
      return state;
  }
};

function ThemeReducer(state = false, action) {
  switch (action) {
    case LIGHT_THEME:

      break;

    default:
      break;
  }
}

export default { AuthReducer, TaskReducer };
