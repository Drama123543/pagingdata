(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.pagingData = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var int = function(x) {
  if(parseInt(x)===x){
    return x;
  } else {
      throw new TypeError("Error: int expected, "+typeof x+" given.");
  }
}

/**
 * @param {Int} pageLength - Number of rows to display on a single page
 * @param {Int} length - Display length (number of records)
 * @param {Int} recordsTotal - Full data set length
 * @param {Int} currentPage - Current page index (zero based - i.e. the first page is 0)
 * @return {Array}
 */
function pagingData(pageLength, length, recordsTotal, currentPage){
  var dataObj;
  if(arguments.length===1) {
    dataObj = pageLength
    pageLength = dataObj.pageLength
    length = dataObj.length
    recordsTotal = dataObj.recordsTotal
    currentPage = dataObj.currentPage
  }
  int(pageLength)
  int(length)
  int(recordsTotal)
  int(currentPage)
  var start = 0;
  var sideNum = Math.floor(length/2);
  var pagesTotal = Math.ceil(recordsTotal/pageLength)
  var lSideNum = currentPage - start;
  var rSideNum = pagesTotal - currentPage;

  var pageArr=[];
  var i= start;
  if(pageLength>=recordsTotal){
    pageArr.push(0)
  }else if(lSideNum<sideNum){
    while(i<pagesTotal && pageArr.length<length){
      pageArr.push(i);
      i++;
    }
  }else if(rSideNum < sideNum){
    i = pagesTotal-start-1;
    while(i>0 &&  pageArr.length<length){
      pageArr.unshift(i);
      i--;
    }
  }else {
    pageArr.push(currentPage)
    i= start
    for(; i<= sideNum&&pageArr.length<length; i++  ){
      var l=currentPage-i-1;
      var r=currentPage+i+1;
      if(l>=start){
        pageArr.unshift(l);
      }
      if(r<=pagesTotal-1){
        pageArr.push(r);
      }
    }
  }
  return pageArr;
}

module.exports = pagingData;

},{}]},{},[1])(1)
});
