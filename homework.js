//question 1 
const summ = function(n) {
    var sum = 0;
    for (let i = 1; i<=n;i++)
    sum += i ;
    console.log(sum);
    }
    summ(5)
VM562:5 15

// question 2 
let numbers = [ 2,4,6,8 ];

let sum = numbers.reduce((a, b) => {
    return a + b;
});

sum;
20

// question 3
function summ () {
for (i = 0; i<=)

} 

// question 4 
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("mo");
"om"

//question 5 
var w = ['Mo','Saud','Asslahi'];
console.log(w.join('-'))

Mo-Saud-Asslahi

//question 6 

//question 7 


// question 8 


//question 9 

function findLword(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
  findLword("Mo Asslahi loves programming");// this should print 6 
//question 