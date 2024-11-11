const matrix = [
    ["lorem", "ipsum", "dolor", "sit", "amet"],
    ["consectetur", "adipiscing", "elit", "mauris", "urna"],
    ["mauris,", "accumsan", "quis", "mauris", "in"],
];

function searchValue(matrix, min) {
    return matrix.flat(1).some((x) => x.length >= min);
}



console.log(searchValue(matrix, 6)); // true;
console.log(searchValue(matrix, 11)); // true;
console.log(searchValue(matrix, 200)); // false;
