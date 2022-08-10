import React from "react";
import { atom, MutableSnapshot, useRecoilValue } from "recoil";

// Wbs の id をインクリメントするやつ
let id = 0;
function getId() {
  return id++;
}

// Wbs の型
type Wbs = {
  id: number;
  content: string;
  isCompleted: boolean;
};

// Wbs の状態の定義
const WbssState = atom<Wbs[]>({
  key: "state/Wbss",
  default: [],
});

// const Wbss = () => {
//   const Wbss = useRecoilValue(WbssState);

//   const contents = Wbss.map((Wbs) => (
//     <div key={`Wbs-${Wbs.id}`}>{Wbs.content}</div>
//   ));
//   return <>{contents}</>;
// };

// 初期値のセット
const initialize = ({ set }: MutableSnapshot) => {
  set(WbssState, [
    {
      id: getId(),
      content: "ご飯を買ってくる",
      isCompleted: false,
    },
    {
      id: getId(),
      content: "手を洗う",
      isCompleted: false,
    },
  ]);
};

