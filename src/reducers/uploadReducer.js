import {
  SET_FILE, STORE_PREVIEW, CLEAR_PREVIEW,

} from '../actions/upload';

const initialState = {
  file: '',
  fileName: 'Choose File',
  uploadedFile: {},
  message: '',
  restauImgPath: '',
  preview: '',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'UPLOAD_MESSAGE':
      return {
        ...state,
        message: action.message,

      };
    case SET_FILE:
      return {
        ...state,
        file: action.file,
        fileName: action.fileName,

      };
    case STORE_PREVIEW: {
      return {
        ...state,
        preview: action.file,
      };
    }
    case CLEAR_PREVIEW: {
      return {
        ...state,
        preview: '',
      };
    }

    default:
      return state;
  }
}

export default reducer;
