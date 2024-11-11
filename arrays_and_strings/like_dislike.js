function likeOrDislike(array) {
    return array.reduce((current_state, action) => {
        if (action === "Like") {
            return current_state === "Like" ? "Nothing" : "Like";
        }
        if (action === "Dislike") {
            return current_state === "Dislike" ? "Nothing" : "Dislike";
        }
        return current_state
    }, "Nothing");
}


console.log(likeOrDislike(["Dislike"])); // "Dislike"
console.log(likeOrDislike(["Like", "Like"])); // "Nothing"
console.log(likeOrDislike(["Dislike", "Like"])); // "Like"
console.log(likeOrDislike(["Like", "Dislike", "Dislike"])); // "Nothing"
