export const UPLOAD_IMG = 'UPLOAD_IMG';
export const UPLOAD_FILE = 'UPLOAD_FILE';
export const UPLOAD_MESSAGE = 'UPLOAD_MESSAGE';
export const MESS_ERROR_SERVER = 'MESS_ERROR_SERVER';
export const MESS_ERROR = 'MESS_ERROR';
export const SET_FILE = 'SET_FILE';
export const STORE_PREVIEW = 'STORE_PREVIEW';
export const CLEAR_PREVIEW = 'CLEAR_PREVIEW';

export function actionUploadImg(formData, fileUsage, id, addOrEdit) {
  return {
    type: UPLOAD_IMG,
    formData,
    fileUsage,
    id: id || '',
    addOrEdit: addOrEdit || '',
  };
}

export function actionSetUploadFile({ fileName, filePath }) {
  return {
    type: UPLOAD_FILE,
    data: { fileName, filePath },
  };
}

export function actionSetMessage(message) {
  return {
    type: UPLOAD_MESSAGE,
    message,
  };
}

export function actionSetFile(file, fileName) {
  return {
    type: SET_FILE,
    file,
    fileName,
  };
}

export function actionSetPreview(file) {
  return {
    type: STORE_PREVIEW,
    file,
  };
}

export function actionClearPreview() {
  return {
    type: CLEAR_PREVIEW,
  };
}
