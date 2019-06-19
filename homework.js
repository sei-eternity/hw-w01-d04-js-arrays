// Create a function that will get the sum of the numbers between 1 and n and return the answer 
// summation(5) // should return 15 because 1+2+3+4+5=15

const summation = function(n) {
    sum = 0;
    for (i=0; i<=n; i++){
        sum += i;
    }
    console.log(sum)
}
summation(5);
///////////////////////////////
// Create a program to get the sum of all the even numbers in a group 
// summationEven(5) // should return 6 because 2+4=6
const summationEven = function(n) {
    sum = 0;
    for (i=0; i<=n; i++){
      if (i % 2 === 0){
        sum += i;
      }
    }
    console.log(sum)
}
    summationEven(5)
////////////////////////////////

// //Create a function to get the average of a group of numbers 
// avg([8, 2, 2, 4]) // should return 4

const avg = function(num) {
    let sum = 0;
    let average=0;
    for (let i=0; i <num.length; i++){
        sum += num[i];
    }
         average = sum/num.length;
        console.log(average)
} 
avg([8,2,2,4])

///////////////////////

// Create a function to reverse the letters in a word 
// reverse("caterpillar") // should return "rallipretac"
const reverse = function(word){
    return word.split('').reverse().join('')
}
reverse('caterpillar')

/////////////////////////

//Create a function that takes an array of words and combines them with a dash 
// addDashes(['test1', 'test2', 'test3']) // should return "test1-test2-test3"
const addDashes = function(words) {
    return words.join('-')
}

/////////////////////////

// Function that will count up to a number and back down and return a string of the climb 
// countUpAndDown(3) // should return "1 2 3 2 1"

const countUpAndDown = function(num) {
    let sum= '';
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
     for (let i = num-1; i >= 1; i--) {
      sum += i;
     }
    console.log(sum);
  }
  countUpAndDown(3)
  ///////////////////////////////////////////////

//   Write a function that will tell you all of the words in an array that contain the letter `a` 
// wordsWithA(['cat', 'rabbit', 'dog', 'frog']) // should return ['cat', 'rabbit']

       
const wordsWithA = function(words){
    for (let i = 0; i < words.length; i++) {
        if(words[i].includes("a")){
        console.log(words[i])}
    }
}
wordsWithA(['cat', 'rabbit', 'dog', 'frog'])


//////////////////////

//Write a function that will tell you all of the words in an array that contain a specified letter 
// wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']) // should return ['dog', 'frog']

    const wordsWithLetter = function (letter, words){

        for (let i = 0; i < words.length; i++) {
            if(words[i].includes(letter)){
            console.log(words[i])}
        }
    }
    wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog'])

    ///////////////////////////////////////

    //function that returns the longest word in sentence 
    // longestWord("The cat in the house") // should return "house"
    function longestWord(sentence) {
        var allWords = sentence.split(" ");
        var longest = 0;
        var word = '';
        for (var i = 0; i < allWords.length ; i++) {
            if (longest < allWords[i].length) {
                longest = allWords[i].length;
                word = allWords[i];
            }
        }
        return word;
    }
    longestWord("The cat in the house")

    ////////////////////////////////////////
    //Function that returns the largest even number 
    // largestEvenNumber([1,2,3,10,4,7,0]) // should return "10"

    const largestEvenNumber= function(numbers) {
        let largestEven = 0;
        for (let i = 0; i < numbers.length; i++) {
            if ( (numbers[i] % 2 === 0) && (numbers[i] > largestEven) ) {
                largestEven = numbers[i];
            }
        }
        console.log(largestEven);
    }












