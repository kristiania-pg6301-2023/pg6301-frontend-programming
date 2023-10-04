import { TaskRoutes } from "../taskApplication";
import React from "react";

describe("task application", () => {
  it("displays task list", () => {
    const component = renderer.create(
      <TaskRoutes fetchTasks={() => []} onAddTask={() => {}} />,
    );
    expect(component).toMatchSnapshot();
  });
});
