var pagingData = require('./index');
var assert = require('assert')

describe('pagingData test', function() {
  it('shoule throw Error when the param can not convert to integer', function(){
      assert.throws(function(){
        pagingData("not a number",5,70,0)
      }, {
        message: /Error: int expected, /
      });
  })
  it('should deepEqual [0] when the current page is 0 and recordsTotal less than pageLength', function() {
    assert.deepEqual(pagingData(10,5,1,0), [0]);
  });
  it('should deepEqual [0] when the current page is 0 and recordsTotal equal pageLength', function() {
    assert.deepEqual(pagingData(10,5,10,0), [0]);
  });
  it('should deepEqual [0,1] when the current page is 0', function() {
    assert.deepEqual(pagingData(10,5,11,0), [0,1]);
  });
  it('should deepEqual [0,1,2] when the current page is 0', function() {
    assert.deepEqual(pagingData(10,5,21,0), [0,1,2]);
  });
  it('should deepEqual [0,1,2,3,4] when the current page is 0', function() {
    assert.deepEqual(pagingData(10,5,70,0), [0,1,2,3,4]);
  });

  it('should deepEqual [0,1,2,3,4] when the current page is 1', function() {
    assert.deepEqual(pagingData(10,5,70,1), [0,1,2,3,4]);
  });

  it('should deepEqual [0,1,2,3,4] when the current page is 2', function() {
    assert.deepEqual(pagingData(10,5,70,2), [0,1,2,3,4]);
  });

  it('should deepEqual [1,2,3,4,5] when the current page is 3', function() {
    assert.deepEqual(pagingData(10,5,70,3), [1,2,3,4,5]);
  });

  it('should deepEqual [2,3,4,5,6] when the current page is 4', function() {
    assert.deepEqual(pagingData(10,5,70,4), [2,3,4,5,6]);
  });

  it('should deepEqual [2,3,4,5,6] when the current page is 5', function() {
    assert.deepEqual(pagingData(10,5,70,5), [2,3,4,5,6]);
  });

  it('should deepEqual [2,3,4,5,6] when the current page is 6', function() {
    assert.deepEqual(pagingData(10,5,70,6), [2,3,4,5,6]);
  });

  it('should deepEqual [0,1,2,3,4] when the param is one object', function() {
    assert.deepEqual(pagingData({
      pageLength: 10,
      length: 5,
      recordsTotal: 70,
      currentPage: 0,
    }), [0,1,2,3,4]);
  });
})
