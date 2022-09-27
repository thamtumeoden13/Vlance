import {appDefaultReducer} from './defaultReducer';
import {SELECT_LANGUAGE, USER_DETAILS} from '../Types';

const INITIAL_STATE = appDefaultReducer.user;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_LANGUAGE: {
      return {
        ...state,
        appLanguage: action.payload,
      };
    }
    case USER_DETAILS: {
      return {
        ...state,
        userDetails: action.payload,
      };
    }

    default:
      return state;
  }
};
