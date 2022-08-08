import { createContext } from "react";
import { combineReducers } from "redux";
import { hookReducer } from "./redux/hookReducer";

const rootReducer = combineReducers({
    hookReducer
})

export const setupStore = () => {
    return createContext(rootReducer)
}

