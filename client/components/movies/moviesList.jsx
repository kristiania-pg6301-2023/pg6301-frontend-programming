function MovieEntry({ movie }) {
  const { title, year, countries, plot } = movie;
  return (
    <>
      <h3>
        {title} ({year})
      </h3>
      <div>
        <p>Made in: {countries.join(", ")}</p>
        <div>{plot}</div>
      </div>
    </>
  );
}

export function MoviesList({ movies }) {
  return (
    <>
      <h2>Movies List</h2>
      {movies.map((m) => (
        <MovieEntry key={m._id} movie={m} />
      ))}
    </>
  );
}
