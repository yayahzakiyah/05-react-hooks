import { combineReducers, createStore } from "redux";
import { customerOrderReducer } from "./redux/customerOrder/customerOrderReducer";
import { hookReducer } from "./redux/hookReducer";

const rootReducer = combineReducers({
    hookReducer,
    customerOrderReducer
})

export const setupStore = () => {
    return createStore(rootReducer)
}

