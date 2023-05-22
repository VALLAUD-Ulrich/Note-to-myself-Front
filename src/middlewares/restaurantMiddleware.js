import axios from 'axios';
import {
  GET_ALL_RESTAURANTS, actionStoreAllRestaurants,
  GET_ONE_RESTAURANT, actionStoreOneRestaurant,
  SEARCH_RESTAURANT, actionSearchResult,
  CREATE_UPDATE_RESTAURANT_OR_MEAL, actionStoreCreateUpdatedRestaurantOrMeal,
  DELETE_RESTAURANT_OR_MEAL, actionRedirect,
  GET_ALL_TAGS, actionStoreAllTags,
  AUTOCOMPLETE_LOCATION, actionStoreAutocomplete, actionToggleSuggestions, actionStoreCreatedRestaurant,
} from '../actions/restaurantActions';

const restaurantMiddleware = (store) => (next) => async (action) => {
  const { REACT_APP_API_URL } = process.env;

  const restaurantMatchesSearch = (restaurant, search) => {
    if (restaurant.name.toLowerCase().includes(search.toLowerCase())) {
      return true;
    }

    let validTag = false;
    restaurant.tags.forEach((tag) => {
      if (tag.label.toLowerCase().includes(search.toLowerCase())) {
        validTag = true;
      }
    });

    return validTag;
  };

  const slugify = (str) => {
    let newStr;
    newStr = str.toLowerCase();
    newStr = newStr.trim();
    newStr = newStr.replace(/[^\w\s-]/g, '');
    newStr = newStr.replace(/[\s_-]+/g, '-');
    newStr = newStr.replace(/^-+|-+$/g, '');

    return newStr;
  };

  switch (action.type) {
    case GET_ALL_RESTAURANTS: {
      axios.get(`${REACT_APP_API_URL}/restaurants`, {
        headers: {
          Authorization: `bearer ${localStorage.getItem('token')}`,
          userid: localStorage.getItem('userid'),
        },
      }).then((result) => {
        console.log('Requete fetch restaurants OK', result);
        store.dispatch(actionStoreAllRestaurants(result.data));
      }).catch((error) => {
        console.log('Requete fetch restaurants NOK', error);
      });
      break;
    }

    case SEARCH_RESTAURANT: {
      let filteredRestaurants = store.getState().restaurant.restaurants.filter((restaurant) => restaurantMatchesSearch(restaurant, store.getState().field.searchRestaurant.toLowerCase()));
      if (filteredRestaurants.length > 0) {
        filteredRestaurants = filteredRestaurants.filter((restaurant) => (restaurant.location.toLowerCase().includes(store.getState().field.locationRestaurant.toLowerCase())));
      }
      else {
        filteredRestaurants = store.getState().restaurant.restaurants.filter((restaurant) => (restaurant.location.toLowerCase().includes(store.getState().field.locationRestaurant.toLowerCase())));
      }

      store.dispatch(actionSearchResult(filteredRestaurants));
      break;
    }

    case GET_ONE_RESTAURANT: {
      axios.get(`${REACT_APP_API_URL}/restaurant`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          restaurantid: action.id,
          userid: localStorage.getItem('userid'),
        },
      }).then((result) => {
        console.log('Requete fetch restaurant OK', result);
        store.dispatch(actionStoreOneRestaurant(result.data[0]));
      }).catch((error) => {
        console.log('Requete fetch restaurant NOK', error);
      });
      break;
    }

    case CREATE_UPDATE_RESTAURANT_OR_MEAL: {
      let coordinatesFromAPI = [0, 0];
      let updateResult;

      if (action.restaurantOrMeal === 'restaurant') {
        const newLocation = store.getState().restaurant.editingDummy.location.replace(' ', '+');
        try {
          const dataGouv = await axios.get(`https://api-adresse.data.gouv.fr/search/?q=${newLocation}`);
          console.log('Requete fetch coordinates OK', dataGouv.data);
          coordinatesFromAPI = dataGouv.data.features[0].geometry.coordinates;
        }
        catch (err) {
          console.log('Requete fetch coordinates NOK', err);
        }
      }

      try {
        updateResult = await axios({
          method: action.addOrEdit === 'add' ? 'POST' : 'PATCH',
          url: `${REACT_APP_API_URL}/${action.restaurantOrMeal}`,
          data: {
            name: store.getState().restaurant.editingDummy.name,
            slug: slugify(store.getState().restaurant.editingDummy.name),
            location: store.getState().restaurant.editingDummy.location,
            coordinate: `${coordinatesFromAPI[1]} - ${coordinatesFromAPI[0]}`,
            photo_url: store.getState().restaurant.editingDummy.photo_url,
            favorite: store.getState().restaurant.editingDummy.favorite,
            review: store.getState().restaurant.editingDummy.review,
            comment: '',
            meal_restaurant_id: action.restaurantOrMeal === 'meal' ? store.getState().restaurant.editingDummy.restaurantId : '',
          },
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
            userid: localStorage.getItem('userid'),
            id: action.addOrEdit === 'edit' ? store.getState().restaurant.editingDummy.id : '',
          },
        });
        console.log(`Requete ${action.addOrEdit} ${action.restaurantOrMeal} OK`, updateResult.data);
        if (action.addOrEdit === 'add' && action.restaurantOrMeal === 'restaurant') {
          store.dispatch(actionStoreCreatedRestaurant(updateResult.data.id));
        }
        else {
          store.dispatch(actionStoreCreateUpdatedRestaurantOrMeal(updateResult.data));
        }
      }
      catch (err) {
        console.log(`Requete ${action.addOrEdit} ${action.restaurantOrMeal} NOK`, err);
      }

      try {
        await axios.patch(
          `${REACT_APP_API_URL}/tag`,
          {
            tags: store.getState().restaurant.editingDummy.tags,
          },
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`,
              userid: localStorage.getItem('userid'),
              id: updateResult.data.id,
              type: action.restaurantOrMeal,
            },
          },
        );
        console.log(`Requete ${action.addOrEdit} tag ${action.restaurantOrMeal} OK`);
      }
      catch (err) {
        console.log(`Requete ${action.addOrEdit} tag ${action.restaurantOrMeal} NOK`, err);
      }
      break;
    }

    case DELETE_RESTAURANT_OR_MEAL: {
      axios.delete(
        `${REACT_APP_API_URL}/${action.restaurantOrMeal}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
            id: store.getState().restaurant.editingDummy.id,
          },
        },
      ).then((result) => {
        console.log(`Requete supp ${action.restaurantOrMeal} OK`, result);
        store.dispatch(actionRedirect(true));
      }).catch((error) => {
        console.log(`Requete supp ${action.restaurantOrMeal} NOK`, error);
      });
      break;
    }

    case GET_ALL_TAGS: {
      axios.get(
        `${REACT_APP_API_URL}/tag`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
            userid: localStorage.getItem('userid'),
            type: action.restaurantOrMeal,
          },
        },
      ).then((result) => {
        console.log(`Requete all ${action.restaurantOrMeal} tags OK`, result);
        store.dispatch(actionStoreAllTags(result.data));
      }).catch((error) => {
        console.log(`Requete all ${action.restaurantOrMeal} tags NOK`, error);
      });
      break;
    }

    case AUTOCOMPLETE_LOCATION: {
      if (store.getState().restaurant.editingDummy.location.length > 1) {
        try {
          const dataGouv = await axios.get(`https://api-adresse.data.gouv.fr/search/?q=${action.location}&autocomplete=1`);
          store.dispatch(actionStoreAutocomplete(dataGouv.data.features));
          store.dispatch(actionToggleSuggestions(true));
        }
        catch (err) {
          console.log('Requete fetch autocomplete NOK', err);
        }
      }
      break;
    }

    default:
      break;
  }

  return next(action);
};

export default restaurantMiddleware;
