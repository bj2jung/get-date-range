"use strict";

const GetDateRange = function(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(+arr[i]);
  }

  const minDate = new Date(Math.min(...newArr));
  const maxDate = new Date(Math.max(...newArr));
  const minDateString = trimDay(minDate.toDateString());
  const maxDateString = trimDay(maxDate.toDateString());

  const min = minDateString.split(" ");
  if (min[1][0] == "0") {
    min[1] = min[1][1];
  }
  const max = maxDateString.split(" ");
  if (max[1][0] == "0") {
    max[1] = max[1][1];
  }

  if (minDate.getFullYear() !== maxDate.getFullYear()) {
    return `${min[0]} ${min[1]}, ${min[2]} - ${max[0]} ${max[1]}, ${max[2]}`;
  } else if (minDate.getMonth() !== maxDate.getMonth()) {
    return `${min[0]} ${min[1]} - ${max[0]} ${max[1]}, ${min[2]}`;
  } else if (minDate.getDay() !== maxDate.getDay()) {
    return `${min[0]} ${min[1]}-${max[1]}, ${min[2]}`;
  } else {
    return `${min[0]} ${min[1]}, ${min[2]}`;
  }

  function trimDay(str) {
    return str.slice(4);
  }
};

module.exports = GetDateRange;
