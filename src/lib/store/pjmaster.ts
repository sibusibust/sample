import { atom } from 'recoil'

type AtomObj = {
    foo: string
}

const defs = {
    locale: "Asia/Tokyo"
}

const pjmaster = {
    defaultValue: {

    },
    initStore: (defs: any): AtomObj => {
        const atomObj = {};
        const def = Object.keys(defs);
        def.map((newKey) => {
            atomObj = { ...atomObj, newKey: ''}
        )

        return atomObj;

    }
};

export default pjmaster;