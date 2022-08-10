import React from "react";
import ReactDOM from "react-dom";
import { Gantt } from "../index";

describe("gantt", () => {
  it("renders without crashing", () => {

    const div = document.createElement("div");
    ReactDOM.render(
      <Gantt
        tasks={[
          {
            reservedStart: new Date(2020, 0, 1),
            reservedEnd: new Date(2020, 2, 2),
            name: "Redesign website",
            id: "Task 0",
            progressRate: 45,
            type: "task",
          },
        ]}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
