import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
import AppContext from "../context/AppContext";

import Home from "../containers/Home";
import NotFound from "../containers/NotFound";

import useInitialState from "../hooks/useInitialState";

const App = () => {
  const initialState = useInitialState;
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;