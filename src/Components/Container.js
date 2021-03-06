import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Recipes from "./Recipes";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "../styles.css";

export default function Container() {
  return (
    <div>
      <div className="page">
        <header tabIndex="0">Your Cookbook</header>
        <div id="nav-container">
          <div className="bg" />
          <div className="button" tabIndex="0">
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </div>
          <div id="nav-content" tabIndex="0">
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/recipes">Recipes</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li className="small">
                <a href="#0">Facebook</a>
                <a href="#0">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <main>
          <div className="block">
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/recipes">
                <div className="container">
                  <h3>
                    {" "}
                    Click the button to have a look on your favorite recipes{" "}
                  </h3>
                  <br />
                  <Recipes />
                </div>
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </div>
        </main>
      </div>
    </div>
  );
}
