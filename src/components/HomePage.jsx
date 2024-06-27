function HomePage() {
  return (
    <div>
      <h1>Movie Watchlist</h1>
      <form>
        <label htmlFor="movieInput">Add a Movie</label>
        <input type="text" id="movieInput" name="movieInput" />
        <button type="submit">Add Movie</button>
      </form>
      <ul>
        <li>Spirited Away</li>
        <li>The Dark Knight</li>
        <li>The Godfather</li>
        <li>Frozen</li>
      </ul>
    </div>
  );
}

export default HomePage;
