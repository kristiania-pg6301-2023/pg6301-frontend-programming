import renderer from "react-test-renderer";
import { ListMovies } from "../moviesApplication";

const movies = [
  { title: "Barbie", year: "2023", plot: "Adventures in Pink" },
  { title: "Oppenheimer", year: "2023", plot: "The Manhattan project" },
];

describe("movies database view", () => {
  it("matches snapshot", () => {
    const component = renderer.create(<ListMovies movies={movies} />);
    expect(component).toMatchSnapshot();
    expect(
      component.root.findAllByType("h3").map((c) => c.children.join(" ")),
    ).toEqual(["Barbie", "Oppenheimer"]);
  });
});
