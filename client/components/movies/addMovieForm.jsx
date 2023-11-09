import React, { useContext, useState } from "react";
import { MoviesContext } from "./moviesContext";

export function AddMovieForm() {
  const [title, setTitle] = useState("");
  const { onAddMovie } = useContext(MoviesContext);

  async function handleSubmit(e) {
    e.preventDefault();

    const movie = { title };
    await onAddMovie(movie);
    // reload
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add movie</h2>
      <div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}
