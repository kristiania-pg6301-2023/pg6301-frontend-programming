import renderer, { act } from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import { Quiz } from "../quizApplication";

const sampleQuestion = {
  id: 1,
  question: "What's up",
  answers: {
    answer_a: "Nothing",
    answer_b: "Nothing much",
    answer_c: "'sup!"
  }
}

describe("quiz application", () => {

  it("shows a question", async () => {
    let component;
    await act(async () => {
      component = renderer.create(
        <MemoryRouter initialEntries={["/question"]}>
          <Quiz fetchQuestion={() => sampleQuestion} />
        </MemoryRouter>
      );
    });
    expect(component).toMatchSnapshot();
    expect(component.root.findByType("p").children.join(" ")).toEqual(sampleQuestion.question);
  })

  it("submits answer", async () => {
    const postAnswer = jest.fn(() => ({correct: false}));
    let component;
    await act(async () => {
      component = renderer.create(
        <MemoryRouter initialEntries={["/question"]}>
          <Quiz fetchQuestion={() => sampleQuestion} postAnswer={postAnswer} />
        </MemoryRouter>
      );
    });
    await act(async () => {
      component.root.findAllByType("button")[1].props.onClick();
    })
    expect(postAnswer).toHaveBeenCalledWith(sampleQuestion.id, "answer_b");
    expect(component).toMatchSnapshot();
    expect(component.root.findByType("h2").children.join(" ")).toEqual("That's wrong!");
  })

})