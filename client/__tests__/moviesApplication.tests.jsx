import renderer, { act } from "react-test-renderer";
import { MoviesRoutes } from "../moviesApplication";
import { MemoryRouter } from "react-router-dom";

const movies = [
  { title: "Barbie", year: "2023", plot: "Adventures in Pink" },
  { title: "Oppenheimer", year: "2023", plot: "The Manhattan project" },
];

async function createMovieApp(
  path,
  { fetchMovies = jest.fn(), insertMovie = jest.fn() } = {},
) {
  let component;
  await act(async () => {
    component = renderer.create(
      <MemoryRouter initialEntries={[path]}>
        <MoviesRoutes fetchMovies={fetchMovies} insertMovie={insertMovie} />,
      </MemoryRouter>,
    );
  });
  return component;
}

describe("movies database view", () => {
  it("matches snapshot", async () => {
    const component = await createMovieApp("/", { fetchMovies: () => movies });
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

  it("Submits a new movie", async () => {
    const insertMovie = jest.fn();
    const fetchMovies = jest.fn();
    const component = await createMovieApp("/movies/new", {
      insertMovie,
      fetchMovies,
    });
    fetchMovies.mockClear();

    const title = "My Movie Title";
    await act(() => {
      component.root
        .findByType("input")
        .props.onChange({ target: { value: title } });
    });
    await act(() => {
      component.root.findByType("form").props.onSubmit();
    });

    expect(insertMovie).toHaveBeenCalledWith({ title });
    expect(fetchMovies).toHaveBeenCalled();
  });
});
