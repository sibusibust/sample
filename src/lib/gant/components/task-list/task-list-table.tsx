import React, { useMemo } from "react";
import styles from "./task-list-table.module.css";
import { Task } from "../../types/public-types";
import { 
  TaskListTableNo,
  TaskListTableWbs,
  TaskListTableTask,
  TaskListTableScheduledStart,
  TaskListTableScheduledEnd,
  TaskListTableScheduledDuration,
  TaskListTableActualStart,
  TaskListTableActualEnd,

  TaskListTableReservedStart,
  TaskListTableReservedEnd,
  TaskListTableResourceName,

  TaskListTablePredecessors,
  TaskListTableSuccessors,
  TaskListTableScheduledCost,
  TaskListTableActualCost,
  TaskListTableStatus,
  TaskListTableRemarks,
  TaskListTableMasterLineLevel,
  TaskListTableMasterLineType,
  TaskListTableMasterLineLabel,
  TaskListTableTaskConnectId,
} from "./task-list-table-parts";

const localeDateStringCache = {};
const toLocaleDateStringFactory =
  (locale: string) =>
  (date: Date, dateTimeOptions: Intl.DateTimeFormatOptions) => {
    const key = date.toString();
    let lds = localeDateStringCache[key];
    if (!lds) {
      lds = date.toLocaleDateString(locale, dateTimeOptions);
      localeDateStringCache[key] = lds;
    }
    return lds;
  };
  // 日付フォーマット
const dateTimeOptions: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "numeric",
  weekday: "narrow",
};

// const toLocaleDateString = useMemo(
//   () => toLocaleDateStringFactory(locale),
//   [locale]
// );


export const TaskListTableDefault: React.FC<{
  rowHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
  locale: string;
  tasks: Task[];
  selectedTaskId: string;
  setSelectedTask: (taskId: string) => void;
  onExpanderClick: (task: Task) => void;
}> = ({
  rowHeight,
  rowWidth,
  tasks,
  fontFamily,
  fontSize,
  locale,
  onExpanderClick,
}) => {
  
  const viewMode = "BasicView"
  const toLocaleDateString = useMemo(
    () => toLocaleDateStringFactory(locale),
    [locale]
  );

  return (
    <div
      className={styles.taskListWrapper}
      style={{
        fontFamily: fontFamily,
        fontSize: fontSize,
      }}
    >
      {tasks.map(t => {
        const partsProps = {
          t,
          rowHeight,
          rowWidth,
          tasks,
          fontFamily,
          fontSize,
          locale,
          onExpanderClick,
          toLocaleDateString,
        }
        switch (viewMode) {
          case 'BasicView': 
            return (
              <div
                className={styles.taskListTableRow}
                style={{ height: rowHeight }}
                key={`${t.id}row`}
              >
                <TaskListTableNo {...partsProps} />
                <TaskListTableWbs {...partsProps} />
                <TaskListTableTask {...partsProps} />

                <TaskListTableReservedStart {...partsProps} />
                <TaskListTableReservedEnd {...partsProps} />

                <TaskListTableResourceName {...partsProps} />
              </div>
            );
          case 'scheduleView': 
            return (
              <div
                className={styles.taskListTableRow}
                style={{ height: rowHeight }}
                key={`${t.id}row`}
              >

                <TaskListTableNo {...partsProps} />
                <TaskListTableWbs {...partsProps} />
                <TaskListTableTask {...partsProps} />

                <TaskListTableScheduledStart {...partsProps} />
                <TaskListTableScheduledEnd {...partsProps} />

                <TaskListTableScheduledDuration {...partsProps} />
                <TaskListTableActualStart {...partsProps} />
                <TaskListTableActualEnd {...partsProps} />
                <TaskListTableResourceName {...partsProps} />
                <TaskListTablePredecessors {...partsProps} />
                <TaskListTableSuccessors {...partsProps} />
              </div>
            );
          case 'statusView': 
            return (
              <div
                className={styles.taskListTableRow}
                style={{ height: rowHeight }}
                key={`${t.id}row`}
              >

                <TaskListTableNo {...partsProps} />
                <TaskListTableWbs {...partsProps} />
                <TaskListTableTask {...partsProps} />

                <TaskListTableReservedStart {...partsProps} />
                <TaskListTableReservedEnd {...partsProps} />

                <TaskListTableScheduledCost {...partsProps} />
                <TaskListTableActualCost {...partsProps} />
                <TaskListTableStatus {...partsProps} />
                <TaskListTableTaskConnectId {...partsProps} />
                <TaskListTableRemarks {...partsProps} />
              </div>
            );
        }
      })}
    </div>
  );
};
