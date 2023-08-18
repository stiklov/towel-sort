module.exports = function towelSort (matrix) {
  if (matrix === undefined) return [];
  let res = [], counter = 0;
  for (let line of matrix) {
    if (counter % 2 !== 0) {
      line = line.reverse();
    }
    for (elem of line) {
      res.push(elem);
    }
    counter++;
  }
  return res;
}
