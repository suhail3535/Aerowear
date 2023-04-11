import { reducer as AppReducer } from "./AppReducer/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { reducer as AdminReducer } from "./AdminReducer/reducer";
import { reducer as UserReducer } from "./UserReducer/reducer";
import { reducer as CartReducer } from "./CartReducer/reducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
    AppReducer,
    AuthReducer,
    AdminReducer,
    UserReducer,
    CartReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
