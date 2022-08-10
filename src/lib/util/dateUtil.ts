const { DateTime } = require("luxon");
import { wbsDateFormat, callenderDateFormat, localeFormat } from "lib/util/types/date"

// 基本方針
// 日時カラム自体はYYYYMMDD hhmmss.mmmで保持する
// カレンダーの粒度設定に応じて適宜切り捨てて扱う

// ■■WBS日時管理形式（表示および操作）
// ＜日まで扱う＞
//  長期計画（通年～複数年単位）、中期計画（四半期単位）、作業計画表（数週間～数か月）
// ＜分まで扱う＞
//  タイムチャート（1日～数日単位）
// ＜秒まで扱う＞
// ＜ミリ秒まで扱う＞
//  手順書、ジョブネット（数分～数時間単位）

// ■■ロケール
// 設定にて変更。ロケール変換も可能。

// ■■カレンダー表示形式
//   月、週、日、半日、四半日、時、半時、四半時



const dateTime = DateTime.fromFormat(
    "2022-07-01 15:30:12.999",
    "yyyy-LL-dd TT:mm:ss.SSS"
)

const ganttProp = {
    wbsDateFormat:  "day"
}

const dateUtil = {
    DateTime: DateTime,
    dateTimeFormat: {
        // 詳細
        ja_detail: "yyyy-LL-dd TT:mm:ss.SSS",
        en_detail: "yyyy-LL-dd TT:mm:ss.SSS",
        // 日時
        ja_dateTime: "L/d(ccc) TT:mm",
        en_dateTime: "L/d(ccc) TT:mm",
        // 日付
        ja_date: "L/d(ccc)",
        en_date: "L/d(ccc)",
        // 月日(曜日)
        ja_dayweek: "d(ccc)",
        en_dayweek: "d(ccc)",
        // 月
        ja_month: "L月",
        en_month: "LLLL",
        // 月
        ja_year: "yyyy年",
        en_year: "yyyy"
    } as const,


    now: () => {
        return DateTime.now();
    },

    // ロケール設定
    setLocale: {},

    // カレンダー表示設定
    setCallenderDateFormat: () => {

 
    },

 
    // 時刻加算
    addTime: (dt: any, amount: number, addType: "hour" | "day" | "minute") => {
        let targetFormatedDate;
        const addUnit = {
            minute: 1,
            hour: 60,
            day: (60 * 24)
        }

        // wbsフォーマットに従い日時情報の端数を切り捨てる
        switch (ganttProp.wbsDateFormat) {
            case "day":
                targetFormatedDate = dt.toFormat(dateUtil.dateTimeFormat.ja_date);
            case "minute":
                targetFormatedDate = dt.toFormat(dateUtil.dateTimeFormat.ja_dateTime);
            case "millisecond":
                targetFormatedDate = dt.toFormat(dateUtil.dateTimeFormat.ja_detail);
        }
        return targetFormatedDate.plus(amount * addUnit[addType]);
    },

    // DateTime文字列取得
    getDateTimeString: (dateObj: Object) => {
        return dateObj.toString();
    },
    // DateTimeオブジェクト取得
    getDateTimeObj: (dateStr: String) => {
        try {
            return DateTime.fromISO(dateStr);
        } catch {
            return false;
        }
    },

    getDateTimeObject: (dateString: String) => {
        
    },

};

dateUtil.prop = {
    locale: "Asia/Tokyo"
};

// ロケール設定 (Asia/Tokyo, UTC)
dateUtil.setLocale = (newLocale: String) => {

};




// 通常のフォーマット
const format = {
    // 月次
    monthly: {
        calender: "month",
        wbs: "date",
        dateFormat: "YYYYMMDD"
    },
    // 週次
    week: {
        calender: "month",
        wbs: "date",
        dateFormat: "YYYYMMDD"
    },
    // 日次
    day: {
        calender: "month",
        wbs: "date",
        dateFormat: "YYYYMMDD"
    },
    // 半日単位
    halfOfDay: {
        calender: "month",
        wbs: "date",
        dateFormat: "YYYYMMDD"
    },
    // 四半日単位
    quarterOfDay: {
        calender: "month",
        wbs: "date",
        dateFormat: "YYYYMMDD"
    },
    // 毎時単位
    hour: {
        calender: "month",
        wbs: "date",
        dateFormat: "YYYYMMDD hh:mm:ss"

    },
    // 半時単位
    halfOfHour: {
        calender: "month",
        wbs: "date",
        dateFormat: "YYYYMMDD hh:mm:ss"
    },





}

export default dateUtil;

