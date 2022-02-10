import "./App.css";
import Navbar from "./Components/Navbar";
import Textarea from "./Components/Textarea";
import React, { useState } from "react";
import About from "./Components/About";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [swth, setswth] = useState("light");

  // ------------

  // const removeClass = () => {
  //   document.body.classList.remove("light");
  //   document.body.classList.remove("danger");
  //   document.body.classList.remove("primary");
  //   document.body.classList.remove("success");
  // };

  const darkmode = function (e) {
    // document.body.classList.add("bg-" + e);
    if (swth === "light") {
      setswth("dark");
      document.body.style.backgroundColor = "grey";
      document.title = "TextUtil dark mode";
    } else {
      setswth("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtil light mode";
    }
  };

  // -----------
  return (
    <div>
      <Router>
        <Navbar swth={swth} switchmode={darkmode} />

        <Switch>
          <Route exact path="/About">
            <About swth={swth} />
          </Route>

          <Route exact path="/">
            <Textarea heading={"Enter your text"} swth={swth} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
