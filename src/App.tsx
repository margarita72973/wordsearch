import React from "react";
import { css } from "@emotion/css";

// components
import Input from "./components/Input";
import List from "./components/List";

const styles = css({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "&, >*": {
    boxSizing: "border-box",
    fontFamily: "Questrial",
  },
});

const App = () => {
  return (
    <div className={styles}>
      <Input />
      <List />
    </div>
  );
};

export default App;
