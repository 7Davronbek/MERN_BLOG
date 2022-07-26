import axios from "axios";
import { POST_UPDATESTATE } from "../types/post";

export const postupdateState = (state) => {
  return {
    type: POST_UPDATESTATE,
    payload: state,
  };
};

// GET SINGLE POST
export const getSinglePost = (path) => async (dispatch) => {
  try {
    const res = await axios.get(`/posts/${path}`);
    dispatch(
      postupdateState({
        title: res.data.title,
        desc: res.data.desc,
        post: res.data,
      })
    );
  } catch (err) {
    console.log(err);
  }
};

// DELETE POST BY ID AND USERNAME
export const handleDelete = (id, user, nav) => async (dispatch) => {
  try {
    await axios.delete(`/posts/${id}`, {
      data: { username: user },
    });
    nav("/", { replace: true });
  } catch (err) {
    console.log(err);
  }
};

// EDIT POST BY ID
export const handleEdit = (id, username, title, desc) => async (dispatch) => {
  try {
    await axios.put(`/posts/${id}`, {
      username,
      title,
      desc,
    });
    getSinglePost();
    dispatch(postupdateState({ updateMode: false }, getSinglePost()));
    window.location.reload();
  } catch (err) {}
};
