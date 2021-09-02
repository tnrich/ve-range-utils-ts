import { AnnRange } from "./types"

//this function takes a position that might not fit in a given range and puts it into that range
export function modulatePositionByRange(position: number, range: AnnRange) {
  var returnVal = position
  if (position < range.start) {
    returnVal = range.end - (range.start - (position + 1))
  } else if (position > range.end) {
    returnVal = range.start + (position - range.end - 1)
  }
  return returnVal
};
