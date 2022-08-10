import { BarTask } from "./bar-task";

export type BarMoveAction = "progressRate" | "reservedEnd" | "reservedStart" | "move";
export type GanttContentMoveAction =
  | "mouseenter"
  | "mouseleave"
  | "delete"
  | "dblclick"
  | "select"
  | ""
  | BarMoveAction;

export type GanttEvent = {
  changedTask?: BarTask;
  originalSelectedTask?: BarTask;
  action: GanttContentMoveAction;
};
