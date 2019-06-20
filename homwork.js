////////////////////Q1///////////////////////////////
function numberSum(N) {
    var total = 0;
      for(var i = 1; i <= N; i++){
        total += i;
      }
      return total;
  }

  /////////////////////////Q2////////////////////////////////
  function even_digits(num) {
    var ctr = 0;
    while (num) {
      ctr += num % 2 === 0;
      num = Math.floor(num / 10);
    }
    return ctr;
  }
  
  console.log(even_digits(123));
  console.log(even_digits(1020));
  console.log(even_digits(102));

  //////////////////////////Q3/////////////////////////////////////
  const grades = [80, 77, 88, 95, 68];

function getAvg(grades) {
  const total = grades.reduce((acc, c) => acc + c, 0);
  return total / grades.length;
}

const average = getAvg(grades);
console.log(average);

////////////////////////////q4//////////////////////////////
function reverseString(str){
    let stringRev ="";
    for(let i= 0; i<str.length; i++){
        stringRev = str[i]+stringRev;
    }
    return stringRev;
}
alert(reverseString("Hello World!"));

///////////////////////////////Q5////////////////////////////////
function combineInto(a,b) {
    var len = a.length;
    for (var i=0; i < len; i=i+5000) {
        b.unshift.apply( b, a.slice( i, i+5000 ) );
    }
}

//////////////////////////////Q6//////////////////////////////
function count(num) {
    var s = "";
    for(var i = 1; i <= num; i++) {
      s += i;
  
      if (i < (num)) {
        s += ', ';
      }
    }
    return s;
  }

  //////////////////Q7///////////////////////
  var arr = [2, 2, 3, 4]

Array.prototype.first = function() {
return this[0];
}

console.log(arr.first());

///////////////////q9////////////////////////
function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
  findLongestWord("The quick brown fox jumped over the lazy dog");

  ///////////////////////////////////////////q10//////////////////////////

  function max_even(arra) {

    arra.sort((x, y) => y - x);
  
    for (var i = 0; i < arra.length; i++) {
      if (arra[i] % 2 == 0)
        return arra[i];
      }
    }
  
  console.log(max_even([20, 40, 200]));
  console.log(max_even([20, 40, 200, 301]));
  
