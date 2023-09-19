import axios from "axios";
import { AUTH_IS_LOADING, AUTH_LOAD_USER, AUTH_LOGOUT } from "../types";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: AUTH_IS_LOADING,
      payload: true,
    });

    const { data } = await axios.post("http://localhost:5100/api/auth/login", {
      email,
      password,
    });

    localStorage.setItem("user", JSON.stringify(data));

    dispatch({
      type: AUTH_LOAD_USER,
      payload: data,
    });
  } catch (error) {
    console.error("Error in loginUser", error);

    dispatch({
      type: AUTH_IS_LOADING,
      payload: false,
    });

    localStorage.removeItem("user");
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    localStorage.removeItem("user");

    dispatch({
      type: AUTH_LOGOUT,
    });
  } catch (error) {
    console.error("Error in logoutUser", error);
  }
};
