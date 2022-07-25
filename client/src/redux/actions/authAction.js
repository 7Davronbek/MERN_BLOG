import axios from "axios";
import { USER } from "../../tools/contstants";
import { UPDATESTATE } from "../types/auth";

export const updateState = (state) => {
  return {
    type: UPDATESTATE,
    payload: state,
  };
};

export const send = () => async (dispatch) => {
  try {
    const res = await axios.get("/posts");
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch(updateState({ user: null }));
    localStorage.setItem(USER, null);
    window.location.replace('/')
  } catch (err) {
    console.log(err);
  }
};
