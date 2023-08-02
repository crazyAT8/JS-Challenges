// Write a Function that finds the longest string in a phrase


//This will return the strings as written
function longestWord1(str) {
    return str;
}

console.log(longestWord1("I woke up early today"));
console.log(longestWord1("I went straight to the beach"));

//This will return an array with every word as an index value
function longestWord2(str) {
    let words = str.split(" ")
    console.log(words)
    return str;
}

console.log(longestWord2("I woke up early today"));
console.log(longestWord2("I went straight to the beach"))

// This will return the looped through array on its own line
function longestWord3(str) {
    let words = str.split(" ")
    let longestWord = "";                    //second variable is empty, but will show the longest word

    for(let word of words) {
        console.log(word);
    }
    return str;
}

console.log(longestWord3("I woke up early today"));
console.log(longestWord3("I went straight to the beach"))


function longestWord (str) {
    let words = str.split(" ");
    let longestWord = ' ';                      

    for(let word of words) {
        if(word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}


console.log(longestWord("I woke up early today"));
console.log(longestWord("I went straight to the beach"))