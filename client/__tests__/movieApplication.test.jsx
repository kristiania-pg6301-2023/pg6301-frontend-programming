import renderer from "react-test-renderer";
import {ListMovies} from "../application";

describe("the movie application", () => {

    it("shows movie list", () => {
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

});