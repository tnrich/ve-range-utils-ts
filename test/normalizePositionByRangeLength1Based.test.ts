import { normalizePositionByRangeLength1Based } from "../src";
import { expect as expect } from "chai";
describe('normalizePositionByRangeLength1Based', function () {
	it('should normalize a 1 based position by a 1 based range length', function () {
		expect(normalizePositionByRangeLength1Based(0, 10)).to.equal(10)
		expect(normalizePositionByRangeLength1Based(-1, 10)).to.equal(9)
		expect(normalizePositionByRangeLength1Based(11, 10)).to.equal(1)
	})
});
