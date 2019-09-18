import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { MusicProvider } from "./components/context";
import NavBar from "./components/layouts/NavBar";
import Index from "./components/layouts/Index";
import Lyrics from "./components/tracks/Lyrics";
import Progress from "./components/layouts/Progress";
import Scroll from "./components/layouts/Scroll";

class App extends Component {
  render() {
    return (
      <MusicProvider>
        <Router>
          <React.Fragment>
            <Progress scroll={this.props.scroll + "%"} />
            <Scroll />
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
