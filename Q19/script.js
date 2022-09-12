console.log("truncate a string to a certain number of words");
function truncate(str, words) {
    return str.split(" ").splice(0,words).join(" ");
}
console.log(truncate('The quick brown fox jumps over the lazy dog', 4));