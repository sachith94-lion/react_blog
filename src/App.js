import React, { Component } from "react";
import NavBar from "./components/Nav_Bar/NavBar";
import Header from "./components/Header/Header";
import Articles from "./components/Articles/Articles";
import PostView from "./components/PostView/PostView";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import PostsData from "./posts.json";

export class App extends Component {
  state = {
    aboutData: {},
  };
  getaboutData() {
    this.setState({ aboutData: PostsData });
  }

  componentDidMount() {
    this.getaboutData();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path="/post/:id">
              <PostView />
            </Route>
            <Route path="/AboutUs">
              <AboutUs data={this.state.aboutData.About} />
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
}

export default App;
