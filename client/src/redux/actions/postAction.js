import axios from "axios";
import { UPDATESTATE } from "../types/auth";

export const updateState = (state) => {
  return {
    type: UPDATESTATE,
    payload: state,
  };
};

export const handleDelete = (id) => async (dispatch) => {
    try {   
        await axios.delete(`/posts/${id}`)
    } catch (err) {
        console.log(err);
    }
}