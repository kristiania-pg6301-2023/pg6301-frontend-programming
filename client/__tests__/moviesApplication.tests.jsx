import renderer, { act } from "react-test-renderer";
import { MoviesRoutes } from "../moviesApplication";
import { MemoryRouter } from "react-router-dom";

const movies = [
  { title: "Barbie", year: "2023", plot: "Adventures in Pink" },
  { title: "Oppenheimer", year: "2023", plot: "The Manhattan project" },
];

describe("movies database view", () => {
  it("matches snapshot", async () => {
    let component;
    await act(async () => {
      component = renderer.create(
        <MemoryRouter>
          <MoviesRoutes fetchMovies={() => movies} />,
        </MemoryRouter>,
      );
    });
    expect(component).toMatchSnapshot();
    expect(
      component.root.findAllByType("h3").map((c) => c.children.join(" ")),
    ).toEqual(["Barbie", "Oppenheimer"]);
  });

  it("shows new movies form", async () => {
    let component;
    await act(async () => {
      component = renderer.create(
        <MemoryRouter initialEntries={["/movies/new"]}>
          <MoviesRoutes fetchMovies={jest.fn()} />,
        </MemoryRouter>,
      );
    });
    expect(component).toMatchSnapshot();
    expect(component.root.findByType("button").children.join(" ")).toEqual(
      "Submit",
    );
  });
});
