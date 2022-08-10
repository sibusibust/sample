// ■■WBS日時管理形式（表示および操作）
// ＜日まで扱う＞
//  長期計画（通年～複数年単位）、中期計画（四半期単位）
// ＜分まで扱う＞
//  作業計画表（数週間～数か月）
//  タイムチャート（1日～数日単位）
// ＜ミリ秒まで扱う＞

import dateUtil from "../dateUtil"

//  手順書、ジョブネット（数分～数時間単位）
export type wbsDateFormat = "day" | "minute" | "millisecond"

// ■■ロケール
// 設定にて変更。ロケール変換も可能。
export type localeFormat = "Asia/Tokyo"

// ■■カレンダー表示形式
//   月、週、日、半日、四半日、時、半時、四半時
export type callenderDateFormat = "month" | "week" | "day" | "halfOfDay" | "quarterOfDay" | "hour" | "halfOfHour" | "quarterOfHour"


// const dt = "2022/6/15"
// dateUtil.addTime(dt, 1, "hour");


