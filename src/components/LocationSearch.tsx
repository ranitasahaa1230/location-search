import React, { useState } from "react";
import type { Place } from "../api/Place";

interface LocationSearchProps {
  onPlaceClick: (place: Place) => void;
}

const LocationSearch = ({ onPlaceClick }: LocationSearchProps) => {
  const [term, setTerm] = useState("");
  const [places, setPlaces] = useState<Place[]>([]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Need to search...", term);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Search</label>
        <input
          id="term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  );
};

export default LocationSearch;
