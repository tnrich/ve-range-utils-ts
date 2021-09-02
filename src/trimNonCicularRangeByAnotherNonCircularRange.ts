import { AnnRange } from "./types";

 
export  function trimNonCicularRangeByAnotherNonCircularRange(rangeToBeTrimmed: AnnRange, trimmingRange: AnnRange) {
    // ac.throw([ac.range, ac.range], arguments);
    let outputTrimmedRange;
    if (!rangeToBeTrimmed) {
        return rangeToBeTrimmed;
    }
    if (rangeToBeTrimmed.start < trimmingRange.start) {
        if (rangeToBeTrimmed.end < trimmingRange.start) {
            // rrr   <range to be trimmed
            //    ttt  <trimming range
            outputTrimmedRange = {
                start: rangeToBeTrimmed.start,
                end: rangeToBeTrimmed.end
            };
        } else {
            if (rangeToBeTrimmed.end > trimmingRange.end) {
                // rrrrrr   <range to be trimmed
                //   ttt  <trimming range
                outputTrimmedRange = {
                    start: rangeToBeTrimmed.start,
                    end: rangeToBeTrimmed.end
                };
            } else {
                // rrrrrr   <range to be trimmed
                //   ttt  <trimming range
                outputTrimmedRange = {
                    start: rangeToBeTrimmed.start,
                    end: trimmingRange.start - 1
                };
            }
        }
    } else {
        if (rangeToBeTrimmed.end <= trimmingRange.end) {
            //   rrr   <range to be trimmed
            //  ttttt  <trimming range
            //fully deleting the range, so do nothing
        } else {
            if (rangeToBeTrimmed.start > trimmingRange.end) {
                //     rrrrrr   <range to be trimmed
                //  ttt  <trimming range
                outputTrimmedRange = {
                    end: rangeToBeTrimmed.end,
                    start: rangeToBeTrimmed.start
                };
            } else {
                //    rrrrrr   <range to be trimmed
                //  ttt  <trimming range
                outputTrimmedRange = {
                    end: rangeToBeTrimmed.end,
                    start: trimmingRange.end + 1
                };
            }
        }
    }
    return outputTrimmedRange;
}