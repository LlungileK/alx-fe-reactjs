import React from "react";
import Search from "./components/Search";

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        GitHub User Search
      </h1>
      <Search />
    </div>
  );
};

export default App;
