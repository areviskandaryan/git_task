# GIT [TASK]

Created two files, which generated random number and random letter. 
```javascript
function getRandomNumber() {
    let  number = Math.floor(Math.random()*10);
    return number;
}
console.log(getRandomNumber());
```javascript
function getRandomLetter() {
    let string = "abnksoposnkjuwde";
    let  text = string.charAt(Math.floor(Math.random() * string.length));
    return text;
}
console.log(getRandomLetter());
```
