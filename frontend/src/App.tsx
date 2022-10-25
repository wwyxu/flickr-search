import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import FlickRSearch from "./views";

const App = () => {
  return (
      <BrowserRouter>
        <main>
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => <FlickRSearch {...props} />}
              />
            </Switch>
        </main>
      </BrowserRouter>
  );
}

export default App;
