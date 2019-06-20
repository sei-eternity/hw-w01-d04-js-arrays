 
1-

 const summation = function(n){

let sum = 0;

for (let i = 0; i <= n; i++){

sum +=i;


}
 

return sum;
     {





2-

 const summationEven = function(n){

let sum = 0;

for (let i = 0; i <= n; i++){
if (n % 2==0)
sum +=i;


}
 

return sum;
     {





3-

const avg = function(arr){
let sum = 0;
for ( let i = 0; i < arr.length; i++){

sum+= arr[i];

{

return sum/arr.length; 


{



4-

 const reverse = function(str) {

str = str.split("");
str = str.reverse();
str = str.join("");

return str; 


{





 5-

 const addDash = function(arr) {

return arr.join("-");

{





 6-

 const countUpAndDown = function(n){

let str ="";

for (let i = 1; i <= n;  i++){

str += i; 

{


for (let i = n-1; i >= 1;  i--){

str += i; 

{

return str; 


{





7-


 const wordsWithA = function(arr){

const newArr = [];



for (let i = 0; i < arr.length; i++){

if (arr[i].indexOf('a') >=0)
newArr.push(arr[i]);

{


return newArr; 
{






 8-

 const wordsWithLetter = function(arr, char){

const newArr = [];



for (let i = 0; i < arr.length; i++){

if (arr[i].indexOf(char) >=0)
newArr.push(arr[i]);

{


return newArr; 
{





 9-

 const longestWord = function(str){

let longStr = "";


str = str.split("");

for (let i = 0; i < str.length; i++){

if (str[i].length > longWord)
longWord = str[i];


{


return longWord; 



{





 10-

 const largestEvenNum = function(arr){
let largeNum = unidentified; 


for (let i= 0; i < arr.length; i++){

if (arr[i] > largeNum)
largeNum = arr[i];

{

return largeNum; 

{