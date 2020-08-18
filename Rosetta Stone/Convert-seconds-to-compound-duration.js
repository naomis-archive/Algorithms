//take seconds value, convert to wk/day/hr/min/seconds
function convertSeconds(sec) {
  let count = 0;
  let timeArr = [];
  while (sec >= 604800) {
    count = count + 1;
    sec = sec - 604800;
  }
  timeArr.push(count);
  count = 0;
  while (sec >= 86400) {
    count = count + 1;
    sec = sec - 86400;
  }
  timeArr.push(count);
  count = 0;
  while (sec >= 3600) {
    count = count + 1;
    sec = sec - 3600;
  }
  timeArr.push(count);
  count = 0;
  while (sec >= 60) {
    count = count + 1;
    sec = sec - 60;
  }
  timeArr.push(count);
  timeArr.push(sec);

  let resultArr = [];
  if (timeArr[0] !== 0) {
    resultArr.push(timeArr[0] + " wk");
  }
  if (timeArr[1] !== 0) {
    resultArr.push(timeArr[1] + " d");
  }
  if (timeArr[2] !== 0) {
    resultArr.push(timeArr[2] + " hr");
  }
  if (timeArr[3] !== 0) {
    resultArr.push(timeArr[3] + " min");
  }
  if (timeArr[4] !== 0) {
    resultArr.push(timeArr[4] + " sec");
  }

  let result = resultArr.join(", ");
  return result;
}
