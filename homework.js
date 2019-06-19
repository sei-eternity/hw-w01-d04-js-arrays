1.

const summation = function(n){
    sum = 0;
    for(var i=1; i<= n; i++){
        sum = i + sum;
    }
    console.log(sum);
}

summation(5);


2.

const summationEven = function(n){
    sum = 0;
    for(var i=1; i<= n; i++){
        if (i % 2 == 0)
        {
        sum = i + sum;
        }
    }
    console.log(sum);
}


3.

const avg = function (array) {
    var sum = 0;
    var count = array.length;
    for (var i = 0; i < count; i++) {
      sum = sum + array[i];
    }
    return sum / count;
  }

  avg([8,2,2,4]);


  4.

  //reverse("caterpillar") // should return "rallipretac"
  const reverseString = function (str){
      var splitString = str.split("");
      var reverseArray = splitString.reverse();
      var joinArray = reverseArray.join("");
      return joinArray;
  }

  reverseString("caterpillar");


  5.

  //Create a function that takes an array of words and combines them with a dash 
//addDashes(['test1', 'test2', 'test3']) // should return "test1-test2-test3"
const addDashes = function (array){
    var joinArray = array.join("-");
    return joinArray;
}

addDashes(['test1','test2','test3']);


6.

//Function that will count up to a number and back down and return a string of the climb 
//countUpAndDown(3) // should return "1 2 3 2 1"

const countUpAndDown = function(num){
    for (var i=1; i<=num; i++)
    {
        console.log(i);
    }
    for (var i=num-1; i>=1; i--){
        console.log(i);
    }
}

countUpAndDown(3);


7.

// Write a function that will tell you all of the words in an array that contain the letter `a` 
// wordsWithA(['cat', 'rabbit', 'dog', 'frog']) // should return ['cat', 'rabbit']

const wordsWithA = function(array){
    for (var i=0; i<=array.length; i++){
    if (array[i].indexOf('a') > -1)
    {
  console.log(array[i]);
    }
  }
}

wordsWithA(['cat', 'rabbit', 'dog', 'frog']);


8.

// Write a function that will tell you all of the words in an array that contain a specified letter 
// wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']) // should return ['dog', 'frog']
const wordsWithLetter = function(letter, array){
        for (var i=0; i<=array.length; i++){
        if (array[i].indexOf(letter) > -1)
        {
      console.log(array[i]);
        }
      }
    }



9.

// Function that returns the longest word in sentence 
// longestWord("The cat in the house") // should return "house"
function longestWord(string){
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}



10.

// Function that returns the largest even number 
// largestEvenNumber([1,2,3,10,4,7,0]) // should return "10"
const largestEvenNumber = function(array){

}