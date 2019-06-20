// Create a function that will get the sum of the numbers between 1 and n and return the answer 
const n = [1,2,3,4,5]

const summation = function() {
let sum = 0;

for(var i = 0; i < n.length; i++){

  
  sum += n[i];
}
console.log(sum);
}

// Create a program to get the sum of all the even numbers in a group 
const ln = [1,2,3,4,5]

const slummationven = function() {
let sum = 0;


for(var i = 0; i < n.length; i++){
if(n[i] % 2 === 0){
  
  sum += n[i];
}}
console.log(sum);
}

// Create a function to reverse the letters in a word
function reverse(str){
  let res = "";
  for(let i=str.length-1;i>=0;i--){
  res+=(str.charAt(i));
  }
  return res;
  }
  reverse("caterpillar");
 
// Create a function to get the average of a group of numbers
const arr = [];

const avg = function(arr) {
let sum = 0;
for(let i=0; i<arr.length ; i++){
sum += arr[i];

        }
let average = sum / arr.length;
console.log(average);
	}

// Function that will count up to a number and back down and return a string of the climb
let n = prompt("enter a number:");
let res="";
function countUpAndDown(n){
	
	for(let i=1;i<n;i++){
	res += i;
	}
	for(i=n;i>=1;i--){
	res+= i;
	}
	
	return res;
}

// Create a function that takes an array of words and combines them with a dash
let arr = [];
let n = prompt("How many words you wanna enter??");

for(let j=0;j<n;j++){
arr[j] = prompt('Enter word '+(j+1));
}
function addDashes(arr){
let res="";
for(let i=0;i<arr.length;i++){
	res+=arr[i];
	if(i<arr.length-1)
	res += "-";
}
return res;
}

addDashes(arr);

// Write a function that will tell you all of the words in an array that contain the letter `a` 
    const words = [];

    const wordsWithA = function(words) {
    
    for(let i = 0; i<words.length ; i++){
    if( words[i].includes("a")){
    console.log(words[i]);}
    }}

// Write a function that will tell you all of the words in an array that contain a specified letter
const word = [];

let letter = "";
const wordsWithLetter = function(letter, word) {

for(let i = 0; i<word.length ; i++){
if( word[i].includes(letter)){
console.log(word[i]);}
}}

// Function that returns the longest word in sentence
const arra = [];

const longestWord = function(string, arra) {

arra = string.split(" ");
let word = arra[0];

for (let i = 0 ; i<arra.length; i++){

if( word.length < arra[i].length ){
word = arra[i];
}
}
console.log(word);
}



// Function that returns the largest even number
let arr=[];
let n = prompt("How many numbers you wanna enter??");

for(let j=0;j<n;j++){
arr[j] =  parseInt(prompt('Enter num '+(j+1)));
}
let max;
function largestEvenNumber(arr){
max=0;
for(let i=0;i<arr.length;i++){
if(arr[i]%2==0 && max<arr[i]){	
	max = arr[i];
	}}
return max;
}

largestEvenNumber(arr);
