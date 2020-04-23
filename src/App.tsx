import React from "react";
import "./App.css";
import { MainPage } from "./components/main-page/MainPage";

const App: React.FunctionComponent = () => {
  return (
    <div className="root">
      <MainPage />
    </div>
  );
};

export default App;
