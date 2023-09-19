import { AUTH_IS_LOADING, AUTH_LOAD_USER, AUTH_LOGOUT } from "../types";

const initialState = {
  isLoading: false,
  user: null,
};

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case AUTH_IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case AUTH_LOAD_USER:
      return {
        ...state,
        user: payload,
        isLoading: false,
      };
    case AUTH_LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
