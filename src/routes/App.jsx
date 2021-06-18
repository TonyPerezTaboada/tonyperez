import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../containers/Home";
import NotFound from "../containers/NotFound";
import Tests from "../containers/Tests";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";




const App = () => {
  const initialState = useInitialState;
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/tests" component={Tests} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
