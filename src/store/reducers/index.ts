import {
  FIND_RESULTS,
  SET_VALUE,
  SET_MESSAGE,
  CLEAR_VALUES,
} from "../constants";
import { initState } from "./initialState";
import { words } from "../../data/words";
import {
  endWith,
  startWith,
  appearsTimes,
  repeatedTogether,
} from "../../data/resultConstants";

type IssuesAction = {
  type: string;
  payloads: any; // TO_DO
};

const rootReducer = (state = initState, { type, payloads }: IssuesAction) => {
  switch (type) {
    case SET_VALUE:
      return { ...state, value: payloads };
    case CLEAR_VALUES:
      return initState;
    case SET_MESSAGE:
      return { ...state, message: payloads };
    case FIND_RESULTS: {
      const val = payloads.toLowerCase();
      const results = words.reduce(
        (acc: { [key: string]: number }, word: string) => {
          const lettersArr = word.split("");
          const filteredLetters = lettersArr.filter((l) => l === val);
          if (lettersArr[0].toLowerCase() === val) {
            acc[startWith] = acc[startWith] + 1;
          }
          if (lettersArr[lettersArr.length - 1].toLowerCase() === val) {
            acc[endWith] = acc[endWith] + 1;
          }
          if (filteredLetters.length) {
            acc[appearsTimes] = acc[appearsTimes] + filteredLetters.length;
          }
          if (word.includes(`${val}${val}`)) {
            acc[repeatedTogether] = acc[repeatedTogether] + 1;
          }
          return acc;
        },
        {
          [startWith]: 0,
          [endWith]: 0,
          [appearsTimes]: 0,
          [repeatedTogether]: 0,
        }
      );
      return { ...state, results: { ...state.results, ...results } };
    }
    default:
      return state;
  }
};

export default rootReducer;
