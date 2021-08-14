import {
  FETCH_COUNTRIES_NAME_ERROR,
  FETCH_COUNTRIES_NAME_REQUEST,
  FETCH_COUNTRIES_NAME_SUCCESS,
} from './countriesTypes';

export const countriesNameSuccess = (
  allName: string[]
): { type: typeof FETCH_COUNTRIES_NAME_SUCCESS; payload: string[] } => {
  return {
    type: FETCH_COUNTRIES_NAME_SUCCESS,
    payload: allName,
  };
};

export const countriesNameRequest = (): {
  type: typeof FETCH_COUNTRIES_NAME_REQUEST;
} => {
  return {
    type: FETCH_COUNTRIES_NAME_REQUEST,
  };
};

export const countriesNameFailure = (
  message: string
): { type: typeof FETCH_COUNTRIES_NAME_ERROR; payload: string } => {
  return {
    type: FETCH_COUNTRIES_NAME_ERROR,
    payload: message,
  };
};
