import React from "react";

function Food({fav}) {
  return <h3>I like { fav } </h3>;
}

function App() {
  return(
    <div>
      <h1>Hello</h1>
      <Food fav = "pizza" />
      <Food fav = "chicken" />
      <Food fav = "candy" />
      <Food fav = "jelly" />
      <Food fav = "coffee" />
    </div>
  );
}

export default App;
