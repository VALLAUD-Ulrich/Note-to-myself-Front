import axios from 'axios';
import { UPLOAD_IMG } from '../actions/upload';
import { actionSetUploadFileUser } from '../actions/user';
import { actionSetUploadedFilePath, actionCreateUpdateRestaurantOrMeal } from '../actions/restaurantActions';

const uploadMiddleware = (store) => (next) => (action) => {
  const { REACT_APP_API_URL } = process.env;

  switch (action.type) {
    case UPLOAD_IMG:
      axios.post(`${REACT_APP_API_URL}/upload`, action.formData, {
        headers: {
          Authorization: `bearer ${localStorage.getItem('token')}`,
          userid: localStorage.getItem('userid'),
        },
      }).then((res) => {
        console.log('Requete upload file OK', res);
        const { filePath } = res.data;

        if (action.fileUsage === 'profile') {
          localStorage.setItem('photo_url', filePath);
          store.dispatch(actionSetUploadFileUser(filePath));
          axios.patch(
            `${REACT_APP_API_URL}/user`,
            {
              photo_url: store.getState().user.photo_url,
            },
            {
              headers: {
                Authorization: `bearer ${localStorage.getItem('token')}`,
                userid: localStorage.getItem('userid'),
              },
            },
          ).then((result) => {
            console.log('Requete UPDATE PHOTO OK', result);
          }).catch((error) => {
            console.log('Requete UPDATE PHOTO NOK', error);
          });
        }
        else {
          store.dispatch(actionSetUploadedFilePath(filePath));
          store.dispatch(actionCreateUpdateRestaurantOrMeal(action.fileUsage, action.addOrEdit));
        }
      }).catch((err) => {
        console.log('Requete upload file NOK', err);
      });
      break;

    default:
      break;
  }

  return next(action);
};

export default uploadMiddleware;
