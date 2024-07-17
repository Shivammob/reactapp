import changeTheNumber from "./func";


import { combineReducers } from "redux";

const rootReducer = combineReducers ({
    changeTheNumber: changeTheNumber,
})

export default rootReducer;