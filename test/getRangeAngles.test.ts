//0123456789
//r--------r
//
//0123
//r--r
//  0
// 3 1
//  2
import * as assert from "assert";
import { getRangeAngles } from "../src";
import { RangeAngles } from "../src/types";
describe('getRangeAngles', function () {
	//tnrtodo set this up

	it('should return the correct angles for ranges that have joined locations', function (done) {
		const angles = getRangeAngles({ start: 1, end: 6, locations: [{ start: 1, end: 2 }, { start: 3, end: 6 }] }, 10)
		// console.log('angles: ' + JSON.stringify(angles,null,4));
		const anglesInRadians: RangeAngles = {
			startAngle: 0,
			totalAngle: 0,
			endAngle: 0,
			centerAngle: 0,
		};
		Object.keys(angles).forEach(function (key) {
			anglesInRadians[key] = angles[key] * 360 / Math.PI / 2
		});

		// console.log('anglesInRadians: ' + JSON.stringify(anglesInRadians,null,4));
		assert.ok(anglesInRadians.startAngle === 36)
		assert.ok(anglesInRadians.endAngle === 252)
		assert.ok(anglesInRadians.totalAngle === 216)
		angles.locationAngles && angles.locationAngles.forEach((angles, i) => {
			const anglesInRadians: RangeAngles = {
				startAngle: 0,
				totalAngle: 0,
				endAngle: 0,
				centerAngle: 0,
			};
			Object.keys(angles).forEach(function (key) {
				anglesInRadians[key] = angles[key] * 360 / Math.PI / 2
			});
			// console.log('anglesInRadians:',anglesInRadians)

			// console.log('anglesInRadians: ' + JSON.stringify(anglesInRadians,null,4));
			assert.ok(anglesInRadians.startAngle === (i === 0 ? 36 : 108))
			assert.ok(anglesInRadians.endAngle === (i === 0 ? 108 : 252))
			assert.ok(anglesInRadians.totalAngle === (i === 0 ? 72 : 144))
		})
		done()
	});
	it('should return the correct angles for ranges that cross the origin', function (done) {
		const angles = getRangeAngles({ start: 9, end: 0 }, 10)
		// console.log('angles: ' + JSON.stringify(angles,null,4));
		const anglesInRadians: RangeAngles = {
			startAngle: 0,
			totalAngle: 0,
			endAngle: 0,
			centerAngle: 0,
		};
		Object.keys(angles).forEach(function (key) {
			anglesInRadians[key] = angles[key] * 360 / Math.PI / 2
		});
		assert.ok(anglesInRadians.startAngle === 324)
		assert.ok(anglesInRadians.endAngle === 36)
		assert.ok(anglesInRadians.totalAngle === 72)
		// console.log('anglesInRadians: ' + JSON.stringify(anglesInRadians,null,4));
		done()
	});
	it('should return the correct angles for ranges that do not cross the origin', function (done) {
		const angles = getRangeAngles({ start: 1, end: 2 }, 10)
		// console.log('angles: ' + JSON.stringify(angles,null,4));
		const anglesInRadians: RangeAngles = {
			startAngle: 0,
			totalAngle: 0,
			endAngle: 0,
			centerAngle: 0,
		};
		Object.keys(angles).forEach(function (key) {
			anglesInRadians[key] = angles[key] * 360 / Math.PI / 2
		});
		// console.log('anglesInRadians: ' + JSON.stringify(anglesInRadians,null,4));
		assert.ok(anglesInRadians.startAngle === 36)
		assert.ok(anglesInRadians.endAngle === 108)
		assert.ok(anglesInRadians.totalAngle === 72)
		done()
	});
});

