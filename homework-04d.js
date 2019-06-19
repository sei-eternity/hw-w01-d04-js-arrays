//JavaScript Array HW


//Create a function that will get the sum of the numbers between 1 and n and return the answer

const summation = function(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;

  }
  console.log(sum);
}
summation(5); // should return 15 because 1+2+3+4+5=15

console.log("------");

//Create a program to get the sum of all the even numbers in a group

const summationEven = function(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i%2 === 0) {
      sum += i;
    }
  }
  console.log(sum);
}

summationEven(5) // should return 6 because 2+4=6

console.log("------");

//Create a function to get the average of a group of numbers

const avg = function(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  console.log(sum/num.length);

}

avg([8, 2, 2, 4]) // should return 4

console.log("------");

//Create a function to reverse the letters in a word

const reverse = function(num) {
  var ar = num.split('');
  ar = ar.reverse().join('');
  console.log(ar);


}


reverse("caterpillar") // should return "rallipretac"

console.log("------");


//Create a function that takes an array of words and combines them with a dash
const addDashes = function(num) {
  var ar = num.join('-');
  console.log(ar);

}
addDashes(['test1', 'test2', 'test3']) // should return "test1-test2-test3"

console.log("------");

//Function that will count up to a number and back down and return a string of the climb

const countUpAndDown = function(num) {
  let sum = [];
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  for (let i = num-1; i >= 1; i--) {
    sum = sum + i;
  }

  var ar = sum.toString();
  console.log(ar);

}

countUpAndDown(3) // should return "1 2 3 2 1"

console.log("------");


//Write a function that will tell you all of the words in an array that contain the letter `a`
const wordsWithA = function(string) {

  var n = string.filter(r => r.indexOf('a') != -1);
  console.log(n);

}

wordsWithA(['cat', 'rabbit', 'dog', 'frog']) // should return ['cat', 'rabbit']

console.log("------");


//Write a function that will tell you all of the words in an array that contain a specified letter

const wordsWithLetter = function(letter, string) {

  let newString = string.filter(r => r.indexOf(letter) != -1);
  console.log(newString);

}

wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']) // should return ['dog', 'frog']

console.log("------");

//Function that returns the longest word in sentence
const longestWord = function(string) {
  let str = string.split(" ");
  let long = 0;
  let word;
  for (var i = 0; i <= str.length - 1; i++) {
    if (long < str[i].length) {
      long = str[i].length;
      word = str[i];
    }
  }
  console.log(word);

  return word;

}


longestWord("The cat in the house") // should return "house"

console.log("------");

//Function that returns the largest even number
const largestEvenNumber = function(num) {
  let num1 = [];
  let o = 0;
  for (let i = 0; i <= num.length; i++) {
    if (num[i] % 2 === 0) {
      num1[o] = num[i];
      //console.log(num[i]);
      o = o+1;

    }
  }
  num1.sort(function(a, b) {
    return b - a
  });
  console.log(num1[0]);
}


largestEvenNumber([1, 2, 3, 10, 4, 7, 0]) // should return "10"
console.log("------");
