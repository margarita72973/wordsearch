// data
import {
  startWith,
  endWith,
  appearsTimes,
  repeatedTogether,
} from "../../data/resultConstants";

export const initState = {
  message: "",
  value: "",
  results: {
    [startWith]: 0,
    [endWith]: 0,
    [appearsTimes]: 0,
    [repeatedTogether]: 0,
  },
};
