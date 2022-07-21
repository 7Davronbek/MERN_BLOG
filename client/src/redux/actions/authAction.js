import { UPDATESTATE } from "../types/auth";

export const updateState = (state) => {
  return {
    type: UPDATESTATE,
    payload: state,
  };
};

export const send = () => {
    console.log('send');
}