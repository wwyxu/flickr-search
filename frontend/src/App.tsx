import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import FlickRSearch from "./views";

const App = () => {
  return (
    <BrowserRouter>
      <body>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <FlickRSearch {...props} />}
            />
          </Switch>
      </body>
    </BrowserRouter>
  );
}

export default App;
