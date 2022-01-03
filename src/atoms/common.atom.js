import {atom} from "recoil";

export const commonState = atom({
    key: 'commonState',
    default: '#eee',
});

export const calcState = atom({
    key : 'calcState',
    default : 1,
})
