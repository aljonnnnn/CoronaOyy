export const coronaInitialState = {
    infected: null,
	recovered: null,
	deaths: null,
	barChart: null,
	error: null,
	loading: false
}


export const coronaReducer = (state, {type, payload}) => {
    switch(type) {
        case 'GET_GLOBAL_HISTORY' :
            return {
                ...state,
                infected: payload.data,
                recovered: payload.data,
                deaths: payload.data,
            }
        default: 
            return state
    }
}
