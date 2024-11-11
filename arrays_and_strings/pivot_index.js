const arr1 = [4, 2, 1, 3, 7, 6, 4];
const arr2 = [4, 2, -5, 3];
const arr3 = [4, 2, -4, 3];

function pivotIndex(arr, node_array=[]) {
    for (let i = 0; i < arr.length; i++) {
        const sum_before = arr.slice(0, i).reduce((x, y) => x + y, 0);
        const sum_after = arr.slice(i+1).reduce((x, y) => x+y, 0);
        if (sum_before === sum_after) {
            node_array.push(i);
        }
    }
    return node_array.length !== 0 ? node_array.reduce((x,y) => Math.min(x,y)) : -1;
}

console.log(pivotIndex(arr1));
console.log(pivotIndex(arr2))
console.log(pivotIndex(arr3));


