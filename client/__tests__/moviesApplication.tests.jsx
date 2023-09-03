import renderer, { act } from "react-test-renderer";
import { MoviesRoutes } from "../moviesApplication";
import { MemoryRouter } from "react-router-dom";

const movies = [
  { title: "Barbie", year: "2023", plot: "Adventures in Pink" },
  { title: "Oppenheimer", year: "2023", plot: "The Manhattan project" },
];

async function createMovieApp(path, fetchMovies = jest.fn()) {
  let component;
  await act(async () => {
    component = renderer.create(
      <MemoryRouter initialEntries={[path]}>
        <MoviesRoutes fetchMovies={fetchMovies} />,
      </MemoryRouter>,
    );
  });
  return component;
}

describe("movies database view", () => {
  it("matches snapshot", async () => {
    const component = await createMovieApp("/", () => movies);
    expect(component).toMatchSnapshot();
    expect(
      component.root.findAllByType("h3").map((c) => c.children.join(" ")),
    ).toEqual(["Barbie", "Oppenheimer"]);
  });

  it("shows new movies form", async () => {
    const component = await createMovieApp("/movies/new");
    expect(component).toMatchSnapshot();
    expect(component.root.findByType("button").children.join(" ")).toEqual(
      "Submit",
    );
  });
});
