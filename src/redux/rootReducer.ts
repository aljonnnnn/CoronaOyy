import { combineReducers } from "redux";
import { countriesNameReducer } from "./countries/countriesReducer";
import { covidDataReducer } from "./covidData/covidDataReducer";
import { historyDataReducer } from "./historyData/historyDataReducer";

export const rootReducer = combineReducers({
    countries: countriesNameReducer,
    covidData: covidDataReducer,
    historyData: historyDataReducer
})