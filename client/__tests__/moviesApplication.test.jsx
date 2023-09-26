import { MoviesApplication } from "../moviesApplication";

describe("movie application", () => {
  it("looks okay", () => {
    expect(<MoviesApplication />).toMatchSnapshot();
  });
});
