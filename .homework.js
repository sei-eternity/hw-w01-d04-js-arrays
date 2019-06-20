//1 

const summation =[1, 2, 3, 4, 5]
summation.reduce((a,b) => a + b, 0)

//2
const summationEven = function (){
  let arr =[1, 2, 3, 4, 5];
for (let i =0; i<= 20; i++) 
{
  if (i % 2 ==0)
    console.log(`${i} Even number`);
   else
     console.log(`${i} Odd number`);
  }
 
}

//3 

let avg = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
avg( [ 8, 2, 2, 4] );

//4*
let revWord = "caterpillar"
word = revWord.reverse();

//5 
let addDashes = ['test1', 'test2', 'test3'];
energy = addDashes.join("-");


7//

let wordsWithA = ['cat', 'rabbit', 'dog', 'frog'];

for(let i = 0; i < wordsWithA.length; i++)
{
    if(wordsWithA[i].indexOf('a') != -1)
    {
        console.log(wordsWithA[i]);
    }
}

//8

function wordsWithLetter(str)
{
for(let i = 0; i < str.length; i++)
{
    if(str[i].indexOf('g') != -1)
    {
        return str[i];
    }
}
}
console.log(wordsWithLetter(['cat', 'rabbit', 'dog', 'frog']));


//9

function longestWord(str)
{
  let arr = str.match(/\w[a-z]{0,}/gi);
  let result = arr[0];

  for(let i = 1 ; i < arr.length ; i++)
  {
    if(result.length < arr[i].length)
    {
    result = arr[i];
    } 
  }
  return result;
}
console.log(longestWord("The cat in the house"));


//10

function largestEvenNumber(arr) {

    arr.sort((x, y) => y - x);
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0)
        return arr[i];
      }
    }
  
  console.log(largestEvenNumber([1,2,3,10,4,7,0]))

