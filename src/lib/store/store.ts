import recoil from 'recoil'
import pjmaster from './pjmaster'


function replaceItemAtIndex(arr : any, index: number, newValue: any) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}
  
function removeItemAtIndex(arr: any, index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}


const storeObj = {
  pjmaster: {}
};

const editItemText = ({ target }) => {
  const x = target;
}

const store: any = {
  storeObj: {
    pjmaster: this.initStore('pjmaster', pjmaster.defaultValue)
  },
  // 読み込み時
  constractor: () => {
    store.initStore('pjmaster');
  },

  // pjmaster
  // sanctum
  // tblfw
  initStore: (storeName: string, defaultValue: any) => {
    storeObj.pjmaster = recoil.atom({
      key: storeName,
      default: defaultValue
    })
  },

  // ストア参照設定
  useStore: (storeName: string) => {
    const s = {};
    // RecoilValue
    const t = recoil.useRecoilValue(store.storeObj[storeName]);
    return {}
  }
}

export default store;