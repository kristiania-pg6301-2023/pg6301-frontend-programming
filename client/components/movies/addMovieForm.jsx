import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AddMovieForm({ onMovieAdded }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [country, setCountry] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    await onMovieAdded({
      title,
      year: parseInt(year),
      countries: [country],
    });
    navigate("/movies");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Movie Form</h2>
      <div>
        Title:
        <br />
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        Year:
        <br />
        <input value={year} onChange={(e) => setYear(e.target.value)} />
      </div>
      <div>
        Country:
        <br />
        <input value={country} onChange={(e) => setCountry(e.target.value)} />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}
