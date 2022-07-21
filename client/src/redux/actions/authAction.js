import axios from "axios";
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
