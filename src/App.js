import React from "react";
import { Route, Switch } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Homepage from "./pages/Homepage";
import WorkInProgress from "./pages/WorkInProgress";

function App() {
  return (
    <div className='App'>
      <GlobalStyles />

      <Switch>
        <Route path='/' exact>
          <Homepage />
        </Route>
        <Route path='/progress'>
          <WorkInProgress />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
