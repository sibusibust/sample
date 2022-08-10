import React, { useMemo } from "react";
import styles from "./task-list-table.module.css";
import { Task } from "../../types/public-types";

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


//--------------------------------------
// No
//--------------------------------------
export const TaskListTableNo: React.FC = (
  {
    t,
    rowHeight,
    rowWidth,
    tasks,
    fontFamily,
    fontSize,
    locale,
    onExpanderClick,
    toLocaleDateString,
}) => {
  return (
    <div
      className={styles.taskListCell}
      style={{
        minWidth: "40px",
        maxWidth: "40px",
      }}
      title={t.name}
    >
      <div className={styles.taskListNameWrapper}>
        <div>{t.displayOrder}</div>
      </div>
    </div>
  );
};


//--------------------------------------
// WBS
//--------------------------------------
export const TaskListTableWbs: React.FC = (
  {
    t,
    rowHeight,
    rowWidth,
    tasks,
    fontFamily,
    fontSize,
    locale,
    onExpanderClick,
    toLocaleDateString,
}) => {
  let expanderSymbol = "";
  if (t.hideChildren === false) {
    expanderSymbol = "▼";
  } else if (t.hideChildren === true) {
    expanderSymbol = "▶";
  }
  return (
    <div
      className={styles.taskListCellWbs}
      style={{
        minWidth: "100px",
        maxWidth: "100px",
      }}
      title={t.name}
    >
      <div className={styles.taskListNameWrapper}>
        <div>{t.outLineSpace}</div>
        <div
          className={
            expanderSymbol
              ? styles.taskListExpander
              : styles.taskListEmptyExpander
          }
          onClick={() => onExpanderClick(t)}
        >
          {expanderSymbol}
        </div>
        <div>{t.wbs}</div>
      </div>
    </div>
  );
};

//--------------------------------------
// Task
//--------------------------------------
export const TaskListTableTask: React.FC = (
  {
    t,
    rowHeight,
    rowWidth,
    tasks,
    fontFamily,
    fontSize,
    locale,
    onExpanderClick,
    toLocaleDateString,
}) => {
  return (
    <div
      className={styles.taskListCell}
      style={{
        minWidth: "240px",
        maxWidth: "240px",
      }}
      title={t.name}
    >
      <div className={styles.taskListNameWrapper}>
        <div>{t.outLineSpace}{t.name}</div>
      </div>
    </div>
  );
};

//--------------------------------------
// ScheduledStart
//--------------------------------------
export const TaskListTableScheduledStart: React.FC = (
  {
    t,
    rowHeight,
    rowWidth,
    tasks,
    fontFamily,
    fontSize,
    locale,
    onExpanderClick,
    toLocaleDateString,
}) => {
  return (
    <div
      className={styles.taskListCell}
      style={{
        minWidth: "80px",
        maxWidth: "80px",
      }}
    >
      &nbsp;{toLocaleDateString(t.scheduledStart, dateTimeOptions)}
    </div>
  );
};

//--------------------------------------
// TaskListTableScheduledEnd
//--------------------------------------
export const TaskListTableScheduledEnd: React.FC = (
  {
    t,
    rowHeight,
    rowWidth,
    tasks,
    fontFamily,
    fontSize,
    locale,
    onExpanderClick,
    toLocaleDateString,
}) => {
  return (
    <div
      className={styles.taskListCell}
      style={{
        minWidth: "80px",
        maxWidth: "80px",
      }}
    >
      &nbsp;{toLocaleDateString(t.scheduledEnd, dateTimeOptions)}
    </div>
  );
};

//--------------------------------------
// TaskListTableScheduledDuration
//--------------------------------------
export const TaskListTableScheduledDuration: React.FC = (
  {
    t,
    rowHeight,
    rowWidth,
    tasks,
    fontFamily,
    fontSize,
    locale,
    onExpanderClick,
    toLocaleDateString,
}) => {
  return (
    <div
      className={styles.taskListCell}
      style={{
        minWidth: "80px",
        maxWidth: "80px",
      }}
    >
      &nbsp;{toLocaleDateString(t.scheduledDuration, dateTimeOptions)}
    </div>
  );
};


//--------------------------------------
// TaskListTableActualStart
//--------------------------------------
export const TaskListTableActualStart: React.FC = (
  {
    t,
    rowHeight,
    rowWidth,
    tasks,
    fontFamily,
    fontSize,
    locale,
    onExpanderClick,
    toLocaleDateString,
}) => {
  return (
    <div
      className={styles.taskListCell}
      style={{
        minWidth: "80px",
        maxWidth: "80px",
      }}
    >
      &nbsp;{toLocaleDateString(t.actualStart, dateTimeOptions)}
    </div>
  );
};

//--------------------------------------
// TaskListTableActualEnd
//--------------------------------------
export const TaskListTableActualEnd: React.FC = (
  {
    t,
    rowHeight,
    rowWidth,
    tasks,
    fontFamily,
    fontSize,
    locale,
    onExpanderClick,
    toLocaleDateString,
}) => {
  return (
    <div
      className={styles.taskListCell}
      style={{
        minWidth: "80px",
        maxWidth: "80px",
      }}
    >
      &nbsp;{toLocaleDateString(t.actualEnd, dateTimeOptions)}
    </div>
  );
};

//--------------------------------------
// TaskListTableReservedStart
//--------------------------------------
export const TaskListTableReservedStart: React.FC = (
  {
    t,
    rowHeight,
    rowWidth,
    tasks,
    fontFamily,
    fontSize,
    locale,
    onExpanderClick,
    toLocaleDateString,
}) => {
  return (
    <div
      className={styles.taskListCell}
      style={{
        minWidth: "80px",
        maxWidth: "80px",
      }}
    >
      &nbsp;{toLocaleDateString(t.reservedStart, dateTimeOptions)}
    </div>
  );
};

//--------------------------------------
// TaskListTableReservedEnd
//--------------------------------------
export const TaskListTableReservedEnd: React.FC = (
  {
    t,
    rowHeight,
    rowWidth,
    tasks,
    fontFamily,
    fontSize,
    locale,
    onExpanderClick,
    toLocaleDateString,
}) => {
  return (
    <div
      className={styles.taskListCell}
      style={{
        minWidth: "80px",
        maxWidth: "80px",
      }}
    >
      &nbsp;{toLocaleDateString(t.reservedEnd, dateTimeOptions)}
    </div>
  );
};



//--------------------------------------
// TaskListTableResourceName
//--------------------------------------
export const TaskListTableResourceName: React.FC = (
  {
    t,
    rowHeight,
    rowWidth,
    tasks,
    fontFamily,
    fontSize,
    locale,
    onExpanderClick,
    toLocaleDateString,
}) => {
  return (
    <div
      className={styles.taskListCell}
      style={{
        minWidth: "80px",
        maxWidth: "80px",
      }}
    >
      &nbsp;{t.resourceName}
    </div>
  );
};


//--------------------------------------
// TaskListTablePredecessors
//--------------------------------------
export const TaskListTablePredecessors: React.FC = (
  {
    t,
    rowHeight,
    rowWidth,
    tasks,
    fontFamily,
    fontSize,
    locale,
    onExpanderClick,
    toLocaleDateString,
}) => {
  return (
    <div
      className={styles.taskListCell}
      style={{
        minWidth: "80px",
        maxWidth: "80px",
      }}
    >
      &nbsp;{t.predecessors.join(',')}
    </div>
  );
};

//--------------------------------------
// TaskListTableSuccessors
//--------------------------------------
export const TaskListTableSuccessors: React.FC = (
  {
    t,
    rowHeight,
    rowWidth,
    tasks,
    fontFamily,
    fontSize,
    locale,
    onExpanderClick,
    toLocaleDateString,
}) => {
  return (
    <div
      className={styles.taskListCell}
      style={{
        minWidth: "80px",
        maxWidth: "80px",
      }}
    >
      &nbsp;{t.successors.join(',')}
    </div>
  );
};

//--------------------------------------
// TaskListTableScheduledCost
//--------------------------------------
export const TaskListTableScheduledCost: React.FC = (
  {
    t,
    rowHeight,
    rowWidth,
    tasks,
    fontFamily,
    fontSize,
    locale,
    onExpanderClick,
    toLocaleDateString,
}) => {
  return (
    <div
      className={styles.taskListCell}
      style={{
        minWidth: "80px",
        maxWidth: "80px",
      }}
    >
      &nbsp;{t.scheduledCost}
    </div>
  );
};

//--------------------------------------
// TaskListTableActualCost
//--------------------------------------
export const TaskListTableActualCost: React.FC = (
  {
    t,
    rowHeight,
    rowWidth,
    tasks,
    fontFamily,
    fontSize,
    locale,
    onExpanderClick,
    toLocaleDateString,
}) => {
  return (
    <div
      className={styles.taskListCell}
      style={{
        minWidth: "80px",
        maxWidth: "80px",
      }}
    >
      &nbsp;{t.TaskListTableActualCost}
    </div>
  );
};

//--------------------------------------
// TaskListTableStatus
//--------------------------------------
export const TaskListTableStatus: React.FC = (
  {
    t,
    rowHeight,
    rowWidth,
    tasks,
    fontFamily,
    fontSize,
    locale,
    onExpanderClick,
    toLocaleDateString,
}) => {
  return (
    <div
      className={styles.taskListCell}
      style={{
        minWidth: "80px",
        maxWidth: "80px",
      }}
    >
      &nbsp;{t.status}
    </div>
  );
};

//--------------------------------------
// TaskListTableRemarks
//--------------------------------------
export const TaskListTableRemarks: React.FC = (
  {
    t,
    rowHeight,
    rowWidth,
    tasks,
    fontFamily,
    fontSize,
    locale,
    onExpanderClick,
    toLocaleDateString,
}) => {
  return (
    <div
      className={styles.taskListCell}
      style={{
        minWidth: "80px",
        maxWidth: "80px",
      }}
    >
      &nbsp;{t.remarks}
    </div>
  );
};
//--------------------------------------
// TaskListTableMasterLineLevel
//--------------------------------------
export const TaskListTableMasterLineLevel: React.FC = (
  {
    t,
    rowHeight,
    rowWidth,
    tasks,
    fontFamily,
    fontSize,
    locale,
    onExpanderClick,
    toLocaleDateString,
}) => {
  return (
    <div
      className={styles.taskListCell}
      style={{
        minWidth: "80px",
        maxWidth: "80px",
      }}
    >
      &nbsp;{t.masterLineLevel}
    </div>
  );
};
//--------------------------------------
// TaskListTableMasterLineType
//--------------------------------------
export const TaskListTableMasterLineType: React.FC = (
  {
    t,
    rowHeight,
    rowWidth,
    tasks,
    fontFamily,
    fontSize,
    locale,
    onExpanderClick,
    toLocaleDateString,
}) => {
  return (
    <div
      className={styles.taskListCell}
      style={{
        minWidth: "80px",
        maxWidth: "80px",
      }}
    >
      &nbsp;{t.masterLineType}
    </div>
  );
};
//--------------------------------------
// TaskListTableMasterLineLabel
//--------------------------------------
export const TaskListTableMasterLineLabel: React.FC = (
  {
    t,
    rowHeight,
    rowWidth,
    tasks,
    fontFamily,
    fontSize,
    locale,
    onExpanderClick,
    toLocaleDateString,
}) => {
  return (
    <div
      className={styles.taskListCell}
      style={{
        minWidth: "80px",
        maxWidth: "80px",
      }}
    >
      &nbsp;{t.masterLineLabel}
    </div>
  );
};
//--------------------------------------
// TaskListTableTaskConnectId
//--------------------------------------
export const TaskListTableTaskConnectId: React.FC = (
  {
    t,
    rowHeight,
    rowWidth,
    tasks,
    fontFamily,
    fontSize,
    locale,
    onExpanderClick,
    toLocaleDateString,
}) => {
  return (
    <div
      className={styles.taskListCell}
      style={{
        minWidth: "80px",
        maxWidth: "80px",
      }}
    >
      &nbsp;{t.taskConnectId}
    </div>
  );
};
