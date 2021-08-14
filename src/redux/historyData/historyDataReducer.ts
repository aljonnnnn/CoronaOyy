import {
  FETCH_HISTORY_DATA_ERROR,
  FETCH_HISTORY_DATA_REQUEST,
  FETCH_HISTORY_DATA_SUCCESS,
} from './historyDataTypes';
interface IHistoryDataState {
  history: null;
  loading: boolean;
  error: string;
}

interface IHistoryDataAction {
  type:
    | typeof FETCH_HISTORY_DATA_ERROR
    | typeof FETCH_HISTORY_DATA_REQUEST
    | typeof FETCH_HISTORY_DATA_SUCCESS;
  payload: any;
}
const initialState: IHistoryDataState = {
  history: null,
  loading: false,
  error: '',
};

export const historyDataReducer = (
  state: IHistoryDataState = initialState,
  action: IHistoryDataAction
) => {
  switch (action.type) {
    case FETCH_HISTORY_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        history: action.payload,
      };
    case FETCH_HISTORY_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCH_HISTORY_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
