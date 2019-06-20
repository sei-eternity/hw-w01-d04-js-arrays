// 1.Create a function that will get the sum of the numbers between 1 and n and return the answer

function summation(n)
 {
  let sum = 0;
  for (let i = 1; i <= n; i++) 
      {
    sum += i;
      }
  return sum;
}

console.log( summation(5) );


// 2. Create a program to get the sum of all the even numbers in a group 

function summationEven(n)
 {
  let sum = 0;
  for (let i = 1; i <= n; i++) 
      {
if(i % 2 == 0)
    sum += i;
      }
  return sum;
}

console.log( summationEven(5) );

// 3.Create a function to get the average of a group of numbers 

avrg = [2, 2, 8, 4, ];

for ( var i = 0; i < avrg.length; i ++){
    var avg = (avrg[i] / avrg.length) * avrg.length
}
console.log(avg)

// 4. Create a function to reverse the letters in a word 

function reverse (n) {
    ​
    n.sort((a, b) => b - a);
    ​
    }
    ​
    reverse('caterpillar');
    



// 5. Create a function that takes an array of words and combines them with a dash

array= ['test1', 'test2', 'test3']
function addDashes () 
{


}


//6. Function that will count up to a number and back down and return a string of the climb 

function countUpAndDown () {


}


//7.Write a function that will tell you all of the words in an array that contain the letter `a` 

function wordsWithA () {



}


//8.Write a function that will tell you all of the words in an array that contain a specified letter 
function wordsWithLetter () {



}



//9.Function that returns the longest word in sentence 

function longestWord () {



}





//10.Function that returns the largest even number 

function max_even(arra) {

    arra.sort((x, y) => y - x);
  
    for (var i = 0; i < arra.length; i++) {
      if (arra[i] % 2 == 0)
        return arra[i];
      }
    }
  
  console.log(largestEvenNumber([1, 2, 3,10,4,7,0]));