import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LocationPage = () => {
  const [locations, setLocations] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/location")
      .then((result) => result.json())
      .then((data) => setLocations(data.results));
  }, []);

  if (!locations) return <div>Cargando...</div>;
  return (
    <>
      <div>Locations:</div>
      <div>
        {locations.map((location) => {
          return (
            <div key={location.id}>
              <Link to={`/location/${location.id}`}>
                {location.name}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LocationPage;