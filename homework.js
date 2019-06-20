//Q1
let n = prompt("Enter number:");
function summation(n){
let sum = 0;
for(let i=0;i<=n;i++){
sum+=i;
}
console.log(sum);
}
summation(n);

//Q2
let n = prompt("Enter number:");
function summationEven(n){
let sum = 0;
for(let i=0;i<=n;i++){
if(i%2==0)
sum+=i;
}
console.log(sum);
}
summationEven(n);

//Q3
let num = [];

let sum = 0;

function avg(num){
let sum = 0;
for(let i=0;i<num.length;i++){
sum += num[i];
}
let res = sum/num.length;
return console.log(res);
}

avg([8, 2, 2, 4])

//Q4
function reverse(str){
let res = "";
for(let i=str.length-1;i>=0;i--){
res+=(str.charAt(i));
}
return res;
}
reverse("caterpillar");

//Q5
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

//Q6
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
countUpAndDown(3);

//Q7
let words = [];
let n = prompt("How many words you wanna enter??");

for(let j=0;j<n;j++){
words[j] = prompt('Enter word '+(j+1));
}
function wordsWithA(words) {
for(let i=0;i<words.length;i++){
if(words[i].includes("a"))
console.log(words[i]);
}
}
wordsWithA(words);
//Q8
let words = [];
let n = prompt("How many words you wanna enter??");

for(let j=0;j<n;j++){
words[j] = prompt('Enter word '+(j+1));
}
let letter = prompt("Enter a letter: ");
function wordsWithLetter(letter, words) {
for(let i = 0; i<words.length ; i++){
if( words[i].includes(letter))
console.log(words[i]);
}}
wordsWithLetter(letter, word)s;
//Q9
let arr = [];
let n = prompt("How many words you wanna enter??");

for(let j=0;j<n;j++){
arr[j] = prompt('Enter word '+(j+1));
}
function longestWord(str,arr){
arr = str.split(" ");
let word = arr[0];
for (let i =0; i<arr.length;i++){
if(word.length<arr[i].length)
word = arr[i];
}
console.log(word);
}
longestWord(str,arr);
//Q10
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
