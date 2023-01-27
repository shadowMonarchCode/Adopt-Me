import { createRoot } from "react-dom";
import Pet from "./Pet.jsx";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Jerry" animal="Mouse" breed="Pure" />
      <Pet name="Goldie" animal="Fish" breed="Goldfish" />
      <Pet name="Tom" animal="Cat" breed="Mixed" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
