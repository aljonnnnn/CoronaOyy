import {
  FETCH_COUNTRIES_NAME_ERROR,
  FETCH_COUNTRIES_NAME_REQUEST,
  FETCH_COUNTRIES_NAME_SUCCESS,
} from './countriesTypes';

interface ICountriesState {
  countriesName: string[];
  loading: boolean;
  error: string;
}

interface ICountriesAction {
  type:
    | typeof FETCH_COUNTRIES_NAME_REQUEST
    | typeof FETCH_COUNTRIES_NAME_ERROR
    | typeof FETCH_COUNTRIES_NAME_SUCCESS;
  payload: any;
}

const initialState: ICountriesState = {
  countriesName: [],
  loading: false,
  error: '',
};

export const countriesNameReducer = (
  state: ICountriesState = initialState,
  action: ICountriesAction
) => {
  switch (action.type) {
    case FETCH_COUNTRIES_NAME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COUNTRIES_NAME_SUCCESS:
      return {
        ...state,
        loading: false,
        countriesName: action.payload,
      };
    case FETCH_COUNTRIES_NAME_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
