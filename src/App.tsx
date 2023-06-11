import React from "react";
import { MainNavigation } from "./Layout/MainNavigation";
import { HeroSection } from "./Components/HeroSection";

const App = (): JSX.Element => {
  return (
    <>
      <MainNavigation />
      <HeroSection />
    </>
  );
};

export default App;
