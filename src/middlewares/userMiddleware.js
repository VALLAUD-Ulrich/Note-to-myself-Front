import axios from 'axios';
import {
  actionUserLogin, actionLoginFailed, CHECK_LOGIN,
  actionRegisterFailed, CHECK_REGISTER,
  actionUserUpdated,
  UPDATE_USER,
  actionDisconnect, DELETE_ACCOUNT,
  TOGGLE_DARK, storeUpdatedDark,
} from '../actions/user';

const userMiddleware = (store) => (next) => (action) => {
  const { REACT_APP_API_URL } = process.env;
  switch (action.type) {
    case CHECK_LOGIN: {
      axios.post(`${REACT_APP_API_URL}/login`, {
        email: store.getState().field.email,
        password: store.getState().field.password,
      }).then((result) => {
        console.log('Requete LOGIN OK', result);
        localStorage.setItem('token', result.data.token);
        localStorage.setItem('userid', result.data.id);
        localStorage.setItem('username', result.data.username);
        localStorage.setItem('email', result.data.email);
        localStorage.setItem('dark', result.data.dark);
        localStorage.setItem('photo_url', result.data.photo_url);
        store.dispatch(actionUserLogin(result.data));
      }).catch((error) => {
        console.log('Requete LOGIN NOK', error);
        store.dispatch(actionLoginFailed());
      });
      break;
    }

    case CHECK_REGISTER: {
      axios.post(`${REACT_APP_API_URL}/signup`, {
        email: store.getState().field.emailRegister,
        password: store.getState().field.passwordRegister,
        username: store.getState().field.username,
      }).then((result) => {
        console.log('Requete REGISTER OK', result);
        localStorage.setItem('token', result.data.token);
        localStorage.setItem('userid', result.data.id);
        localStorage.setItem('username', store.getState().field.username);
        localStorage.setItem('usernameTyping', store.getState().field.username);
        localStorage.setItem('email', store.getState().field.emailRegister);
        store.dispatch(actionUserLogin(result.data));
      }).catch((error) => {
        console.log('Requete REGISTER NOK', error);
        store.dispatch(actionRegisterFailed());
      });

      break;
    }

    case UPDATE_USER: {
      axios.patch(
        `${REACT_APP_API_URL}/user`,
        {
          username: store.getState().user.usernameTyping,
          password: store.getState().user.password,
          photo_url: store.getState().user.photo_url,
          dark: store.getState().user.dark,
        },
        {
          headers: {
            Authorization: `bearer ${localStorage.getItem('token')}`,
            userid: localStorage.getItem('userid'),
          },
        },
      ).then((result) => {
        console.log('Requete UPDATE USER OK', result);
        store.dispatch(actionUserUpdated());
      }).catch((error) => {
        console.log('Requete UPDATE USER NOK', error);
      });
      break;
    }

    case DELETE_ACCOUNT: {
      axios.delete(
        `${REACT_APP_API_URL}/user`,
        {
          headers: {
            Authorization: `bearer ${localStorage.getItem('token')}`,
            userid: localStorage.getItem('userid'),
          },
        },
      ).then((result) => {
        console.log('Requete DELETE ACCOUNT OK', result);
        store.dispatch(actionDisconnect());
      }).catch((error) => {
        console.log('Requete DELETE ACCOUNT NOK', error);
      });
      break;
    }

    case TOGGLE_DARK: {
      const userid = localStorage.getItem('userid');
      if (userid) {
        axios.patch(
          `${REACT_APP_API_URL}/user`,
          {
            dark: action.value,
          },
          {
            headers: {
              Authorization: `bearer ${localStorage.getItem('token')}`,
              userid: localStorage.getItem('userid'),
            },
          },
        ).then((result) => {
          console.log('Requete UPDATE DARK OK', result);
          store.dispatch(storeUpdatedDark(action.value));
        }).catch((error) => {
          console.log('Requete UPDATE DARK NOK', error);
        });
      }
      else {
        store.dispatch(storeUpdatedDark(action.value));
      }
      break;
    }

    default:
  }
  return next(action);
};

export default userMiddleware;
