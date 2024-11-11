const test_array = [1, 5, 3, 2];

function max(array, max_number = 0, index = 0) {
    return array.reduce((a, b) => Math.max(a, b));
}

console.log(max(test_array));