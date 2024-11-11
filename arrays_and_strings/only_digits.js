function onlyDigits(string, digits_array=[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) {
    for (i in string) {
       if (!(digits_array.includes(parseInt(string[i])))) {
        return false;
       }
    }
    return true;
}


console.log(onlyDigits("1234567890")); // true
console.log(onlyDigits("qwerty")); // false
console.log(onlyDigits("5!")); // false
console.log(onlyDigits("2e2")); // false