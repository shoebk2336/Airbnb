import { createStore, combineReducers } from "redux"
import { SearchReducer } from "./Reducers/SearchReducer"

const root = combineReducers({ SearchReducer })
const store = createStore(root)

export default store
