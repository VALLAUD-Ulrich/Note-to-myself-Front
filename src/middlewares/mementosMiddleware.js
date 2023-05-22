import axios from 'axios';
import {
  actionDropInputMemento, actionMementoAdded, ADD_MEMENTO, DELETE_MEMENTO, UPDATE_MEMENTO,
} from '../actions/memento';

const mementosMiddleware = (store) => (next) => (action) => {
  const { REACT_APP_API_URL } = process.env;
  switch (action.type) {
    case ADD_MEMENTO: {
      axios.post(
        `${REACT_APP_API_URL}/memento`,
        {
          name: store.getState().field.nameMemento,
          content: store.getState().field.addCommentMemento,
          reminder: store.getState().field.addReminderSelected,
          memento_restaurant_id: action.payload,
        },
        {
          headers: {
            Authorization: `bearer ${localStorage.getItem('token')}`,
          },
        },
      ).then((result) => {
        console.log('Requete axios OK', result);
        store.dispatch(actionMementoAdded());
        store.dispatch(actionDropInputMemento());
      }).catch((error) => {
        console.log('Requete axios NOK', error);
      });
      next(action);
      break;
    }

    case UPDATE_MEMENTO: {
      axios.patch(
        `${REACT_APP_API_URL}/memento`,
        {
          name: store.getState().field.nameMemento,
          content: store.getState().field.addCommentMemento,
          reminder: store.getState().field.addReminderSelected,
          memento_restaurant_id: action.payload,
        },
        {
          headers: {
            Authorization: `bearer ${localStorage.getItem('token')}`,
            id: action.idMemento,
          },
        },
      ).then((result) => {
        console.log('Requete axios OK', result);
        store.dispatch(actionMementoAdded());
        store.dispatch(actionDropInputMemento());
      }).catch((error) => {
        console.log('Requete axios NOK', error);
      });
      next(action);
      break;
    }

    case DELETE_MEMENTO: {
      axios.delete(
        `${REACT_APP_API_URL}/memento`,
        {
          headers: {
            Authorization: `bearer ${localStorage.getItem('token')}`,
            id: action.idMemento,
          },
        },
      ).then((result) => {
        console.log('Requete axios OK', result);
        store.dispatch(actionMementoAdded());
        store.dispatch(actionDropInputMemento());
      }).catch((error) => {
        console.log('Requete axios NOK', error);
      });
      next(action);
      break;
    }

    default:
      break;
  }

  return next(action);
};

export default mementosMiddleware;
