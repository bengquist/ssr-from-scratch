import React, { useEffect } from "react";

function HomePage() {
  return (
    <div>
      <h1>I am Home!!!</h1>
      <button onClick={() => console.log("yoooo")}>Click Me!</button>
    </div>
  );
}

export default {
  component: HomePage
};
