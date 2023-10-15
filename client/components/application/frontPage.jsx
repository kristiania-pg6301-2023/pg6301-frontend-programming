import { Link } from "react-router-dom";

export function FrontPage() {
  return (
    <>
      <h2>Front page</h2>
      <ul>
        <li>
          <Link to={"/movies"}>List movies</Link>
        </li>
        <li>
          <Link to={"/movies/new"}>Add new movie</Link>
        </li>
      </ul>
    </>
  );
}
