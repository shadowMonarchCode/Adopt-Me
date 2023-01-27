import React from "react";
import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Jerry", animal: "Mouse", breed: "Pure" }),
    React.createElement(Pet, {
      name: "Goldie",
      animal: "Fish",
      breed: "GoldFish",
    }),
    React.createElement(Pet, { name: "Tom", animal: "Cat", breed: "Mixed" }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
