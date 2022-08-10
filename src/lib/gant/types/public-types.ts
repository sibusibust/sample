export type TaskType = "task" | "milestone" | "project";

// 表示モード
export enum ViewMode {
  Hour = "Hour",
  QuarterDay = "Quarter Day",
  HalfDay = "Half Day",
  Day = "Day",
  /** ISO-8601 week */
  Week = "Week",
  Month = "Month",
}



// ガントプロパティ
export interface GanttProps extends EventOption, DisplayOption, StylingOption {
  tasks: Task[];
}

// タスク
export interface Task {
  // -------------------
  // 基本情報
  // -------------------
  // (required)raw_id
  id: string;
  // (required)タスク名
  name: string;
  // (required)タイプ [summary, task]
  type: string;
  // (calc)WBS番号
  wbs?: string;
  // (calc)アウトラインレベル
  outLineLevel?: number;
  // (calc)アウトライン表示用空白
  outLineSpace?: string;
  // parentId
  project?: string;
  hideChildren?: boolean;
  displayOrder?: number;
  // マスタ軸レベル
  masterLineLevel?: number;
  // マスタ軸タイプ
  masterLineType?: string;
  // マスタ軸ラベル
  masterLineLabel?: string;
  // -------------------
  // タスク連携情報
  // -------------------
  // タスク連携種別(チケット、ジョブネット、手順書、WBS)
  taskConnectType?: string;
  // タスク連携ID（チケットID、ジョブネットID、手順書ID、WBSID）
  taskConnectId?: string;
  // タスク連携名（チケット名、ジョブネット名、手順書名、WBSID）
  taskConnectName?: string;
  // -------------------
  // スケジュール情報
  // -------------------
  // 開始条件
  startCondition: string,
  // 先行タスク
  predecessors: Array<string>;
  // dependencies: ["Task 0"],
  // 後続タスク
  successors: Array<string>,
  // (calc)開始予定 (scheduledStart)
  scheduledStart: any,
  // (calc)終了予定 (scheduledEnd)
  scheduledEnd: any;
  // 期間予定
  scheduledDuration: number;
  // 開始実績
  actualStart: any;
  // 終了実績
  actualEnd: any;
  // (calc)開始見込み
  reservedStart: any;
  // (calc)終了見込み
  reservedEnd: any;
  // (calc)期間実績
  actualDuration: number;
  // -------------------
  // 作業情報
  // -------------------
  // ステータス
  status: string;
  priority: string;
  // 進捗予定
  sucheduledProgres: number;
  // 進捗実績
  actualProgres: number;
  // (calc)進捗率
  progressRate: number;
  // 進捗単位
  progressType: number;
  // 成果物種別
  deliverableType: number;
  // 担当者名
  resourceName: string;
  // 担当者ID
  resourceId: number;
  // メモ
  remarks: string;
  // 工数想定(m)
  scheduleCost: number;
  // 工数実績(m)
  actualCost: number;

  /**
   * From 0 to 100
   */
  styles?: {
    backgroundColor?: string;
    backgroundSelectedColor?: string;
    progressColor?: string;
    progressSelectedColor?: string;
  };
  isDisabled?: boolean;
  // project?: string;
  dependencies?: string[];
  // hideChildren?: boolean;
  // displayOrder?: number;
}

// チャートとグローバルタスクのスタイルを指定
export interface StylingOption {
  headerHeight?: number;
  columnWidth?: number;
  listCellWidth?: string;
  rowHeight?: number;
  ganttHeight?: number;
  barCornerRadius?: number;
  handleWidth?: number;
  fontFamily?: string;
  fontSize?: string;
  /**
   * How many of row width can be taken by task.
   * From 0 to 100
   */
  barFill?: number;
  barProgressColor?: string;
  barProgressSelectedColor?: string;
  barBackgroundColor?: string;
  barBackgroundSelectedColor?: string;
  projectProgressColor?: string;
  projectProgressSelectedColor?: string;
  projectBackgroundColor?: string;
  projectBackgroundSelectedColor?: string;
  milestoneBackgroundColor?: string;
  milestoneBackgroundSelectedColor?: string;
  arrowColor?: string;
  arrowIndent?: number;
  todayColor?: string;
  TooltipContent?: React.FC<{
    task: Task;
    fontSize: string;
    fontFamily: string;
  }>;
  TaskListHeader?: React.FC<{
    headerHeight: number;
    rowWidth: string;
    fontFamily: string;
    fontSize: string;
  }>;
  TaskListTable?: React.FC<{
    rowHeight: number;
    rowWidth: string;
    fontFamily: string;
    fontSize: string;
    locale: string;
    tasks: Task[];
    selectedTaskId: string;
    /**
     * Sets selected task by id
     */
    setSelectedTask: (taskId: string) => void;
    onExpanderClick: (task: Task) => void;
  }>;
}


// ビュータイプと表示タイムライン言語を指定
export interface DisplayOption {
  viewMode?: ViewMode;
  viewDate?: Date;
  /**
   * Specifies the month name language. Able formats: ISO 639-2, Java Locale
   */
  locale?: string;
  rtl?: boolean;
}

// ガントイベントの指定
export interface EventOption {
  /**
   * Time step value for date changes.
   * onDateChangeのタイムステップ値。ミリ秒単位で指定
   */
  timeStep?: number;
  /**
   * Invokes on bar select on unselect.
   * タスクバーのselectまたはunselectイベントで実行する機能を指定
   */
  onSelect?: (task: Task, isSelected: boolean) => void;
  /**
   * Invokes on bar double click.
   * タスクバーのonDoubleClickイベントで実行する関数を指定
   */
  onDoubleClick?: (task: Task) => void;
  /**
   * Invokes on end and start time change. Chart undoes operation if method return false or error.
   * タイムライン上のタスクバーのドラッグイベントが終了したときに実行される関数を指定
   */
  onDateChange?: (
    task: Task,
    children: Task[]
  ) => void | boolean | Promise<void> | Promise<boolean>;
  /**
   * Invokes on progress change. Chart undoes operation if method return false or error.
   * ドラッグタスクバーの進行状況イベントが終了したときに実行される関数を指定
   */
  onProgressChange?: (
    task: Task,
    children: Task[]
  ) => void | boolean | Promise<void> | Promise<boolean>;
  /**
   * Invokes on delete selected task. Chart undoes operation if method return false or error.
   * 削除ボタンを押したときにタスクバーで実行する機能を指定
   */
  onDelete?: (task: Task) => void | boolean | Promise<void> | Promise<boolean>;
  /**
   * Invokes on expander on task list
   * テーブルエキスパンダークリックで実行する関数を指定
   */
  onExpanderClick?: (task: Task) => void;
}

