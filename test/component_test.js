'use strict';

var grunt = require('grunt');
var read = grunt.file.read;

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['component'] = {
  build_dev: function(test) {
    test.expect(2);

    var actual = read('tmp/build-dev.js');
    var expected = read('test/expected/build-dev.js');

    test.equal(actual, expected, 'should have the same output');

    actual = read('tmp/build-dev.css');
    expected = read('test/expected/build-dev.css');

    test.equal(actual, expected, 'should have the same output');

    test.done();
  },

  build_prod: function(test) {
    test.expect(2);

    var actual = read('tmp/build-prod.js');
    var expected = read('test/expected/build-prod.js');

    test.equal(actual, expected, 'should have the same output');

    actual = read('tmp/build-prod.css');
    expected = read('test/expected/build-prod.css');

    test.equal(actual, expected, 'should have the same output');

    test.done();
  },

  standalone: function(test) {
    test.expect(1);

    var actual = read('tmp/standalone.js');
    var expected = read('test/expected/standalone.js');

    test.equal(actual, expected, 'should have the same output');

    test.done();
  }

};