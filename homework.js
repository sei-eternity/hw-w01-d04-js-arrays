1-

function summation (num) {
    let sum = 0
    
    for (let i = 1; i <= num; i ++) {
      sum += i
    }
    
    return sum
  }
  
  console.log(summation(5))

//-------------------------------------------------------------------

  2-

  function summationEven (num) {
    let sum = 0
    
    for (let i = 1; i <= num; i ++) {
      
      if (i%2==0){
      sum += i}
    }
    
    return sum
  
  
  }
  
  console.log(summationEven(5))

//-------------------------------------------------------------------
  3-

  function avg(array){
    var sum = 0;
    
    
    for( var i = 0; i < array.length; i++ ){
        sum += array[i];
    }
    
    var avrage = sum/array.length;
    
    console.log(avrage)}
    avg([8, 2, 2, 4])

    //-------------------------------------------------------------------
  4-


  function reverse(str) {
 
    return str.split("").reverse().join("");
}
reverse("caterpillar")
//-------------------------------------------------------------------

5-

function addDashes(array){


    console.log(array.join('-'));
    
    }
    
    
    addDashes(['test1', 'test2', 'test3'])
//-------------------------------------------------------------------
    6-

    function countUpAndDown(num){


        for (let i = 1; i <= num; i ++) {
           console.log(i)
      }
      for (let j =  num-1; j >0; j--) {
      console.log(j)
          }
          
       
      
      }
      
      
      countUpAndDown(3)

//-------------------------------------------------------------------
      7-
   
      function wordsWithA(array){

        const filtering = (theword) => {
            return array.filter(item => item.indexOf(theword) > -1);
        } 
    
        console.log(filtering('a')); }
    
    
        wordsWithA(['cat', 'rabbit', 'dog', 'frog'])

//-------------------------------------------------------------------
     8-

     function wordsWithLetter(letter,array){

        const filtering = (theword) => {
            return array.filter(item => item.indexOf(theword) > -1);
        } 
    
        console.log(filtering(letter)); }
    
    
       wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog'])
//-------------------------------------------------------------------
       9-

       function longestWord(array) {
        var arr = array.split(" ");
        var longestLengthWord = 0;
        var longest_word = null;
        arr.forEach(function(arr) {
            if (longestLengthWord < arr.length) {
                longestLengthWord = arr.length;
                longest_word = arr;
            }
        });
        return longest_word;
    }
    console.log(longestWord("The cat in the house"));
//-------------------------------------------------------------------
    10-


    function largestEvenNumber(array) {

        array.sort((x, y) => y - x);
      
        for (var i = 0; i < array.length; i++) {
          if (array[i] % 2 == 0)
            return array[i];
          }
        }
      
      console.log(largestEvenNumber([1,2,3,10,4,7,0]));

      //----------------------------------------------------

      Extra Practice:


      const wordLetters     = ['G', 'O', 'A', 'T'];

var guessedLetters = ["_","_","_"];




 function guessLetter(letter)
{
	matchedLetter = false;
	for (var i = 0; i < wordLetters.length; i++)
	{;
		if (letter[i] === wordLetters[i])
		{
      	console.log("You have a MATCH WITH LETTER.."+letter[i]+"..");
			matchedLetter = true;
		}
	
	
else
		console.log("Hard luck, try again!WITH ANTHOR LETTER BECUSE IT'S NOT.."+letter[i]+"..");
  }
	

};


guessLetter(['G', 'O', 'A', 'S']);


