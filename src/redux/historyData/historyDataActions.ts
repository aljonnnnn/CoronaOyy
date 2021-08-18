import {
  FETCH_HISTORY_DATA_ERROR,
  FETCH_HISTORY_DATA_REQUEST,
  FETCH_HISTORY_DATA_SUCCESS,
} from './historyDataTypes';

export const historyData = <T>(
  data: T
): { type: typeof FETCH_HISTORY_DATA_SUCCESS; payload: T } => {
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

export const historyError = <T>(
  message: T
): { type: typeof FETCH_HISTORY_DATA_ERROR; payload: T } => {
  return {
    type: FETCH_HISTORY_DATA_ERROR,
    payload: message,
  };
};
