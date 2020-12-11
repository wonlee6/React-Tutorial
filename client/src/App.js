import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Management from './routes/Management';
import Home from './routes/Home';
import Navigation from './components/Navigation';


class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Navigation></Navigation>
        <Route path="/" exact={true} component={Management} />
        <Route path="/movie" component={Home} />
      </HashRouter>
    )
  }
}

export default App;