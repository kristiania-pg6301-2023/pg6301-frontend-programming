import { TaskRoutes } from "../taskApplication";
import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";

describe("task application", () => {
  it("displays task list", () => {
    const component = renderer.create(
      <MemoryRouter initialEntries={["/tasks"]}>
        <TaskRoutes fetchTasks={() => []} onAddTask={() => {}} />,
      </MemoryRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
