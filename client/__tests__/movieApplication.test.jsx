import renderer from "react-test-renderer";
import {AddNewMovie, ListMovies} from "../application";

describe("the movie application", () => {

    it("can show movie list", () => {
        const movieList = [
            {title: "Oppenheimer", year: "2023", plot: "Manhattan project"},
            {title: "Barbie", year: "2023", plot: "Plastic adventure"},
        ];
        const component = renderer.create(<ListMovies movies={movieList} />);
        expect(component.root.findAllByType("h3")[0].children).toEqual([
            "Oppenheimer", " (", "2023", ")"
        ]);
        expect(component).toMatchSnapshot();
    })

    it("can add a movie to the list", () => {
        const onAddMovie = jest.fn();
        const component = renderer.create(<AddNewMovie onAddMovie={onAddMovie} />);

        component.root.findAllByType("input")[0].props.onChange({target: {value: "Oppenheimer"}});
        component.root.findAllByType("input")[1].props.onChange({target: {value: "2023"}});
        component.root.findByType("textarea").props.onChange({target: {value: "I have become death"}});

        component.root.findByType("form").props.onSubmit({preventDefault() {}});

        expect(onAddMovie).toHaveBeenCalledWith({
            title: "Oppenheimer",
            year: "2023",
            plot: "I have become death"
        });
    });

});