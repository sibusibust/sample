const gantt = {
  ja: {
    isDefault: true,
    displayOrder: "No",
    id: "id",
    name: "タスク名",
    wbs: "wbs",
    outLineLevel: "ol",
    masterLineLevel: "鳥瞰軸LV",
    masterLineType: "鳥瞰軸区分",
    // タスク連携種別は算出する
    startCondition: "開始条件",
    predecessors: "先行",
    successors: "後続",
    scheduledStart: "開始予定",
    scheduledEnd: "終了予定",
    actualStart: "開始実績",
    actualEnd: "終了実績",
    reservedStart: "開始",
    reservedEnd: "終了",
    scheduledDuration: "予定期間",
    actualDuration: "実績期間",
    status: "状況",
    priority: "優先度",
    progressRate: "進捗率",
    resourceName: "担当者",
    resourceId: "担当者ID",
    memo: "memo",
    cost: "予定工数",
    actualCost: "実績工数",
  },
  en: {
    id: "ID",
    wbs: "wbs",

  }
};


export default gantt;