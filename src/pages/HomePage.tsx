import React from "react";

function Home() {
  return (
    <div>
      <h1>I am Home!!!</h1>
      <button onClick={() => console.log("yoooo")}>Click Me!</button>
    </div>
  );
}

export default {
  components: Home
};
