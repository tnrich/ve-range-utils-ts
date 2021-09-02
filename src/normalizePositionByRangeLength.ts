
export function normalizePositionByRangeLength(pPosition: number, sequenceLength: number, isInBetweenPositions?: boolean) {
    //isInBetweenPositions refers to:
    // A T G C
    // 0 1 2 3    <--  isInBetweenPositions = false is counting the positions themselves
    //0 1 2 3 4   <--  isInBetweenPositions = true is counting the spaces between positions
    var position = pPosition;
    if (position < 0) {
        position += sequenceLength;
    } else if (position + (isInBetweenPositions ? 0 : 1) > sequenceLength) {
        position -= sequenceLength;
    }
    return position < 0
        ? 0
        : position > (sequenceLength - (isInBetweenPositions ? 0 : 1))
            ? sequenceLength - (isInBetweenPositions ? 0 : 1)
            : position
};
