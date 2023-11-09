import renderer, { act } from "react-test-renderer";
import { MoviesList } from "../moviesList";
import { MoviesContext } from "../moviesContext";
import { AddMovieForm } from "../addMovieForm";

describe("movies react application", () => {
  it("show loading screen", () => {
    const component = renderer.create(<MoviesList />);
    expect(component).toMatchSnapshot();
  });

  it("show loaded movies", async () => {
    const fetchMovies = () => [
      { title: "Jest - the movie", _id: 1 },
      { title: "Promises - as promised", _id: 2 },
    ];

    let component;
    await act(async () => {
      component = renderer.create(
        <MoviesContext.Provider value={{ fetchMovies }}>
          <MoviesList />
        </MoviesContext.Provider>,
      );
    });
    expect(component).toMatchSnapshot();
  });

  it("add a new movie", async () => {
    const onAddMovie = jest.fn();
    const component = renderer.create(
      <MoviesContext.Provider value={{ onAddMovie }}>
        <AddMovieForm />
      </MoviesContext.Provider>,
    );

    await act(async () => {
      component.root.findByType("input").props.onChange({
        target: { value: "My test movie" },
      });
    });
    await act(async () => {
      component.root.findByType("form").props.onSubmit({
        preventDefault() {},
      });
    });

    expect(onAddMovie).toBeCalledWith({
      title: "My test movie",
    });
  });
});
