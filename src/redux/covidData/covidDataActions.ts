import {
  FETCH_COUNTRY_DATA_SUCCESS,
  FETCH_COVID_DATA_ERROR,
  FETCH_COVID_DATA_REQUEST,
  FETCH_GLOBAL_DATA_SUCCESS,
  SET_SELECTED_COUNTRY,
} from './covidDataTypes';

export const setSelectedCountry = (
  country: any
): { type: typeof SET_SELECTED_COUNTRY; payload: any } => {
  return {
    type: SET_SELECTED_COUNTRY,
    payload: country,
  };
};
export const globalData = (
  globalData: any
): { type: typeof FETCH_GLOBAL_DATA_SUCCESS; payload: any } => {
  return {
    type: FETCH_GLOBAL_DATA_SUCCESS,
    payload: globalData,
  };
};

export const countryData = (
  countryData: any
): { type: typeof FETCH_COUNTRY_DATA_SUCCESS; payload: any } => {
  return {
    type: FETCH_COUNTRY_DATA_SUCCESS,
    payload: countryData,
  };
};

export const covidDataRequest = (): {
  type: typeof FETCH_COVID_DATA_REQUEST;
} => {
  return {
    type: FETCH_COVID_DATA_REQUEST,
  };
};

export const covidDataError = (
  message: any
): { type: typeof FETCH_COVID_DATA_ERROR; payload: any } => {
  return {
    type: FETCH_COVID_DATA_ERROR,
    payload: message,
  };
};
