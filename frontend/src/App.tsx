import React, { useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import API from 'src/services/api';
import "./App.css";
import { getData, storeData } from "./utils/localstorage";
import FlickRSearch from "./views/flickRSearch";
import Login from "./views/login";
import Register from "./views/register";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const App = () => {
  const isAuth = () => getData("isAuthenticated") || null;
  const [isAuthenticated, setIsAuthenticated] = useState(isAuth);

  const checkAuthenticated = async () => {
    try {
      const res: any = API.auth.verify();
      const parseRes = await res.json();
      setIsAuthenticated(parseRes == 'ok');
      storeData("isAuthenticated", parseRes == "ok" )
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    checkAuthenticated();
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  return (
    <BrowserRouter>
      <body>
        <Switch>
          <Route
            exact
            path="/register"
            render={(props) =>
              !isAuthenticated ? (
                <Register {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            exact
            path="/login"
            render={(props) =>
              !isAuthenticated ? (
                <Login {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            exact
            path="/"
            render={(props) =>
              isAuthenticated ? (
                <FlickRSearch {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </Switch>
      </body>
    </BrowserRouter>
  );
}

export default App;
