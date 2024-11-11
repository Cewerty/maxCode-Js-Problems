function formatPrice(price) {
    const numered_price = price.toString().split('');
    const result = [];
    for (let i = numered_price.length; i >= 0; i --) {
        result.unshift(numered_price[i]);

        if ((numered_price.length - i) % 3 === 0 && i !== 0) {
            result.unshift(' ');
        }
    }
    return result.join('').trimEnd();
}

console.log(formatPrice(100)); // "100"
console.log(formatPrice(2000)); // "2 000"
console.log(formatPrice(345678)); // "345 678"
console.log(formatPrice(1000000)); // "1 000 000"
console.log(formatPrice(1234567890)); // "1 234 567 890"
