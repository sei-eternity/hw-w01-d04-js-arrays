1-

let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current);

console.log( result );


2-

let sum = 0;
for (let i = 1; i <= 5; i++) {
	if (i % 2 === 0) {
		sum += i;
	}
}
 
console.log(sum);


3-

let values = [2, 4, 3, 10];
let sum = values.reduce((previous, current) => current += previous);
let avg = sum / values.length;
console.log(avg);

//returns avg = 4.75

4-


const str = "caterpillar"

str.split('').reverse().join('')


5-
const addDashes = ['test1', 'test2', 'test3'];

addDashes.join(' - ')


6-
const countUpAndDown = function(num){
    let count =""
    for(let i =1; i<=num;i++ ){
      count += i


    }

    for(let i =num-1; i >0 ;i-- ){
      count = count + i;

    }
    console.log(count)
  }

  countUpAndDown(3)

7-

var wordsWithA = ['cat', 'rabbit', 'dog', 'frog'];


function filterItems(arr, query) {
  return arr.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  })
}

console.log(filterItems(wordsWithA, 'a'));


8-

var wordsWithG = ['cat', 'rabbit', 'dog', 'frog'];


function filterItems(arr, query) {
  return arr.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  })
}

console.log(filterItems(wordsWithG, 'g')); 

9-


const longestWord = (sentence = '') => {
    return sentence
      .split(' ')
      .reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
      })
  
  }
  
  longestWord('The cat in the house');

// returns = "house"


10- 

function largestEvenNumber(arra) {

    arra.sort((x, y) => y - x);
  
    for (var i = 0; i < arra.length; i++) {
      if (arra[i] % 2 == 0)
        return arra[i];
      }
    }
  
  console.log(largestEvenNumber([1,2,3,10,4,7,0]));