import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [search, setSearch] = useState("")

  function onSubmit(input) {
    setSearch(input)
  }
  return (
    <div className="app">
      <Header onSubmit={onSubmit}/>
      <ListingsContainer searchInput={search} />
    </div>
  );
}

export default App;
