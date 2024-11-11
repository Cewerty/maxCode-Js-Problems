
function filterHomogenous(arrays) {
    return arrays.filter((x) => x.length > 0).filter((array) => array.every((element) => typeof element === typeof array[0]));
}


console.log(filterHomogenous([
    [1, 2, 3],
    [],
    [5, true, 8],
    ["qwe", "yyy"],
    ["uio", 6],
  ])); // [[1, 2, 3],  ["qwe", "yyy"]]
  