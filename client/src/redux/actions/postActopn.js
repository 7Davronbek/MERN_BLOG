import axios from "axios";
import { UPDATESTATE } from "../types/auth";

export const updateState = (state) => {
  return {
    type: UPDATESTATE,
    payload: state,
  };
};