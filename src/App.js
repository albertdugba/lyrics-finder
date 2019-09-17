import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { MusicProvider } from "./components/context";
import NavBar from "./components/layouts/NavBar";
import Index from "./components/layouts/Index";
import Lyrics from "./components/tracks/Lyrics";

class App extends Component {
  render() {
    return (
      <MusicProvider>
        <Router>
          <React.Fragment>
            <NavBar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/lyrics/track/:id" component={Lyrics} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </MusicProvider>
    );
  }
}

export default App;
