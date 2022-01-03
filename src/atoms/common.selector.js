import {selector} from "recoil";
import {calcState, commonState} from "./common.atom";

export const calcIncreaseState = selector({
    key : 'calcIncreaseState',
    get : ({get}) => {
        const currentSize = get(calcState);

        return `${currentSize * 2} get double!`;
    }
})
