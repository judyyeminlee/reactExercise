import "./HomePage.css";
import { useState } from "react";

export function HomePage() {
  //This will be used for the input field's text value
  const [movies, setMovies] = useState([]);
  //An array that holds all the different movie titles
  const [newMovie, setNewMovie] = useState("");

  const handleInputChange = (e) => {
    setNewMovie(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setMovies([...movies, newMovie]);
    setText("");
  };

  const handleRemoveMovie = (index) => {
    setMovies(
      movies.filter((_, i) => {
        i !== index;
      })
    );
  };

  return (
    <>
      <h1>Movies</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="movieInput">Enter Movie</label>
        <input
          type="text"
          id="movieInput"
          name="movieInput"
          onChange={handleInputChange}
        />
        <button type="submit">Add movie</button>
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>
              {movie}
              <button onClick={() => handleRemoveMovie(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </form>
    </>
  );
}

export default HomePage;
