function rgb2hex(r, g, b) {
    return `#${[r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')}`;
}


console.log(rgb2hex(105, 55, 203));
// "#6937cb"
    