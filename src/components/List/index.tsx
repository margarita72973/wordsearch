import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import { css } from "@emotion/css";

// data
import {
  appearsTimes,
  endWith,
  startWith,
  repeatedTogether,
} from "../../data/resultConstants";

// components
import { ListItem } from "../../ui";

const getQueries = (letter: string) => [
  {
    id: 1,
    text: (
      <span>
        How many words start with the letter{" "}
        {letter ? <strong>{letter}</strong> : "_"}:&nbsp;
      </span>
    ),
    result: startWith,
  },
  {
    id: 2,
    text: (
      <span>
        How many times does the letter{" "}
        {letter ? <strong>{letter}</strong> : "_"} appear in the
        dictionary:&nbsp;
      </span>
    ),
    result: appearsTimes,
  },
  {
    id: 3,
    text: (
      <span>
        How many words end with the letter{" "}
        {letter ? <strong>{letter}</strong> : "_"}
        :&nbsp;
      </span>
    ),
    result: endWith,
  },
  {
    id: 4,
    text: (
      <span>How many words have the same letter repeated in conjunction: </span>
    ),
    result: repeatedTogether,
  },
];

const styles = css({
  padding: 0,
  width: "100%",
  maxWidth: "570px",
});

interface Results {
  startWith: number;
  endWith: number;
  appearsTimes: number;
  repeatedTogether: number;
}

interface RootState {
  results: Results;
  value: string;
}

interface Query {
  id: number;
  text: EmotionJSX.Element;
  result: string;
}

const List = () => {
  const { results, value } = useSelector(
    (store: RootState) => store,
    shallowEqual
  );

  return (
    <ul className={styles}>
      {getQueries(value).map(({ id, text, result }: Query) => (
        <ListItem key={id}>
          {text}
          <div className="gap" />
          <span>{results[result as keyof Results]}</span>
        </ListItem>
      ))}
    </ul>
  );
};

export default List;
