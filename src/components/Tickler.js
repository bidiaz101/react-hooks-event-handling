import React from "react";

function Tickler() {
  function tickle(event) {
    console.log("Teehee!", event);
  }

  return <button onClick={tickle}>Tickle me!</button>;
}

export default Tickler;
