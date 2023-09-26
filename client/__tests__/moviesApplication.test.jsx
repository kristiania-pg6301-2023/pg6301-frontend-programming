import { MoviesApplication } from "../moviesApplication";
import renderer, { act } from "react-test-renderer";
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

  it("lists movies", async () => {
    let component;
    await act(async () => {
      component = renderer.create(
        <MemoryRouter initialEntries={["/movies"]}>
          <MoviesApplication
            fetchMovies={() => [
              { id: 1, title: "Oppenheimer" },
              { id: 2, title: "Barbie" },
            ]}
          />
        </MemoryRouter>,
      );
    });
    expect(component).toMatchSnapshot();
    expect(component.root.findByType("h2").children.join(" ")).toBe(
      "Listing of all movies",
    );
  });
});
