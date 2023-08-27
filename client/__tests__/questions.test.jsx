import renderer from "react-test-renderer";
import { Question } from "../quizApplication";

const question = {
  question: "What's going on?",
  answers: {
    answer_a: "Nothing",
    answer_b: "Something",
  },
};

describe("test questions", () => {
  it("shows question", () => {
    const component = renderer.create(<Question question={question} />);
    expect(component).toMatchSnapshot();
  });
});
