import { EMPTY_ID_RESTAURANT } from '../actions/field';
import {
  STORE_UPLOAD_FILE_PATH, CHANGE_CURRENT_TAB, SEARCH_RESULT,
  EDIT_TYPE_COM, STORE_ALL_RESTAURANTS, STORE_ONE_RESTAURANT,
  CHANGE_TOGGLE_MAP, SET_EDITING_DUMMY, UPDATE_DUMMY, ADD_NEW_TAG,
  DELETE_TAG, TYPE_NEW_TAG, DELETE_DUMMY, RESTAURANT_OR_MEAL_ADDED,
  DROP_MEAL_ADDED, STORE_ALL_TAGS, STORE_AUTOCOMPLETE, STORE_INPUT_AUTOCOMPLETE,
  INIT_SEARCH, STORE_TOGGLE_SUGGESTIONS,
  STORE_CREATE_UPDATED_RESTAURANT_OR_MEAL, REDIRECT, STORE_CREATED_RESTAURANT, STORE_TOGGLE_DRAWER,
} from '../actions/restaurantActions';

export const initialState = {
  restaurants: [],
  currentRestaurant: '',
  editingDummy: '',
  dummy: {
    name: '',
    slug: '',
    favorite: false,
    coordinate: [0, 0],
    location: '',
    photo_url: '',
    tags: [],
    review: '',
    restaurantId: '',
  },
  activeTab: 'mementos',
  activeMap: 'map',
  cardListSearchType: 'restaurant',
  filteredRestaurants: [],
  allTags: [],
  typeComment: '',
  typeTag: '',
  messageSearchRestaurant: 'Restaurants récement visités',
  fetchingOneRestaurant: true,
  fetchingAllRestaurants: true,
  toggleMap: false,
  filePath: '',
  idRestaurantAdded: '',
  actionDeleted: false,
  dataSaved: false,
  activeSuggestion: 0,
  filteredSuggestions: {},
  showSuggestions: false,
  userInput: '',
  currentMeal: {},
  toggleDrawer: false,
  preview: '',
};

function reducer(state = initialState, action = {}) {
  let newTag;
  switch (action.type) {
    case STORE_ALL_RESTAURANTS:
      return {
        ...state,
        restaurants: action.restaurants,
        fetchingAllRestaurants: false,
      };
    case STORE_ONE_RESTAURANT: {
      return {
        ...state,
        currentRestaurant: action.data,
        fetchingOneRestaurant: false,
      };
    }
    case CHANGE_CURRENT_TAB:
      return {
        ...state,
        activeTab: action.tab,
      };
    case EDIT_TYPE_COM:
      return {
        ...state,
        typeComment: action.comment,
      };
    case CHANGE_TOGGLE_MAP: {
      return {
        ...state,
        toggleMap: !state.toggleMap,
      };
    }

    case INIT_SEARCH: {
      const sortRestaurant = state.restaurants.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      return {
        ...state,
        filteredRestaurants: sortRestaurant,
      };
    }

    case SEARCH_RESULT: {
      const countRestaurant = action.payload.length;
      return {
        ...state,
        filteredRestaurants: (countRestaurant > 0) ? action.payload : [],
        searchRestaurant: '',
        locationRestaurant: '',
        cardListSearchType: 'restaurantSearch',
        messageSearchRestaurant: (countRestaurant > 1) ? `${countRestaurant} restaurants trouvés` : `${countRestaurant} restaurant trouvé`,
      };
    }
    case SET_EDITING_DUMMY: {
      return {
        ...state,
        editingDummy: action.data,
      };
    }
    case UPDATE_DUMMY: {
      return {
        ...state,
        editingDummy: {
          ...state.editingDummy,
          [action.name]: action.payload,
        },

      };
    }
    case DELETE_DUMMY: {
      return {
        ...state,
        editingDummy: '',
      };
    }
    case TYPE_NEW_TAG: {
      return {
        ...state,
        typeTag: action.typeTag,
      };
    }
    case ADD_NEW_TAG:
      newTag = state.allTags.filter((tag) => tag.id === action.id);
      return {
        ...state,
        editingDummy: {
          ...state.editingDummy,
          tags: [...state.editingDummy.tags, newTag[0]],
        },
        typeTag: '',
      };
    case DELETE_TAG: {
      const remainingTags = state.editingDummy.tags.filter((tag) => tag.id !== action.tagId);
      return {
        ...state,
        editingDummy: {
          ...state.editingDummy,
          tags: remainingTags,
        },
      };
    }
    case STORE_UPLOAD_FILE_PATH: {
      return {
        ...state,
        editingDummy: {
          ...state.editingDummy,
          photo_url: action.filePath,
        },
      };
    }

    case RESTAURANT_OR_MEAL_ADDED: {
      return {
        ...state,
        idRestaurantOrMealAdded: action.id,
      };
    }
    case EMPTY_ID_RESTAURANT: {
      return {
        ...state,
        idRestaurantAdded: '',
      };
    }
    case DROP_MEAL_ADDED: {
      return {
        ...state,
        mealAdded: false,
      };
    }
    case REDIRECT: {
      return {
        ...state,
        actionDeleted: action.value,
        dataSaved: action.value,
        idRestaurantAdded: '',
      };
    }
    case STORE_ALL_TAGS: {
      return {
        ...state,
        allTags: action.data,
      };
    }
    case STORE_INPUT_AUTOCOMPLETE: {
      return {
        ...state,
        editingDummy: {
          ...state.editingDummy,
          location: action.location,
        },
      };
    }
    case STORE_AUTOCOMPLETE: {
      return {
        ...state,
        filteredSuggestions: action.filteredList,
      };
    }
    case STORE_TOGGLE_SUGGESTIONS: {
      return {
        ...state,
        showSuggestions: action.value,
      };
    }
    case STORE_CREATE_UPDATED_RESTAURANT_OR_MEAL: {
      return {
        ...state,
        dataSaved: true,
      };
    }
    case STORE_CREATED_RESTAURANT: {
      return {
        ...state,
        dataSaved: true,
        idRestaurantAdded: action.id,
      };
    }
    case STORE_TOGGLE_DRAWER: {
      return {
        ...state,
        toggleDrawer: action.value,
      };
    }

    default:
      return state;
  }
}

export default reducer;
