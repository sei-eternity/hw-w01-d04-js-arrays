// Create a file in this repository named homework.js to save your solutions.

// Create a function that will get the sum of the numbers between 1 and n and return the answer 
// summation(5) // should return 15 because 1+2+3+4+5=15

const summation = function (userInput) {
    let sum = 0
    for (let i = 0; i <= userInput; i++) {
        sum = sum + i;
    }
    console.log(sum);
}
summation(5);




// Create a program to get the sum of all the even numbers in a group 
// summationEven(5) // should return 6 because 2+4=6


const summationEven = function (userInput) {
    let sum = 0
    for (let i = 0; i <= userInput; i++) {
        if (i % 2 == 0) {
            sum = sum + i
        }
    }
    console.log(sum);
}
summationEven(5);


// Create a function to get the average of a group of numbers 
// avg([8, 2, 2, 4]) // should return 4

 
const avg = function (userInput) {
    let sum = 0;
    for (let i = 0; i < userInput.length; i++) {
        sum = sum + userInput[i]
    }
    console.log(sum / userInput.length);
}

  
avg([8, 2, 2, 4])

// Create a function to reverse the letters in a word 
// reverse("caterpillar") // should return "rallipretac"
const reverse = function (userInput) {
    let letters = userInput.split('');
    console.log(`${letters.reverse().join('')} is a reverse from this word ${userInput }`);
}
reverse("caterpillar")



// Create a function that takes an array of words and combines them with a dash 
// addDashes(['test1', 'test2', 'test3']) // should return "test1-test2-test3"

const addDashes = function (userInput) {
    return userInput.join('-');
}
 addDashes(['test1', 'test2', 'test3']) // should return "test1-test2-test3"

// Function that will count up to a number and back down and return a string of the climb 
// countUpAndDown(3) // should return "1 2 3 2 1"

const countUpAndDown = function (userInput) { 
    let newArray = []
    for (let i = 1; i <= userInput; i++) {
        newArray.push(i);
    }
    for (let i = userInput; i > 1; i--) {
        newArray.push(i-1);
    }
    return newArray.join(" ");
}
countUpAndDown(3)

// Write a function that will tell you all of the words in an array that contain the letter `a` 
// wordsWithA(['cat', 'rabbit', 'dog', 'frog']) // should return ['cat', 'rabbit']

const wordsWithA = function(userInput) {
    const newArray = []
    for (let i = 0; i < userInput.length; i++) {
        if (userInput[i].indexOf('a') > 0) {
            newArray.push(userInput[i])
        }
    }
    console.log(newArray);
}
wordsWithA(['cat', 'raabbit', 'dog', 'frog']) 


// Write a function that will tell you all of the words in an array that contain a specified letter 
// wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']) // should return ['dog', 'frog']

const wordsWithLetter = function(letter, userInput) {
    const newArray = []
    for (let i = 0; i < userInput.length; i++) {
        if (userInput[i].indexOf(letter) > 0) {
            newArray.push(userInput[i])
        }
    }
    console.log(newArray);
}
 wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog'])

// Function that returns the longest word in sentence 
// longestWord("The cat in the house") // should return "house"


const longestWord= function(userInput) {
    const newArray = userInput.split(" ");
    let longestWord = "";
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i].length > longestWord.length) {
            longestWord = newArray[i];
        }
    }
     console.log (`This word "${longestWord}" is the Longest Word in this sentence "${userInput}"`);
}

longestWord("The cat in the house")

// Function that returns the largest even number 
// largestEvenNumber([1,2,3,10,4,7,0]) // should return "10"

const largestEvenNumber= function(userInput){
    let newArray =0;
    for(let i =0;i<userInput.length;i++){
      if((userInput[i]%2==0)&&(userInput[i]>newArray)){
        newArray = userInput[i];

      }
    }
    console.log(newArray)
console.log (`This number "${newArray}" is the Largest Even Number this sentence array "${userInput}"`);
  }

  largestEvenNumber([1,2,3,10,4,7,0])
