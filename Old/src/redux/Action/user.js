import {SELECT_LANGUAGE, USER_DETAILS} from '../Types';

export const selectLanguage = languageData => {
  return dispatch => {
    dispatch({
      type: SELECT_LANGUAGE,
      payload: languageData,
    });
    return new Promise.resolve(true);
  };
};

export const userDetails = userDetails => {
  return dispatch => {
    dispatch({
      type: USER_DETAILS,
      payload: userDetails,
    });
    return new Promise.resolve(true);
  };
};
