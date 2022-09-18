import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EpisodePage = () => {
  const [episodes, setEpisode] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((result) => result.json())
      .then((data) => setEpisode(data.results));
  }, []);

  if (!episodes) return <div>Cargando...</div>;
  return (
    <>
      <div>Episodes:</div>
      <div>
        {episodes.map((episodes) => {
          return (
            <div key={episodes.id}>
              <Link to={`/episode/${episodes.id}`}>
                {episodes.name}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default EpisodePage;