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

})