import { AnnRange } from "./types";

import { assign } from "lodash";

export function adjustRangeToInsert(rangeToBeAdjusted: AnnRange, insertStart: number, insertLength: number) {
    // ac.throw([ac.range, ac.posInt, ac.posInt], arguments);
    const newRange = assign({}, rangeToBeAdjusted);
    if (rangeToBeAdjusted.start > rangeToBeAdjusted.end) {
        //circular range
        if (rangeToBeAdjusted.end >= insertStart) {
            //adjust both start and end
            newRange.start += insertLength;
            newRange.end += insertLength;
        } else if (rangeToBeAdjusted.start >= insertStart) {
            //adjust just the start
            newRange.start += insertLength;
        }
    } else {
        if (rangeToBeAdjusted.start >= insertStart) {
            //adjust both start and end
            newRange.start += insertLength;
            newRange.end += insertLength;
        } else if (rangeToBeAdjusted.end >= insertStart) {
            //adjust just the end
            newRange.end += insertLength;
        }
    }
    return newRange;
};