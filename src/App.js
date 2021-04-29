import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./MainComponent";
import "./App.css";
import ScrollToTop from "./ScrollToTop";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ScrollToTop >
          <Main />
          </ScrollToTop>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
