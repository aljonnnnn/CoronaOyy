import {
  FETCH_COUNTRY_DATA_SUCCESS,
  FETCH_COVID_DATA_ERROR,
  FETCH_COVID_DATA_REQUEST,
  FETCH_GLOBAL_DATA_SUCCESS,
  SET_SELECTED_COUNTRY,
} from './covidDataTypes';
import { ICountryCovidData, IGlobalCovidData } from './interface';

export const setSelectedCountry = (
  country: string
): { type: typeof SET_SELECTED_COUNTRY; payload: string } => {
  return {
    type: SET_SELECTED_COUNTRY,
    payload: country,
  };
};
export const globalData = (
  globalData: IGlobalCovidData
): { type: typeof FETCH_GLOBAL_DATA_SUCCESS; payload: IGlobalCovidData } => {
  return {
    type: FETCH_GLOBAL_DATA_SUCCESS,
    payload: globalData,
  };
};

export const countryData = (
  countryData: ICountryCovidData
): { type: typeof FETCH_COUNTRY_DATA_SUCCESS; payload: ICountryCovidData } => {
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
  message: string
): { type: typeof FETCH_COVID_DATA_ERROR; payload: string } => {
  return {
    type: FETCH_COVID_DATA_ERROR,
    payload: message,
  };
};
