const str = "lorem ipsum dolor sit amet";

function shortestWord(str) {
    const splited_string = str.split(" ");
    const mapped_string = splited_string.map((x) => x.length);
    return Math.min(...mapped_string);
}

console.log(shortestWord(str)); // 3
