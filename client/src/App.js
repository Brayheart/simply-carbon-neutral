import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarMenu from "./components/NavbarMenu"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import NoMatch from "./pages/NoMatch/NoMatch"
import About from "./pages/About/About"
import Purchase from "./pages/Purchase/Purchase"
import History from "./pages/History/History"
import Container from "react-bootstrap/Container"

function App() {
  return (
    <Router>
      <div>
        <NavbarMenu />
        <Container className="mainContainer">
          <Switch>
            <Route exact path={["/", "/home"]}>
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/purchase">
              <Purchase />
            </Route>
            <Route exact path="/history">
              <History />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
