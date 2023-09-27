import React from "react";
import { MoviesApplication, MoviesContext } from "../moviesApplication";
import renderer, { act } from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";

describe("movie application", () => {
  it("renders front page", () => {
    const component = renderer.create(
      <MemoryRouter>
        <MoviesApplication fetchMovies={jest.fn()} />
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
            fetchMovies={async () => [
              { id: 1, title: "Oppenheimer" },
              { id: 2, title: "Barbie" },
            ]}
          />
        </MemoryRouter>,
      );
    });
    expect(component).toMatchSnapshot();
    expect(component!.root.findByType("h2").children.join(" ")).toBe(
      "Listing of all movies",
    );
  });

  it("renders add movies page", () => {
    const component = renderer.create(
      <MemoryRouter initialEntries={["/movies/new"]}>
        <MoviesApplication fetchMovies={jest.fn()} />
      </MemoryRouter>,
    );
    expect(component).toMatchSnapshot();
    expect(component!.root.findByType("h2").children.join(" ")).toBe(
      "Add movie",
    );
    expect(component!.root.findByType("button").children.join(" ")).toBe(
      "Submit",
    );
  });

  it("posts new movie when form is submitted", async () => {
    const postNewMovie = jest.fn();
    const component = renderer.create(
      <MemoryRouter initialEntries={["/movies/new"]}>
        <MoviesContext.Provider value={{ postNewMovie }}>
          <MoviesApplication fetchMovies={jest.fn()} />
        </MoviesContext.Provider>
      </MemoryRouter>,
    );

    await act(async () => {
      component.root.findByType("input").props.onChange({
        target: { value: "My New Movie" },
      });
    });
    await act(async () => {
      component.root.findByType("form").props.onSubmit({
        preventDefault: () => {},
      });
    });

    expect(postNewMovie).toHaveBeenCalledWith({
      title: "My New Movie",
    });
  });
});
