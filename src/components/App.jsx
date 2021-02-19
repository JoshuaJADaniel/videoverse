import React from "react";

import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

import Home from "pages/Home";
import Trending from "pages/Trending";

import Movies from "pages/Movies";
import People from "pages/People";
import TvShows from "pages/TvShows";

import Movie from "pages/Movie";
import Person from "pages/Person";
import TvShow from "pages/TvShow";

import Search from "pages/Search";
import NoMatch from "pages/NoMatch";

import "normalize.css";
import "styles/main.scss";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/trending">
          <Redirect to="/trending/1" />
        </Route>
        <Route exact path="/trending/:page?">
          <Trending />
        </Route>

        <Route exact path="/people">
          <Redirect to="/people/1" />
        </Route>
        <Route exact path="/people/:page?">
          <People />
        </Route>

        <Route exact path="/movies">
          <Redirect to="/movies/1" />
        </Route>
        <Route exact path="/movies/:page?">
          <Movies />
        </Route>

        <Route exact path="/tv-shows">
          <Redirect to="/tv-shows/1" />
        </Route>
        <Route exact path="/tv-shows/:page?">
          <TvShows />
        </Route>

        <Route exact path="/search">
          <Redirect to="/search/1" />
        </Route>
        <Route exact path="/search/:page?">
          <Search />
        </Route>

        <Route exact path="/movie/:movieId">
          <Movie />
        </Route>

        <Route exact path="/tv/:tvId">
          <TvShow />
        </Route>

        <Route exact path="/person/:personId">
          <Person />
        </Route>

        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
