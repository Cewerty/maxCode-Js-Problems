function countSmileys(arr, regex = /^[:;][-~]?[)D]$/) {
    return arr.filter((element) => regex.test(element)).length;
}

console.log(countSmileys([":-)", ";D", ".(", ")))"])); // 2
