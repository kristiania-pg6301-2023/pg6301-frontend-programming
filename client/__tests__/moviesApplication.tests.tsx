import React from "react";
import renderer, { act, ReactTestRenderer } from "react-test-renderer";
import { MoviesRoutes, MoviesRoutesProps } from "../moviesApplication";
import { MemoryRouter } from "react-router-dom";

const movies = [
  { _id: "1", title: "Barbie", year: "2023", plot: "Adventures in Pink" },
  {
    _id: "2",
    title: "Oppenheimer",
    year: "2023",
    plot: "The Manhattan project",
  },
];

async function createMovieApp(
  path: string,
  props: Partial<MoviesRoutesProps> = {},
): Promise<ReactTestRenderer> {
  const { fetchMovies, insertMovie } = props;
  let component;
  await act(async () => {
    component = renderer.create(
      <MemoryRouter initialEntries={[path]}>
        <MoviesRoutes
          fetchMovies={fetchMovies || (async () => [])}
          insertMovie={insertMovie || jest.fn()}
          fetchParameters={async () => ({ years: [], countries: [] })}
        />
        ,
      </MemoryRouter>,
    );
  });
  return component!;
}

describe("movies database view", () => {
  it("matches snapshot", async () => {
    const component = await createMovieApp("/", {
      fetchMovies: async () => movies,
    });
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
    const fetchMovies = jest.fn(async () => []);
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

    expect(insertMovie).toHaveBeenCalledWith({ title, plot: "" });
    expect(fetchMovies).toHaveBeenCalled();
  });
});
