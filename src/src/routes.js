import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import MainPage from "./pages/MainPage";
import SideMealsPage from "./pages/SideMealsPage";
import EditPage from "./pages/EditPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/sidemeals" component={SideMealsPage} />
      <Route exact path="/add" component={EditPage} />
      <Route exact path="/edit/:recipeID" component={EditPage} />
      <Route exact path="/detail/:recipeID" component={RecipeDetailPage} />
    </Switch>
  </BrowserRouter>
);
