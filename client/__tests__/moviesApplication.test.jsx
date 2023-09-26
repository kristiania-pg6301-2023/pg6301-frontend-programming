import { MoviesApplication } from "../moviesApplication";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";

describe("movie application", () => {
  it("looks okay", () => {
    const component = renderer.create(
      <MemoryRouter>
        <MoviesApplication />
      </MemoryRouter>,
    );
    expect(component).toMatchSnapshot();
  });

  it("lists movies", () => {
    const component = renderer.create(
      <MemoryRouter initialEntries={["/movies"]}>
        <MoviesApplication />
      </MemoryRouter>,
    );
    expect(component).toMatchSnapshot();
    expect(component.root.findByType("h2").children.join(" ")).toBe(
      "Listing of all movies",
    );
  });
});
