import React from "react";
import "./App.css";
import { MainPage } from "./components/main-page/MainPage";
import { Switch, Route } from "react-router-dom";
import { NotFoundPage } from "./components/not-found-page/NotFoundPage";
import { loadCourses } from "./data/actions/course-actions";

const App: React.FunctionComponent = () => {
  React.useEffect(() => {
    loadCourses();
  }, []);

  return (
    <div className="root">
      <Switch>
        <Route path="/home" component={MainPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
