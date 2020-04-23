import React from "react";
import "./App.css";
import { HomePage } from "./components/home-page/HomePage";
import { AboutPage } from "./components/about-page/AboutPage";
import { Navigation } from "./components/home-page/header/Header";

const App: React.FunctionComponent = () => {
  const getPage = (): JSX.Element => {
    const { pathname } = window.location;
    if (pathname === "/about") {
      return <AboutPage />;
    } else {
      return <HomePage />;
    }
  };

  return (
    <div>
      <Navigation />
      {getPage()}
    </div>
  );
};

export default App;
