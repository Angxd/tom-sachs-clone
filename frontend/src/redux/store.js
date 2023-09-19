import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

let user = localStorage.getItem("user");
if (user) {
  user = JSON.parse(user);
}

// initialState
const initialState = {
  authReducer: {
    isLoading: false,
    user,
  },
};

// middleware used thunk
const middleware = [thunk];

// store variable initialized
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
