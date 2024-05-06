let palindromes = function (word) {
    let word1 = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s/g, "").toLowerCase();
    let word2 = word1.split("").reverse().join("")
    return word1 == word2;
};

// Do not edit below this line
module.exports = palindromes;
