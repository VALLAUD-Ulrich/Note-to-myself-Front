import {
  CHANGE_INPUT_VALUE, PASSWORD_HIDDEN, CHANGE_REMINDER_VALUE, EMPTY_FORM_MEMENTO, EMPTY_ID_RESTAURANT,
} from '../actions/field';
import { CHANGE_FAV } from '../actions/restaurantActions';

export const initialState = {
  username: '',
  email: '',
  emailRegister: '',
  passwordRegister: '',
  password: '',
  emaillostpassword: '',
  searchRestaurant: '',
  locationRestaurant: '',
  isHidden: true,
  restaurantMemento: '',
  addCommentMemento: '',
  addReminderSelected: 0,
  hiddenIdRestaurant: '',
  nameMemento: '',
  restaurantName: '',
  isFavorite: false,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_INPUT_VALUE: {
      return {
        ...state,
        [action.name]: action.payload,
      };
    }
    case PASSWORD_HIDDEN: {
      return {
        ...state,
        isHidden: !state.isHidden,
      };
    }
    case CHANGE_REMINDER_VALUE: {
      return {
        ...state,
        addReminderSelected: action.payload,
      };
    }
    case EMPTY_FORM_MEMENTO: {
      return {
        ...state,
        restaurantMemento: '',
        addReminderSelected: 0,
        addCommentMemento: '',
        nameMemento: '',
      };
    }
    case EMPTY_ID_RESTAURANT: {
      return {
        ...state,
        hiddenIdRestaurant: '',
      };
    }
    case CHANGE_FAV:
      return {
        ...state,
        isFavorite: !state.isFavorite,
      };
    default:
      return state;
  }
}

export default reducer;
