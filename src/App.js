import React from "react";
import PageHeader from "./components/PageHeader";
import SuperHerosList from "./components/SuperHerosList";

const App = () => {
  return (
    <div>
      <PageHeader title='Super Heros' />
      <SuperHerosList />
    </div>
  );
};

export default App;
