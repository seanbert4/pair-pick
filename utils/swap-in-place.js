'use strict';

const swapInPlace = function(arr, idx1, idx2) {
  let tempEl = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = tempEl;
};

module.exports = swapInPlace;
