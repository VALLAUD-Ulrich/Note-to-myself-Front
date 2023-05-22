export const CHECK_LOGIN = 'CHECK_LOGIN';
export const CHECK_REGISTER = 'CHECK_REGISTER';
export const CHANGE_LOGIN_TAB = 'CHANGE_LOGIN_TAB';
export const CHANGE_BULLET_TAB = 'CHANGE_BULLET_TAB';
export const TOGGLE_BULLET_LOGIN = 'TOGGLE_BULLET_LOGIN';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGGED = 'USER_LOGGED';
export const USER_REGISTER_FAILED = 'USER_REGISTER_FAILED';
export const USER_DISCONNECT = 'USER_DISCONNECT';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';
export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const UPLOAD_FILE_USER = 'UPLOAD_FILE_USER';
export const SUCCES_MESSAGE = 'SUCCES_MESSAGE';
export const MESS_ERROR_SERVER = 'MESS_ERROR_SERVER';
export const MESS_ERROR = 'MESS_ERROR';
export const TOKEN_IN_STATE = 'TOKEN_IN_STATE';
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const USER_UPDATED = 'USER_UPDATED';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const STORE_UPLOADED_IMG_USER = 'STORE_UPLOADED_IMG_USER';
export const MENU_CLICKED = 'MENU_CLICKED';
export const TOGGLE_DARK = 'TOGGLE_DARK';
export const UPDATE_DARK = 'UPDATE_DARK';
export const UPDATE_LOGIN = 'UPDATE_LOGIN';
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';
export const LS_TO_STATE = 'LS_TO_STATE';
export const UPDATE_USER = 'UPDATE_USER';

export function actionCheckLogin() {
  return {
    type: CHECK_LOGIN,
  };
}

export function actionCheckRegister() {
  return {
    type: CHECK_REGISTER,
  };
}

export function actionChangeLoginTab(tab) {
  return {
    type: CHANGE_LOGIN_TAB,
    tab,
  };
}

export function actionChangeBulletTab(value) {
  return {
    type: CHANGE_BULLET_TAB,
    value,
  };
}

export function actionToggleBulletLogin() {
  return {
    type: TOGGLE_BULLET_LOGIN,
  };
}

export function actionUserLogin(data) {
  console.log(data);
  return {
    type: USER_LOGIN,
    username: data.username,
    idUser: data.id,
    token: data.token,
    email: data.email,
    photo_url: data.photo_url,
    dark: data.dark,
  };
}

export function actionUserLogged() {
  return {
    type: USER_LOGGED,
  };
}

export function actionRegisterFailed() {
  return {
    type: USER_REGISTER_FAILED,
  };
}

export function actionDisconnect() {
  return {
    type: USER_DISCONNECT,
  };
}

export function actionLoginFailed() {
  return {
    type: USER_LOGIN_FAILED,
  };
}

export function actionUpdateUsername(updatedUsername) {
  return {
    type: UPDATE_USERNAME,
    updatedUsername,
  };
}
export function actionUpdatePassword(updatedPassword) {
  return {
    type: UPDATE_PASSWORD,
    updatedPassword,
  };
}

export function actionSetUploadFileUser(filePath) {
  return {
    type: UPLOAD_FILE_USER,
    filePath,
  };
}

export function actionSetMessErrorServ() {
  return {
    type: MESS_ERROR_SERVER,
  };
}

export function actionSetMessError(message) {
  return {
    type: MESS_ERROR,
    message,
  };
}
export function putTokenInState() {
  return {
    type: TOKEN_IN_STATE,
  };
}

export function actionUserUpdated() {
  return {
    type: USER_UPDATED,
  };
}

export function actionStoreUploadedImg() {
  return {
    type: STORE_UPLOADED_IMG_USER,
  };
}

export function actionMenuClicked() {
  return {
    type: MENU_CLICKED,
  };
}

export function actionToggleDark(value) {
  return {
    type: TOGGLE_DARK,
    value,
  };
}

export function storeUpdatedDark(value) {
  return {
    type: UPDATE_DARK,
    value,
  };
}

export function actionUpdateLogin() {
  return {
    type: UPDATE_LOGIN,
  };
}

export function actionDeleteAccount() {
  return {
    type: DELETE_ACCOUNT,
  };
}

export function storeUserFromLS() {
  return {
    type: LS_TO_STATE,
  };
}
export function updateUser(username, password, photoUrl, dark) {
  return {
    type: UPDATE_USER,
    username,
    password,
    photoUrl,
    dark,
  };
}
