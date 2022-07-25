import { POST_UPDATESTATE } from "../types/post";

const initialState = {
  isLoading: false,
  error: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_UPDATESTATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
