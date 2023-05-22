import { EMPTY_ID_RESTAURANT } from './field';

// types for middleware
export const GET_ALL_RESTAURANTS = 'GET_ALL_RESTAURANTS';
export const GET_ONE_RESTAURANT = 'GET_ONE_RESTAURANT';
export const SEARCH_RESTAURANT = 'SEARCH_RESTAURANT';
export const CHANGE_FAV = 'CHANGE_FAV';
export const UPDATE_RESTAURANT = 'UPDATE_RESTAURANT';
export const STORE_UPDATED_RESTAURANT = 'STORE_UPDATED_RESTAURANT';
export const UPDATE_MEAL = 'UPDATE_MEAL';
export const STORE_UPDATED_MEAL = 'STORE_UPDATED_MEAL';
export const UPDATE_IMGRESTAURANT = 'UPDATE_IMGRESTAURANT';
export const UPDATE_IMGMEAL = 'UPDATE_IMGMEAL';
export const GET_ALL_TAGS = 'GET_ALL_TAGS';
export const CREATE_UPDATE_RESTAURANT_OR_MEAL = 'CREATE_UPDATE_RESTAURANT_OR_MEAL';
export const STORE_CREATE_UPDATED_RESTAURANT_OR_MEAL = 'STORE_CREATE_UPDATED_RESTAURANT_OR_MEAL';
export const DELETE_RESTAURANT_OR_MEAL = 'DELETE_RESTAURANT_OR_MEAL';
export const ADD_RESTAURANT_OR_MEAL = 'ADD_RESTAURANT_OR_MEAL';
export const AUTOCOMPLETE_LOCATION = 'AUTOCOMPLETE_LOCATION';

// types for reducer
export const STORE_UPLOAD_FILE_PATH = 'STORE_UPLOAD_FILE_PATH';
export const CHANGE_CURRENT_TAB = 'CHANGE_CURRENT_TAB';
export const SEARCH_RESULT = 'SEARCH_RESULT';
export const EDIT_TYPE_COM = 'EDIT_TYPE_COM';
export const STORE_ALL_RESTAURANTS = 'STORE_ALL_RESTAURANTS';
export const STORE_ONE_RESTAURANT = 'STORE_ONE_RESTAURANT';
export const CHANGE_TOGGLE_MAP = 'CHANGE_TOGGLE_MAP';
export const SET_EDITING_DUMMY = 'SET_EDITING_DUMMY';
export const UPDATE_DUMMY = 'UPDATE_DUMMY';
export const ADD_NEW_TAG = 'ADD_NEW_TAG';
export const DELETE_TAG = 'DELETE_TAG';
export const TYPE_NEW_TAG = 'TYPE_NEW_TAG';
export const DELETE_DUMMY = 'DELETE_DUMMY';
export const RESTAURANT_OR_MEAL_ADDED = 'RESTAURANT_OR_MEAL_ADDED';
export const UPLOAD_FILE_MEAL = 'UPLOAD_FILE_MEAL';
export const DROP_MEAL_ADDED = 'DROP_MEAL_ADDED';
export const STORE_ALL_TAGS = 'STORE_ALL_TAGS';
export const STORE_AUTOCOMPLETE = 'STORE_AUTOCOMPLETE';
export const STORE_INPUT_AUTOCOMPLETE = 'STORE_INPUT_AUTOCOMPLETE';
export const STORE_TOGGLE_SUGGESTIONS = 'STORE_TOGGLE_SUGGESTIONS';
export const INIT_SEARCH = 'INIT_SEARCH';
export const REDIRECT = 'REDIRECT';
export const STORE_CREATED_RESTAURANT = 'STORE_CREATED_RESTAURANT';
export const STORE_TOGGLE_DRAWER = 'STORE_TOGGLE_DRAWER';

export function actionGetAllRestaurants() {
  return {
    type: GET_ALL_RESTAURANTS,
  };
}
export function actionStoreAllRestaurants(restaurants) {
  return {
    type: STORE_ALL_RESTAURANTS,
    restaurants,
  };
}
export function actionGetOneRestaurant(id) {
  return {
    type: GET_ONE_RESTAURANT,
    id,
  };
}
export function actionStoreOneRestaurant(data) {
  return {
    type: STORE_ONE_RESTAURANT,
    data,
  };
}
export function actionInitSearch() {
  return {
    type: INIT_SEARCH,
  };
}
export function actionSearchRestaurant() {
  return {
    type: SEARCH_RESTAURANT,
  };
}
export function actionSearchResult(filteredRestaurants) {
  return {
    type: SEARCH_RESULT,
    payload: filteredRestaurants,
  };
}

export function actionChangeCurrentTab(tab) {
  return {
    type: CHANGE_CURRENT_TAB,
    tab,
  };
}
export function actionTypeCom(comment) {
  return {
    type: EDIT_TYPE_COM,
    comment,
  };
}
export function actionChangeFavorite(data, restaurantOrMeal) {
  return {
    type: CHANGE_FAV,
    data,
    restaurantOrMeal,
  };
}

export function actionToggleMap() {
  return {
    type: CHANGE_TOGGLE_MAP,
  };
}

export function actionUpdateRestaurant(data) {
  return {
    type: UPDATE_RESTAURANT,
    data,
  };
}

export function actionStoreUpdatedRestaurant(data) {
  return {
    type: STORE_UPDATED_RESTAURANT,
    data,
  };
}

export function actionStoreUpdatedMeal(data) {
  return {
    type: STORE_UPDATED_MEAL,
    data,
  };
}

export function actionUpdateMeal(data) {
  return {
    type: UPDATE_MEAL,
    data,
  };
}

export function actionSetEditingDummy(data) {
  return {
    type: SET_EDITING_DUMMY,
    data,
  };
}

export function actionUpdateDummy(newValue, name) {
  return {
    type: UPDATE_DUMMY,
    payload: newValue,
    name: name,
  };
}

export function actionDeleteDummy() {
  return {
    type: DELETE_DUMMY,
  };
}

export function actionAddNewTag(id) {
  return {
    type: ADD_NEW_TAG,
    id,
  };
}

export function actionTypeNewTag(typeTag) {
  return {
    type: TYPE_NEW_TAG,
    typeTag,
  };
}

export function actionDeleteTag(tagId) {
  return {
    type: DELETE_TAG,
    tagId,
  };
}
export function actionStoreAddedRestaurantOrMeal(id) {
  return {
    type: RESTAURANT_OR_MEAL_ADDED,
    id,
  };
}
export function actionDeleteIdRestaurant() {
  return {
    type: EMPTY_ID_RESTAURANT,
  };
}
export function actionDropMealAdded() {
  return {
    type: DROP_MEAL_ADDED,
  };
}
export function actionDeleteRestaurantOrMeal(restaurantOrMeal) {
  return {
    type: DELETE_RESTAURANT_OR_MEAL,
    restaurantOrMeal,
  };
}
export function actionRedirect(value) {
  return {
    type: REDIRECT,
    value,
  };
}

export function actionUpdateImgRestaurant(formData) {
  return {
    type: UPDATE_IMGRESTAURANT,
    formData,
  };
}

export function actionUpdateImgMeal() {
  return {
    type: UPDATE_IMGMEAL,
  };
}

export function actionSetUploadedFilePath(filePath) {
  return {
    type: STORE_UPLOAD_FILE_PATH,
    filePath,
  };
}
export function actionSetUploadFileUserMeal(filePath, mealid) {
  return {
    type: UPLOAD_FILE_MEAL,
    filePath,
    mealid,
  };
}

export function actionGetAllTags(restaurantOrMeal) {
  return {
    type: GET_ALL_TAGS,
    restaurantOrMeal,
  };
}

export function actionStoreAllTags(data) {
  return {
    type: STORE_ALL_TAGS,
    data,
  };
}

export function actionStoreCreateUpdatedRestaurantOrMeal(data) {
  return {
    type: STORE_CREATE_UPDATED_RESTAURANT_OR_MEAL,
    data,
  };
}
export function actionStoreCreatedRestaurant(id) {
  return {
    type: STORE_CREATED_RESTAURANT,
    id,
  };
}

export function actionCreateUpdateRestaurantOrMeal(restaurantOrMeal, addOrEdit) {
  return {
    type: CREATE_UPDATE_RESTAURANT_OR_MEAL,
    restaurantOrMeal,
    addOrEdit,
  };
}

export function actionAutocomplete(location) {
  return {
    type: AUTOCOMPLETE_LOCATION,
    location,
  };
}

export function actionStoreAutocomplete(filteredList) {
  return {
    type: STORE_AUTOCOMPLETE,
    filteredList,
  };
}

export function actionStoreInputAutocomplete(location) {
  return {
    type: STORE_INPUT_AUTOCOMPLETE,
    location,
  };
}

export function actionToggleSuggestions(value) {
  return {
    type: STORE_TOGGLE_SUGGESTIONS,
    value,
  };
}

export function actionToggleDrawer(value) {
  return {
    type: STORE_TOGGLE_DRAWER,
    value,
  };
}
