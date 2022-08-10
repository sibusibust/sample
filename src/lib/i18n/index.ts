import gantt from './termListGantt.ts';

const obj = {};

const i18n = {
  setLang: (lang) => {
    i18n.gantt = gantt[lang];
    return i18n;
  },
};


export default i18n;