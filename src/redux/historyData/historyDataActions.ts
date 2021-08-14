import {
  FETCH_HISTORY_DATA_ERROR,
  FETCH_HISTORY_DATA_REQUEST,
  FETCH_HISTORY_DATA_SUCCESS,
} from './historyDataTypes';

export const historyData = (
  data: any
): { type: typeof FETCH_HISTORY_DATA_SUCCESS; payload: any } => {
  // console.log(data);
  return {
    type: FETCH_HISTORY_DATA_SUCCESS,
    payload: data,
  };
};

export const historyRequest = (): {
  type: typeof FETCH_HISTORY_DATA_REQUEST;
} => {
  return {
    type: FETCH_HISTORY_DATA_REQUEST,
  };
};

export const historyError = (
  message: string
): { type: typeof FETCH_HISTORY_DATA_ERROR; payload: string } => {
  return {
    type: FETCH_HISTORY_DATA_ERROR,
    payload: message,
  };
};
