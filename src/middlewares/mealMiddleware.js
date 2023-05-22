import axios from 'axios';
import {
} from '../actions/meal';

const mealMiddleware = (store) => (next) => (action) => {
  const { REACT_APP_API_URL } = process.env;

  const getOneMeal = () => {
    axios.post(`${REACT_APP_API_URL}/meal`, {

    }).then((result) => {

    }).catch((error) => {

    });
  };

  switch (action.type) {
    default:
      break;
  }

  return next(action);
};

export default mealMiddleware;
