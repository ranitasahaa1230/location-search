import { useState } from "react";
import type { Place } from "./api/Place";
import LocationSearch from "./components/LocationSearch";
import Map from "./components/Map";

function App() {
  const [place, setPlace] = useState<Place | null>(null);

  return (
    <div>
      <div><LocationSearch onPlaceClick={(p) => setPlace(p)} /></div>
      <div><Map place={place} /></div>
    </div>
  );
}

export default App;
