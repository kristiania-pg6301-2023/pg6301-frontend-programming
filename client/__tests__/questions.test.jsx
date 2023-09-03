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

  it("handles answer", () => {
    const handleClickAnswer = jest.fn();
    const component = renderer.create(
      <Question question={question} onClickAnswer={handleClickAnswer} />,
    );
    component.root.findAllByType("button")[1].props.onClick();
    expect(handleClickAnswer).toHaveBeenCalledWith("answer_b");
  });
});
