// ----------- first question--------------
const summation = (array) => array.reduce((a,b)=> a+b,0);

// ----------- second question -------------
function summationEven(n) {
    let sum = 0;
    for(let i = 0; i <= n; i++){
      if(i % 2 ===0) {
        sum += i;
      }
    }
    return sum
  }

// ----------- third question -------------
const avg = (array) => array.reduce((a,b)=> a+b,0)/array.length;

// ------------ 4th question ----------------
const reverse = (string) => string.split("").reverse().join("");

// ------------- 5th question ----------------
const addDashes = (array) => array.join("-");

// ------------- 6th question ----------------
const countUpAndDown = function(string){
    let str = countUp(string);
    str =str+" "+ str.slice(0,str.length-2).split("").reverse().join("")
    return str;
}
const countUp = function(num){
    let str = ""
    str = (num === 1) ? str += `${num}`:str+= `${countUp(num - 1)} ${num}`
	return str ;
}

//-------------- 7th question ----------------
const wordsWithA = function(array){
    let result = new Array();
    array.forEach((item,i) => {
        if (array[i].includes("a")){
            result.push(array[i])
        }
    });
    return result;
}

//---------------- 8th question ---------------
const wordsWithLetter = function(letter,array){
    let result = new Array();
    array.forEach((item,i) => {
        if (array[i].includes(letter)){
            result.push(array[i])
        }
    });
    return result;
}


//---------------- 9th question ------------------
const longestWord = function(str) {
    var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length});
    return longestWord[0];
  }

//---------------- 10th question -----------------
const largestEvenNumber = function(array) {
    return Math.max.apply(null, array.filter(item => item % 2 === 0));
  }
