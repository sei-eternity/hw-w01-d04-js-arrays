/*1- Create a function that will get the sum of the numbers between 1 and n and return the answer: 
summation(5) // should return 15 because 1+2+3+4+5=15

*/

const summation = function(n){
    let sum = 0; 
    for (i = 0 ; i<=n ; i++ ){
    sum = sum + i;
    } 
    return sum }
    summation(5);
    


/*2- Create a program to get the sum of all the even numbers in a group 
summationEven(5) // should return 6 because 2+4=6
*/

function summationEven(n){
    var sum = 0;
    for(var i = 0; i< n; i++) {
    if(i % 2 === 0) {
    sum = sum + i;
    }
    }
    return sum;
    }
    summationEven(5);


/*3- Create a function to get the average of a group of numbers 
avg([8, 2, 2, 4]) // should return 4
*/


let numbers = [8,2,2,4];
for ( var i = 0; i < numbers.length; i ++){
     var avg =  numbers.length * (numbers[i] / numbers.length);
}
console.log(avg);


/*4- Create a function to reverse the letters in a word 
reverse("caterpillar") // should return "rallipretac"
*/

const ReverseLetter = function (str){
   
    let rev = "" ;
    for (i= 0 ; i<= str.length;i++){
    rev =str[i]+rev; 
    }
    return rev;
    }
    console.log(ReverseLetter(" caterpillar "));


/*5- Create a function that takes an array of words and combines them with a dash
addDashes(['test1', 'test2', 'test3']) // should return "test1-test2-test3"

*/ 

const arr = ["Test1","Test2","Test3"];
const combine = function (arr){
let a =  arr.join("-");
return a; 
}
combine(arr);
 


/*6- Function that will count up to a number and back down and return a string of the climb 
countUpAndDown(3) // should return "1 2 3 2 1"
*/

function countUpAndDown(n) {
    var arr = [];
    for (var i = 1; i<=n; i++) {
        arr.push(i.toString());  
    } //CountUP
     for (var i = n-1 ; i>0 ; i--) {
       arr.push(i.toString());  
    } //CountDown
    
    return arr; 
}
countUpAndDown(3);


/*7-Write a function that will tell you all of the words in an array that contain the letter `a` 
wordsWithA(['cat', 'rabbit', 'dog', 'frog']) // should return ['cat', 'rabbit']

*/

const wordsWithA = function (arr){

    var result = [];
    arr.forEach(element => {
    if(element && element.includes('a')) {
    result.push(element);
    }
    });
    return result; 
    }
    wordsWithA (["cat", "rabbit", "dog", "frog"]); 



/*8- Write a function that will tell you all of the words in an array that contain a specified letter 
wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']) // should return ['dog', 'frog'] */

const wordsWithA = function (letter,arr){

    var result = [];
    arr.forEach(element => {
    if(element && element.includes(letter)) {
    result.push(element);
    }
    });
    return result; 
    }
    wordsWithA ("g",["cat", "rabbit", "dog", "frog"]); 



/*9-Function that returns the longest word in sentence 
longestWord("The cat in the house") // should return "house"
*/



function LongestWord(str) {
  
    var array = str.split(' ');
    var longest = '';
    
    for(var i = 0; i < array.length; i++) {
      if(array[i].length > longest.length) {
        longest = array[i]; 
      }
    }
    
    return longest;
  }
  
  LongestWord("The cat is in the house");


/* 10-Function that returns the largest even number
largestEvenNumber([1,2,3,10,4,7,0]) // should return "10"
*/ 


var numbers = [1,2,3,10,4,7,0];
const largestEvenNumber = function (arr){


  var even = [];
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      even.push(arr[i]);
    }
  }
  var biggest = 0;
  for (var i = 0; i < numbers.length; i++) {
    if(numbers[i] > biggest) {
      biggest = numbers[i];
    }
  }
  return biggest;
}



largestEvenNumber(numbers);













