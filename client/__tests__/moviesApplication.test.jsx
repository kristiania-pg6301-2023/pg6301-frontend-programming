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
});
