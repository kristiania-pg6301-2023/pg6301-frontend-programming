import { TaskRoutes } from "../taskApplication";
import React from "react";
import renderer from "react-test-renderer";

describe("task application", () => {
  it("displays task list", () => {
    const component = renderer.create(
      <TaskRoutes fetchTasks={() => []} onAddTask={() => {}} />,
    );
    expect(component).toMatchSnapshot();
  });
});
