import axios from "axios";
import { POST_UPDATESTATE } from "../types/post";

export const postupdateState = (state) => {
  return {
    type: POST_UPDATESTATE,
    payload: state,
  };
};

// DELETE POST BY ID AND USERNAME
export const handleDelete = (id, user, navigate) => async (dispatch) => {
  try {
    await axios.delete(`/posts/${id}`, {
      data: { username: user },
    });
    window.location.replace("/");
    navigate('/', {replace: true})
  } catch (err) {
    console.log(err);
  }
};
