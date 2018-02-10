# pagingdata [![Build Status](https://travis-ci.org/ishanyang/pagingdata.svg?branch=master)](https://travis-ci.org/ishanyang/pagingdata)

```JavaScript
/**
 * pagingData(pageLength, length, recordsTotal, currentPage)
 * @param {Int} pageLength - Number of rows to display on a single page
 * @param {Int} length - Display length (number of records)
 * @param {Int} recordsTotal - Full data set length
 * @param {Int} currentPage - Current page index (zero based - i.e. the first page is 0)
 * @return {Array}
 */
// [0,1,2,3,4]
pagingData(10,5,70,0);

```