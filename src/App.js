import Map from "./Components/Map";
import Direction from "./Components/Direction";
import { useState } from "react";

function App() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <div className="App">
      <input
        type="text"
        onBlur={(e) => setOrigin(e.target.value)}
        placeholder="Starting From"
      />
      <input
        type="text"
        onBlur={(e) => setDestination(e.target.value)}
        placeholder="Going to "
      />
      <Direction origin={origin} destination={destination}></Direction>
    </div>
  );
}

export default App;
