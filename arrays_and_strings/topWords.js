const words = [
    "a",
    "able",
    "about",
    "absolute",
    "accept",
    "account",
    "achieve",
    "across",
    "act",
    "active",
    "actual",
    "add",
    "address",
    "Admit",
    "Advertise",
    "Affect",
    "AFFORD",
    "after",
    "afternoon",
    "again",
    "against",
    "age",
    "agent",
    "ago",
    "agree",
  ];


function topWords(words_array, startstring, word_limit) {
    if ((words_array.length == 0) || (startstring == '') || (word_limit == 0)) {return [];}
    startstring = startstring.toLowerCase()
    const filtered_words = words_array.filter((x) => x.toLowerCase().startsWith(startstring))
    return filtered_words.slice(0, word_limit);
}

console.log(topWords(words, 'AF', 3));