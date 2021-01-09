import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "pages/Home";
import Tv from "pages/Tv";
import Movie from "pages/Movie";
import Person from "pages/Person";
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
          <Tv />
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
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
