import {
  Flex
} from "@chakra-ui/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PublicRouter from "./navigation/PublicRouter"

function App() {
  return (
    <Router>
      <PublicRouter/>
    </Router>
  );
}

export default App;
