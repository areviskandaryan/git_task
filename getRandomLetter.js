
function getRandomLetter() {
    let string = "abnksoposnkjuwde";
    let  text = string.charAt(Math.floor(Math.random() * string.length));
    return text;
}
console.log(getRandomLetter());