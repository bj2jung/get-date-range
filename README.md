Input an array of date objects to return the range of those dates as a human readable string.

## Installation/usage

Using npm:

```shell
$ npm i get-date-range
```

Load ES module:

```js
import GetDateRange from `get-date-range`;
```

## Example

```
const myDates1 = [new Date("2018/12/1"), new Date("2019/3/1"), ...]
const myDates2 = [new Date("2019/1/1"), new Date("2019/3/1"), ...]
const myDates3 = [new Date("2019/3/1"), new Date("2019/3/5"), ...]

GetDateRange(myDates1)
// output: "Dec 1, 2018 - Mar 1, 2019"

GetDateRange(myDates2)
// output: "Jan 1 - Mar 1, 2019"

GetDateRange(myDates3)
// output: "Mar 1-5, 2019"
```
