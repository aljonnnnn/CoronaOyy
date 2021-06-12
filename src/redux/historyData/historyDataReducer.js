import { FETCH_HISTORY_DATA_ERROR, FETCH_HISTORY_DATA_REQUEST, FETCH_HISTORY_DATA_SUCCESS } from "./historyDataTypes"

const initialState = {
    history: null,
    loading: false,
    error: ''
}


export const historyDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_HISTORY_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                history: action.payload
            }
        case FETCH_HISTORY_DATA_REQUEST:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case FETCH_HISTORY_DATA_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }
}