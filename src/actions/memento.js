import { EMPTY_FORM_MEMENTO, EMPTY_ID_RESTAURANT } from './field';

// --- ACTION TYPES ---
export const ADD_MEMENTO = 'ADD_MEMENTO';
export const ADD_MEMENTO_SAVED = 'ADD_MEMENTO_SAVED';
export const UPDATE_MEMENTO = 'UPDATE_MEMENTO';
export const READ_ONLY_RESTAURANT = 'READ_ONLY_RESTAURANT';
export const DELETE_MEMENTO = 'DELETE_MEMENTO';

// --- ACTION CREATOR ---
export function actionAddMemento(idRestaurant) {
  return {
    type: ADD_MEMENTO,
    payload: idRestaurant,
  };
}

export function actionMementoAdded() {
  return {
    type: ADD_MEMENTO_SAVED,
  };
}

export function actionDropInputMemento() {
  return {
    type: EMPTY_FORM_MEMENTO,
  };
}

export function actionDeleteIdRestaurant() {
  return {
    type: EMPTY_ID_RESTAURANT,
  };
}

export function actionUpdateMemento(idRestaurant, idMemento) {
  return {
    type: UPDATE_MEMENTO,
    payload: idRestaurant,
    idMemento,
  };
}
export function actionDeleteMemento(idMemento) {
  return {
    type: DELETE_MEMENTO,
    idMemento,
  };
}
