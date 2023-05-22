import { EMPTY_ID_RESTAURANT } from '../actions/field';
import { ADD_MEMENTO_SAVED } from '../actions/memento';

const initialState = {
  mementoSaved: false,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_MEMENTO_SAVED: {
      return {
        ...state,
        mementoSaved: true,
      };
    }
    case EMPTY_ID_RESTAURANT: {
      return {
        ...state,
        mementoSaved: false,
      };
    }
    default:
      return state;
  }
}

export default reducer;
