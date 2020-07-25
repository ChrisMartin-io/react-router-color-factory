import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ColorsList from './ColorsList';

class Routes extends React.Component {
  
  render() {
    return (
      <Switch>
        <Route exact path="/colors" render={() => <ColorsList />} />asdf
        <Route exact path="/" render={() => <ColorsList />} />
        <Redirect to="/" />
      </Switch>
    )
  }
}

export default Routes;