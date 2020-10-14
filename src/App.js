import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import NoMatch from './pages/NoMatch';
import Portfolio from "./pages/Portfolio"






function App() {
  return (
    <Router>

      <div>
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route>
            {/* <NoMatch /> */}
          </Route>
        </Switch>




      </div>
    </Router>
  )
}

export default App;
