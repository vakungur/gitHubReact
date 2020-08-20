import React from 'react';
import { Route, Switch } from 'react-router';

import AuthPageComponent from './pages/AuthPage.component';
import TerminalsPageComponent from './pages/TerminalsPage.component';
import BuyersPageComponent from './pages/BuyersPage.component';
import BuyersPageIdComponent from './pages/BuyersPageId.component';
import PageNotFoundComponent from './pages/PageNotFound.component';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={AuthPageComponent} />
        <Route exact path="/terminals" component={TerminalsPageComponent} />
        <Route exact path="/buyers" component={BuyersPageComponent} />
        <Route exact path="/buyers/:id" component={BuyersPageIdComponent} />
        <Route component={PageNotFoundComponent} />
      </Switch>
    </>
  );
}

export default App;
