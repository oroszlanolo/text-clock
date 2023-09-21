import timeToString from "../src/timeToString.js";
import { default as test } from 'unit.js';
import { singleMinExpectations, hourExpectations, minAffixExpectation } from './data.js';
import { given } from 'mocha-testdata';

describe('Time to string module', function () {

  describe('timeToString', function () {

    given(singleMinExpectations).
    it('should give back the proper string each minute in an hour', function (input, expectation) {
        test.string(timeToString(input)).isEqualTo(expectation);

    });

    given(hourExpectations).
    it('should give back the proper string in each hour', function (input, expectation) {
        test.string(timeToString(input)).isEqualTo(expectation);

    });

    given(minAffixExpectation).
    it('should give back the proper string in each hour', function (input, affix, expectation) {
        test.string(timeToString(input, affix)).isEqualTo(expectation);

    });

  });

});