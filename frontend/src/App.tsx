import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Register from "./views";

const App = () => {
  return (
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row no-gutters">
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => <Register {...props} />}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
