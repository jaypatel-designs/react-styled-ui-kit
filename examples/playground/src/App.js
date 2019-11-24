import React from "react";

import { ThemeProvider, Button } from "react-styled-ui-kit";
// import Button from "../../../src/button/Button";
import theme from "./theme";
function App() {
  return (
    <div className="App">
      <h1>Welcome to React Styled UI Kit Playground!</h1>
      <ThemeProvider theme={theme}>
        <Button varient="primary">Click Me!</Button>
        <Button varient="secondary">Click Me!</Button>
        <Button varient="default">Click Me!</Button>
      </ThemeProvider>
    </div>
  );
}

export default App;
