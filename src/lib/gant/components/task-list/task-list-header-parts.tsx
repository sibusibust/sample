import React from "react";
import styles from "./task-list-header.module.css";
import i18n from "lib/i18n/index";
const TERM = i18n.setLang("ja");

//-------------------------
// セパレータ
//-------------------------
export const TaskListHeaderSeparator: React.FC<{
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
}> = ({ headerHeight, fontFamily, fontSize, rowWidth }) => {
  return (
    <div
      className={styles.ganttTable_HeaderSeparator}
      style={{
        height: headerHeight * 0.5,
        marginTop: headerHeight * 0.2,
      }}
    />
  );
};

//-------------------------
// WBS
//-------------------------
export const TaskListHeaderWbs: React.FC<{
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
}> = ({ headerHeight, fontFamily, fontSize, rowWidth }) => {
  return (
    <div
      className={styles.ganttTable_HeaderItem}
      style={{
        minWidth: "100px",
      }}
    >
      &nbsp;{TERM.gantt.wbs}
    </div>
  );
};

//-------------------------
// Task
//-------------------------
export const TaskListHeaderTask: React.FC<{
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
}> = ({ headerHeight, fontFamily, fontSize, rowWidth }) => {
  return (
    <div
      className={styles.ganttTable_HeaderItem}
      style={{
        minWidth: "240px",
      }}
    >
      &nbsp;{TERM.gantt.name}
    </div>
  );
};


//-------------------------
// ReservedStart
//-------------------------
export const TaskListHeaderReservedStart: React.FC<{
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
}> = ({ headerHeight, fontFamily, fontSize, rowWidth }) => {
  return (
    <div
      className={styles.ganttTable_HeaderItem}
      style={{
        minWidth: "80px",
      }}
    >
      &nbsp;{TERM.gantt.reservedStart}
    </div>
  );
};

//-------------------------
// ReservedEnd
//-------------------------
export const TaskListHeaderReservedEnd: React.FC<{
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
}> = ({ headerHeight, fontFamily, fontSize, rowWidth }) => {
  return (
    <div
      className={styles.ganttTable_HeaderItem}
      style={{
        minWidth: "80px",
      }}
    >
      &nbsp;{TERM.gantt.reservedEnd}
    </div>
  );
};


//-------------------------
// ScheduledStart
//-------------------------
export const TaskListHeaderScheduledStart: React.FC<{
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
}> = ({ headerHeight, fontFamily, fontSize, rowWidth }) => {
  return (
    <div
      className={styles.ganttTable_HeaderItem}
      style={{
        minWidth: "80px",
      }}
    >
      &nbsp;{TERM.gantt.scheduledStart}
    </div>
  );
};

//-------------------------
// ScheduledEnd
//-------------------------
export const TaskListHeaderScheduledEnd: React.FC<{
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
}> = ({ headerHeight, fontFamily, fontSize, rowWidth }) => {
  return (
    <div
      className={styles.ganttTable_HeaderItem}
      style={{
        minWidth: "80px",
      }}
    >
      &nbsp;{TERM.gantt.scheduledEnd}
    </div>
  );
};

//-------------------------
// ScheduledDuration
//-------------------------
export const TaskListHeaderScheduledDuration: React.FC<{
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
}> = ({ headerHeight, fontFamily, fontSize, rowWidth }) => {
  return (
    <div
      className={styles.ganttTable_HeaderItem}
      style={{
        minWidth: "80px",
      }}
    >
      &nbsp;{TERM.gantt.scheduledDuration}
    </div>
  );
};
//-------------------------
// ActualStart
//-------------------------
export const TaskListHeaderActualStart: React.FC<{
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
}> = ({ headerHeight, fontFamily, fontSize, rowWidth }) => {
  return (
    <div
      className={styles.ganttTable_HeaderItem}
      style={{
        minWidth: "80px",
      }}
    >
      &nbsp;{TERM.gantt.actualStart}
    </div>
  );
};

//-------------------------
// ActualEnd
//-------------------------
export const TaskListHeaderActualEnd: React.FC<{
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
}> = ({ headerHeight, fontFamily, fontSize, rowWidth }) => {
  return (
    <div
      className={styles.ganttTable_HeaderItem}
      style={{
        minWidth: "80px",
      }}
    >
      &nbsp;{TERM.gantt.actualEnd}
    </div>
  );
};

//-------------------------
// ResourceName
//-------------------------
export const TaskListHeaderResourceName: React.FC<{
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
}> = ({ headerHeight, fontFamily, fontSize, rowWidth }) => {
  return (
    <div
      className={styles.ganttTable_HeaderItem}
      style={{
        minWidth: "80px",
      }}
    >
      &nbsp;{TERM.gantt.resourceName}
    </div>
  );
};


//-------------------------
// predecessors
//-------------------------
export const TaskListHeaderPredecessors: React.FC<{
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
}> = ({ headerHeight, fontFamily, fontSize, rowWidth }) => {
  return (
    <div
      className={styles.ganttTable_HeaderItem}
      style={{
        minWidth: "80px",
      }}
    >
      &nbsp;{TERM.gantt.predecessors}
    </div>
  );
};

//-------------------------
// successors
//-------------------------
export const TaskListHeaderSuccessors: React.FC<{
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
}> = ({ headerHeight, fontFamily, fontSize, rowWidth }) => {
  return (
    <div
      className={styles.ganttTable_HeaderItem}
      style={{
        minWidth: "80px",
      }}
    >
      &nbsp;{TERM.gantt.successors.join(',')}
    </div>
  );
};

//-------------------------
// ScheduledCost
//-------------------------
export const TaskListHeaderScheduledCost: React.FC<{
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
}> = ({ headerHeight, fontFamily, fontSize, rowWidth }) => {
  return (
    <div
      className={styles.ganttTable_HeaderItem}
      style={{
        minWidth: "80px",
      }}
    >
      &nbsp;{TERM.gantt.scheduledCost}
    </div>
  );
};

//-------------------------
// ActualCost
//-------------------------
export const TaskListHeaderActualCost: React.FC<{
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
}> = ({ headerHeight, fontFamily, fontSize, rowWidth }) => {
  return (
    <div
      className={styles.ganttTable_HeaderItem}
      style={{
        minWidth: "80px",
      }}
    >
      &nbsp;{TERM.gantt.actualCost}
    </div>
  );
};

//-------------------------
// Status
//-------------------------
export const TaskListHeaderStatus: React.FC<{
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
}> = ({ headerHeight, fontFamily, fontSize, rowWidth }) => {
  return (
    <div
      className={styles.ganttTable_HeaderItem}
      style={{
        minWidth: "80px",
      }}
    >
      &nbsp;{TERM.gantt.status}
    </div>
  );
};





//-------------------------
// Remarks
//-------------------------
export const TaskListHeaderRemarks: React.FC<{
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
}> = ({ headerHeight, fontFamily, fontSize, rowWidth }) => {
  return (
    <div
      className={styles.ganttTable_HeaderItem}
      style={{
        minWidth: "80px",
      }}
    >
      &nbsp;{TERM.gantt.remarks}
    </div>
  );
};


//-------------------------
// MasterLineLevel
//-------------------------
export const TaskListHeaderMasterLineLevel: React.FC<{
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
}> = ({ headerHeight, fontFamily, fontSize, rowWidth }) => {
  return (
    <div
      className={styles.ganttTable_HeaderItem}
      style={{
        minWidth: "80px",
      }}
    >
      &nbsp;{TERM.gantt.masterLineLevel}
    </div>
  );
};



//-------------------------
// MasterLineType
//-------------------------
export const TaskListHeaderMasterLineType: React.FC<{
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
}> = ({ headerHeight, fontFamily, fontSize, rowWidth }) => {
  return (
    <div
      className={styles.ganttTable_HeaderItem}
      style={{
        minWidth: "80px",
      }}
    >
      &nbsp;{TERM.gantt.masterLineType}
    </div>
  );
};

//-------------------------
// MasterLineLabel
//-------------------------
export const TaskListHeaderMasterLineLabel: React.FC<{
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
}> = ({ headerHeight, fontFamily, fontSize, rowWidth }) => {
  return (
    <div
      className={styles.ganttTable_HeaderItem}
      style={{
        minWidth: "80px",
      }}
    >
      &nbsp;{TERM.gantt.masterLineLabel}
    </div>
  );
};




//-------------------------
// TaskConnectId
//-------------------------
export const TaskListHeaderTaskConnectId: React.FC<{
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
}> = ({ headerHeight, fontFamily, fontSize, rowWidth }) => {
  return (
    <div
      className={styles.ganttTable_HeaderItem}
      style={{
        minWidth: "80px",
      }}
    >
      &nbsp;{TERM.gantt.taskConnectId}
    </div>
  );
};


//-------------------------
// No
//-------------------------
export const TaskListHeaderNo: React.FC<{
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
}> = ({ headerHeight, fontFamily, fontSize, rowWidth }) => {
  return (
    <div
      className={styles.ganttTable_HeaderItem}
      style={{
        minWidth: "40px",
      }}
    >
      &nbsp;{TERM.gantt.displayOrder}
    </div>
  );
};
