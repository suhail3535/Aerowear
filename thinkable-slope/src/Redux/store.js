import { reducer as AppReducer } from "./AppReducer/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import{reducer as AdminReducer} from "./AdminReducer/reducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  AppReducer,
  AuthReducer,
  AdminReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
