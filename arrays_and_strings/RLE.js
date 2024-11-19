function encodeRLE(str) {
    if (str.length == 0) return '';

    let result = '';
    let count = 1;

    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i-1]) {
            count++;
        }
        else {
            result += str[i-1];
            if (count > 1) {
                result += count;
            }
            count = 1;
        }
    }

    result += str[str.length - 1];
    if (count > 1) {
        result += count;
    }

    return result;

}

console.log(encodeRLE("aabbbccccc")); // "a2b3c5"
console.log(encodeRLE("aaaaaaaaaax")); // "a10x"


function decodeRLE(str, digits_array=[1,2,3,4,5,6,7,8,9,0]) {
    if (str.length === 0) return '';
    if (str.split('').every((element) => !(digits_array.includes(Number(element))))) return str;

    let result = [];
    let counter = 0;

    while (counter < str.length) {
        let start = counter;
        counter++;

        while (counter < str.length && digits_array.includes(Number(str[counter]))) {
            counter++;
        }

        result.push(str.slice(start, counter));
    }
    let ended_result = [];
    for (i in result) {
        if (result[i].length === 1) {ended_result.push(result[i]);}
        else {
            ended_result.push(result[i][0].repeat(Number(result[i].slice(1))));
        }
    }
    return ended_result.join('');
}


console.log(decodeRLE("a4b6c3")); // "aaaabbbbbbccc"
console.log(decodeRLE("a10b2")); // "aaaaaaaaaabb"
console.log(decodeRLE("abc")); // "abc"
console.log(decodeRLE("abc11")); // "abccccccccccc"

