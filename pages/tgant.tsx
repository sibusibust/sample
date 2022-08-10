import GantPage from 'components/projects/gant/gant';
import dateUtil from 'lib/util/dateUtil';
import { useRecoilState } from 'recoil';

import { RecoilRoot } from 'recoil';

// console.log(dateUtil.DateTime.now())
// const testDate = dateUtil.dateTime.fromFormat(
//   "2022-09-15 12:00:10.999",
//   "yyyy-LL-dd TT.SSS"
// )
// console.log(testDate)

// export const ganttProp =  atom


const App = () => {

  return (
    <RecoilRoot>
      <div>
        <GantPage />
      </div>
    </RecoilRoot>
  );
}
export default App;

