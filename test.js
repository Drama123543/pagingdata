var pagingData = require('./index');
var assert = require('assert')

describe('pagingData test', function() {
  it('should deepEqual [0,1,2,3,4] when when the current page is 0', function() {
    assert.deepEqual(pagingData(10,5,70,0), [0,1,2,3,4]);
  });

  it('should deepEqual [0,1,2,3,4] when when the current page is 1', function() {
    assert.deepEqual(pagingData(10,5,70,1), [0,1,2,3,4]);
  });

  it('should deepEqual [0,1,2,3,4] when when the current page is 2', function() {
    assert.deepEqual(pagingData(10,5,70,2), [0,1,2,3,4]);
  });

  it('should deepEqual [1,2,3,4,5] when when the current page is 3', function() {
    assert.deepEqual(pagingData(10,5,70,3), [1,2,3,4,5]);
  });

  it('should deepEqual [2,3,4,5,6] when when the current page is 4', function() {
    assert.deepEqual(pagingData(10,5,70,4), [2,3,4,5,6]);
  });

  it('should deepEqual [2,3,4,5,6] when when the current page is 5', function() {
    assert.deepEqual(pagingData(10,5,70,5), [2,3,4,5,6]);
  });

  it('should deepEqual [2,3,4,5,6] when when the current page is 6', function() {
    assert.deepEqual(pagingData(10,5,70,6), [2,3,4,5,6]);
  });
})
