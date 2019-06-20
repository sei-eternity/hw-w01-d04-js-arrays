1- //Create a function that will get the sum of the numbers between 1 and n and return the answer
function summation(N){
var sum = 0;
for(i = 0; i <= n; i++){
sum += i;
}
console.log(sum)
}



2- //Create a program to get the sum of all the even numbers in a group 
function summationEven(n){
var sum = 0;
for(var i = 0; i <= n; i++){
if ( i % 2 == 0)
console.log (i+"even")
}
}



3- //Create a function to get the average of a group of numbers 
I couldn't solve it



4- //Create a function to reverse the letters in a word 
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('caterpillar');


5-  //Create a function that takes an array of words and combines them with a dash 
var elements = ['test1', 'test2', 'test3'];
console.log(elements.join('-'));

6- //Function that will count up to a number and back down and return a string of the climb


7- //Write a function that will tell you all of the words in an array that contain the letter `a`

8- //Write a function that will tell you all of the words in an array that contain a specified letter 

9- //Function that returns the longest word in sentence 
// I mast use a Math.max(m, w.length) but every time i faced a number and that uncorret unswer 
function wordsWithLetter(str) {
  return str.split(' ').reduce((m, w) => Math.max(m, w.length), 0);
}

var i = wordsWithLetter('The cat in the house');
console.log(i)


10- //Function that returns the largest even number 
// I mast use a math.max but I know i didn't use it correctly
var arr = [1,2,3,10,4,7,0];
{var Math.max= ([1,2,3,10,4,7,0]);
console.log
}




