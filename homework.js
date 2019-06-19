
const summation = function(num) {
    let sum = 0;
    for(let i = num; i> 0 ; i--){
        sum += i;
    }
    return sum;
}

const summationEven = function(num){
    let sum = 0;
    for(let i = num; i> 0 ; i--){
        if(i % num === 0)
            sum += i;
    }
    return sum;
}

const avg = function(arr) {
    let sum = 0;
    for(v of arr){
        sum += v;
    }
    return sum / arr.length;
}

const reverse = function(str) {
    let reverse = '';
    for(let c of str) {
        reverse = c + reverse
    }
return reverse;
}

const addDashes = function(arr){
    return arr.join('-')
}

const countUpAndDown = function(num) {
    let result = '';
    for(let i = 1; i <= num; i++)
        result += i + ' ';
    for(let i = num - 1; i>=1 ; i--)
        result += i + ' ';
    return result;
}

const wordsWithA = function(arr){
    return arr.filter(v => v.indexOf('a') !== -1);
}

const wordsWithLetter = function(letter ,arr){
    return arr.filter(v => v.indexOf(letter) !== -1);
}

const longestWord = function(str){
    strArray = str.split(' ');
    let longest = '';
    for(str of strArray){
        if(str.length > longest.length){
            longest = str;
        }
    }
    return longest;
}

const largestEvenNumber = function(arr){
    let largest = 0;
    for(num of arr){
        if(!(num%2)){
            if(num > largest){
                largest = num;
            }
        }
    }
    return largest;
}


console.log(summation(5)); // should return 15 because 1+2+3+4+5=15Create a program to get the sum of all the even numbers in a group 
console.log(summationEven(5)); // should return 6 because 2+4=6Create a function to get the average of a group of mbers 
console.log(avg([8, 2, 2, 4])); // should return 4Create a function to reverse the letters in a word 
console.log(reverse("caterpillar")); // should return "rallipretac"Create a function that takes an array of words and combines them with a dash 
console.log(addDashes(['test1', 'test2', 'test3'])); // should return "test1-test2-test3"Function that will count up to a number and back down and return a string of the climb 
console.log(countUpAndDown(3)); // should return "1 2 3 2 1"Write a function that will tell you all of the words in an array that contain the letter `a` 
console.log(wordsWithA(['cat', 'rabbit', 'dog', 'frog'])); // should return ['cat', 'rabbit']Write a function that will tell you all of the words in an array that contain a specified letter 
console.log(wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']))// should return ['dog', 'frog']Function that returns the longest word in sentence 
console.log(longestWord("The cat in the house")) // should return "house"Function that returns the largest even number 
console.log(largestEvenNumber([1,2,3,10,4,7,0])); // should return "10"


// Extra practice

const guessLetter = function(guessedLetters,letter) {
  const wordLetters = ['f', 'o', 'x'];
  checkIndex = wordLetters.indexOf(letter);

  if(checkIndex !== -1){
    if(guessedLetters[checkIndex] === '_'){
      guessedLetters[checkIndex] = letter;
      if(guessedLetters.indexOf('_') === -1){
        console.log('You win,', guessedLetters.join(' '))
      }
      else{
        console.log('Correct,', guessedLetters.join(' '))
      }
    }
    else {
      console.log('Incorrect,', guessedLetters.join(' '));
    }
  }
  else {
    console.log('Incorrect,', guessedLetters.join(' '));
  }

}


const guessedLetters = ['_', '_', '_'];

guessLetter(guessedLetters, 'a');
guessLetter(guessedLetters, 'f');
guessLetter(guessedLetters, 'x');
guessLetter(guessedLetters, 'l');
guessLetter(guessedLetters, 'o');
