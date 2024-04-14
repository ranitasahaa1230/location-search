import { useState } from "react";
import type { Place } from "./api/Place";
import LocationSearch from "./components/LocationSearch";
import Map from "./components/Map";

function App() {
  const [place, setPlace] = useState<Place | null>(null);

  return (
    <div>
      <LocationSearch onPlaceClick={(p)=>setPlace(p)} />
      <Map place={place}/>
    </div>
  );
}

export default App;
