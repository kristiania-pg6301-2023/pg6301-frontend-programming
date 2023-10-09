import { ApplicationContext, TaskRoutes } from "../taskApplication";
import React from "react";
import renderer, { act, ReactTestRenderer } from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";

describe("task application", () => {
  it("displays task list", async () => {
    let component: ReactTestRenderer;
    await act(async () => {
      component = renderer.create(
        <MemoryRouter initialEntries={["/tasks"]}>
          <ApplicationContext.Provider
            value={{ fetchTasks: async () => [], addTask: jest.fn() }}
          >
            <TaskRoutes />,
          </ApplicationContext.Provider>
        </MemoryRouter>,
      );
    });
    expect(component!).toMatchSnapshot();
  });
  it("submits a new task", async () => {
    const addTask = jest.fn();
    const component = renderer.create(
      <MemoryRouter initialEntries={["/tasks/new"]}>
        <ApplicationContext.Provider
          value={{ fetchTasks: async () => [], addTask }}
        >
          <TaskRoutes />,
        </ApplicationContext.Provider>
      </MemoryRouter>,
    );
    const title = "Expected Task Title";
    act(() => {
      component.root
        .findByType("input")
        .props.onChange({ target: { value: title } });
    });
    await act(async () => {
      component!.root.findByType("form").props.onSubmit({
        preventDefault: () => {},
      });
    });
    expect(addTask).toHaveBeenCalledWith({ title });
  });
});
