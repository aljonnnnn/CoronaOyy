import {
  FETCH_COUNTRY_DATA_SUCCESS,
  FETCH_COVID_DATA_ERROR,
  FETCH_COVID_DATA_REQUEST,
  FETCH_GLOBAL_DATA_SUCCESS,
  SET_SELECTED_COUNTRY,
} from './covidDataTypes';

interface ICovidDataState {
  selectedCountry: string;
  globalData: null;
  countryData: null;
  loading: boolean;
  error: string;
}

interface ICovidDataAction {
  type:
    | typeof FETCH_COUNTRY_DATA_SUCCESS
    | typeof FETCH_COVID_DATA_ERROR
    | typeof FETCH_COVID_DATA_REQUEST
    | typeof FETCH_GLOBAL_DATA_SUCCESS
    | typeof SET_SELECTED_COUNTRY;
  payload: any;
}

const initialState: ICovidDataState = {
  selectedCountry: '',
  globalData: null,
  countryData: null,
  loading: false,
  error: '',
};

export const covidDataReducer = (
  state: ICovidDataState = initialState,
  action: ICovidDataAction
) => {
  switch (action.type) {
    case SET_SELECTED_COUNTRY:
      return {
        ...state,
        selectedCountry: action.payload,
      };
    case FETCH_GLOBAL_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        countryData: null,
        globalData: action.payload,
      };
    case FETCH_COUNTRY_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        globalData: null,
        countryData: action.payload,
      };
    case FETCH_COVID_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COVID_DATA_ERROR:
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};
