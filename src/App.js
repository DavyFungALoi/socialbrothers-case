import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BlogScreen from "../src/screens/BlogScreen";

function App() {
  return (
    <Router>
      <div className="main-wrapper">
        <Route path="/" component={BlogScreen} exact />
      </div>
    </Router>
  );
}

export default App;

/*


import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomeScreen from "./Screens/HomeScreen";
import AboutUsScreen from "./Screens/AboutUsScreen";
import SubscribeScreen from "./Screens/SubscribeScreen";

function App() {
  return (
    <Router>
      <div className="main-wrapper">
        <Header className="Header"></Header>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/about" component={AboutUsScreen} exact />
        <Route path="/subscribe" component={SubscribeScreen} exact />
        <Footer className="Footer"></Footer>
      </div>
    </Router>
  );
}

export default App;
*/
