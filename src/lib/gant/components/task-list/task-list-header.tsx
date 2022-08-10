import React from "react";
import styles from "./task-list-header.module.css";
import i18n from "lib/i18n/index";
const TERM = i18n.setLang("ja");
import { 
  TaskListHeaderNo,
  TaskListHeaderWbs,
  TaskListHeaderSeparator,
  TaskListHeaderTask,
  TaskListHeaderScheduledStart,
  TaskListHeaderScheduledEnd,
  TaskListHeaderScheduledDuration,
  TaskListHeaderActualStart,
  TaskListHeaderActualEnd,
  TaskListHeaderReservedStart,
  TaskListHeaderReservedEnd,
  TaskListHeaderResourceName,
  TaskListHeaderPredecessors,
  TaskListHeaderSuccessors,
  TaskListHeaderScheduledCost,
  TaskListHeaderActualCost,
  TaskListHeaderStatus,
  TaskListHeaderRemarks,
  TaskListHeaderMasterLineLevel,
  TaskListHeaderMasterLineType,
  TaskListHeaderMasterLineLabel,
  TaskListHeaderTaskConnectId,
} from "./task-list-header-parts";

export const TaskListHeaderDefault: React.FC<{
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
}> = ({ headerHeight, fontFamily, fontSize, rowWidth }) => {

  const partsProps = {
    headerHeight,
    fontFamily,
    fontSize,
    rowWidth,
  }

  const viewMode = "BasicView"

  switch (viewMode) {
    case 'BasicView': 
      return (
        <div
          className={styles.ganttTable}
          style={{
            fontFamily: fontFamily,
            fontSize: fontSize,
          }}
        >
          <div
            className={styles.ganttTable_Header}
            style={{
              height: headerHeight - 2,
            }}
          >
            <TaskListHeaderNo {...partsProps} />
            <TaskListHeaderSeparator {...partsProps} />
            <TaskListHeaderWbs {...partsProps} />
            <TaskListHeaderSeparator {...partsProps} />
            <TaskListHeaderTask {...partsProps} />
            <TaskListHeaderSeparator {...partsProps} />
    
            <TaskListHeaderReservedStart {...partsProps} />
            <TaskListHeaderSeparator {...partsProps} />
            <TaskListHeaderReservedEnd {...partsProps} />
            <TaskListHeaderSeparator {...partsProps} />

            <TaskListHeaderResourceName {...partsProps} />
            <TaskListHeaderSeparator {...partsProps} />
          </div>
        </div>
      );
    case 'scheduleView': 
      return (
        <div
          className={styles.ganttTable}
          style={{
            fontFamily: fontFamily,
            fontSize: fontSize,
          }}
        >
          <div
            className={styles.ganttTable_Header}
            style={{
              height: headerHeight - 2,
            }}
          >
            <TaskListHeaderNo {...partsProps} />
            <TaskListHeaderSeparator {...partsProps} />
            <TaskListHeaderWbs {...partsProps} />
            <TaskListHeaderSeparator {...partsProps} />
            <TaskListHeaderTask {...partsProps} />
            <TaskListHeaderSeparator {...partsProps} />
    
            <TaskListHeaderScheduledStart {...partsProps} />
            <TaskListHeaderSeparator {...partsProps} />
            <TaskListHeaderScheduledEnd {...partsProps} />
            <TaskListHeaderSeparator {...partsProps} />
    
            <TaskListHeaderScheduledDuration {...partsProps} />
            <TaskListHeaderSeparator {...partsProps} />
            <TaskListHeaderActualStart {...partsProps} />
            <TaskListHeaderSeparator {...partsProps} />
            <TaskListHeaderActualEnd {...partsProps} />
            <TaskListHeaderSeparator {...partsProps} />
            <TaskListHeaderResourceName {...partsProps} />
            <TaskListHeaderSeparator {...partsProps} />
            <TaskListHeaderPredecessors {...partsProps} />
            <TaskListHeaderSeparator {...partsProps} />
            <TaskListHeaderSuccessors {...partsProps} />
            <TaskListHeaderSeparator {...partsProps} />

          </div>
        </div>
      );

    case 'statusView': 
      return (
        <div
          className={styles.ganttTable}
          style={{
            fontFamily: fontFamily,
            fontSize: fontSize,
          }}
        >
          <div
            className={styles.ganttTable_Header}
            style={{
              height: headerHeight - 2,
            }}
          >
            <TaskListHeaderNo {...partsProps} />
            <TaskListHeaderSeparator {...partsProps} />
            <TaskListHeaderWbs {...partsProps} />
            <TaskListHeaderSeparator {...partsProps} />
            <TaskListHeaderTask {...partsProps} />
            <TaskListHeaderSeparator {...partsProps} />
    
            <TaskListHeaderReservedStart {...partsProps} />
            <TaskListHeaderSeparator {...partsProps} />
            <TaskListHeaderReservedEnd {...partsProps} />
            <TaskListHeaderSeparator {...partsProps} />
    
            <TaskListHeaderScheduledCost {...partsProps} />
            <TaskListHeaderSeparator {...partsProps} />
            <TaskListHeaderActualCost {...partsProps} />
            <TaskListHeaderSeparator {...partsProps} />
            <TaskListHeaderStatus {...partsProps} />
            <TaskListHeaderSeparator {...partsProps} />
            <TaskListHeaderTaskConnectId {...partsProps} />
            <TaskListHeaderSeparator {...partsProps} />
            <TaskListHeaderRemarks {...partsProps} />
            <TaskListHeaderSeparator {...partsProps} />
          </div>
        </div>
      );

      case 'masterLineView': 
      return (
        <div
          className={styles.ganttTable}
          style={{
            fontFamily: fontFamily,
            fontSize: fontSize,
          }}
        >
          <div
            className={styles.ganttTable_Header}
            style={{
              height: headerHeight - 2,
            }}
          >
            <TaskListHeaderWbs {...partsProps} />
            <TaskListHeaderSeparator {...partsProps} />
            <TaskListHeaderTask {...partsProps} />
            <TaskListHeaderSeparator {...partsProps} />

            <TaskListHeaderReservedStart {...partsProps} />
            <TaskListHeaderSeparator {...partsProps} />
            <TaskListHeaderReservedEnd {...partsProps} />
            <TaskListHeaderSeparator {...partsProps} />
    
            <TaskListHeaderMasterLineLevel {...partsProps} />
            <TaskListHeaderSeparator {...partsProps} />
            <TaskListHeaderMasterLineType {...partsProps} />
            <TaskListHeaderSeparator {...partsProps} />
            <TaskListHeaderMasterLineLabel {...partsProps} />
            <TaskListHeaderSeparator {...partsProps} />


          </div>
        </div>
      );



  }
};
