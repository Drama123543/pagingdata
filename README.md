# pagingdata [![Build Status](https://travis-ci.org/ishanyang/pagingdata.svg?branch=master)](https://travis-ci.org/ishanyang/pagingdata)

```JavaScript
/**
 * @param {Int} pageLength - Number of rows to display on a single page
 * @param {Int} length - Display length (number of records)
 * @param {Int} recordsTotal - Full data set length
 * @param {Int} currentPage - Current page index (zero based - i.e. the first page is 0)
 * @return {Array}
 */
pagingData(pageLength, length, recordsTotal, currentPage)
```