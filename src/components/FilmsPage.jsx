import { useEffect, useState } from "react";
import "./FilmsPage.css";

function FilmsPage() {
  const [movies, setMovies] = useState([]);

  function fetchEffect() {
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setMovies(data);
      })
      .catch(console.error);
  }
  useEffect(fetchEffect, []);

  return (
    <>
      <h2>Studio Ghibli Films</h2>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
              <div id={movie.description}>
                <p>{movie.description}</p>
                <img src={movie.image} alt={movie.title} />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default FilmsPage;
