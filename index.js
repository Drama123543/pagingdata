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
  int(pageLength)
  int(length)
  int(recordsTotal)
  int(currentPage)
  var start = 0;
  var sideNum = Math.floor(length/2);
  var pagesTotal = Math.floor(recordsTotal/pageLength)
  var lSideNum = currentPage - start;
  var rSideNum = pagesTotal - currentPage;

  var pageArr=[];
  var i= start;
  if(lSideNum<sideNum){
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
