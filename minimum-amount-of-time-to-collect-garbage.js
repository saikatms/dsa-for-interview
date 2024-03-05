let garbage = ["G", "P", "GP", "GG"],
  travel = [2, 4, 3];

var garbageCollection = function (garbage, travel) {
  let res = 0;
  for (let index = 0; index < garbage.length - 1; index++) {
    res += travel[index];
  }
  res = 3 * res;
  for (const str of garbage) {
    res = res + str.length;
  }

  for (let index = garbage.length - 1; index > 0; index--) {
    if (!garbage[index].includes("G")) {
      res -= travel[index - 1];
    } else {
      break;
    }
  }

  for (let index = garbage.length - 1; index > 0; index--) {
    if (!garbage[index].includes("P")) {
      res -= travel[index - 1];
    } else {
      break;
    }
  }

  for (let index = garbage.length - 1; index > 0; index--) {
    if (!garbage[index].includes("M")) {
      res -= travel[index - 1];
    } else {
      break;
    }
  }
  return res;
};

console.log(garbageCollection(garbage, travel));
