import { Task } from 'lib/gant/index';
export function initTasks() {
  const currentDate = new Date();




  const tasks: Task[] = [
    {
      // -------------------
      // 基本情報
      // -------------------
      // (required)raw_id
      id: "ProjectSample",
      // (required)タスク名
      name: "Some Project",
      // (required)タイプ [summary, task]
      type: "project",
      // (calc)WBS番号
      wbs: "1.",
      // (calc)アウトラインレベル
      outLineLevel: 1,
      // (calc)アウトライン表示用空白
      outLineSpace: "",
      // parentId
      project: "",
      hideChildren: false,
      displayOrder: 1,
      // マスタ軸レベル
      masterLineLevel: 1,
      // マスタ軸タイプ
      masterLineType: "",
      // マスタ軸ラベル
      masterLineLabel: "",
      // -------------------
      // タスク連携情報
      // -------------------
      // タスク連携種別(チケット、ジョブネット、手順書、WBS)
      taskConnectType: "",
      // タスク連携ID（チケットID、ジョブネットID、手順書ID、WBSID）
      taskConnectId: "",
      // タスク連携名（チケット名、ジョブネット名、手順書名、WBSID）
      taskConnectName: "",
      // -------------------
      // スケジュール情報
      // -------------------
      // 開始条件
      startCondition: "",
      // 先行タスク
      predecessors: [],
      // dependencies: ["Task 0"],
      // 後続タスク
      successors: [],
      // (calc)開始予定 (scheduledStart)
      scheduledStart: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      // (calc)終了予定 (scheduledEnd)
      scheduledEnd: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      // 期間予定
      scheduledDuration: 60 * 24,
      // 開始実績
      actualStart: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // 終了実績
      actualEnd: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // (calc)開始見込み
      reservedStart: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // (calc)終了見込み
      reservedEnd: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // (calc)期間実績
      actualDuration: 0,
      // -------------------
      // 作業情報
      // -------------------
      // ステータス
      status: "",
      priority: "",
      // 進捗予定
      sucheduledProgres: 60,
      // 進捗実績
      actualProgres: 15,
      // (calc)進捗率
      progressRate: 40,
      // 進捗単位
      progressType: 1,
      // 成果物種別
      deliverableType: 1,
      // 担当者名
      resourceName: "tkd",
      // 担当者ID
      resourceId: 1,
      // メモ
      remarks: "",
      // 工数想定(m)
      scheduleCost: 0,
      // 工数実績(m)
      actualCost: 0,

    },
    {
      // -------------------
      // 基本情報
      // -------------------
      // (required)raw_id
      // id: "Task 0",
      id: "Task 0",
      // (required)タスク名
      name: "Idea テスト用長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文",
      // (required)タイプ [summary, task]
      type: "task",
      // (calc)WBS番号
      wbs: "1.1.",
      // (calc)アウトラインレベル
      outLineLevel: 2,
      // (calc)アウトライン表示用空白
      outLineSpace: " ",
      // parentId
      project: "ProjectSample",
      hideChildren: false,
      displayOrder: 2,
      // マスタ軸レベル
      masterLineLevel: 1,
      // マスタ軸タイプ
      masterLineType: "",
      // マスタ軸ラベル
      masterLineLabel: "",
      // -------------------
      // タスク連携情報
      // -------------------
      // タスク連携種別(チケット、ジョブネット、手順書、WBS)
      taskConnectType: "",
      // タスク連携ID（チケットID、ジョブネットID、手順書ID、WBSID）
      taskConnectId: "",
      // タスク連携名（チケット名、ジョブネット名、手順書名、WBSID）
      taskConnectName: "",
      // -------------------
      // スケジュール情報
      // -------------------
      // 開始条件
      startCondition: "",
      // 先行タスク
      predecessors: [],
      // dependencies: ["Task 0"],
      // 後続タスク
      successors: [],
      // (calc)開始予定 (scheduledStart)
      scheduledStart: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      // (calc)終了予定 (scheduledEnd)
      scheduledEnd: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        2,
        12,
        28
      ),
      // 期間予定
      scheduledDuration: 60 * 24 * 2,
      // 開始実績
      actualStart: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // 終了実績
      actualEnd: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // (calc)開始見込み
      reservedStart: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // (calc)終了見込み
      reservedEnd: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // 期間実績
      actualDuration: 0,
      // -------------------
      // 作業情報
      // -------------------
      // ステータス
      status: "",
      priority: "",
      // 進捗予定
      sucheduledProgres: 60,
      // 進捗実績
      actualProgres: 15,
      // (calc)進捗率
      progressRate: 40,
      // 進捗単位
      progressType: 1,
      // 成果物種別
      deliverableType: 1,
      // 担当者名
      resourceName: "tester",
      // 担当者ID
      resourceId: 1,
      // メモ
      remarks: "",
      // 工数想定(m)
      scheduleCost: 0,
      // 工数実績(m)
      actualCost: 0,
    },
    {
      // -------------------
      // 基本情報
      // -------------------
      // (required)raw_id
      id: "Task 1",
      // (required)タスク名
      name: "Research",
      // (required)タイプ [summary, task]
      type: "task",
      // (calc)WBS番号
      wbs: "1.2.",
      // (calc)アウトラインレベル
      outLineLevel: 2,
      // (calc)アウトライン表示用空白
      outLineSpace: " ",
      // parentId
      project: "ProjectSample",
      hideChildren: false,
      displayOrder: 3,
      // マスタ軸レベル
      masterLineLevel: 1,
      // マスタ軸タイプ
      masterLineType: "",
      // マスタ軸ラベル
      masterLineLabel: "",
      // -------------------
      // タスク連携情報
      // -------------------
      // タスク連携種別(チケット、ジョブネット、手順書、WBS)
      taskConnectType: "",
      // タスク連携ID（チケットID、ジョブネットID、手順書ID、WBSID）
      taskConnectId: "",
      // タスク連携名（チケット名、ジョブネット名、手順書名、WBSID）
      taskConnectName: "",
      // -------------------
      // スケジュール情報
      // -------------------
      // 開始条件
      startCondition: "",
      // 先行タスク
      predecessors: [],
      // dependencies: ["Task 0"],
      // 後続タスク
      successors: [],
      // (calc)開始スケジュール (scheduledStart)
      scheduledStart: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // (calc)終了スケジュール (scheduledEnd)
      scheduledEnd: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
      // 期間予定
      scheduledDuration: 60 * 24 * 3,
      // 開始実績
      actualStart: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // 終了実績
      actualEnd: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // (calc)開始見込み
      reservedStart: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // (calc)終了見込み
      reservedEnd: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // 期間実績
      actualDuration: 0,
      // -------------------
      // 作業情報
      // -------------------
      // ステータス
      status: "",
      priority: "",
      // 進捗予定
      sucheduledProgres: 60,
      // 進捗実績
      actualProgres: 15,
      // (calc)進捗率
      progressRate: 25,
      // 進捗単位
      progressType: 1,
      // 成果物種別
      deliverableType: 1,
      // 担当者名
      resourceName: "",
      // 担当者ID
      resourceId: 1,
      // メモ
      remarks: "",
      // 工数想定(m)
      scheduleCost: 0,
      // 工数実績(m)
      actualCost: 0,
    },
    {
      // -------------------
      // 基本情報
      // -------------------
      // (required)raw_id
      id: "Task 2",
      // (required)タスク名
      name: "Discussion with team",
      // (required)タイプ [summary, task]
      type: "task",
      // (calc)WBS番号
      wbs: "1.3.",
      // (calc)アウトラインレベル
      outLineLevel: 2,
      // (calc)アウトライン表示用空白
      outLineSpace: " ",
      // parentId
      project: "ProjectSample",
      hideChildren: false,
      displayOrder: 4,
      // マスタ軸レベル
      masterLineLevel: 1,
      // マスタ軸タイプ
      masterLineType: "",
      // マスタ軸ラベル
      masterLineLabel: "",
      // -------------------
      // タスク連携情報
      // -------------------
      // タスク連携種別(チケット、ジョブネット、手順書、WBS)
      taskConnectType: "",
      // タスク連携ID（チケットID、ジョブネットID、手順書ID、WBSID）
      taskConnectId: "",
      // タスク連携名（チケット名、ジョブネット名、手順書名、WBSID）
      taskConnectName: "",
      // -------------------
      // スケジュール情報
      // -------------------
      // 開始条件
      startCondition: "",
      // 先行タスク
      predecessors: [],
      dependencies: ["Task 1"],
      // 後続タスク
      successors: [],
      // (calc)開始予定 (scheduledStart)
      scheduledStart: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
      // (calc)終了予定 (scheduledEnd)
      scheduledEnd: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
      // 期間予定
      scheduledDuration: 60 * 24 * 1,
      // 開始実績
      actualStart: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // 終了実績
      actualEnd: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // (calc)開始見込み
      reservedStart: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // (calc)終了見込み
      reservedEnd: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // 期間実績
      actualDuration: 0,
      // -------------------
      // 作業情報
      // -------------------
      // ステータス
      status: "",
      priority: "",
      // 進捗予定
      sucheduledProgres: 60,
      // 進捗実績
      actualProgres: 15,
      // (calc)進捗率
      progressRate: 25,
      // 進捗単位
      progressType: 1,
      // 成果物種別
      deliverableType: 1,
      // 担当者名
      resourceName: "",
      // 担当者ID
      resourceId: 1,
      // メモ
      remarks: "",
      // 工数想定(m)
      scheduleCost: 0,
      // 工数実績(m)
      actualCost: 0,
    },
    {
      // (required)raw_id
      id: "Task 3",
      // (required)タスク名
      name: "Developing",
      // (required)タイプ [summary, task]
      type: "task",
      // (calc)WBS番号
      wbs: "1.4.",
      // (calc)アウトラインレベル
      outLineLevel: 2,
      // (calc)アウトライン表示用空白
      outLineSpace: " ",
      // parentId
      project: "ProjectSample",
      hideChildren: false,
      displayOrder: 5,
      // マスタ軸レベル
      masterLineLevel: 1,
      // マスタ軸タイプ
      masterLineType: "",
      // マスタ軸ラベル
      masterLineLabel: "",
      // -------------------
      // タスク連携情報
      // -------------------
      // タスク連携種別(チケット、ジョブネット、手順書、WBS)
      taskConnectType: "",
      // タスク連携ID（チケットID、ジョブネットID、手順書ID、WBSID）
      taskConnectId: "",
      // タスク連携名（チケット名、ジョブネット名、手順書名、WBSID）
      taskConnectName: "",
      // -------------------
      // スケジュール情報
      // -------------------
      // 開始条件
      startCondition: "",
      // 先行タスク
      predecessors: [],
      dependencies: ["Task 2"],
      // 後続タスク
      successors: [],
      // (calc)開始予定 (scheduledStart)
      scheduledStart: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      // (calc)終了予定 (scheduledEnd)
      scheduledEnd: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
      // 期間予定
      scheduledDuration: 60 * 24,
      // 開始実績
      actualStart: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // 終了実績
      actualEnd: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // (calc)開始見込み
      reservedStart: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // (calc)終了見込み
      reservedEnd: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // 期間実績
      actualDuration: 0,
      // -------------------
      // 作業情報
      // -------------------
      // ステータス
      status: "",
      priority: "",
      // 進捗予定
      sucheduledProgres: 60,
      // 進捗実績
      actualProgres: 15,
      // (calc)進捗率
      progressRate: 25,
      // 進捗単位
      progressType: 1,
      // 成果物種別
      deliverableType: 1,
      // 担当者名
      resourceName: "",
      // 担当者ID
      resourceId: 1,
      // メモ
      remarks: "",
      // 工数想定(m)
      scheduleCost: 0,
      // 工数実績(m)
      actualCost: 0,
    },
    {

      // -------------------
      // 基本情報
      // -------------------
      // (required)raw_id
      id: "Task 4",
      // (required)タスク名
      name: "Review",
      // (required)タイプ [summary, task]
      type: "task",
      // (calc)WBS番号
      wbs: "1.5.",
      // (calc)アウトラインレベル
      outLineLevel: 2,
      // (calc)アウトライン表示用空白
      outLineSpace: " ",
      // parentId
      project: "ProjectSample",
      hideChildren: false,
      displayOrder: 6,
      // マスタ軸レベル
      masterLineLevel: 1,
      // マスタ軸タイプ
      masterLineType: "",
      // マスタ軸ラベル
      masterLineLabel: "",
      // -------------------
      // タスク連携情報
      // -------------------
      // タスク連携種別(チケット、ジョブネット、手順書、WBS)
      taskConnectType: "",
      // タスク連携ID（チケットID、ジョブネットID、手順書ID、WBSID）
      taskConnectId: "",
      // タスク連携名（チケット名、ジョブネット名、手順書名、WBSID）
      taskConnectName: "",
      // -------------------
      // スケジュール情報
      // -------------------
      // 開始条件
      startCondition: "",
      // 先行タスク
      predecessors: [],
      dependencies: ["Task 2"],
      // 後続タスク
      successors: [],
      // (calc)開始予定 (scheduledStart)
      scheduledStart: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      // (calc)終了予定 (scheduledEnd)
      scheduledEnd: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
      // 期間予定
      scheduledDuration: 60 * 24 * 1,
      // 開始実績
      actualStart: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // 終了実績
      actualEnd: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // (calc)開始見込み
      reservedStart: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // (calc)終了見込み
      reservedEnd: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // 期間実績
      actualDuration: 0,
      // -------------------
      // 作業情報
      // -------------------
      // ステータス
      status: "",
      priority: "",
      // 進捗予定
      sucheduledProgres: 60,
      // 進捗実績
      actualProgres: 15,
      // (calc)進捗率
      progressRate: 25,
      // 進捗単位
      progressType: 1,
      // 成果物種別
      deliverableType: 1,
      // 担当者名
      resourceName: "",
      // 担当者ID
      resourceId: 1,
      // メモ
      remarks: "",
      // 工数想定(m)
      scheduleCost: 0,
      // 工数実績(m)
      actualCost: 0,
    },
    {
      // -------------------
      // 基本情報
      // -------------------
      // (required)raw_id
      id: "Task 6",
      // (required)タスク名
      name: "Release",
      // (required)タイプ [summary, task]
      type: "milestone",
      // (calc)WBS番号
      wbs: "1.6.",
      // (calc)アウトラインレベル
      outLineLevel: 2,
      // (calc)アウトライン表示用空白
      outLineSpace: " ",
      // parentId
      project: "ProjectSample",
      hideChildren: false,
      displayOrder: 7,
      // マスタ軸レベル
      masterLineLevel: 1,
      // マスタ軸タイプ
      masterLineType: "",
      // マスタ軸ラベル
      masterLineLabel: "",
      // -------------------
      // タスク連携情報
      // -------------------
      // タスク連携種別(チケット、ジョブネット、手順書、WBS)
      taskConnectType: "",
      // タスク連携ID（チケットID、ジョブネットID、手順書ID、WBSID）
      taskConnectId: "",
      // タスク連携名（チケット名、ジョブネット名、手順書名、WBSID）
      taskConnectName: "",
      // -------------------
      // スケジュール情報
      // -------------------
      // 開始条件
      startCondition: "",
      // 先行タスク
      predecessors: [],
      dependencies: ["Task 4"],
      // 後続タスク
      successors: [],
      // (calc)開始予定 (scheduledStart)
      scheduledStart: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      // (calc)終了予定 (scheduledEnd)
      scheduledEnd: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      // 期間予定
      scheduledDuration: 60 * 24 * 1,
      // 開始実績
      actualStart: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // 終了実績
      actualEnd: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // (calc)開始見込み
      reservedStart: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // (calc)終了見込み
      reservedEnd: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // 期間実績
      actualDuration: 0,
      // -------------------
      // 作業情報
      // -------------------
      // ステータス
      status: "",
      priority: "",
      // 進捗予定
      sucheduledProgres: 60,
      // 進捗実績
      actualProgres: 15,
      // (calc)進捗率
      progressRate: 25,
      // 進捗単位
      progressType: 1,
      // 成果物種別
      deliverableType: 1,
      // 担当者名
      resourceName: "",
      // 担当者ID
      resourceId: 1,
      // メモ
      remarks: "",
      // 工数想定(m)
      scheduleCost: 0,
      // 工数実績(m)
      actualCost: 0,

    },
    {
      // -------------------
      // 基本情報
      // -------------------
      // (required)raw_id
      id: "Task 9",
      // (required)タスク名
      name: "Party Time",
      // (required)タイプ [summary, task]
      type: "task",
      // (calc)WBS番号
      wbs: "1.7.",
      isDisabled: false,
      // (calc)アウトラインレベル
      outLineLevel: 2,
      // (calc)アウトライン表示用空白
      outLineSpace: " ",
      // parentId
      project: "PJ2",
      hideChildren: false,
      displayOrder: 8,
      // マスタ軸レベル
      masterLineLevel: 1,
      // マスタ軸タイプ
      masterLineType: "",
      // マスタ軸ラベル
      masterLineLabel: "",
      // -------------------
      // タスク連携情報
      // -------------------
      // タスク連携種別(チケット、ジョブネット、手順書、WBS)
      taskConnectType: "",
      // タスク連携ID（チケットID、ジョブネットID、手順書ID、WBSID）
      taskConnectId: "",
      // タスク連携名（チケット名、ジョブネット名、手順書名、WBSID）
      taskConnectName: "",
      // -------------------
      // スケジュール情報
      // -------------------
      // 開始条件
      startCondition: "",
      // 先行タスク
      predecessors: [],
      dependencies: ["Task 0", "Task 6"],
      // 後続タスク
      successors: [],
      // (calc)開始予定 (scheduledStart)
      scheduledStart: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
      // (calc)終了予定 (scheduledEnd)
      scheduledEnd: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
      // 期間予定
      scheduledDuration: 60 * 24 * 2,
      // 開始実績
      actualStart: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // 終了実績
      actualEnd: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // (calc)開始見込み
      reservedStart: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // (calc)終了見込み
      reservedEnd: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // 期間実績
      actualDuration: 0,
      // -------------------
      // 作業情報
      // -------------------
      // ステータス
      status: "",
      priority: "",
      // 進捗予定
      sucheduledProgres: 60,
      // 進捗実績
      actualProgres: 15,
      // (calc)進捗率
      progressRate: 25,
      // 進捗単位
      progressType: 1,
      // 成果物種別
      deliverableType: 1,
      // 担当者名
      resourceName: "",
      // 担当者ID
      resourceId: 1,
      // メモ
      remarks: "",
      // 工数想定(m)
      scheduleCost: 0,
      // 工数実績(m)
      actualCost: 0,
    },

    {
      // -------------------
      // 基本情報
      // -------------------
      // (required)raw_id
      id: "P2",
      // (required)タスク名
      name: "BD",
      // (required)タイプ [summary, task]
      type: "project",
      // (calc)WBS番号
      wbs: "2.",
      // (calc)アウトラインレベル
      outLineLevel: 1,
      // (calc)アウトライン表示用空白
      outLineSpace: "",
      // parentId
      project: "PJ2",
      hideChildren: false,
      displayOrder: 30,
      // マスタ軸レベル
      masterLineLevel: 1,
      // マスタ軸タイプ
      masterLineType: "",
      // マスタ軸ラベル
      masterLineLabel: "",
      // -------------------
      // タスク連携情報
      // -------------------
      // タスク連携種別(チケット、ジョブネット、手順書、WBS)
      taskConnectType: "",
      // タスク連携ID（チケットID、ジョブネットID、手順書ID、WBSID）
      taskConnectId: "",
      // タスク連携名（チケット名、ジョブネット名、手順書名、WBSID）
      taskConnectName: "",
      // -------------------
      // スケジュール情報
      // -------------------
      // 開始条件
      startCondition: "",
      // 先行タスク
      predecessors: [],
      // dependencies: ["Task 0"],
      // 後続タスク
      successors: [],
      // (calc)開始予定 (scheduledStart)
      scheduledStart: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // (calc)終了予定 (scheduledEnd)
      scheduledEnd: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
      // 期間予定
      scheduledDuration: 60 * 24 * 2,
      // 開始実績
      actualStart: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // 終了実績
      actualEnd: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // (calc)開始見込み
      reservedStart: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // (calc)終了見込み
      reservedEnd: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // 期間実績
      actualDuration: 0,
      // -------------------
      // 作業情報
      // -------------------
      // ステータス
      status: "",
      priority: "",
      // 進捗予定
      sucheduledProgres: 60,
      // 進捗実績
      actualProgres: 15,
      // (calc)進捗率
      progressRate: 25,
      // 進捗単位
      progressType: 1,
      // 成果物種別
      deliverableType: 1,
      // 担当者名
      resourceName: "",
      // 担当者ID
      resourceId: 1,
      // メモ
      remarks: "",
      // 工数想定(m)
      scheduleCost: 0,
      // 工数実績(m)
      actualCost: 0,
    },
    {
      // -------------------
      // 基本情報
      // -------------------
      // (required)raw_id
      id: "T2.1",
      // (required)タスク名
      name: "構成管理",
      // (required)タイプ [summary, task]
      type: "project",
      // (calc)WBS番号
      wbs: "2.1.",
      // (calc)アウトラインレベル
      outLineLevel: 2,
      // (calc)アウトライン表示用空白
      outLineSpace: " ",
      // parentId
      project: "P2",
      hideChildren: false,
      displayOrder: 31,
      // マスタ軸レベル
      masterLineLevel: 1,
      // マスタ軸タイプ
      masterLineType: "",
      // マスタ軸ラベル
      masterLineLabel: "",
      // -------------------
      // タスク連携情報
      // -------------------
      // タスク連携種別(チケット、ジョブネット、手順書、WBS)
      taskConnectType: "",
      // タスク連携ID（チケットID、ジョブネットID、手順書ID、WBSID）
      taskConnectId: "",
      // タスク連携名（チケット名、ジョブネット名、手順書名、WBSID）
      taskConnectName: "",
      // -------------------
      // スケジュール情報
      // -------------------
      // 開始条件
      startCondition: "",
      // 先行タスク
      predecessors: [],
      // dependencies: ["Task 0"],
      // 後続タスク
      successors: [],
      // (calc)開始スケジュール (scheduledStart)
      scheduledStart: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // (calc)終了スケジュール (scheduledEnd)
      scheduledEnd: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
      // 期間予定
      scheduledDuration: 60 * 24 * 1,
      // 開始実績
      actualStart: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // 終了実績
      actualEnd: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // (calc)開始見込み
      reservedStart: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // (calc)終了見込み
      reservedEnd: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // 期間実績
      actualDuration: 0,
      // -------------------
      // 作業情報
      // -------------------
      // ステータス
      status: "",
      priority: "",
      // 進捗予定
      sucheduledProgres: 60,
      // 進捗実績
      actualProgres: 15,
      // (calc)進捗率
      progressRate: 25,
      // 進捗単位
      progressType: 1,
      // 成果物種別
      deliverableType: 1,
      // 担当者名
      resourceName: "",
      // 担当者ID
      resourceId: 1,
      // メモ
      remarks: "",
      // 工数想定(m)
      scheduleCost: 0,
      // 工数実績(m)
      actualCost: 0,
    },
    {
      // -------------------
      // 基本情報
      // -------------------
      // (required)raw_id
      id: "T2",
      // (required)タスク名
      name: "執筆",
      // (required)タイプ [summary, task]
      type: "task",
      // (calc)WBS番号
      wbs: "2.1.1.",
      // (calc)アウトラインレベル
      outLineLevel: 3,
      // (calc)アウトライン表示用空白
      outLineSpace: "  ",
      // parentId
      project: "T2.1",
      hideChildren: false,
      displayOrder: 32,
      // マスタ軸レベル
      masterLineLevel: 1,
      // マスタ軸タイプ
      masterLineType: "",
      // マスタ軸ラベル
      masterLineLabel: "",
      // -------------------
      // タスク連携情報
      // -------------------
      // タスク連携種別(チケット、ジョブネット、手順書、WBS)
      taskConnectType: "",
      // タスク連携ID（チケットID、ジョブネットID、手順書ID、WBSID）
      taskConnectId: "",
      // タスク連携名（チケット名、ジョブネット名、手順書名、WBSID）
      taskConnectName: "",
      // -------------------
      // スケジュール情報
      // -------------------
      // 開始条件
      startCondition: "",
      // 先行タスク
      predecessors: [],
      // dependencies: ["Task 0"],
      // 後続タスク
      successors: [],
      // (calc)開始スケジュール (scheduledStart)
      scheduledStart: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // (calc)終了スケジュール (scheduledEnd)
      scheduledEnd: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
      // 期間予定
      scheduledDuration: 60 * 24 * 2,
      // 開始実績
      actualStart: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // 終了実績
      actualEnd: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // (calc)開始見込み
      reservedStart: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // (calc)終了見込み
      reservedEnd: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      // 期間実績
      actualDuration: 0,
      // -------------------
      // 作業情報
      // -------------------
      // ステータス
      status: "",
      priority: "",
      // 進捗予定
      sucheduledProgres: 60,
      // 進捗実績
      actualProgres: 15,
      // (calc)進捗率
      progressRate: 25,
      // 進捗単位
      progressType: 1,
      // 成果物種別
      deliverableType: 1,

      // 担当者名
      resourceName: "",
      // 担当者ID
      resourceId: 1,
      // メモ
      remarks: "",
      // 工数想定(m)
      scheduleCost: 0,
      // 工数実績(m)
      actualCost: 0,
    },

  ];
  return tasks;
}


// サマリタスクの開始・終了日時の取得
export function getStartEndDateForProject(tasks: Task[], projectId: string) {
  const projectTasks = tasks.filter(t => t.project === projectId);
  let reservedStart = projectTasks[0].reservedStart;
  let reservedEnd = projectTasks[0].reservedEnd;

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (reservedStart.getTime() > task.reservedStart.getTime()) {
      reservedStart = task.reservedStart;
    }
    if (reservedEnd.getTime() < task.reservedEnd.getTime()) {
      reservedEnd = task.reservedEnd;
    }
  }
  return [reservedStart, reservedEnd];
}

// プロジェクト設定
const projectSetting = {
  defaultLocale: "Asia/Tokyo",


};
export default projectSetting;

