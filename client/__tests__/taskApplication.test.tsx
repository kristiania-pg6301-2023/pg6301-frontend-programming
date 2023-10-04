import { TaskRoutes } from "../taskApplication";
import React from "react";
import renderer, { act } from "react-test-renderer";
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
  it("submits a new task", () => {
    const onAddTask = jest.fn();
    const component = renderer.create(
      <MemoryRouter initialEntries={["/tasks/new"]}>
        <TaskRoutes fetchTasks={() => []} onAddTask={onAddTask} />,
      </MemoryRouter>,
    );
    const title = "Expected Task Title";
    act(() => {
      component.root
        .findByType("input")
        .props.onChange({ target: { value: title } });
    });
    act(() => {
      component!.root.findByType("form").props.onSubmit({
        preventDefault: () => {},
      });
    });
    expect(onAddTask).toHaveBeenCalledWith({ title });
  });
});
