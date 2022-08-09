/*
    Original:
    Write a function `whisper` that takes in a string and returns a "whispered"
    version of that string. Use the `.toLowerCase()` function on a string to
    see what it does!

    New:
    Write a function `alternatingLetters` that takes in a string and returns a
    version of that string where letters alternate uppercase and lowercase,
    starting with lowercase. Do not make exceptions for spaces within the
    string.

    Strings are immutable, so here are some tools you may find useful. The
    `.split('')` function on strings to make a copy of the string as an array.
    The `.join('')` function joins the elements in an array into a string.
*/
function alternatingLetters(str) {
   let arrOfLetters = str.split("")
   let newArr = []
   for (let i = 0; i < str.length; i++) {
      if (i % 2 !== 0) {
         newArr.push(arrOfLetters[i].toUpperCase())
         console.log(newArr)
      } else {
         newArr.push(arrOfLetters[i])
      }

   }
   return newArr.join("")
}




function alternatingLetters(str) {
   let arrLetters = str.split("")
   let arr = []

   for (let i = 0; i < str.length; i++) {
      if (i % 2 !== 0) {
         console.log(arr.push(arrLetters[i].toUpperCase()))
      } else {
         console.log(arr.push(arrLetters[i]))
      }
   }
   return arr.join("")
}












console.log(alternatingLetters("this is a test"))
console.log(alternatingLetters("test"))
