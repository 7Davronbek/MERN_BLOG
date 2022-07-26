import axios from "axios";
import { USER } from "../../tools/contstants";
import { UPDATESTATE } from "../types/auth";

export const updateState = (state) => {
  return {
    type: UPDATESTATE,
    payload: state,
  };
};

// TEST
export const login = () => async (dispatch) => {
  try {
    const res = await axios.get("/posts");
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

// LOGOUT USER
export const logout = () => async (dispatch) => {
  try {
    dispatch(updateState({ user: null }));
    localStorage.setItem(USER, null);
    window.location.replace("/");
  } catch (err) {
    console.log(err);
  }
};
