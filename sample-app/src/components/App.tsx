import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../App.css";
import UsernameForm from "./UsernameForm";
import Welcome from "./Welcome";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/welcome/:username">
          <Welcome />
        </Route>
        <Route path="/">
          <UsernameForm />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
