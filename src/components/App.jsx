import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "pages/Home";
import Movie from "pages/Movie";
import TvShow from "pages/TvShow";
import Person from "pages/Person";
import Trending from "pages/Trending";
import BrowseTv from "pages/BrowseTv";
import BrowseMovies from "pages/BrowseMovies";
import PageNotFound from "pages/PageNotFound";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/tv/:tvId">
          <TvShow />
        </Route>
        <Route exact path="/movie/:movieId">
          <Movie />
        </Route>
        <Route exact path="/person/:personId">
          <Person />
        </Route>
        <Route exact path="/browse/tv">
          <BrowseTv />
        </Route>
        <Route exact path="/browse/movies">
          <BrowseMovies />
        </Route>
        <Route exact path="/trending/:page?">
          <Trending />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
