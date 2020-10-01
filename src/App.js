import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import CarEnginges from "./components/pages/CarEnginges";
import CarBody from "./components/pages/CarBody";
import CarLights from "./components/pages/CarLights";
import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";
import FavoritesList from "./pages/FavoritesList";

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/favorites" component={FavoritesList} />
            <Route exact path="/posts/:id" component={Detail} />
            <Route component={NoMatch} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
