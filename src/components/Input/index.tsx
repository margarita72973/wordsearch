import React, { useEffect, ChangeEvent } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { css } from "@emotion/css";

// components
import { ErrorMsg, TextField } from "../../ui";

// store
import {
  setValue,
  findResults,
  setMessage,
  clearValues,
} from "../../store/actions";

// data
import { messages } from "../../data/messages";

const styles = css({
  display: "flex",
  alignItems: "center",
  maxHeight: "57px",
  maxWidth: "240px",
  flexDirection: "column",
  height: "100%",
  width: "100%",
});

const { onlyOneLetter, onlyLetter } = messages;

var regEx = /^[A-Za-z]*$/;

interface RootState {
  value: string;
  message: string;
}

const Input = () => {
  const dispatch = useDispatch();
  const { value, message } = useSelector(
    (store: RootState) => store,
    shallowEqual
  );

  useEffect(() => {
    if (!value) {
      dispatch(clearValues());
    }
  }, [value, dispatch]);

  const checkIsValid = (v: string) => {
    if (!v.match(regEx)) {
      dispatch(setMessage(onlyLetter));
      return false;
    }
    if (v.length > 1) {
      dispatch(setMessage(onlyOneLetter));
      return false;
    }
    return true;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    if (message) {
      dispatch(setMessage(""));
    }
    const isValid = checkIsValid(value);
    if (!isValid) {
      return;
    }
    dispatch(setValue(value.trim()));
    if (value) {
      dispatch(findResults(value));
    }
  };

  return (
    <div className={styles}>
      <TextField
        placeholder="Enter a letter"
        value={value}
        onChange={handleChange}
        isValid={!Boolean(message)}
      />
      <ErrorMsg>{message}</ErrorMsg>
    </div>
  );
};

export default Input;
