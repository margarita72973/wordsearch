import {
  FIND_RESULTS,
  SET_VALUE,
  SET_MESSAGE,
  CLEAR_VALUES,
} from "../constants";

export const findResults = (letter: string) => {
  return {
    type: FIND_RESULTS,
    payloads: letter,
  };
};

export const setValue = (value: string) => ({
  type: SET_VALUE,
  payloads: value,
});

export const setMessage = (value: string) => ({
  type: SET_MESSAGE,
  payloads: value,
});

export const clearValues = () => ({
  type: CLEAR_VALUES,
});
