import React from "react";
import NavBar from "./components/Nav_Bar/NavBar";
import Header from "./components/Header/Header";
import Articles from "./components/Articles/Articles";
import PostView from "./components/PostView/PostView";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/post" >
            <PostView />
          </Route>
          <Route path="/">
            <Header />
            <Articles />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
