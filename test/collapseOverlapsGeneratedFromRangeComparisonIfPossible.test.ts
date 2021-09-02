

import { getOverlapsOfPotentiallyCircularRanges } from "../src";
import { collapseOverlapsGeneratedFromRangeComparisonIfPossible } from "../src";
import * as assert from "assert";
describe('collapseOverlapsGeneratedFromRangeComparisonIfPossible', function () {
    it('returns an empty array if passed an empty array of overlaps', function () {
        assert.deepStrictEqual(collapseOverlapsGeneratedFromRangeComparisonIfPossible([], 1000), []);
        assert.deepStrictEqual(collapseOverlapsGeneratedFromRangeComparisonIfPossible(getOverlapsOfPotentiallyCircularRanges({
            start: 900,
            end: 100
        }, {
            start: 900,
            end: 100
        }, 1000), 1000), [{
            start: 900,
            end: 100
        }]);
    });
    it('collapses a split circular range', function () {
        assert.deepStrictEqual(collapseOverlapsGeneratedFromRangeComparisonIfPossible([{
            start: 0,
            end: 100
        }, {
            start: 105,
            end: 999
        }], 1000), [{
            start: 105,
            end: 100
        }]);
        assert.deepStrictEqual(collapseOverlapsGeneratedFromRangeComparisonIfPossible(getOverlapsOfPotentiallyCircularRanges({
            start: 900,
            end: 100
        }, {
            start: 900,
            end: 100
        }, 1000), 1000), [{
            start: 900,
            end: 100
        }]);
    });
    it('doesnt collapses a split range that could be circular if the originalRangeIsNotCircular', function () {
        assert.deepStrictEqual(collapseOverlapsGeneratedFromRangeComparisonIfPossible([{
            start: 0,
            end: 100
        }, {
            start: 105,
            end: 999
        }], 1000, {
            start: 0,
            end: 999
        }), [{
            start: 0,
            end: 100
        }, {
            start: 105,
            end: 999
        }]);
        assert.deepStrictEqual(collapseOverlapsGeneratedFromRangeComparisonIfPossible(getOverlapsOfPotentiallyCircularRanges({
            start: 900,
            end: 100
        }, {
            start: 900,
            end: 100
        }, 1000), 1000), [{
            start: 900,
            end: 100
        }]);
    });
    it('doesnt collapses a split range that doesnt line up correctly', function () {
        assert.deepStrictEqual(collapseOverlapsGeneratedFromRangeComparisonIfPossible([{
            start: 0,
            end: 100
        }, {
            start: 105,
            end: 998
        }], 1000), [{
            start: 0,
            end: 100
        }, {
            start: 105,
            end: 998
        }]);
    });
    it('collapses a split circular range with a third part', function () {
        assert.deepStrictEqual(collapseOverlapsGeneratedFromRangeComparisonIfPossible([{
            start: 200,
            end: 300
        }, {
            start: 0,
            end: 100
        }, {
            start: 500,
            end: 999
        }], 1000), [{
            start: 500,
            end: 100
        }, {
            start: 200,
            end: 300
        }]);
    });

    it('collapses a split circular range with a third part in a different order', function () {
        assert.deepStrictEqual(collapseOverlapsGeneratedFromRangeComparisonIfPossible([{
            start: 0,
            end: 100
        }, {
            start: 200,
            end: 300
        }, {
            start: 500,
            end: 999
        }], 1000), [{
            start: 500,
            end: 100
        }, {
            start: 200,
            end: 300
        }]);
    });
});
