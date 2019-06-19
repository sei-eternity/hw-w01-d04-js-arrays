// 1. Create a function that will get the sum of the numbers between 1 and n and return the answer 
//summation(5) // should return 15 because 1+2+3+4+5=15
const summation = function(num){
    let result = 1;
    for(let i=1; i<num; i++)
    result = result + (i+1);
return result;
}
summation(5);



// 2. Create a program to get the sum of all the even numbers in a group 
//summationEven(5) // should return 6 because 2+4=6
const summationEven = function(num){
    let result = 0;
    for(let i=0; i<=num; i++){
        if(i % 2 === 0)
         result = result + i;
    }
return result;
}
summationEven(5);



// 3. Create a function to get the average of a group of numbers 
//avg([8, 2, 2, 4]) // should return 4
const avg = function(array){
    let result = 0;
    for(let i=0; i<array.length; i++)
        result = result + array[i];
    return result/array.length;
}
avg([8, 2, 2, 4])



// 4. Create a function to reverse the letters in a word 
//reverse("caterpillar") // should return "rallipretac"
const reverse = function(word){
    const originalString = word;
    const splitLetters = originalString.split('');
    const reversedArray = splitLetters.reverse();
    const reversedString = reversedArray.join('');   
    return reversedString;
}
reverse("caterpillar");



// 5. Create a function that takes an array of words and combines them with a dash 
//addDashes(['test1', 'test2', 'test3']) // should return "test1-test2-test3"
const addDashes = function(arr){
   return arr.join('-');
}
addDashes(['test1', 'test2', 'test3']);



// 6. Function that will count up to a number and back down and return a string of the climb 
//countUpAndDown(3) // should return "1 2 3 2 1"
const countUpAndDown = function(num){
    let array = [num];
    for (let i = num-1; i > 0; i--){
        array.unshift(i);
        array.push(i);
    }
    return console.log(array);
}
countUpAndDown(3);



// 7. Write a function that will tell you all of the words in an array that contain the letter `a` 
//wordsWithA(['cat', 'rabbit', 'dog', 'frog']) // should return ['cat', 'rabbit']
const wordsWithA = function(arr) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf('a') > 0)
            newArray.push(arr[i])
    }
    console.log(newArray);
}
wordsWithA(['cat', 'rabbit', 'dog', 'frog']);



// 8. Write a function that will tell you all of the words in an array that contain a specified letter 
//wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']) // should return ['dog', 'frog']
const wordsWithLetter = function(letter, arr) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(letter) > 0)
            newArray.push(arr[i])
    }
    console.log(newArray);
}
 wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog'])



// 9. Function that returns the longest word in sentence 
//longestWord("The cat in the house") // should return "house"
const longestWord = function(str){
  var array = str.match(/\w[a-z]{0,}/gi);
  var result = array[0];

  for(var x = 1 ; x < array.length ; x++){
    if(result.length < array[x].length)
         result = array[x];
  }
  return console.log(result);
}
longestWord("The cat in the house");



// 10. Function that returns the largest even number 
//largestEvenNumber([1,2,3,10,4,7,0]) // should return "10"
const largestEvenNumber = function(arr) {
    let evenNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0)
        evenNumbers.push(arr[i]);
    }
    console.log(evenNumbers);
    return console.log(Math.max(...evenNumbers));
}
largestEvenNumber([1,2,3,10,4,7,0]);