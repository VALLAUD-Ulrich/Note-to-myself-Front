import {
  USER_LOGIN, UPDATE_USERNAME, UPDATE_PASSWORD, USER_UPDATED,
  USER_REGISTER_FAILED, USER_DISCONNECT, USER_LOGIN_FAILED, CHANGE_LOGIN_TAB,
  TOGGLE_BULLET_LOGIN, CHANGE_BULLET_TAB, UPLOAD_FILE_USER, TOKEN_IN_STATE, LS_TO_STATE, UPDATE_DARK,

} from '../actions/user';

export const initialState = {
  idUser: '',
  email: '',
  username: '',
  usernameTyping: '',
  password: '',
  dark: true,
  photo_url: '',
  activeTab: 'SignIn',
  bullet: true,
  bulletPoint: 1,
  errorRegister: false,
  errorLogin: false,
  isLoading: true,
  token: '',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        email: action.email,
        password: '',
        token: action.token,
        username: action.username,
        usernameTyping: action.username,
        idUser: action.id,
        photo_url: action.photo_url,
        dark: action.dark,
      };
    case USER_DISCONNECT:
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('userid');
      localStorage.removeItem('photo_url');
      localStorage.removeItem('dark');
      localStorage.removeItem('email');
      return {
        ...state,
        username: '',
        token: '',
        userid: '',
        email: '',
        dark: true,
        photo_url: '',
        usernameTyping: '',
      };

    case USER_REGISTER_FAILED:
      return {
        ...state,
        errorRegister: true,
      };
    case USER_LOGIN_FAILED:
      return {
        ...state,
        errorLogin: true,
      };
    case USER_UPDATED:
      localStorage.setItem('username', state.usernameTyping);
      localStorage.setItem('photo_url', state.photo_url);
      localStorage.setItem('dark', state.dark);
      return {
        ...state,
        username: state.usernameTyping,
        password: '',
      };
    case UPDATE_USERNAME:
      return {
        ...state,
        usernameTyping: action.updatedUsername,
      };

    case UPDATE_PASSWORD:
      return {
        ...state,
        password: action.updatedPassword,
      };

    case CHANGE_LOGIN_TAB:
      return {
        ...state,
        activeTab: action.tab,
      };
    case TOGGLE_BULLET_LOGIN:
      return {
        ...state,
        bullet: false,
      };
    case CHANGE_BULLET_TAB:
      return {
        ...state,
        bulletPoint: action.value,
      };
    case TOKEN_IN_STATE:
      return {
        ...state,
        token: localStorage.getItem('token'),

      };
    case UPLOAD_FILE_USER:
      return {
        ...state,
        photo_url: action.filePath,
      };
    case UPDATE_DARK:
      return {
        ...state,
        dark: action.value,

      };
    case LS_TO_STATE:
      return {
        ...state,
        token: localStorage.getItem('token'),
        userid: localStorage.getItem('userid'),
        username: localStorage.getItem('username'),
        email: localStorage.getItem('email'),
        dark: localStorage.getItem('dark'),
        photo_url: localStorage.getItem('photo_url'),
        usernameTyping: localStorage.getItem('username'),

      };
    default:
      return state;
  }
}

export default reducer;
