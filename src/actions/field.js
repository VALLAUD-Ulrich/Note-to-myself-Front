// --- ACTION TYPES ---
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const PASSWORD_HIDDEN = 'PASSWORD_HIDDEN';
export const CHANGE_REMINDER_VALUE = 'CHANGE_REMINDER_VALUE';
export const EMPTY_FORM_MEMENTO = 'EMPTY_FORM_MEMENTO';
export const EMPTY_ID_RESTAURANT = 'EMPTY_ID_RESTAURANT';

// --- ACTION CREATOR ---
export function actionChangeInputValue(newValue, name) {
  return {
    type: CHANGE_INPUT_VALUE,
    payload: newValue,
    name: name,
  };
}

export function actionChangeIsHidden() {
  return {
    type: PASSWORD_HIDDEN,
  };
}

export function actionChangeReminder(newValue) {
  return {
    type: CHANGE_REMINDER_VALUE,
    payload: newValue,
  };
}
